import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const BentoAbout = () => {
  const { personal, techStack } = portfolioData;

  return (
    <section id="about" className="about-intro-section py-16 sm:py-24 relative z-10">
      <div className="container">
        <div className="glass-panel rounded-3xl overflow-hidden border border-white/10">
          <div className="about-intro-layout">
            <div className="p-6 sm:p-10 lg:p-12 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-6">
                <span className="pulse-emerald" />
                <span>ABOUT_ME.SYS // INTRODUCTION</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
                I turn AI ideas into <span className="text-gradient">useful systems.</span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                I'm {personal.name}, an AI engineer working across deep learning, large language models,
                generative AI, and distributed training. I enjoy taking ideas beyond the research stage
                and shaping them into scalable, low-latency applications people can rely on.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sky-400" />
                  {personal.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="pulse-emerald" />
                  {personal.status}
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-sky-500/10 border border-sky-500/30 px-5 py-3 text-sm font-semibold text-sky-400 transition-colors hover:bg-sky-500/20"
                >
                  Explore my work
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-sky-500/30 hover:text-sky-400"
                >
                  Get in touch
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <aside className="about-intro-focus bg-slate-950/40 p-6 sm:p-10 lg:p-8">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs font-mono tracking-widest text-slate-500">CURRENT_FOCUS.SYS</p>
                  <h3 className="text-xl font-bold text-white mt-1">What I work on</h3>
                </div>
                <span className="text-xs font-mono text-emerald-400 border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                  AI ENGINEERING
                </span>
              </div>

              <div className="space-y-3">
                {techStack.map((group, index) => (
                  <div key={group.category} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-mono text-sky-400 pt-0.5">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="min-w-0">
                        <h4 className="text-sm font-semibold text-slate-200">{group.category}</h4>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {group.skills.slice(0, 3).map((skill) => (
                            <span
                              key={skill}
                              className="rounded-md bg-slate-800/80 px-2 py-1 text-[11px] font-mono text-slate-400"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};
