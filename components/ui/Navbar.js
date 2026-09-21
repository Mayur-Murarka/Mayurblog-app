"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./theme-btn";
import LoadingBar from "react-top-loading-bar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Pen } from "lucide-react";

const NAV_LINKS = [
  { href: "/",        label: "Home" },
  { href: "/about",   label: "About" },
  { href: "/blog",    label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [progress, setProgress]     = useState(0);
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setProgress(30);
    setTimeout(() => setProgress(70),  100);
    setTimeout(() => setProgress(100), 350);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setProgress(0), 50);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
        scrolled
          ? "glass border-border/40 shadow-sm shadow-black/5 dark:shadow-black/30"
          : "bg-background/80 backdrop-blur-sm border-transparent"
      }`}
    >
      <LoadingBar
        color="hsl(263,70%,65%)"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        height={2}
      />
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg animated-gradient flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
            <Pen className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">
            <span className="gradient-text">Mayur</span>
            <span className="text-foreground">Blog</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <ModeToggle />
          <div className="md:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button className="p-2 rounded-lg hover:bg-muted transition-colors" aria-label="Open menu">
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 border-l border-border/50 bg-background/95 backdrop-blur-xl">
                <SheetHeader>
                  <SheetTitle asChild>
                    <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg animated-gradient flex items-center justify-center">
                        <Pen className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-bold text-xl">
                        <span className="gradient-text">Mayur</span>Blog
                      </span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-1">
                  {NAV_LINKS.map(({ href, label }) => {
                    const isActive = pathname === href;
                    return (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all ${
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        {label}
                      </Link>
                    );
                  })}
                </div>
                <div className="mt-auto pt-8 border-t border-border/50">
                  <p className="text-xs text-muted-foreground text-center">
                    Â© {new Date().getFullYear()} MayurBlog
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

