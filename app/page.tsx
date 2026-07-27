"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { StatsSection } from "@/components/StatsSection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function HomePage() {
   const pathname = usePathname();
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);

      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      });
    }
  }, [pathname]);
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <StatsSection />
      <Footer />
    </main>
  );
}
