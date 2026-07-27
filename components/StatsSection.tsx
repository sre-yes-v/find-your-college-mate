"use client";
import { motion } from "framer-motion";

const stats = [
  { k: "140+", l: "Students indexed" },
  { k: "11", l: "Groups" },
  { k: "5", l: "Departments" },
];

export function StatsSection() {
  return (
    <section id="stats" className="mx-auto w-full max-w-6xl px-4 py-16">
      <div className="paper-card grid grid-cols-1 gap-y-10 p-10 md:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div key={s.l} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.06 }}
            className="flex flex-col items-center text-center">
            <div className="text-4xl font-black tracking-tight text-primary md:text-5xl">{s.k}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
