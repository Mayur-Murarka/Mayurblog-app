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
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  const dirPath = path.join(process.cwd(), 'content');
  if (!fs.existsSync(dirPath)) return [];
  return fs.readdirSync(dirPath).filter((f) => f.endsWith('.md')).map((f) => ({ slug: f.replace(/\.md$/, '') }));
}

async function getPostData(slug) {
  const filepath = path.join(process.cwd(), 'content', slug + '.md');
  if (!fs.existsSync(filepath)) return null;
  const fileContent = fs.readFileSync(filepath, 'utf-8');
  const { content, data } = matter(fileContent);
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, { theme: 'github-dark', transformers: [transformerCopyButton({ visibility: 'always', feedbackDuration: 3000 })] })
    .use(rehypeStringify);
  const htmlContent = (await processor.process(content)).toString();
  const readingTime = Math.max(1, Math.round(content.trim().split(/\s+/).length / 200));
  return { ...data, content: htmlContent, readingTime };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getPostData(slug);
  if (!post) notFound();

  return (
    <div>
      <div className="relative mesh-bg border-b border-border overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/8 blur-3xl rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 py-14 relative z-10">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 hover-underline">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight" style={{ fontFamily: 'var(--font-lora), Georgia, serif' }}>
              {post.title}
            </h1>
            {post.description && (
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed italic" style={{ fontFamily: 'var(--font-lora), Georgia, serif' }}>
                {post.description}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              {post.author && (
                <span className="inline-flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full animated-gradient flex items-center justify-center text-white text-xs font-bold">{post.author[0]}</div>
                  <span className="font-medium text-foreground">{post.author}</span>
                </span>
              )}
              {post.date && (
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
                </span>
              )}
              {post.readingTime && (
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />{post.readingTime} min read
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-12">
            <article className="flex-1 min-w-0">
              <div dangerouslySetInnerHTML={{ __html: post.content }} className="prose-premium max-w-none" />
              <div className="mt-16 p-6 rounded-2xl bg-card border border-border flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl animated-gradient flex items-center justify-center text-white font-bold text-xl flex-shrink-0">{post.author?.[0] || 'M'}</div>
                <div>
                  <p className="font-bold text-lg">{post.author || 'Mayur'}</p>
                  <p className="text-sm text-muted-foreground mt-1">Software developer, tech educator, and author of MayurBlog. Passionate about sharing knowledge and helping developers grow.</p>
                  <Link href="/about" className="inline-flex items-center gap-1 text-sm text-primary font-medium mt-3 hover-underline">View profile</Link>
                </div>
              </div>
            </article>
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <OnThisPage htmlContent={post.content} />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}