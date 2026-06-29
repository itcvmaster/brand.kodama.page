"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useHydrated } from "@/lib/use-hydrated";

export function ThemeToggle() {
  const hydrated = useHydrated();
  const { resolvedTheme, toggleTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      data-testid="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-kodama-line text-kodama-stone hover:text-kodama-bark hover:bg-kodama-mist transition-colors duration-300"
    >
      {hydrated ? (
        isDark ? <Sun className="w-4 h-4" aria-hidden /> : <Moon className="w-4 h-4" aria-hidden />
      ) : (
        <Moon className="w-4 h-4 opacity-0" aria-hidden />
      )}
    </button>
  );
}
