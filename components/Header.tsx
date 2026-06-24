"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/brand-data";
import { KodamaMark } from "./KodamaMark";
import { useTheme } from "./ThemeProvider";

export function Header() {
  const { theme, toggle } = useTheme();
  const [activeSection, setActiveSection] = useState("overview");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled
          ? "color-mix(in srgb, var(--k-bg) 78%, transparent)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--k-border)" : "1px solid transparent",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-12 lg:px-8 h-20 flex items-center justify-between">
        <a href="#overview" data-testid="nav-logo" className="flex items-center gap-3 group">
          <KodamaMark
            size={26}
            stroke={2.2}
            style={{ color: "var(--k-text)" }}
            className="transition-transform duration-700 group-hover:rotate-180"
          />
          <span className="font-display text-xl tracking-tight" style={{ color: "var(--k-text)" }}>
            Kodama
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              data-testid={`nav-link-${id}`}
              className="font-mono-k text-[11px] uppercase tracking-[0.18em] transition-colors duration-300"
              style={{ color: activeSection === id ? "var(--k-accent)" : "var(--k-text-2)" }}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            data-testid="theme-toggle"
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid place-items-center w-10 h-10 rounded-full border transition-all duration-500 hover:scale-105"
            style={{ borderColor: "var(--k-border)", color: "var(--k-text)" }}
          >
            {theme === "dark" ? (
              <Sun size={16} strokeWidth={1.5} />
            ) : (
              <Moon size={16} strokeWidth={1.5} />
            )}
          </button>
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu"
            className="lg:hidden grid place-items-center w-10 h-10 rounded-full border transition-all duration-500"
            style={{ borderColor: "var(--k-border)", color: "var(--k-text)" }}
          >
            {mobileOpen ? <X size={16} strokeWidth={1.5} /> : <Menu size={16} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          data-testid="mobile-menu"
          className="lg:hidden border-t"
          style={{
            borderColor: "var(--k-border)",
            background: "color-mix(in srgb, var(--k-bg) 94%, transparent)",
            backdropFilter: "blur(16px)",
          }}
        >
          <div className="px-6 py-6 grid grid-cols-2 gap-y-4">
            {NAV_ITEMS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                data-testid={`mobile-link-${id}`}
                onClick={() => setMobileOpen(false)}
                className="font-mono-k text-xs uppercase tracking-[0.18em]"
                style={{ color: activeSection === id ? "var(--k-accent)" : "var(--k-text-2)" }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
