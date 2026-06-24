"use client";

import { ArrowUpRight } from "lucide-react";

export function EsoSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-1">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
          <a
            href="https://www.eso.org"
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex items-center gap-1.5 text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50 hover:text-[#febab9] dark:hover:text-[#febab9] transition-colors duration-200"
          >
            European Southern Observatory
            <ArrowUpRight className="h-6 w-6 text-zinc-400 group-hover/link:text-[#febab9] dark:group-hover/link:text-[#febab9] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-200" />
          </a>
          <span className="text-sm font-medium text-zinc-400 dark:text-zinc-500">
            2020
          </span>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Instrument logs analysis for the Maintenance, Support, and Engineering
          (MSE) department.
        </p>
      </div>

      <div className="group relative grid grid-cols-1 sm:grid-cols-2 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/10 backdrop-blur-sm transition-all duration-300 hover:bg-white dark:hover:bg-zinc-900/40 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-xl">
        {/* Expanded Architecture Diagram Box */}
        <div className="relative min-h-[240px] sm:min-h-0 bg-zinc-950 border-b sm:border-b-0 sm:border-r border-zinc-200/40 dark:border-zinc-800/40 p-8 font-mono text-zinc-500 flex flex-col items-center justify-center gap-6 select-none">
          <div className="text-center text-zinc-600 border-b border-zinc-900/60 pb-2 w-full uppercase tracking-wider text-[10px]">
            Telemetry & Analytics Pipeline
          </div>

          {/* Absolutely Centered Arrow Connectors Vector Layer */}
          <div className="relative flex items-center justify-between w-full h-20 px-1">
            {/* Vector Connector Line 1 */}
            <div className="absolute top-1/2 left-[20%] right-[60%] h-px bg-zinc-800 -translate-y-1/2 z-0">
              <span className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-600 text-[10px]">
                →
              </span>
            </div>

            {/* Vector Connector Line 2 */}
            <div className="absolute top-1/2 left-[45%] right-[35%] h-px bg-zinc-800 -translate-y-1/2 z-0">
              <span className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-600 text-[10px]">
                →
              </span>
            </div>

            {/* Vector Connector Line 3 */}
            <div className="absolute top-1/2 left-[70%] right-[10%] h-px bg-zinc-800 -translate-y-1/2 z-0">
              <span className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-600 text-[10px]">
                →
              </span>
            </div>

            {/* Step 1: Instruments */}
            <div className="relative z-10 flex flex-col items-center p-2 rounded-xl border border-zinc-800 bg-zinc-900/90 text-center w-[68px] h-[68px] justify-center transition-transform duration-300 group-hover:scale-105">
              <span className="text-[14px] leading-none mb-1">🔭</span>
              <span className="text-zinc-200 font-semibold text-[9px] tracking-tight leading-none">
                Instruments
              </span>
              <span className="text-[7px] text-zinc-600 mt-1 leading-none">
                Raw Log
              </span>
            </div>

            {/* Step 2: Elasticsearch */}
            <div className="relative z-10 flex flex-col items-center p-2 rounded-xl border border-zinc-800 bg-zinc-900/90 text-center w-[68px] h-[68px] justify-center transition-transform duration-300 group-hover:scale-105">
              <span className="text-[14px] leading-none mb-1">🗄️</span>
              <span className="text-zinc-200 font-semibold text-[9px] tracking-tight leading-none">
                Elastic
              </span>
              <span className="text-[7px] text-zinc-600 mt-1 leading-none">
                Database
              </span>
            </div>

            {/* Step 3: Jupyter Notebooks */}
            <div className="relative z-10 flex flex-col items-center p-2 rounded-xl border border-zinc-800 bg-zinc-900/90 text-center w-[68px] h-[68px] justify-center transition-transform duration-300 group-hover:scale-105">
              <span className="text-[14px] leading-none mb-1">🪐</span>
              <span className="text-blue-400 font-semibold text-[9px] tracking-tight leading-none">
                Jupyter
              </span>
              <span className="text-[7px] text-zinc-600 mt-1 leading-none">
                Data Core
              </span>
            </div>

            {/* Step 4: Voilà UI */}
            <div className="relative z-10 flex flex-col items-center p-2 rounded-xl border border-zinc-800 bg-zinc-900/90 text-center w-[68px] h-[68px] justify-center transition-transform duration-300 group-hover:scale-105">
              <span className="text-[14px] leading-none mb-1">🚀</span>
              <span className="text-[#febab9] font-semibold text-[9px] tracking-tight leading-none">
                Voilà UI
              </span>
              <span className="text-[7px] text-zinc-600 mt-1 leading-none">
                Web Server
              </span>
            </div>
          </div>
        </div>

        {/* Text Description Box */}
        <div className="p-8 flex flex-col justify-center">
          <h3 className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 transition-colors duration-300 group-hover:text-[#febab9] dark:group-hover:text-[#febab9] mb-1">
            Instrument Monitoring & Logs Dashboard
          </h3>
          <p className="text-sm sm:text-sm text-zinc-500 dark:text-zinc-400 leading-normal">
            Developed a centralized Logs Dashboard for the Maintenance, Support,
            and Engineering (MSE) department to track errors in telescopes and
            precision instruments. Aggregated system telemetry into an indexed
            Elasticsearch log database, writing custom Python Jupyter notebooks
            to parse telemetry data logic, and used Voilà to serve those outputs
            as real-time, interactive observational dashboards for observatory
            engineers.
          </p>
        </div>
      </div>
    </section>
  );
}
