"use client";
import { motion } from "framer-motion";
import { SearchBar } from "./SearchBar";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="search" className="relative mx-auto w-full max-w-7xl px-4 pt-30 pb-24 md:pt-28 md:pb-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] grid-bg opacity-70" />
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Discover your student group in seconds
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-[88px]">
          Find Your<br />
          <span className="italic text-primary">Student Group</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
          Search your name to discover the student group you belong to and view every member instantly.
        </motion.p>
      </div>

      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
        className="relative mx-auto mt-14 max-w-4xl">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-primary via-primary-deep to-secondary p-6 shadow-[var(--shadow-lift)] md:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-mint/20 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <div className="mb-5 flex items-center justify-between text-white/70">
              <span className="label-eyebrow !text-white/60">Live search</span>
              <span className="text-xs">140+ students indexed</span>
            </div>
            <SearchBar />
            
          </div>
        </div>
      </motion.div>
    </section>
  );
}
