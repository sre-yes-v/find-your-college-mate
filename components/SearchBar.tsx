"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { Search, Command } from "lucide-react";
import { motion } from "framer-motion";
import { searchStudents } from "@/lib/search";
import { SearchDropdown } from "./SearchDropdown";
import type { Student } from "@/types/student";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [style, setStyle] = useState({
    top: 0,
    left: 0,
    width: 0,
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const results = useMemo(() => searchStudents(query), [query]);

  useEffect(() => {
    const update = () => {
      const rect = containerRef.current?.getBoundingClientRect();

      if (!rect) return;

      setStyle({
        top: rect.bottom + 12,
        left: rect.left,
        width: rect.width,
      });
    };

    update();

    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const select = (student: Student) => {
    router.push(`/group/${student.groupId}`);
  };

  const open = focused && query.trim().length > 0;

  const dropdown = (
    <SearchDropdown
      open={open}
      results={results}
      activeIndex={activeIndex}
      onSelect={select}
      onHover={setActiveIndex}
      query={query}
      style={style}
    />
  );

  return (
    <div ref={containerRef} className="relative w-full">
      <motion.div
        animate={{ scale: focused ? 1.01 : 1 }}
        className={`relative flex items-center gap-3 rounded-full border bg-surface pl-6 pr-2 shadow-[var(--shadow-float)] transition-all ${
          focused
            ? "border-primary/40 ring-4 ring-primary/10"
            : "border-border"
        }`}
      >
        <Search className="h-5 w-5 shrink-0 text-primary" />

        <input
          ref={inputRef}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActiveIndex(0);
          }}
          onFocus={() => {
            setFocused(true);

            requestAnimationFrame(() => {
              const rect = containerRef.current?.getBoundingClientRect();
              if (!rect) return;

              const estimatedDropdownHeight = 360;

              if (window.innerHeight - rect.bottom < estimatedDropdownHeight) {
                window.scrollBy({
                  top: estimatedDropdownHeight - (window.innerHeight - rect.bottom) + 32,
                  behavior: "smooth",
                });
              }
            });
          }}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          onKeyDown={(e) => {
            if (!open) return;

            switch (e.key) {
              case "ArrowDown":
                e.preventDefault();
                setActiveIndex((i) =>
                  Math.min(i + 1, results.length - 1)
                );
                break;

              case "ArrowUp":
                e.preventDefault();
                setActiveIndex((i) =>
                  Math.max(i - 1, 0)
                );
                break;

              case "Enter":
                if (results[activeIndex]) {
                  e.preventDefault();
                  select(results[activeIndex]);
                }
                break;

              case "Escape":
                inputRef.current?.blur();
                break;
            }
          }}
          placeholder="Search your full name..."
          aria-label="Search students"
          className="h-[70px] flex-1 bg-transparent text-base font-medium outline-none placeholder:text-muted-foreground/70 md:text-lg"
        />

        <div className="hidden items-center gap-1 rounded-full border border-border bg-background px-2.5 py-1 text-[11px] text-muted-foreground md:flex">
          <Command className="h-3 w-3" />
          search
        </div>
      </motion.div>

      {typeof document !== "undefined"
        ? createPortal(dropdown, document.body)
        : null}
    </div>
  );
}