"use client";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 right-0 top-4 z-50 mx-auto flex w-full max-w-6xl items-center justify-between px-4"
    >
      <div className="flex w-full items-center justify-between rounded-full border border-border bg-surface/80 px-3 py-2 shadow-[var(--shadow-paper)] backdrop-blur-xl  ">
        <Link href="/" className="flex items-center gap-2 pl-2">
            <Image src="/logo.jpg" alt="Logo" width={30} height={30} />
          <span className="text-sm font-black tracking-tight">SHC Connect</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {["how","stats","search"].map((id) => (
            <a key={id} href={`/#${id}`} className="rounded-full px-4 py-2 text-sm text-muted-foreground hover:bg-mint hover:text-primary">
              {id === "how" ? "How it works" : id === "stats" ? "Stats" : "Search"}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#search" aria-label="Search"
            className="hidden h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground md:grid">
            <Search className="h-4 w-4" />
          </a>
          <button onClick={() => setOpen(v => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface md:hidden"
            aria-label="Menu">
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute left-4 right-4 top-full mt-2 rounded-2xl border border-border bg-surface p-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {[["how","How it works"],["stats","Stats"],["search","Search"]].map(([id,label]) => (
              <a key={id} href={`/#${id}`} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm hover:bg-mint">
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </motion.header>
  );
}
