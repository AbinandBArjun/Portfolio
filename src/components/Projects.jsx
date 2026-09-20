import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ExternalLink, ArrowRight, X, CheckCircle2, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { SpotlightCard } from './react-bits/SpotlightCard';

export const Projects = () => {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'LLMs & RAG', 'AI Agents', 'Computer Vision', 'MLOps & Fine-Tuning'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const handleLaunchDemo = (url) => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    window.open(url, '_blank');
  };

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured AI Implementations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Selected <span className="text-gradient">AI Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Explore production-ready RAG engines, multi-agent frameworks, computer vision systems, and LoRA fine-tuning benchmarks.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                  : 'bg-slate-900/60 text-slate-400 border border-white/5 hover:text-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <SpotlightCard
                  onClick={() => setActiveModalProject(project)}
                  className="h-full flex flex-col justify-between group cursor-pointer"
                  spotlightColor="rgba(56, 189, 248, 0.15)"
                >
                  <div>
                    {/* Project Preview Image */}
                    <div className="relative aspect-video rounded-t-xl overflow-hidden mb-5 bg-slate-900">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-80" />
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono bg-slate-900/90 text-sky-400 border border-sky-500/30 backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>

                    <div className="p-6 pt-0">
                      <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors mb-2 flex items-center justify-between">
                        <span>{project.title}</span>
                        <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-1 transition-all" />
                      </h3>

                      <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                        {project.shortDesc}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 flex items-center gap-3 text-xs font-medium text-sky-400">
                    <span>Click to view technical breakdown & metrics</span>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Deep Dive Modal Overlay */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl glass-panel p-6 sm:p-8 bg-[#0d111a] border border-sky-500/30 shadow-2xl rounded-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Close Modal Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <div className="mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-sky-500/10 text-sky-400 border border-sky-500/30">
                  {activeModalProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-2">
                  {activeModalProject.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base">
                  {activeModalProject.shortDesc}
                </p>
              </div>

              {/* Modal Image */}
              <div className="rounded-xl overflow-hidden mb-6 border border-white/10">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-auto object-cover max-h-[350px]"
                />
              </div>

              {/* Key Highlights */}
              <div className="mb-6">
                <h4 className="text-sm font-mono font-semibold text-sky-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Key Technical Accomplishments</span>
                </h4>
                <ul className="space-y-2">
                  {activeModalProject.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 text-slate-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action CTA Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleLaunchDemo(activeModalProject.demoUrl)}
                    className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(56,189,248,0.4)] cursor-pointer"
                  >
                    <span>Live Interactive Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>

                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm flex items-center gap-2 border border-white/10 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
