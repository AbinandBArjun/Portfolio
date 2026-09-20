import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Brain, Cpu, Database, Server, Layers, Award, Terminal, Activity } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SpotlightCard } from './react-bits/SpotlightCard';

export const BentoAbout = () => {
  const { personal, techStack } = portfolioData;

  // Real-time UTC+5:30 clock
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulated GPU Load & Token Throughput Streamer
  const [gpuLoad, setGpuLoad] = useState(84);
  const [tokensPerSec, setTokensPerSec] = useState(1240);

  useEffect(() => {
    const interval = setInterval(() => {
      setGpuLoad(Math.floor(75 + Math.random() * 20));
      setTokensPerSec(Math.floor(1180 + Math.random() * 150));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono mb-3">
            <Brain className="w-3.5 h-3.5" />
            <span>AI Architecture & Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Engineering Next-Gen <span className="text-gradient">Intelligence</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Building reliable neural pipelines, fine-tuning foundation models, and deploying low-latency AI backends.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Card 1: Bio & Philosophy (2 Cols wide on desktop) */}
          <SpotlightCard className="md:col-span-2 p-8 flex flex-col justify-between" spotlightColor="rgba(168, 85, 247, 0.15)">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Background & Specialization</h3>
                  <p className="text-xs font-mono text-purple-400">LLM FINE-TUNING | RAG PIPELINES | CUDA</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-6">
                {personal.bio}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Primary Focus</div>
                  <div className="text-sm font-semibold text-white">Generative AI & LLMs</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Retrieval Architecture</div>
                  <div className="text-sm font-semibold text-white">Hybrid Vector RAG</div>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Bento Card 2: Live Clock & Location Widget */}
          <SpotlightCard className="p-6 flex flex-col justify-between" spotlightColor="rgba(56, 189, 248, 0.15)">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-white/5">
                  TIMEZONE
                </span>
              </div>
              <h4 className="text-base font-semibold text-white mb-1">Based in {personal.location.split(' ')[0]}</h4>
              <p className="text-xs text-slate-400 font-mono">{personal.location}</p>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-slate-900/80 border border-white/10 text-center">
              <div className="flex items-center justify-center gap-2 text-sky-400 mb-1">
                <Clock className="w-4 h-4 animate-spin" style={{ animationDuration: '10s' }} />
                <span className="text-xs font-mono">LOCAL TIME</span>
              </div>
              <div className="text-2xl font-bold font-mono text-white tracking-widest">{time || '15:30:00 PM'}</div>
            </div>
          </SpotlightCard>

          {/* Bento Card 3: Live Inference Telemetry Simulation */}
          <SpotlightCard className="p-6" spotlightColor="rgba(16, 185, 129, 0.15)">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                <h4 className="text-sm font-semibold text-white">Inference Cluster Monitor</h4>
              </div>
              <span className="pulse-emerald" />
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-slate-400">GPU VRAM Load</span>
                  <span className="text-emerald-400 font-semibold">{gpuLoad}% (A100 SXM)</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full"
                    animate={{ width: `${gpuLoad}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-slate-400">Token Throughput</span>
                  <span className="text-sky-400 font-semibold">{tokensPerSec} tok/s</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-sky-500 to-purple-500 rounded-full"
                    animate={{ width: `${(tokensPerSec / 1500) * 100}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/90 border border-white/5 font-mono text-[11px] text-slate-400 space-y-1">
                <div className="text-emerald-400">$ vllm serve llama-3-70b-instruct --tensor-parallel 4</div>
                <div className="text-slate-500">[INFO] KV-cache allocation: 98.4% success</div>
              </div>
            </div>
          </SpotlightCard>

          {/* Bento Card 4: Full Stack Tech Matrix (2 Cols wide on desktop) */}
          <SpotlightCard className="md:col-span-2 p-6" spotlightColor="rgba(56, 189, 248, 0.15)">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">AI Engineering Tooling</h4>
                <p className="text-xs font-mono text-slate-400">FRAMEWORKS & DEPLOYMENT STACK</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {techStack.map((group, idx) => (
                <div key={idx} className="space-y-2">
                  <h5 className="text-xs font-mono font-semibold text-sky-400 tracking-wider uppercase">
                    {group.category}
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900/90 border border-white/10 text-slate-200 hover:border-sky-500/40 hover:text-sky-300 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};
