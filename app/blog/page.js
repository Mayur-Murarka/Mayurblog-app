"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Calendar, User, BookOpen, Search, ChevronRight } from "lucide-react";

const SkeletonCard = () => (
  <div className="rounded-2xl overflow-hidden border border-border bg-card animate-pulse">
    <div className="h-48 skeleton" />
    <div className="p-5 space-y-3">
      <div className="h-3 skeleton rounded w-1/3" />
      <div className="h-5 skeleton rounded w-3/4" />
      <div className="h-3 skeleton rounded w-full" />
      <div className="h-3 skeleton rounded w-2/3" />
    </div>
  </div>
);

const BlogCard = ({ blog, featured = false }) => (
  <Link
    href={`/blogpost/${blog.slug}`}
    className={`group block rounded-2xl overflow-hidden border border-border bg-card hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10 ${featured ? "md:flex" : ""}`}
  >
    {blog.image && (
      <div className={`overflow-hidden flex-shrink-0 ${featured ? "md:w-2/5" : ""}`}>
        <img
          src={blog.image}
          alt={blog.title}
          className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${featured ? "h-56 md:h-full" : "h-48"}`}
        />
      </div>
    )}
    <div className={`p-6 flex flex-col justify-between ${featured ? "md:p-8" : ""}`}>
      <div>
        <div className="flex flex-wrap items-center gap-3 mb-3">
          {blog.date && (
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              {new Date(blog.date).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" })}
            </span>
          )}
          {blog.author && (
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <User className="w-3 h-3" />{blog.author}
            </span>
          )}
        </div>
        <h2 className={`font-bold group-hover:text-primary transition-colors mb-2 ${featured ? "text-2xl md:text-3xl" : "text-xl"}`}>
          {blog.title}
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{blog.description}</p>
      </div>
      <div className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary font-semibold">
        <BookOpen className="w-4 h-4" /> Read article
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </Link>
);

const Blog = () => {
  const [blogs,   setBlogs]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [search,  setSearch]  = useState("");

  useEffect(() => {
    fetch("/api/blogs")
      .then((r) => r.ok ? r.json() : [])
      .then((d) => { setBlogs(Array.isArray(d) ? d : []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const filtered = blogs.filter((b) =>
    !search ||
    b.title?.toLowerCase().includes(search.toLowerCase()) ||
    b.description?.toLowerCase().includes(search.toLowerCase())
  );
  const [featured, ...rest] = filtered;

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 mesh-bg overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-violet-500/10 blur-3xl rounded-full pointer-events-none" style={{animation:"float 10s ease-in-out infinite"}} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Explore Knowledge</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            The <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-10">
            Tutorials, deep dives, and insights on modern software development.
          </p>
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <input
              id="blog-search"
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background/80 backdrop-blur focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500/50 transition-all text-sm"
            />
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => <SkeletonCard key={i} />)}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-24 text-muted-foreground">
              {search ? `No articles found for "${search}"` : "No articles yet. Check back soon!"}
            </div>
          ) : (
            <div className="space-y-10">
              {featured && (
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-5">Featured</p>
                  <BlogCard blog={featured} featured />
                </div>
              )}
              {rest.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-5">More Articles</p>
                  <div className="grid md:grid-cols-3 gap-6">
                    {rest.map((blog, i) => <BlogCard key={i} blog={blog} />)}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
