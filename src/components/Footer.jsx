import React from 'react';
import { ArrowUp, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 py-12 border-t border-slate-200 dark:border-white/10 bg-slate-100/70 dark:bg-[#05070a] transition-colors">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <span className="font-heading font-bold text-slate-900 dark:text-white text-base tracking-wide">
              {personal.name.toUpperCase()}
            </span>
            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block">
              © {new Date().getFullYear()} • Crafted for AI Excellence
            </span>
          </div>
        </div>

        {/* Back to Top Floating Button */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-500/40 transition-all cursor-pointer shadow-md dark:shadow-lg flex items-center gap-2 text-xs font-mono"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};
