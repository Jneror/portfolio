"use client";

import {
  Server,
  Database,
  User,
  GraduationCap,
  Users,
  ArrowUpRight,
} from "lucide-react";

export function TuringoSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-1">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
          <a
            href="https://turingo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex items-center gap-1.5 text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50 hover:text-[#febab9] dark:hover:text-[#febab9] transition-colors duration-200"
          >
            Turingo
            <ArrowUpRight className="h-6 w-6 text-zinc-400 group-hover/link:text-[#febab9] dark:group-hover/link:text-[#febab9] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-200" />
          </a>
          <span className="text-sm font-medium text-zinc-400 dark:text-zinc-500">
            2020 - 2021
          </span>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Full-stack development including data model design, API implementation
          and frontend work.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 group/list">
        {/* Turingo: Full-Stack Dev */}
        <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/10 backdrop-blur-sm transition-all duration-300 hover:bg-white dark:hover:bg-zinc-900/40 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-xl hover:!opacity-100 group-hover/list:opacity-60">
          <div className="relative h-48 w-full bg-zinc-950 flex flex-col items-center justify-center gap-4 border-b border-zinc-200/40 dark:border-zinc-800/40 p-4 select-none">
            <div className="flex items-center gap-3 w-full max-w-xs justify-between text-zinc-400">
              <div className="flex flex-col items-center p-2 rounded-lg border border-zinc-800 bg-zinc-900/50 text-xs w-20">
                <span className="text-emerald-400 font-mono text-[10px] mb-1">
                  Vue.js
                </span>
                Client
              </div>
              <div className="h-px bg-zinc-800 flex-1 relative after:content-['→'] after:absolute after:right-0 after:-top-2" />
              <div className="flex flex-col items-center p-2 rounded-lg border border-zinc-800 bg-zinc-900/50 text-xs w-20 text-center">
                <Server className="h-4 w-4 mb-1 text-blue-400" />
                Node.js API
              </div>
              <div className="h-px bg-zinc-800 flex-1 relative after:content-['→'] after:absolute after:right-0 after:-top-2" />
              <div className="flex flex-col items-center p-2 rounded-lg border border-zinc-800 bg-zinc-900/50 text-xs w-20 text-center">
                <Database className="h-4 w-4 mb-1 text-purple-400" />
                MySQL
              </div>
            </div>
          </div>
          <div className="p-4 space-y-1">
            <h3 className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 transition-colors duration-300 group-hover:text-[#febab9] dark:group-hover:text-[#febab9]">
              Full-Stack Development
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
              Collaborated on the design and implementation of an e-learning
              platform using Vue.js, Node.js and MySQL. Developed core features
              for course enrollment, video streaming, and community interaction.
            </p>
          </div>
        </div>

        {/* Turingo: Product Evolution */}
        <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/10 backdrop-blur-sm transition-all duration-300 hover:bg-white dark:hover:bg-zinc-900/40 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-xl hover:!opacity-100 group-hover/list:opacity-60">
          <div className="relative h-48 w-full bg-zinc-950 flex border-b border-zinc-200/40 dark:border-zinc-800/40 select-none overflow-hidden p-3 gap-3">
            <div className="w-12 h-full border border-zinc-800/80 bg-zinc-900/30 rounded-lg flex flex-col items-center py-3 gap-3 text-zinc-600">
              <GraduationCap className="h-4 w-4 text-zinc-500" />
              <Users className="h-4 w-4 text-zinc-700" />
              <div className="w-4 h-1 bg-zinc-800 rounded-full" />
              <div className="w-4 h-1 bg-zinc-800 rounded-full" />
            </div>
            <div className="flex-1 h-full flex flex-col gap-2.5 pt-1">
              <div className="flex justify-between items-center w-full">
                <div className="h-2 w-24 bg-zinc-800 rounded-full" />
                <div className="h-5 w-5 rounded-full bg-zinc-800 flex items-center justify-center">
                  <User className="h-3 w-3 text-zinc-600" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 flex-1">
                <div className="border border-zinc-800/60 bg-zinc-900/20 rounded-lg p-2 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="h-1 w-full bg-zinc-800 rounded-full" />
                    <div className="h-1 w-3/4 bg-zinc-800 rounded-full" />
                  </div>
                  <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-emerald-500/60" />
                  </div>
                </div>
                <div className="border border-zinc-800/60 bg-zinc-900/20 rounded-lg p-2 flex flex-col gap-1.5">
                  <div className="h-1 w-full bg-zinc-800 rounded-full" />
                  <div className="grid grid-cols-3 gap-1">
                    <div className="h-3 rounded bg-zinc-900 flex items-center justify-center text-[8px] text-zinc-600">
                      ■
                    </div>
                    <div className="h-3 rounded bg-zinc-900 flex items-center justify-center text-[8px] text-zinc-600">
                      ■
                    </div>
                    <div className="h-3 rounded bg-zinc-900 flex items-center justify-center text-[8px] text-zinc-600">
                      ■
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 space-y-1">
            <h3 className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 transition-colors duration-300 group-hover:text-[#febab9] dark:group-hover:text-[#febab9]">
              Product Evolution
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
              Successfully pivoted the platform toward a community-driven
              networking model; the site remains active today as a specialized
              tool for professional community building and successful
              networking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
