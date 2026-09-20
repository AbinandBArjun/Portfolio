import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, ArrowRight, Download, Terminal, Zap, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ParticleCanvas } from './react-bits/ParticleCanvas';
import { TextScramble } from './react-bits/TextScramble';
import { ShinyButton } from './react-bits/ShinyButton';

export const Hero = () => {
  const { personal, stats } = portfolioData;

  const quickBadges = [
    'LLMs & Fine-Tuning',
    'RAG Systems',
    'Autonomous Agents',
    'Computer Vision',
    'PyTorch & CUDA'
  ];

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Particle Canvas Background */}
      <ParticleCanvas particleCount={70} />

      {/* Radiant Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10 text-center max-w-4xl mx-auto">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-6 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
        >
          <span className="pulse-emerald" />
          <span>{personal.status}</span>
        </motion.div>

        {/* Hero Title with TextScramble */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
        >
          Hi, I'm <span className="text-gradient">{personal.name}</span>
          <br />
          <span className="text-slate-300 text-2xl sm:text-4xl md:text-5xl font-semibold mt-2 block">
            <TextScramble text={personal.title} scrambleDuration={1200} />
          </span>
        </motion.h1>

        {/* Hero Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {personal.tagline}
        </motion.p>

        {/* CTA Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <ShinyButton
            variant="primary"
            icon={Sparkles}
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore AI Demos
          </ShinyButton>

          <ShinyButton
            variant="secondary"
            icon={Terminal}
            onClick={() => {
              document.getElementById('playground')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            AI CLI Sandbox
          </ShinyButton>

          <ShinyButton
            variant="emerald"
            icon={Download}
            onClick={() => {
              window.open(personal.resumeUrl, '_blank');
            }}
          >
            Resume
          </ShinyButton>
        </motion.div>

        {/* Quick Tech Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-16"
        >
          {quickBadges.map((badge, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full text-xs font-mono bg-slate-900/80 border border-white/10 text-slate-300 backdrop-blur-md hover:border-sky-400/50 hover:text-sky-300 transition-all cursor-default"
            >
              #{badge}
            </span>
          ))}
        </motion.div>

        {/* Highlights Stat Counter Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-panel p-5 rounded-2xl text-center border border-white/5 hover:border-sky-500/30 transition-all group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white group-hover:text-sky-400 transition-colors mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
