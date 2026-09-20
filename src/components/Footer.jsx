import React from 'react';
import { ArrowUp, Cpu, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 py-12 border-t border-white/10 bg-[#05070a]">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <span className="font-heading font-bold text-white text-base tracking-wide">
              {personal.name.toUpperCase()}
            </span>
            <span className="text-[10px] font-mono text-slate-400 block">
              © {new Date().getFullYear()} • Crafted for AI Excellence
            </span>
          </div>
        </div>

        {/* Back to Top Floating Button */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-all cursor-pointer shadow-lg flex items-center gap-2 text-xs font-mono"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};
