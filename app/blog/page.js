"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Sparkles, Calendar, User, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blogs")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          const sorted = [...data].sort(
            (a, b) => new Date(b.date || 0) - new Date(a.date || 0)
          );
          setBlogs(sorted);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      });
  }, []);

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return isNaN(d.getTime())
      ? String(dateStr)
      : d.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        });
  };

  return (
    <div className="relative overflow-hidden py-12 sm:py-16 bg-slate-50/60 dark:bg-slate-950/40 min-h-screen">
      {/* Ambient Decorative Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            All <span className="gradient-text">Articles</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Hand-picked tutorials, architectural deep-dives, and insights covering modern technology.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="rounded-2xl overflow-hidden bg-card border border-border shadow-md animate-pulse"
              >
                <div className="h-52 sm:h-60 bg-muted/70 w-full" />
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-muted/60 rounded w-1/3" />
                  <div className="h-6 bg-muted/80 rounded w-4/5" />
                  <div className="h-4 bg-muted/60 rounded w-full" />
                  <div className="h-4 bg-muted/50 rounded w-2/3" />
                  <div className="h-9 bg-muted/70 rounded-md w-28 mt-4" />
                </div>
              </div>
            ))}
          </div>
        ) : blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogs.map((blog, index) => (
              <article
                key={index}
                className="group relative rounded-2xl overflow-hidden bg-white dark:bg-gray-900/90 border border-gray-200/80 dark:border-gray-800 shadow-md hover:shadow-2xl hover:shadow-purple-500/15 dark:hover:shadow-purple-500/20 hover:border-purple-500/40 dark:hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Image container with hover zoom and gradient overlay */}
                <div className="relative overflow-hidden h-52 sm:h-60 w-full bg-muted">
                  {blog.image ? (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                      <Sparkles className="w-10 h-10 text-purple-400" />
                    </div>
                  )}
                  {/* Dark gradient overlay for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Featured pill badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 text-xs font-semibold tracking-wider text-white bg-black/60 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
                      Featured
                    </span>
                  </div>

                  {/* Reading time badge */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 text-xs text-white/95 bg-black/60 backdrop-blur-md rounded-full border border-white/10 shadow-sm">
                    <Clock className="w-3.5 h-3.5 text-purple-300" />
                    <span>5 min read</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Author & Date metadata */}
                    <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                      <span className="flex items-center gap-1.5 font-medium text-gray-700 dark:text-gray-300">
                        <User className="w-3.5 h-3.5 text-purple-500" />
                        {blog.author || "Mayur"}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-purple-500" />
                        {formatDate(blog.date)}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold mb-2.5 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200 line-clamp-2">
                      {blog.title}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed mb-6">
                      {blog.description}
                    </p>
                  </div>

                  {/* Bottom CTA Button */}
                  <div className="pt-4 border-t border-gray-100 dark:border-gray-800/80 flex items-center justify-between">
                    <Link
                      href={`/blogpost/${blog.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors group/btn"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 group-hover/btn:translate-x-1.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 dark:text-gray-400 py-12">
            No blog posts available.
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;