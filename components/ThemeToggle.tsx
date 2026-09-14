"use client";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className={`relative flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 dark:border-zinc-700 text-slate-600 dark:text-zinc-300 hover:text-[#FF2B00] dark:hover:text-[#FF5A33] hover:border-[#FFC4B3] dark:hover:border-[#FF2B00]/50 transition-colors duration-200 ${className}`}
    >
      <Sun className={`w-[18px] h-[18px] transition-all duration-300 ${theme === "dark" ? "scale-0 -rotate-90 absolute" : "scale-100 rotate-0"}`} />
      <Moon className={`w-[18px] h-[18px] transition-all duration-300 ${theme === "dark" ? "scale-100 rotate-0" : "scale-0 rotate-90 absolute"}`} />
    </button>
  );
}
