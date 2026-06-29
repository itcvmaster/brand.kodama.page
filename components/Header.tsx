"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { NAV_ITEMS } from "@/lib/brand-data";
import { PHILOSOPHY_WELCOME } from "@/lib/philosophy-data";
import { KodamaLogo } from "./KodamaLogo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      data-testid="kodama-nav"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 border-b ${
        scrolled ? "bg-kodama-sand/82 backdrop-blur-xl border-kodama-line" : "bg-transparent border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        <a href="#top" data-testid="nav-logo" className="flex items-center gap-2.5 group">
          <KodamaLogo className="w-7 h-7 text-kodama-moss transition-transform duration-500 group-hover:-translate-y-0.5" />
          <span className="font-display text-xl tracking-tight text-kodama-bark">Kodama</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.filter(({ id }) => id !== "top").map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              data-testid={`nav-link-${id}`}
              className={`text-sm transition-colors duration-300 ${
                active === id ? "text-kodama-bark" : "text-kodama-stone hover:text-kodama-bark"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#forest"
          data-testid="nav-cta"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-kodama-moss text-kodama-sand text-sm px-5 py-2.5 hover:bg-kodama-moss-deep transition-colors duration-300"
        >
          {PHILOSOPHY_WELCOME.headline}
          <ArrowUpRight className="w-4 h-4" aria-hidden />
        </a>
      </nav>
    </header>
  );
}
