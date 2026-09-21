"use client";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Code2, Zap, BarChart3, Star, ChevronRight } from "lucide-react";

const FEATURES = [
  { icon: Code2,     title: "Deep Dives",     badge: "Technical", color: "from-violet-500 to-purple-600",  items: ["Data Structures", "System Design", "Performance Tips", "Architecture", "Code Reviews"] },
  { icon: Zap,       title: "Tutorials",      badge: "Popular",   color: "from-amber-400 to-orange-500",   items: ["Step-by-step Guides", "Video Walkthroughs", "Interactive Examples", "Project-based", "Best Practices"], featured: true },
  { icon: BarChart3, title: "Career & Growth", badge: "Insights", color: "from-emerald-400 to-teal-500", items: ["Interview Prep", "Portfolio Building", "Industry Insights", "Learning Roadmaps", "Community Q&A"] },
];

const STATS = [
  { value: "50+",   label: "Articles"  },
  { value: "10K+",  label: "Readers"   },
  { value: "5+",    label: "Topics"    },
  { value: "100%",  label: "Free"      },
];

const TESTIMONIALS = [
  { quote: "Mayur's tutorials are crystal clear. I landed my first dev job after following his MERN stack series.", name: "Arjun Sharma",  role: "Full-Stack Developer", initials: "AS" },
  { quote: "The code examples are always production-ready. This is the resource I wish I had when starting out.",  name: "Priya Patel",   role: "Frontend Engineer",    initials: "PP" },
  { quote: "Deep technical insights in an approachable way. My go-to blog for staying current.",                    name: "Rohan Verma",   role: "Software Architect",   initials: "RV" },
];

export default function Home() {
  const el = useRef(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    let typed;
    (async () => {
      try {
        const TypedModule = await import("typed.js");
        const Typed = TypedModule?.default || TypedModule;
        if (el.current && Typed) {
          typed = new Typed(el.current, {
            strings: ["Web Development", "System Design", "Data Science", "Full-Stack Apps", "Open Source"],
            typeSpeed: 60, backSpeed: 40, backDelay: 1500, loop: true,
          });
        }
      } catch {}
    })();
    return () => typed?.destroy?.();
  }, []);

  useEffect(() => {
    fetch("/api/blogs")
      .then((r) => r.ok ? r.json() : [])
      .then((d) => setBlogs(Array.isArray(d) ? d.slice(0, 3) : []))
      .catch(() => {});
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden mesh-bg">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-violet-500/10 dark:bg-violet-500/15 blur-3xl" style={{animation:"float 10s ease-in-out infinite"}} />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-cyan-500/8 dark:bg-cyan-500/10 blur-3xl" style={{animation:"float 13s ease-in-out infinite reverse"}} />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8 glass border border-violet-500/20 text-violet-600 dark:text-violet-400" style={{animation:"fade-up 0.5s ease forwards"}}>
              <span className="w-2 h-2 rounded-full bg-violet-500" style={{animation:"pulse 2s infinite"}} />
              Premium Tech Publication
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]" style={{animation:"fade-up 0.6s 0.1s ease both"}}>
              Exploring the{" "}
              <span className="gradient-text">World of</span>
              <br />Technology
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 min-h-[2em]" style={{animation:"fade-up 0.6s 0.2s ease both"}}>
              In-depth articles and tutorials on{" "}
              <span className="gradient-text font-semibold"><span ref={el} /></span>
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-16" style={{animation:"fade-up 0.6s 0.3s ease both"}}>
              <Link href="/blog" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white animated-gradient hover:opacity-90 transition-all duration-200 hover:scale-105 shadow-lg shadow-violet-500/25">
                Read Articles <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/about" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold border border-border glass hover:border-violet-500/40 transition-all duration-200 hover:scale-105">
                About Me <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-xl mx-auto" style={{animation:"fade-up 0.6s 0.4s ease both"}}>
              {STATS.map(({ value, label }) => (
                <div key={label} className="glass rounded-2xl p-4 border border-border/50 hover:border-violet-500/30 transition-all">
                  <div className="text-2xl font-bold gradient-text">{value}</div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">What You Will Find</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Content That <span className="gradient-text">Moves You</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              From beginner-friendly guides to advanced system design — curated for every stage of your journey.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {FEATURES.map(({ icon: Icon, title, badge, color, featured, items }) => (
              <div key={title} className={`relative group rounded-2xl p-7 bg-card border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${featured ? "border-violet-500/30 shadow-lg shadow-violet-500/8" : "border-border hover:border-border/80"}`}>
                {featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-white animated-gradient shadow-lg">
                      <Star className="w-3 h-3" /> Most Popular
                    </span>
                  </div>
                )}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-xl font-bold">{title}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{badge}</span>
                </div>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${color} flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT POSTS */}
      {blogs.length > 0 && (
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Latest</p>
                <h2 className="text-4xl font-bold tracking-tight">Recent <span className="gradient-text">Articles</span></h2>
              </div>
              <Link href="/blog" className="hidden md:inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors hover-underline">
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {blogs.map((blog, i) => (
                <Link key={i} href={`/blogpost/${blog.slug}`} className="group block rounded-2xl overflow-hidden border border-border bg-card hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  {blog.image && (
                    <div className="overflow-hidden h-44">
                      <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <div className="p-5">
                    <p className="text-xs text-muted-foreground mb-2">{blog.date ? new Date(blog.date).toLocaleDateString("en-GB", {day:"2-digit",month:"long",year:"numeric"}) : ""}</p>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">{blog.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{blog.description}</p>
                    <div className="mt-4 flex items-center gap-1 text-sm text-primary font-medium">
                      Read more <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TESTIMONIALS */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Social Proof</p>
            <h2 className="text-4xl font-bold tracking-tight">What Readers <span className="gradient-text">Say</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {TESTIMONIALS.map(({ quote, name, role, initials }) => (
              <div key={name} className="group p-7 rounded-2xl bg-card border border-border hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="text-4xl text-primary mb-4 font-serif leading-none">&ldquo;</div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic text-sm">{quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full animated-gradient flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {initials}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{name}</p>
                    <p className="text-xs text-muted-foreground">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center animated-gradient">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Ready to Level Up?</h2>
              <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
                Dive into in-depth tutorials, expert insights, and practical guides that help you grow as a developer.
              </p>
              <Link href="/blog" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-700 font-bold rounded-xl hover:bg-white/90 hover:scale-105 transition-all duration-200 shadow-xl">
                Start Reading <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
