"use client";
import React from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ModeToggle } from "./theme-btn";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setProgress(20);

    setTimeout(() => {
      setProgress(40);
    }, 100);

    setTimeout(() => {
      setProgress(100);
    }, 400);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setProgress(0);
    }, 50);
  }, []);

  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
      <LoadingBar
        color="#933ce6"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <div className="text-lg font-bold">MayurBlog</div>
        </Link>
        <div className="hidden md:flex space-x-4 items-center">
          <Link
            href="/"
            className="hover:scale-105 hover:font-semibold transition-transform duration-300"
          >
            {" "}
            Home
          </Link>
          <Link
            href="/about"
            className="hover:scale-105 hover:font-semibold transition-transform duration-300"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="hover:scale-105 hover:font-semibold transition-transform duration-300"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:scale-105 hover:font-semibold transition-transform duration-300"
          >
            Contact
          </Link>
          <div className="flex items-center">
            <ModeToggle />
          </div>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="p-2 rounded-lg border border-border/60 hover:bg-muted/80 transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                <svg
                  className="w-5 h-5 text-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 sm:w-80">
              <SheetHeader>
                <SheetTitle className="font-bold text-xl tracking-tight my-4">
                  Mayur<span className="gradient-text">Blog</span>
                </SheetTitle>
                <SheetDescription asChild>
                  <nav className="flex flex-col gap-2 text-left mt-6">
                    <Link
                      href="/"
                      className="px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-purple-500/10 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className="px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-purple-500/10 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      About
                    </Link>
                    <Link
                      href="/blog"
                      className="px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-purple-500/10 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      Blog
                    </Link>
                    <Link
                      href="/contact"
                      className="px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-purple-500/10 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      Contact
                    </Link>
                  </nav>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
