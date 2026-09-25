import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SpotlightCard } from './react-bits/SpotlightCard';

export const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Repositories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Selected <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            Explore a collection of my recent GitHub work spanning multimodal AI frameworks, RAG systems, cybersecurity architectures, and modern web applications.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
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
        </div>
      </div>
    </section>
  );
};
