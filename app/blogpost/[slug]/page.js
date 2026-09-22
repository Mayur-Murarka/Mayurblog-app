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
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  Share2, 
  Layers 
} from 'lucide-react';
import OnThisPage from '@/components/ui/onthispage';
import ReadingProgress from '@/components/ui/ReadingProgress';
import ArticleActions from '@/components/ui/ArticleActions';

export async function generateStaticParams() {
  const dirPath = path.join(process.cwd(), 'content');
  if (!fs.existsSync(dirPath)) return [];
  const filenames = fs.readdirSync(dirPath);
  return filenames
    .filter((file) => file.endsWith('.md'))
    .map((filename) => ({
      slug: filename.replace(/\.md$/, ''),
    }));
}

function getRelatedPosts(currentSlug) {
  try {
    const dirPath = path.join(process.cwd(), 'content');
    if (!fs.existsSync(dirPath)) return [];
    const filenames = fs.readdirSync(dirPath);
    return filenames
      .filter((file) => file.endsWith('.md'))
      .map((filename) => {
        const slug = filename.replace(/\.md$/, '');
        const filepath = path.join(dirPath, filename);
        const fileContent = fs.readFileSync(filepath, 'utf-8');
        const { data } = matter(fileContent);
        return {
          slug,
          title: data.title || slug,
          description: data.description || '',
          date: data.date || '',
          image: data.image || null,
          author: data.author || 'Mayur',
        };
      })
      .filter((p) => p.slug !== currentSlug)
      .slice(0, 2);
  } catch (err) {
    console.error('Error getting related posts', err);
    return [];
  }
}

