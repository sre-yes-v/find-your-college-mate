"use client";
import type { Student } from "@/types/student";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
  results: Student[];
  activeIndex: number;
  onSelect: (s: Student) => void;
  onHover: (i: number) => void;
  query: string;
  style?: { top: number; left: number; width: number };
}

export function SearchDropdown({ open, results, activeIndex, onSelect, onHover, query, style }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 4, scale: 0.98 }}
          transition={{ duration: 0.18 }}
          style={style ? { position: "fixed", top: style.top, left: style.left, width: style.width } : undefined}
          className="z-[9999] overflow-hidden rounded-3xl border border-border bg-surface p-2 shadow-[var(--shadow-float)]"
        >
          {results.length === 0 ? (
            <div className="px-4 py-6 text-center text-sm text-muted-foreground">
              No students match “{query}”.
            </div>
          ) : (
            <>
              <div className="label-eyebrow px-3 py-2">
                {results.length} match{results.length === 1 ? "" : "es"}
              </div>
              <div className="flex max-h-80 flex-col overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent">
                {results.map((s, i) => {
                  const initials = s.name.split(" ").map(n => n[0]).slice(0, 2).join("");
                  return (
                    <button
                      key={s.id}
                      onMouseEnter={() => onHover(i)}
                      onClick={() => onSelect(s)}
                      className={`flex items-center gap-3 rounded-2xl px-3 py-3 text-left transition-colors ${
                        i === activeIndex ? "bg-mint" : "hover:bg-mint/60"
                      }`}
                    >
                      <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-[12px] font-bold text-primary-foreground">
                        {initials}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold">{s.name}</div>
                        <div className="text-xs text-muted-foreground">{s.department}</div>
                      </div>
                      
                    </button>
                  );
                })}
              </div>
              <div className="mt-1 flex justify-between border-t border-border/60 px-3 py-2 text-[11px] text-muted-foreground">
                <span>↑ ↓ navigate · ↵ select</span><span>esc to close</span>
              </div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
