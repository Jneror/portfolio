"use client";

import { ArrowUpRight } from "lucide-react";

const YOUTUBE_CLIPS = [
  {
    title: "Animations and Interactive UI",
    description:
      "Carousel entry point for Hype, latest discovery feature that allows viewers to give points to videos so they can reach higher ranks in the leaderboard.",
    src: "/videos/teaser-animation.mp4",
  },
  {
    title: "State management",
    description:
      "Real-time points update after viewers give points, showing now an entry point for the leaderboard",
    src: "/videos/teaser-update.mp4",
  },
  {
    title: "Cross team collaboration",
    description:
      "Working on different codebases to implement entry points for monetization features, in this case, an entry point in the comment composer for Super Thanks.",
    src: "/videos/super-thanks.mp4",
  },
];

export function YouTubeSection() {
  return (
    <section className="space-y-8">
      {/* --- Header Section --- */}
      <div className="space-y-1">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex items-center gap-1.5 text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50 hover:text-[#febab9] dark:hover:text-[#febab9] transition-colors duration-200"
          >
            YouTube
            <ArrowUpRight className="h-6 w-6 text-zinc-400 group-hover/link:text-[#febab9] dark:group-hover/link:text-[#febab9] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-200" />
          </a>
          <span className="text-sm font-medium text-zinc-400 dark:text-zinc-500">
            2021 - 2026
          </span>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Full stack development in C++, feature ownership from design to launch
          to analytics, overseas cross-team collaboration.
        </p>
      </div>

      {/* --- 3-Column Video Clip Grid --- */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 group/list">
        {YOUTUBE_CLIPS.map((clip, index) => (
          <div
            key={`${clip.title}-${index}`}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/10 backdrop-blur-sm transition-all duration-300 hover:bg-white dark:hover:bg-zinc-900/40 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-xl hover:!opacity-100 group-hover/list:opacity-60"
          >
            <div className="relative aspect-[9/16] w-full overflow-hidden bg-zinc-950">
              <video
                src={clip.src}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="p-4 space-y-1">
              <h3 className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 transition-colors duration-200 group-hover:text-[#febab9] dark:group-hover:text-[#febab9]">
                {clip.title}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-normal">
                {clip.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