async function getPostData(slug) {
  const filepath = path.join(process.cwd(), 'content', `${slug}.md`);
  if (!fs.existsSync(filepath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filepath, 'utf-8');
  const { content, data } = matter(fileContent);

  // Calculate dynamic reading time
  const wordCount = content.split(/\s+/).filter(Boolean).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      behavior: 'wrap',
      properties: {
        className: ['anchor-heading group relative'],
      },
    })
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
    readTime,
    content: htmlContent,
  };
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostData(slug);
  if (!post) {
    return { title: 'Post Not Found | MayurBlog' };
  }
  return {
    title: `${post.title} | MayurBlog`,
    description: post.description,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug);

  // Format date nicely
  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return isNaN(d.getTime())
      ? String(dateStr)
      : d.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        });
  };

  return (
    <div className="relative min-h-screen pb-24 overflow-hidden">
      {/* Top Fixed Reading Progress Indicator */}
      <ReadingProgress />

      {/* Ambient Gradient Lighting / Depth Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-600/15 via-pink-500/10 to-indigo-500/10 blur-[130px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-[600px] right-0 w-[500px] h-[500px] bg-blue-500/5 dark:bg-purple-900/10 blur-[140px] pointer-events-none -z-10" />

      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        {/* Navigation Breadcrumb & Back Link */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-500/40 hover:shadow-md hover:shadow-purple-500/10 transition-all duration-300 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1 text-purple-500" />
            <span>Back to all articles</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
              <Sparkles className="w-3 h-3" />
              Featured Insight
            </span>
          </div>
        </div>

        {/* Article Header & Hero Section */}
        <header className="mb-10 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6">
            {post.title}
          </h1>

          {/* Styled Subtitle / Lead Quote */}
          {post.description && (
            <div className="relative p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-transparent border-l-4 border-purple-500 mb-8 backdrop-blur-sm">
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-medium italic leading-relaxed">
                &ldquo;{post.description}&rdquo;
              </p>
            </div>
          )}

          {/* Author Meta Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-t border-slate-200/80 dark:border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-purple-500 to-pink-500 shadow-md">
                <img
                  src="/MAYURIMG.jpg"
                  alt={post.author || 'Mayur'}
                  className="w-full h-full object-cover rounded-full bg-slate-900"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-slate-900 dark:text-white">
                    {post.author || 'Mayur'}
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 fill-purple-500/20" />
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Author & Tech Creator
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-purple-500" />
                <span>{formatDate(post.date)}</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-purple-500" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>

          {/* Social and Interaction Bar */}
          <ArticleActions title={post.title} slug={slug} />

          {/* Hero Cover Image Banner */}
          {post.image && (
            <div className="relative mt-8 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-white/10 shadow-2xl shadow-purple-500/10 group">
              <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-slate-950">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
              </div>
            </div>
          )}
        </header>

        {/* Main Content Layout with Sticky TOC Sidebar */}
        <div className="flex flex-col lg:flex-row gap-12 items-start mt-10">
          {/* Article Markdown Body */}
          <main className="w-full lg:max-w-[70%] flex-1 min-w-0">
            <div className="rounded-3xl p-6 sm:p-10 bg-white/60 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/70 dark:border-slate-800/80 shadow-xl shadow-slate-900/5">
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="prose prose-lg dark:prose-invert prose-purple max-w-none prose-premium
                           prose-headings:font-extrabold prose-headings:tracking-tight prose-headings:text-slate-900 dark:prose-headings:text-white
                           prose-h1:text-2xl sm:prose-h1:text-3xl prose-h1:mt-8 prose-h1:mb-4
                           prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                           prose-h3:text-lg sm:prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                           prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-p:leading-relaxed
                           prose-a:text-purple-600 dark:prose-a:text-purple-400 prose-a:font-medium hover:prose-a:underline
                           prose-strong:text-slate-900 dark:prose-strong:text-white prose-strong:font-bold
                           prose-code:text-purple-600 dark:prose-code:text-purple-300 prose-code:bg-purple-500/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
                           prose-li:text-slate-700 dark:prose-li:text-slate-300
                           prose-hr:border-slate-200 dark:prose-hr:border-slate-800"
              />
            </div>

            {/* Bottom Author Bio Card */}
            <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-purple-500/5 via-slate-500/5 to-transparent border border-slate-200/80 dark:border-slate-800 backdrop-blur-md flex flex-col sm:flex-row items-center gap-6">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 p-[2px] bg-gradient-to-tr from-purple-500 to-pink-500 shadow-lg">
                <img
                  src="/MAYURIMG.jpg"
                  alt="Mayur"
                  className="w-full h-full object-cover rounded-2xl bg-slate-900"
                />
              </div>
              <div className="text-center sm:text-left flex-1">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Written by {post.author || 'Mayur'}
                  </h3>
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-purple-500/15 text-purple-600 dark:text-purple-300">
                    Author
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  Passionate software developer and data analysis specialist. Sharing deep dives on full-stack architecture, machine learning models, and modern web engineering.
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <Link
                    href="/about"
                    className="text-xs font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors inline-flex items-center gap-1"
                  >
                    View profile & bio <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Next / Related Articles */}
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-purple-500" />
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      Continue Reading
                    </h2>
                  </div>
                  <Link
                    href="/blog"
                    className="text-xs font-semibold text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1"
                  >
                    All articles <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {relatedPosts.map((related, idx) => (
                    <Link
                      key={idx}
                      href={`/blogpost/${related.slug}`}
                      className="group p-5 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        {related.image && (
                          <div className="relative h-36 rounded-xl overflow-hidden mb-4 bg-slate-950">
                            <img
                              src={related.image}
                              alt={related.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        )}
                        <span className="text-[11px] font-medium text-purple-500 uppercase tracking-wider">
                          Related Post
                        </span>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                          {related.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                          {related.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-purple-600 dark:text-purple-400 font-semibold">
                        <span>Read article</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </main>

          {/* Sticky On This Page / Table of Contents Sidebar */}
          <aside className="hidden lg:block w-72 shrink-0 sticky top-24 self-start space-y-6">
            <OnThisPage htmlContent={post.content} />

            {/* Quick Share Widget in Sidebar */}
            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl p-5 shadow-lg shadow-purple-500/5 text-center">
              <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-3">
                Enjoyed this read? Share it with friends and colleagues!
              </p>
              <div className="flex items-center justify-center gap-2">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 hover:bg-sky-500/20 transition-colors"
                >
                  Post on X
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </div>
  );
}