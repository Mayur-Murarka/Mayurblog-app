"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ReadingProgress() {
  const [completion, setCompletion] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const percent = Math.min(100, Math.max(0, (currentProgress / scrollHeight) * 100));
        setCompletion(Number(percent.toFixed(1)));
      }
      setShowScrollTop(window.scrollY > 350);
    };

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    updateScrollProgress();

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top Fixed Reading Progress Line with Gradient & Glow */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 transition-all duration-150 ease-out shadow-[0_0_12px_rgba(168,85,247,0.8)]"
          style={{ width: `${completion}%` }}
        />
      </div>

      {/* Floating Scroll to Top Pill */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-purple-500/30 text-gray-700 dark:text-gray-200 shadow-xl hover:shadow-purple-500/20 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 hover:-translate-y-1 transition-all duration-300 group"
        >
          <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 text-purple-500" />
          <span className="text-xs font-semibold">{Math.round(completion)}%</span>
        </button>
      )}
    </>
  );
}
