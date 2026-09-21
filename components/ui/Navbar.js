"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LoadingBar from "react-top-loading-bar";
import { ModeToggle } from "./theme-btn";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import {
  Github,
  Home as HomeIcon,
  User as UserIcon,
  BookOpen,
  Mail,
  Menu,
} from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "About", href: "/about", icon: UserIcon },
  { name: "Blog", href: "/blog", icon: BookOpen },
  { name: "Contact", href: "/contact", icon: Mail },
];

const Navbar = () => {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setProgress(20);
    const t1 = setTimeout(() => setProgress(40), 100);
    const t2 = setTimeout(() => setProgress(100), 350);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pathname]);

  useEffect(() => {
    const t = setTimeout(() => setProgress(0), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-sm transition-all">
      {/* Top Loading Progress Bar */}
      <LoadingBar
        color="#a855f7"
        progress={progress}
        height={3}
        onLoaderFinished={() => setProgress(0)}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo with 3D faceted MB emblem */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-md shadow-purple-500/25 border border-purple-500/30 group-hover:scale-105 group-hover:shadow-purple-500/50 group-hover:rotate-3 transition-all duration-300 bg-background/50 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="MayurBlog MB Logo"
              width={36}
              height={36}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-foreground transition-colors">
            Mayur<span className="gradient-text">Blog</span>
          </span>
        </Link>

        {/* Desktop Navigation Links with animated active pill & hover state */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-muted/40 border border-border/50 backdrop-blur-sm">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md shadow-purple-500/25 font-semibold scale-105"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: GitHub + Theme Toggle + Mobile Hamburger */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* GitHub Star Link */}
          <a
            href="https://github.com/Mayur-Murarka"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-border/60 bg-muted/30 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-105 shadow-sm"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          {/* Theme Toggle Button */}
          <div className="p-0.5 rounded-full border border-border/60 bg-muted/30 hover:border-purple-500/40 transition-colors">
            <ModeToggle />
          </div>

          {/* Mobile Sheet Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="p-2 rounded-xl border border-border/60 bg-muted/30 hover:bg-muted/80 text-foreground transition-all hover:scale-105 focus:outline-none"
                  aria-label="Toggle navigation menu"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 sm:w-80 p-6">
                <SheetHeader className="text-left">
                  <SheetTitle className="flex items-center gap-2.5 text-xl font-bold tracking-tight my-2">
                    <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-purple-500/30 shadow-sm flex items-center justify-center bg-background/50">
                      <Image
                        src="/logo.png"
                        alt="MayurBlog MB Logo"
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span>
                      Mayur<span className="gradient-text">Blog</span>
                    </span>
                  </SheetTitle>
                  <SheetDescription asChild>
                    <nav className="flex flex-col gap-2 mt-8">
                      {NAV_LINKS.map((link) => {
                        const Icon = link.icon;
                        const isActive = pathname === link.href;
                        return (
                          <Link
                            key={link.name}
                            href={link.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                              isActive
                                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-md shadow-purple-500/20"
                                : "text-foreground hover:bg-purple-500/10 hover:text-purple-600 dark:hover:text-purple-400"
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                            <span>{link.name}</span>
                          </Link>
                        );
                      })}

                      <div className="pt-6 mt-4 border-t border-border/60">
                        <a
                          href="https://github.com/Mayur-Murarka"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border/70 text-xs font-semibold hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                        >
                          <Github className="w-4 h-4" />
                          <span>Follow on GitHub</span>
                        </a>
                      </div>
                    </nav>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Subtle bottom gradient glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent opacity-80 pointer-events-none" />
    </header>
  );
};

export default Navbar;
