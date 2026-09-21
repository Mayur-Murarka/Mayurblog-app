"use client";
import React, { useEffect, useState } from "react";

const OnThisPage = ({ htmlContent }) => {
  const [headings, setHeadings] = useState([]);
  const [active, setActive]     = useState("");

  useEffect(() => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;
    const hEls = tempDiv.querySelectorAll("h2, h3");
    setHeadings(
      Array.from(hEls).map((h) => ({
        text:  h.textContent,
        id:    h.id,
        level: h.tagName === "H2" ? 2 : 3,
      }))
    );
  }, [htmlContent]);

  useEffect(() => {
    if (headings.length === 0) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="text-sm">
      <p className="text-xs font-bold uppercase tracking-widest mb-4 gradient-text">On This Page</p>
      <ul className="space-y-1.5 border-l border-border">
        {headings.map(({ text, id, level }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block py-1 transition-all duration-200 ${
                level === 3 ? "pl-6" : "pl-4"
              } ${
                active === id
                  ? "text-primary font-medium border-l-2 border-primary -ml-px"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default OnThisPage;

