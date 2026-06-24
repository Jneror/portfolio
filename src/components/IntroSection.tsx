"use client";

import Image from "next/image";
import { GitHubIcon, LinkedInIcon } from "@/components/Icons";

export function IntroSection() {
  return (
    <section className="flex flex-col-reverse items-start justify-between gap-8 md:flex-row md:items-center">
      <div className="space-y-4 max-w-2xl">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            John Rodriguez
          </h1>
          <p className="text-xl font-medium text-zinc-600 dark:text-zinc-400">
            Software Engineer
          </p>
        </div>

        <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          Full stack software engineer with passion for building applications
          with large user impact. From designing and developing interactive user
          interfaces to architecting scalable backend systems, I thrive on new
          challenges, cross-functional collaboration, and continuous learning.
        </p>

        <div className="flex gap-5 pt-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <a
            href="https://github.com/jneror"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
          >
            <GitHubIcon className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/jneror"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
          >
            <LinkedInIcon className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>

      <div className="relative h-28 w-28 shrink-0 sm:h-32 sm:w-32 overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-sm">
        <Image
          src="/profile.jpg"
          alt="John Rodriguez"
          fill
          priority
          className="object-cover"
          sizes="(max-w-768px) 112px, 128px"
        />
      </div>
    </section>
  );
}
