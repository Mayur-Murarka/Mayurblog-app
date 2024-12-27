import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import { transformerCopyButton } from '@rehype-pretty/transformers';
import OnThisPage from '@/components/ui/onthispage';

export async function generateStaticParams() {
  const dirPath = path.join(process.cwd(), 'content');
  const filenames = fs.readdirSync(dirPath);
  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

async function getPostData(slug) {
  const filepath = path.join(process.cwd(), 'content', `${slug}.md`);
  if (!fs.existsSync(filepath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filepath, 'utf-8');
  const { content, data } = matter(fileContent);

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, {
      theme: 'github-dark',
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3000,
        }),
      ],
    });

  const htmlContent = (await processor.process(content)).toString();

  return {
    ...data,
    content: htmlContent,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">
        &quot;{post.description}&quot;
      </p>
      <div className="flex gap-2">
        <p className="text-sm text-gray-500 mb-4 italic">By {post.author}</p>
        <p className="text-sm text-gray-500 mb-4">{post.date}</p>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: post.content }}
        className="prose dark:prose-invert"
      ></div>
      <OnThisPage htmlContent={post.content} />
    </div>
  );
}