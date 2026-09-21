"use client";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from 'react';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/api/blogs')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched blogs:', data);
        setBlogs(data);
      })
      .catch(error => console.error('Error fetching blogs:', error));
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
    <div className="container mx-auto px-4 py-10 sm:py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          All <span className="gradient-text">Articles</span>
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg">
          Insights, deep-dives, and guides covering web development and software engineering.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="group rounded-2xl shadow-md overflow-hidden bg-white dark:bg-gray-900 border border-border/80 hover:shadow-2xl hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
          >
            {blog.image && (
              <div className="relative overflow-hidden h-52 sm:h-60 w-full bg-muted">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {blog.title}
                </h2>
                <p className="mb-4 text-sm sm:text-base text-muted-foreground line-clamp-3">
                  {blog.description}
                </p>
              </div>
              <div>
                <div className="text-xs sm:text-sm mb-4 text-muted-foreground">
                  <span>By {blog.author}</span> | <span>{formatDate(blog.date)}</span>
                </div>
                <Link
                  href={`/blogpost/${blog.slug}`}
                  className={buttonVariants({ variant: "outline" })}
                >
                  Read Article
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;