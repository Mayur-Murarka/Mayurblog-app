"use client";

import React, { useState, useEffect } from "react";
import { Heart, Check, Bookmark, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";

export default function ArticleActions({ title, slug }) {
  const [likes, setLikes] = useState(42);
  const [hasLiked, setHasLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
      if (slug) {
        const storedLikes = localStorage.getItem(`blog_likes_${slug}`);
        const storedLiked = localStorage.getItem(`blog_liked_${slug}`);
        const storedBookmarked = localStorage.getItem(`blog_bookmarked_${slug}`);

        if (storedLikes) setLikes(parseInt(storedLikes, 10));
        if (storedLiked === "true") setHasLiked(true);
        if (storedBookmarked === "true") setIsBookmarked(true);
      }
    }
  }, [slug]);

  const handleLike = () => {
    const nextLiked = !hasLiked;
    const nextCount = nextLiked ? likes + 1 : Math.max(0, likes - 1);
    setHasLiked(nextLiked);
    setLikes(nextCount);
    if (slug) {
      localStorage.setItem(`blog_liked_${slug}`, String(nextLiked));
      localStorage.setItem(`blog_likes_${slug}`, String(nextCount));
    }
  };

  const handleBookmark = () => {
    const nextBookmarked = !isBookmarked;
    setIsBookmarked(nextBookmarked);
    if (slug) {
      localStorage.setItem(`blog_bookmarked_${slug}`, String(nextBookmarked));
    }
  };

  const handleCopyLink = async () => {
    if (typeof window === "undefined") return;
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title || "Great article!"
  )}&url=${encodeURIComponent(currentUrl || "")}`;

  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    currentUrl || ""
  )}`;

  return (
    <div className="flex items-center gap-2 py-3 border-y border-slate-200/80 dark:border-slate-800/80 my-8">
      {/* Like / Clap button */}
      <button
        onClick={handleLike}
        type="button"
        aria-label="Like article"
        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
          hasLiked
            ? "bg-pink-500/15 text-pink-600 dark:text-pink-400 border border-pink-500/30 scale-105"
            : "bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-pink-500/10 hover:text-pink-500 border border-transparent"
        }`}
      >
        <Heart
          className={`w-4 h-4 transition-transform duration-200 ${
            hasLiked ? "fill-pink-500 text-pink-500 scale-110 animate-bounce" : "text-slate-500"
          }`}
        />
        <span>{likes}</span>
      </button>

      {/* Bookmark button */}
      <button
        onClick={handleBookmark}
        type="button"
        aria-label="Bookmark article"
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
          isBookmarked
            ? "bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/30"
            : "bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-purple-500/10 hover:text-purple-500 border border-transparent"
        }`}
      >
        <Bookmark
          className={`w-4 h-4 ${isBookmarked ? "fill-purple-500 text-purple-500" : "text-slate-500"}`}
        />
        <span className="hidden sm:inline">{isBookmarked ? "Saved" : "Save"}</span>
      </button>

      <div className="h-5 w-px bg-slate-200 dark:bg-slate-800 mx-1" />

      {/* Copy Link Button with dynamic feedback */}
      <div className="relative">
        <button
          onClick={handleCopyLink}
          type="button"
          aria-label="Copy link"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-500 animate-in zoom-in-50" />
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
            </>
          ) : (
            <>
              <LinkIcon className="w-4 h-4 text-slate-500" />
              <span className="hidden sm:inline">Copy Link</span>
            </>
          )}
        </button>
      </div>

      {/* Social share links */}
      <div className="ml-auto flex items-center gap-1.5">
        <span className="text-xs text-slate-400 mr-1 hidden sm:inline">Share:</span>
        <a
          href={twitterShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X / Twitter"
          className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:text-sky-500 hover:bg-sky-500/10 transition-colors"
        >
          <Twitter className="w-4 h-4" />
        </a>
        <a
          href={linkedinShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:text-blue-500 hover:bg-blue-500/10 transition-colors"
        >
          <Linkedin className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
