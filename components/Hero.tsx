"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { ATTRIBUTES, HERO_IMAGE } from "@/lib/brand-data";
import { useHydrated } from "@/lib/use-hydrated";
import { KodamaMark } from "./KodamaMark";
import Image from "next/image";

const markHidden = { opacity: 0, scale: 0.9 };
const markVisible = { opacity: 1, scale: 1 };

export function Hero() {
  const hydrated = useHydrated();

  return (
    <section id="overview" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 transition-colors duration-700"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in srgb, var(--k-bg) 55%, transparent) 0%, color-mix(in srgb, var(--k-bg) 82%, transparent) 55%, var(--k-bg) 100%)",
          }}
        />
        <div className="absolute inset-0 k-grain opacity-[0.04] pointer-events-none" />
      </div>

      <div className="relative max-w-6xl mx-auto w-full px-6 md:px-12 lg:px-24 pt-28">
        <motion.div
          initial={markHidden}
          animate={hydrated ? markVisible : markHidden}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="k-float"
        >
          <KodamaMark size={64} stroke={1.8} style={{ color: "var(--k-accent)" }} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={hydrated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-10 font-mono-k text-xs uppercase tracking-[0.4em]"
          style={{ color: "var(--k-accent)" }}
        >
          Kodama — Brand System
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={hydrated ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 1.2, delay: 0.45 }}
          className="mt-6 font-display font-light tracking-tighter leading-[0.95] text-5xl md:text-7xl lg:text-8xl max-w-4xl"
          style={{ color: "var(--k-text)" }}
        >
          A quiet place
          <br />
          for your thoughts.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={hydrated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-8 max-w-lg text-base md:text-lg font-light leading-relaxed"
          style={{ color: "var(--k-text-2)" }}
        >
          Kodama are the unseen spirits of the forest. We translate that stillness into a digital
          language — present, private, and calm.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={hydrated ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-14 flex flex-wrap gap-x-8 gap-y-3"
        >
          {ATTRIBUTES.map(({ word }) => (
            <span
              key={word}
              className="font-mono-k text-[11px] uppercase tracking-[0.22em]"
              style={{ color: "var(--k-text-2)" }}
            >
              {word}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#logo"
        data-testid="hero-scroll"
        initial={{ opacity: 0 }}
        animate={hydrated ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="relative max-w-6xl mx-auto w-full px-6 md:px-12 lg:px-24 mt-20 flex items-center gap-3 pb-12"
        style={{ color: "var(--k-text-2)" }}
      >
        <ArrowDown size={15} strokeWidth={1.5} className="animate-bounce" />
        <span className="font-mono-k text-[11px] uppercase tracking-[0.25em]">Enter the grove</span>
      </motion.a>
    </section>
  );
}
