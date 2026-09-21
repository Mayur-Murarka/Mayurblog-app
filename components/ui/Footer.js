"use client";
import React from "react";
import Link from "next/link";
import { Github, Linkedin, Globe, Pen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gray-950 dark:bg-[#020207] text-gray-300 mt-auto">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg animated-gradient flex items-center justify-center">
                <Pen className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-xl text-white">
                <span className="gradient-text">Mayur</span>Blog
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-6">
              A premium tech publication — sharing in-depth tutorials, insights, and stories from the world of software development.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Github,   href: "https://github.com/mayur-murarka",                   label: "GitHub"    },
                { icon: Linkedin, href: "https://linkedin.com/in/mayur-murarka-178703283/",   label: "LinkedIn"  },
                { icon: Globe,    href: "https://mayur-portfolio007.netlify.app/",             label: "Portfolio" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Explore</h3>
            <ul className="space-y-3">
              {["/", "/blog", "/about", "/contact"].map((href) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-violet-400 transition-colors hover-underline">
                    {href === "/" ? "Home" : href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Topics</h3>
            <ul className="space-y-3">
              {["Web Development", "Data Science", "System Design", "Open Source", "Career Tips"].map((t) => (
                <li key={t}>
                  <Link href="/blog" className="text-sm text-gray-400 hover:text-violet-400 transition-colors hover-underline">
                    {t}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} MayurBlog™. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-gray-300 transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
