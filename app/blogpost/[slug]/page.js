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
import { notFound } from 'next/navigation';

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
    })
    .use(rehypeStringify);

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
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
        {post.title}
      </h1>
      <p className="text-base sm:text-lg mb-4 border-l-4 border-purple-500 pl-4 italic text-muted-foreground">
        &quot;{post.description}&quot;
      </p>
      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-8">
        <span className="font-medium">By {post.author}</span>
        <span>•</span>
        <span>{post.date}</span>
      </div>
      <div className="flex flex-col lg:flex-row gap-10">
        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
          className="prose dark:prose-invert max-w-none w-full overflow-x-auto flex-1"
        ></div>
        <div className="hidden lg:block w-64 shrink-0 sticky top-24 self-start">
          <OnThisPage htmlContent={post.content} />
        </div>
      </div>
    </div>
  );
}