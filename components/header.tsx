"use client";

import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="h-[56px] flex items-center justify-between px-6 border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 transition-colors duration-300">
      <div className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        Dashboard
      </div>
      <ThemeToggle />
    </header>
  );
}
