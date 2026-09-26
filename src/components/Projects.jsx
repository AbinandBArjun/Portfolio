import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ExternalLink, Wrench } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SpotlightCard } from './react-bits/SpotlightCard';

// Pill switch toggle between Projects and Tools
const Toggle = ({ active, onChange }) => {
  return (
    <div
      role="group"
      aria-label="Switch between projects and tools"
      className="inline-flex items-center p-1 rounded-full bg-slate-200/70 dark:bg-white/[0.08] border border-slate-300/80 dark:border-white/10 backdrop-blur-md gap-1 shadow-inner"
    >
      {['Projects', 'Tools'].map((tab) => {
        const isActive = active === tab;
        return (
          <button
            key={tab}
            id={`toggle-${tab.toLowerCase()}`}
            type="button"
            onClick={() => onChange(tab)}
            className={`relative px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 z-10 cursor-pointer ${
              isActive
                ? 'text-slate-950 font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="active-pill-highlight"
                className="absolute inset-0 rounded-full bg-white dark:bg-white shadow-[0_2px_8px_rgba(0,0,0,0.18)] -z-10"
                transition={{ type: 'spring', stiffness: 450, damping: 32 }}
              />
            )}
            {tab}
          </button>
        );
      })}
    </div>
  );
};

export const Projects = () => {
  const [activeView, setActiveView] = useState('Projects');
  const { projects = [], tools = [] } = portfolioData;

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header with top-right toggle on desktop, centered on mobile */}
        <div className="relative mb-12 sm:mb-14">
          {/* Desktop Toggle (Top-right) */}
          <div className="hidden sm:flex absolute right-0 top-0 items-center">
            <Toggle active={activeView} onChange={setActiveView} />
          </div>

          {/* Centered Title & Description */}
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono mb-3">
              {activeView === 'Projects' ? (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Featured Repositories</span>
                </>
              ) : (
                <>
                  <Wrench className="w-3.5 h-3.5" />
                  <span>Arsenal & Tech Stack</span>
                </>
              )}
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              {activeView === 'Projects' ? (
                <>
                  Selected <span className="text-gradient">Projects</span>
                </>
              ) : (
                <>
                  Tech & Security <span className="text-gradient">Arsenal</span>
                </>
              )}
            </h2>

            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
              {activeView === 'Projects'
                ? 'Explore a collection of my recent GitHub work spanning multimodal AI frameworks, RAG systems, cybersecurity architectures, and modern web applications.'
                : 'A comprehensive breakdown of programming languages, deep learning frameworks, developer platforms, and security tools I leverage across projects.'}
            </p>

            {/* Mobile Toggle (Centered below description) */}
            <div className="flex sm:hidden justify-center mt-6">
              <Toggle active={activeView} onChange={setActiveView} />
            </div>
          </div>
        </div>

        {/* Dynamic View Display (No inner AnimatePresence to avoid router transition deadlock) */}
        {activeView === 'Projects' ? (
          <motion.div
            key="projects-view"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
          >
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="h-full"
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-full block group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-2xl"
                >
                  <SpotlightCard
                    className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#13151b] hover:bg-slate-50 dark:hover:bg-[#181a24] border border-slate-200 dark:border-white/[0.08] hover:border-sky-400/40 dark:hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] cursor-pointer"
                    spotlightColor="rgba(56, 189, 248, 0.12)"
                  >
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        {/* Header: Title + External Link Icon */}
                        <div className="flex items-start justify-between gap-3 mb-3.5">
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-300 transition-colors tracking-tight leading-snug">
                            {project.title}
                          </h3>
                          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-sky-500 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-0.5" />
                        </div>

                        {/* Description */}
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-normal">
                          {project.shortDesc}
                        </p>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 mt-auto pt-2">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3.5 py-1 rounded-full text-xs font-mono bg-slate-100 dark:bg-[#1e222d] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.06] group-hover:border-sky-400/30 dark:group-hover:border-white/10 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </SpotlightCard>
                </a>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="tools-view"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="space-y-6"
          >
            {tools.map((group, gIdx) => (
              <div
                key={gIdx}
                className="p-5 sm:p-6 rounded-2xl bg-white/70 dark:bg-[#0f1117]/80 border border-slate-200/80 dark:border-white/[0.07] backdrop-blur-sm shadow-sm"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-slate-200/60 dark:border-white/[0.06]">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: group.color || '#38bdf8' }}
                    />
                    <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-slate-800 dark:text-slate-200">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {group.items.length} tools
                  </span>
                </div>

                {/* Items Grid */}
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {group.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className="group inline-flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-slate-100/90 dark:bg-[#151722] hover:bg-slate-200/80 dark:hover:bg-[#1b1e2c] border border-slate-200/90 dark:border-white/[0.07] hover:border-slate-300 dark:hover:border-white/20 transition-all duration-200 cursor-default"
                    >
                      {/* Icon Badge */}
                      <div className="w-8 h-8 rounded-lg bg-slate-200/80 dark:bg-white/[0.06] border border-slate-300/60 dark:border-white/[0.08] flex items-center justify-center shrink-0">
                        <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                          {item.icon}
                        </span>
                      </div>

                      {/* Name & Subtitle */}
                      <div className="flex flex-col text-left">
                        <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white leading-tight">
                          {item.name}
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                          {item.subtitle}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};
