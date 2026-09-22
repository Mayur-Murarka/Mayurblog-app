"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="relative inline-flex items-center justify-center w-9 h-9 rounded-full border border-border/60 bg-muted/30 hover:bg-muted/80 hover:border-purple-500/40 text-foreground transition-all duration-200 hover:scale-105 shadow-sm focus:outline-none"
          aria-label="Toggle theme"
        >
          <Sun className="h-[1.15rem] w-[1.15rem] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 text-amber-500" />
          <Moon className="absolute h-[1.15rem] w-[1.15rem] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 text-purple-400" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-2xl border border-border/80 backdrop-blur-md shadow-xl">
        <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer rounded-xl font-medium">
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer rounded-xl font-medium">
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer rounded-xl font-medium">
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
