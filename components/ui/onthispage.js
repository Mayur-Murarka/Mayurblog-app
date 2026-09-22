"use client";

import React, { useEffect, useState } from "react";
import { ListOrdered, ChevronRight } from "lucide-react";

const OnThisPage = ({ htmlContent }) => {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (!htmlContent) return;

    // Parse HTML content to extract both h2 and h3
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;
    const headingElements = tempDiv.querySelectorAll("h2, h3");

    const parsedHeadings = Array.from(headingElements).map((el) => ({
      text: el.textContent.replace(/^#+\s*/, ""),
      id: el.id,
      level: el.tagName.toLowerCase(),
    }));

    setHeadings(parsedHeadings);

    // Track active heading on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      let currentActive = "";

      for (let i = 0; i < parsedHeadings.length; i++) {
        const el = document.getElementById(parsedHeadings[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            currentActive = parsedHeadings[i].id;
          }
        }
      }

      setActiveId(currentActive || (parsedHeadings[0] ? parsedHeadings[0].id : ""));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [htmlContent]);

  if (headings.length === 0) return null;

  return (
    <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl p-5 shadow-xl shadow-purple-500/5 transition-all">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
          <ListOrdered className="w-4 h-4 text-purple-500" />
          <span>On This Page</span>
        </div>
        <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-300">
          {headings.length} sections
        </span>
      </div>

      <nav className="max-h-[calc(100vh-14rem)] overflow-y-auto pr-1 space-y-1 text-sm custom-scrollbar">
        {headings.map((heading, index) => {
          const isActive = activeId === heading.id;
          const isH3 = heading.level === "h3";

          return (
            <a
              key={index}
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById(heading.id);
                if (target) {
                  target.scrollIntoView({ behavior: "smooth", block: "start" });
                  history.pushState(null, "", `#${heading.id}`);
                }
              }}
              className={`group flex items-start gap-1.5 py-1.5 px-2.5 rounded-lg text-xs transition-all duration-200 ${
                isH3 ? "ml-3" : ""
              } ${
                isActive
                  ? "bg-purple-500/15 text-purple-700 dark:text-purple-300 font-semibold shadow-sm border-l-2 border-purple-500"
                  : "text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-300 hover:bg-slate-100/70 dark:hover:bg-slate-800/50"
              }`}
            >
              <ChevronRight
                className={`w-3.5 h-3.5 mt-0.5 shrink-0 transition-transform duration-200 ${
                  isActive
                    ? "text-purple-500 translate-x-0.5"
                    : "text-slate-400 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5"
                }`}
              />
              <span className="line-clamp-2 leading-relaxed">{heading.text}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default OnThisPage;