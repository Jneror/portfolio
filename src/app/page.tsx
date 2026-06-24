"use client";

import { useState, useEffect } from "react";
import { IntroSection } from "@/components/IntroSection";
import { YouTubeSection } from "@/components/YouTubeSection";
import { TuringoSection } from "@/components/TuringoSection";
import { EsoSection } from "@/components/EsoSection";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-zinc-50 font-sans text-zinc-900 transition-colors duration-200 dark:bg-zinc-950 dark:text-zinc-50 overflow-x-hidden">
      {/* Background Radial Spotlights */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 dark:block hidden"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.12), transparent 80%)`,
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 dark:hidden block"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(212, 212, 216, 0.35), transparent 80%)`,
        }}
      />

      <main className="mx-auto max-w-4xl px-6 py-20 sm:px-8 md:py-28 relative z-40 space-y-14">
        <IntroSection />
        <hr className="border-zinc-200 dark:border-zinc-800" />
        <YouTubeSection />
        <hr className="border-zinc-200 dark:border-zinc-800" />
        <TuringoSection />
        <hr className="border-zinc-200 dark:border-zinc-800" />
        <EsoSection />
      </main>
    </div>
  );
}
