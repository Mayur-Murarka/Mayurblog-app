"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  Heart,
  Sparkles,
  Check,
  ExternalLink,
  Globe,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const [subscribedEmail, setSubscribedEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!subscribedEmail) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setSubscribedEmail("");
      setIsSubscribed(false);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-auto bg-slate-950 text-slate-400 border-t border-slate-850 overflow-hidden select-none">
      {/* Subtle Top Border Gradient Accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      {/* Ambient Glows */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & Updates Banner (Clean, Seamless, Famous Blog Style) */}
        <div className="pt-14 pb-12 border-b border-slate-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The MayurBlog Dispatch</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Stay updated with modern tech insights.
              </h2>
              <p className="mt-2 text-sm text-slate-400 max-w-lg leading-relaxed">
                Join developers reading architectural breakdowns, AI reasoning analyses, and hands-on coding tutorials. No fluff, no spam.
              </p>
            </div>

            <div className="lg:col-span-5">
              {isSubscribed ? (
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-sm font-medium animate-in zoom-in-95">
                  <div className="w-7 h-7 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>You&apos;re subscribed! Welcome to the insider dispatch.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex items-center p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 focus-within:border-purple-500/70 focus-within:ring-2 focus-within:ring-purple-500/20 transition-all shadow-inner"
                >
                  <Mail className="w-4 h-4 text-slate-500 ml-3 shrink-0" />
                  <input
                    type="email"
                    required
                    value={subscribedEmail}
                    onChange={(e) => setSubscribedEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder-slate-500 outline-none"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shadow-md shadow-purple-500/25 transition-all shrink-0 cursor-pointer hover:shadow-purple-500/40"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main 4-Column Navigation & Brand Grid */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 border-b border-slate-900">
          {/* Column 1: Brand, Mission & Social Icons (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="MayurBlog Logo"
                width={70}
                height={50}
                className="h-8 sm:h-9 w-auto object-contain drop-shadow-[0_2px_8px_rgba(168,85,247,0.4)] group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-2xl font-black tracking-tight text-white">
                Mayur<span className="gradient-text">Blog</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              An engineering-first digital publication focused on modern full-stack web architecture, frontier AI reasoning models, and production-grade programming.
            </p>

            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Open to engineering collaborations</span>
            </div>

            {/* Social Icons Row (Hashnode / Vercel Style) */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href="https://github.com/Mayur-Murarka"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500 hover:bg-purple-600 hover:text-white text-slate-400 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://linkedin.com/in/mayur-murarka-178703283/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#0077b5] hover:bg-[#0077b5] hover:text-white text-slate-400 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://mayur-portfolio007.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Personal Portfolio"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:bg-emerald-600 hover:text-white text-slate-400 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              >
                <Globe className="w-4 h-4" />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mayurmuarka1@gmail.com&su=Hello%20Mayur"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send Direct Email"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500 hover:bg-pink-600 hover:text-white text-slate-400 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Mayur", href: "/about" },
                { label: "All Articles", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Trending Articles (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Trending Articles
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                {
                  label: "DeepSeek-R1 vs. OpenAI o1",
                  href: "/blogpost/deepseek-r1-vs-openai-o1",
                },
                {
                  label: "Next.js 15 & React 19 Guide",
                  href: "/blogpost/nextjs-15-react-19-guide",
                },
                {
                  label: "ChatGPT vs. Gemini Comparison",
                  href: "/blogpost/chatgpt-vs-gemini",
                },
                {
                  label: "Modern CSS Mastery",
                  href: "/blogpost/css-tutorial",
                },
                {
                  label: "C Programming Architecture",
                  href: "/blogpost/c-programming-tutorial",
                },
              ].map((article) => (
                <li key={article.href}>
                  <Link
                    href={article.href}
                    className="text-slate-400 hover:text-purple-400 transition-colors duration-200 line-clamp-1 block"
                  >
                    {article.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Topic Tags (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Popular Tags
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "Next.js 15",
                "React 19",
                "DeepSeek-R1",
                "Reasoning AI",
                "Server Actions",
                "Turbopack",
                "CSS Grid",
                "System Design",
                "C Language",
              ].map((tag) => (
                <Link
                  key={tag}
                  href="/blog"
                  className="px-2.5 py-1 rounded-lg text-xs bg-slate-900 border border-slate-800 hover:border-purple-500/50 hover:bg-purple-950/40 text-slate-300 hover:text-purple-300 transition-all duration-200"
                >
                  {tag}
                </Link>
              ))}
            </div>

            <div className="pt-3">
              <a
                href="https://mayur-portfolio007.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
              >
                <span>View Mayur&apos;s Full Portfolio</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top (Clean, Minimalist) */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {new Date().getFullYear()} MayurBlog. Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
            <span>by <strong className="font-semibold text-slate-300">Mayur Murarka</strong>.</span>
          </p>

          <div className="flex items-center gap-4">
            <span>Built with Next.js 15 &amp; Tailwind</span>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-purple-600 hover:text-white text-slate-400 border border-slate-800 transition-all duration-200 cursor-pointer shadow-sm"
              title="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
