"use client";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  Sparkles,
  Calendar,
  User,
  Clock,
  ArrowRight,
  PenTool,
  Users,
  BarChart3,
  CheckCircle2,
  Star,
  Quote,
  Zap,
} from "lucide-react";

export default function Home() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    let typed;
    (async () => {
      try {
        const TypedModule = await import("typed.js");
        const Typed = TypedModule?.default || TypedModule;
        if (el.current && Typed) {
          typed = new Typed(el.current, {
            strings: [
              "Coding",
              "Web Development",
              "Software Engineering",
              "Full Stack Developnment",
              "Mern Stack",
              "Data Science",
            ],
            typeSpeed: 50,
          });
        }
      } catch (e) {
        // Fail silently in environments where typed.js cannot load
        // console.error('Failed to load typed.js', e)
      }
    })();

    return () => {
      if (typed && typeof typed.destroy === "function") {
        typed.destroy();
      }
    };
  }, []);

  return (
    <div>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            Exploring{" "}
            <span className="font-semibold">the world of technology</span>{" "}
            through in-depth articles, tutorials, and insights.{" "}
            <br className="hidden lg:block" />
            Stay updated with the latest trends in <br />
            <span className="font-semibold underline decoration-primary">
              <span ref={el} />
            </span>
          </h1>

          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form
              action="https://www.creative-tim.com/twcomponents/search"
              className="flex flex-wrap justify-between md:flex-row"
            ></form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            className="w-full h-full max-w-md mx-auto"
          />
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 relative overflow-hidden bg-slate-50/70 dark:bg-slate-950/60">
        {/* Ambient Glows */}
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="container px-4 mx-auto relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 mb-4 backdrop-blur-md shadow-sm">
              <Zap className="w-3.5 h-3.5 text-purple-500 animate-pulse" />
              <span>SUPERCHARGED PLATFORM</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Discover Our <span className="gradient-text">Features</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400">
              Everything you need to write, publish, and grow an engaged readership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1: Writing Tools */}
            <div className="group relative rounded-2xl p-8 bg-white dark:bg-gray-900/90 border border-gray-200/80 dark:border-gray-800 shadow-md hover:shadow-2xl hover:shadow-purple-500/15 hover:border-purple-500/40 dark:hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/25 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <PenTool className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Writing Tools
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Craft flawless articles with distraction-free editing, live code highlighting, and instant previews.
                </p>
                <ul className="space-y-3">
                  {[
                    "Rich Markdown & Syntax Highlighting",
                    "Draft Auto-save & Local Backups",
                    "Instant Image Drag & Drop",
                    "Built-in SEO & OpenGraph Meta",
                    "One-click Publishing Pipeline",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feature 2: Community (Featured) */}
            <div className="group relative rounded-2xl p-8 bg-white dark:bg-gray-900/90 border-2 border-purple-500 shadow-xl shadow-purple-500/10 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-2.5 flex flex-col justify-between">
              {/* Popular badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1 text-xs font-bold tracking-wide uppercase text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-md shadow-purple-500/30">
                  ★ Most Popular
                </span>
              </div>
              <div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-pink-500/25 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                  Community
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Foster lively discussions, build a personal following, and network with passionate developers.
                </p>
                <ul className="space-y-3">
                  {[
                    "Threaded Interactive Comments",
                    "Custom Developer Profiles",
                    "Follow System & Activity Feed",
                    "Seamless Social Sharing",
                    "Instant Real-time Notifications",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feature 3: Analytics */}
            <div className="group relative rounded-2xl p-8 bg-white dark:bg-gray-900/90 border border-gray-200/80 dark:border-gray-800 shadow-md hover:shadow-2xl hover:shadow-purple-500/15 hover:border-purple-500/40 dark:hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-indigo-500 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <BarChart3 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  Analytics
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Understand your audience with actionable reader analytics, retention charts, and traffic metrics.
                </p>
                <ul className="space-y-3">
                  {[
                    "Live Views & Readership Stats",
                    "Reader Geographic Demographics",
                    "Scroll Depth & Engagement Metrics",
                    "Detailed Performance Reports",
                    "Organic Search Growth Insights",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 relative overflow-hidden bg-white dark:bg-gray-900">
        {/* Subtle Ambient Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-purple-500/5 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="container px-4 mx-auto relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20 mb-4 backdrop-blur-md shadow-sm">
              <Quote className="w-3.5 h-3.5 text-pink-500" />
              <span>TESTIMONIALS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              What Our <span className="gradient-text">Readers & Clients</span> Say
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400">
              Hear how engineers, leaders, and creators elevate their work with MayurBlog.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "This service has been a game-changer for our engineering team. The clarity of the tutorials and depth of documentation is second to none.",
                name: "John Doe",
                role: "CEO, Company A",
                initials: "JD",
                gradient: "from-purple-600 to-indigo-600",
              },
              {
                quote:
                  "Amazing experience! The platform aesthetics, speed, and community engagement have been truly outstanding. Highly recommended!",
                name: "Jane Smith",
                role: "Marketing Director, Company B",
                initials: "JS",
                gradient: "from-pink-600 to-rose-600",
              },
              {
                quote:
                  "Exceptional quality and technical precision. Reading articles here has leveled up our development workflow. We couldn't be happier!",
                name: "Michael Brown",
                role: "CTO, Company C",
                initials: "MB",
                gradient: "from-blue-600 to-cyan-600",
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl p-8 bg-slate-50/80 dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-700/60 shadow-md hover:shadow-2xl hover:shadow-purple-500/15 hover:border-purple-500/40 dark:hover:border-purple-400/40 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 fill-amber-400 text-amber-400 transition-transform duration-200 group-hover:scale-110"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed italic mb-8">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info with Gradient Avatar */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-gray-200/70 dark:border-gray-700/60">
                  <div
                    className={`w-11 h-11 rounded-full bg-gradient-to-tr ${t.gradient} flex items-center justify-center text-white font-bold text-sm shadow-md flex-shrink-0 group-hover:scale-105 transition-transform`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-base leading-snug">
                      {t.name}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden bg-slate-50/60 dark:bg-slate-950/40">
        {/* Ambient Decorative Glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="container px-4 mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 mb-4 backdrop-blur-md shadow-sm">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-purple-500" />
              <span>CURATED SELECTION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Most <span className="gradient-text">Popular</span> Articles
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Hand-picked, high-impact tutorials and insights designed to accelerate your engineering journey.
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="rounded-2xl overflow-hidden bg-card border border-border shadow-md animate-pulse"
                >
                  <div className="h-60 bg-muted/70 w-full" />
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <article
                  key={index}
                  className="group relative rounded-2xl overflow-hidden bg-white dark:bg-gray-900/90 border border-gray-200/80 dark:border-gray-800 shadow-md hover:shadow-2xl hover:shadow-purple-500/15 dark:hover:shadow-purple-500/20 hover:border-purple-500/40 dark:hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
                >
                  {/* Image container with hover zoom and gradient overlay */}
                  <div className="relative overflow-hidden h-60 w-full bg-muted">
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
                  <div className="p-6 flex-1 flex flex-col justify-between">
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

                      <h3 className="text-xl font-bold mb-2.5 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200 line-clamp-2">
                        {blog.title}
                      </h3>
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
      </section>
    </div>
  );
}
