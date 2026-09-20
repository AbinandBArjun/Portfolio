import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Track Record & Industry Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Professional <span className="text-gradient-emerald">Journey</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            From cognitive research to leading enterprise AI production systems.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8 border-l border-white/10 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Glow Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-emerald-400 group-hover:bg-emerald-400 transition-colors shadow-[0_0_12px_rgba(16,185,129,0.5)]" />

              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {exp.role} <span className="text-slate-400 font-normal">@ {exp.company}</span>
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{exp.location}</span>
                </div>

                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.bulletPoints.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
