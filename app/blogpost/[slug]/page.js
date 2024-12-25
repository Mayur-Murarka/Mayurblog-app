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

export async function getStaticPaths() {
  const dirPath = path.join(process.cwd(), 'content');
  const filenames = fs.readdirSync(dirPath);
  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.md$/, '') },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filepath = path.join(process.cwd(), 'content', `${params.slug}.md`);
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
    props: {
      post: {
        ...data,
        content: htmlContent,
      },
    },
  };
}

export default function BlogPost({ post }) {
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
    </div>
  );
}