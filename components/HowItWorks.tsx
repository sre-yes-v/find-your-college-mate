"use client";
import { Search, MousePointerClick, Users } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Search your name", desc: "Start typing your full name. Results update instantly.", icon: Search },
  { n: "02", title: "Choose your profile", desc: "Select your name from suggestions with keys or tap.", icon: MousePointerClick },
  { n: "03", title: "View your group", desc: "Jump to a page with your group and every member.", icon: Users },
];

export function HowItWorks() {
  return (
    <section id="how" className="mx-auto w-full max-w-6xl px-4 py-20 md:py-28">
      <div className="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="label-eyebrow mb-3">How it works</div>
          <h2 className="max-w-xl text-4xl font-black tracking-tight md:text-5xl">
            Three steps to your <span className="italic text-primary">student group</span>.
          </h2>
        </div>
        <p className="max-w-sm text-sm text-muted-foreground">
          A calm, focused flow — no signups, no dashboards. Search, select, see your people.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div key={s.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="paper-card flex h-full flex-col justify-between gap-10 p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
            <div className="flex items-start justify-between">
              <span className="text-5xl font-black text-primary/15">{s.n}</span>
              <div className="grid h-11 w-11 place-items-center rounded-full bg-mint text-primary">
                <s.icon className="h-5 w-5" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
