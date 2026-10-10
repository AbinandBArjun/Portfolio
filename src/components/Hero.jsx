import React from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Hero = () => {
  const { personal } = portfolioData;
  const { isDark } = useTheme();

  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-24 pb-16 md:pt-32 md:pb-24 flex items-center overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: isDark ? '#151312' : '#f5f0e8' }}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

          {/* LEFT: Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex justify-center lg:justify-start pt-6 sm:pt-4 lg:pt-0"
          >
            <div
              className="relative w-full max-w-[320px] sm:max-w-[340px] rounded-[36px] p-5 sm:p-6 pt-6 sm:pt-7 pb-7 sm:pb-8 overflow-hidden transition-colors duration-300"
              style={{
                backgroundColor: isDark ? '#ffffff' : '#fffcf6',
                color: '#151312',
                boxShadow: isDark
                  ? '0 20px 50px rgba(0,0,0,0.5)'
                  : '0 20px 50px rgba(100,90,70,0.18)',
              }}
            >
              {/* Decorative arc top-left */}
              <svg
                className="absolute top-3 -left-3 w-32 h-32 pointer-events-none text-[#f46c38] opacity-90"
                viewBox="0 0 120 120"
                fill="none"
              >
                <path
                  d="M 10 110 A 80 80 0 0 1 110 10"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeDasharray="5 5"
                />
              </svg>

              {/* Avatar */}
              <div className="relative mx-auto w-full aspect-[1/1.18] rounded-[26px] overflow-hidden bg-gradient-to-b from-[#f46c38] to-[#d44816] flex items-end justify-center shadow-inner">
                <img
                  src="/favicon.jpg"
                  alt={personal.name}
                  className="w-full h-full object-cover object-center filter grayscale contrast-125 mix-blend-luminosity hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Name */}
              <div className="text-center mt-6">
                <h2 className="text-2xl sm:text-[28px] font-extrabold tracking-tight text-[#151312] [font-family:'Poppins',sans-serif] leading-tight">
                  {personal.name}
                </h2>

                {/* Flame badge */}
                <div className="relative my-4 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#f46c38] text-white flex items-center justify-center shadow-md z-10">
                    <Flame className="w-4 h-4 fill-white text-white" />
                  </div>
                </div>

                <p className="text-xs sm:text-[13px] text-[#6a6b6e] font-medium leading-relaxed px-2 [font-family:'Poppins',sans-serif]">
                  An AI / ML Engineer &amp; Full Stack Developer crafting intelligent systems and modern web applications.
                </p>
              </div>

              {/* Decorative arc bottom-left */}
              <svg
                className="absolute -bottom-4 -left-6 w-32 h-32 pointer-events-none text-[#f46c38] opacity-80"
                viewBox="0 0 120 120"
                fill="none"
              >
                <path
                  d="M 5 95 C 40 80, 80 40, 95 5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeDasharray="5 5"
                />
              </svg>
            </div>
          </motion.div>

          {/* RIGHT: Headline + Description + Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 flex flex-col justify-center text-left"
          >
            <div className="mb-6">
              <h1
                className="text-4xl sm:text-6xl lg:text-[76px] font-black uppercase tracking-tight leading-[0.95] [font-family:'Poppins',sans-serif] transition-colors duration-300"
                style={{ color: isDark ? '#ffffff' : '#2a2318' }}
              >
                AI / ML <br />
                <span
                  className="tracking-tight block mt-1 transition-colors duration-300"
                  style={{ color: isDark ? '#3a3737' : '#8a7e6d' }}
                >
                  ENGINEER
                </span>
              </h1>
            </div>

            <p
              className="text-sm sm:text-base max-w-xl leading-relaxed mb-8 [font-family:'Poppins',sans-serif] transition-colors duration-300"
              style={{ color: isDark ? '#998f8f' : '#5a5040' }}
            >
              Building autonomous AI agents, fine-tuning cutting-edge LLMs, and architecting scalable, end-to-end full stack web applications with production-grade performance.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f46c38] hover:bg-[#e05824] text-white font-semibold text-sm transition-all shadow-[0_4px_20px_rgba(244,108,56,0.35)] hover:scale-[1.02] active:scale-[0.98] [font-family:'Poppins',sans-serif]"
              >
                <span>View Projects</span>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all [font-family:'Poppins',sans-serif]"
                style={{
                  border: isDark ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(100,90,70,0.3)',
                  color: isDark ? '#ffffff' : '#2a2318',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.4)' : 'rgba(92,107,60,0.5)';
                  e.currentTarget.style.backgroundColor = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(92,107,60,0.08)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.2)' : 'rgba(100,90,70,0.3)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <span>Get In Touch</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
