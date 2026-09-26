import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Atom,
  Brain,
  Braces,
  Code2,
  Cpu,
  Database,
  Eye,
  Fingerprint,
  Layers3,
  MoveUpRight,
  Network,
  Search,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
  Zap,
  ExternalLink
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SpotlightCard } from './react-bits/SpotlightCard';

const toolCategories = [
  {
    name: 'Programming Languages',
    tools: {
      JavaScript: { Icon: Braces, color: 'text-amber-400 bg-amber-400/10' },
      TypeScript: { Icon: Code2, color: 'text-blue-400 bg-blue-400/10' }
    }
  },
  {
    name: 'Frameworks & Libraries',
    tools: {
      React: { Icon: Atom, color: 'text-cyan-400 bg-cyan-400/10' },
      'Node.js': { Icon: Server, color: 'text-green-400 bg-green-400/10' },
      Express: { Icon: Network, color: 'text-slate-400 bg-slate-400/10' },
      FastAPI: { Icon: Zap, color: 'text-teal-400 bg-teal-400/10' },
      Flutter: { Icon: Smartphone, color: 'text-sky-400 bg-sky-400/10' },
      PyTorch: { Icon: Cpu, color: 'text-orange-400 bg-orange-400/10' },
      LangChain: { Icon: Workflow, color: 'text-emerald-400 bg-emerald-400/10' },
      'Framer Motion': { Icon: MoveUpRight, color: 'text-pink-400 bg-pink-400/10' },
      'Tailwind CSS': { Icon: Layers3, color: 'text-cyan-300 bg-cyan-300/10' }
    }
  },
  {
    name: 'AI & Machine Learning',
    tools: {
      'Multimodal AI': { Icon: Brain, color: 'text-violet-400 bg-violet-400/10' },
      RAG: { Icon: Search, color: 'text-purple-400 bg-purple-400/10' },
      XAI: { Icon: Eye, color: 'text-indigo-400 bg-indigo-400/10' }
    }
  },
  {
    name: 'Data & APIs',
    tools: {
      MongoDB: { Icon: Database, color: 'text-green-400 bg-green-400/10' },
      SQLite: { Icon: Database, color: 'text-blue-400 bg-blue-400/10' },
      'REST API': { Icon: Network, color: 'text-sky-400 bg-sky-400/10' },
      'GitHub API': { Icon: Code2, color: 'text-slate-300 bg-slate-400/10' }
    }
  },
  {
    name: 'Security & Identity',
    tools: {
      WebAuthn: { Icon: Fingerprint, color: 'text-cyan-400 bg-cyan-400/10' },
      Security: { Icon: ShieldCheck, color: 'text-amber-400 bg-amber-400/10' }
    }
  },
  {
    name: 'Developer Tools',
    tools: {
      Vite: { Icon: Zap, color: 'text-violet-400 bg-violet-400/10' }
    }
  }
];

export const Projects = () => {
  const { projects } = portfolioData;
  const [activeView, setActiveView] = useState('projects');
  const tools = projects.reduce((allTools, project) => {
    project.tags.forEach((tag) => {
      if (!allTools.has(tag)) {
        allTools.set(tag, []);
      }

      allTools.get(tag).push(project.title);
    });

    return allTools;
  }, new Map());

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-14 flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{activeView === 'projects' ? 'Featured Repositories' : 'Project Toolkit'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              {activeView === 'projects' ? (
                <>Selected <span className="text-gradient">Projects</span></>
              ) : (
                <>Tools &amp; <span className="text-gradient">Technologies</span></>
              )}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
              {activeView === 'projects'
                ? 'Explore a collection of my recent GitHub work spanning multimodal AI frameworks, RAG systems, cybersecurity architectures, and modern web applications.'
                : 'Explore the technologies behind my projects and see where each one is put to work.'}
            </p>
          </div>

          <div
            role="group"
            aria-label="Choose projects or tools"
            className="inline-flex shrink-0 items-center rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#15171d] p-1 shadow-inner"
          >
            {[
              { id: 'projects', label: 'Projects' },
              { id: 'tools', label: 'Tools' }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                aria-pressed={activeView === tab.id}
                onClick={() => setActiveView(tab.id)}
                className={`min-w-20 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                  activeView === tab.id
                    ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-200 dark:text-slate-900'
                    : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeView === 'projects' ? (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
            >
              {projects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="h-full"
                >
                  <SpotlightCard
                    className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#13151b] hover:bg-slate-50 dark:hover:bg-[#181a24] border border-slate-200 dark:border-white/[0.08] hover:border-sky-400/40 dark:hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
                    spotlightColor="rgba(56, 189, 248, 0.12)"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-full flex flex-col justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-2xl"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-3 mb-3.5">
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-300 transition-colors tracking-tight leading-snug">
                            {project.title}
                          </h3>
                          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-sky-500 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-0.5" />
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-normal">
                          {project.shortDesc}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-auto pt-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3.5 py-1 rounded-full text-xs font-mono bg-slate-100 dark:bg-[#1e222d] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.06] group-hover:border-sky-400/30 dark:group-hover:border-white/10 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </a>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="tools"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {toolCategories.map((category, categoryIdx) => {
                const categoryTools = [...tools.entries()].filter(([tool]) => category.tools[tool]);

                if (categoryTools.length === 0) {
                  return null;
                }

                return (
                  <motion.section
                    key={category.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: categoryIdx * 0.05 }}
                    aria-label={category.name}
                    className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white/70 dark:bg-[#111319]/80 p-5 sm:p-6"
                  >
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <h3 className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-slate-700 dark:text-slate-200">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.7)]" />
                        {category.name}
                      </h3>
                      <span className="shrink-0 font-mono text-xs text-slate-500 dark:text-slate-400">
                        {categoryTools.length} {categoryTools.length === 1 ? 'tool' : 'tools'}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {categoryTools.map(([tool, usedIn], toolIdx) => {
                        const { Icon, color } = category.tools[tool];

                        return (
                          <motion.div
                            key={tool}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: toolIdx * 0.02 }}
                            title={`Used in: ${usedIn.join(', ')}`}
                            className="flex min-w-36 items-center gap-2.5 rounded-xl border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.04] px-2.5 py-2 transition-colors hover:border-sky-400/40 dark:hover:border-sky-400/30"
                          >
                            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200/70 dark:border-white/[0.08] ${color}`}>
                              <Icon className="h-4 w-4" aria-hidden="true" />
                            </span>
                            <span className="min-w-0">
                              <span className="block text-sm font-semibold leading-tight text-slate-800 dark:text-slate-100">
                                {tool}
                              </span>
                              <span className="block text-xs text-slate-500 dark:text-slate-400">
                                {usedIn.length} {usedIn.length === 1 ? 'project' : 'projects'}
                              </span>
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.section>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
