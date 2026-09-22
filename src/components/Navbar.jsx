import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, ArrowUpRight, Mail, Copy, Check, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const navLinks = [
  { name: 'Home', href: '#home', number: '01' },
  { name: 'About', href: '#about', number: '02' },
  { name: 'Projects', href: '#projects', number: '03' },
  { name: 'Experience', href: '#experience', number: '04' },
  { name: 'Contact', href: '#contact', number: '05' },
];

const socialLinks = [
  { name: 'GitHub', href: portfolioData.personal.github || 'https://github.com/AbinandBArjun' },
  { name: 'LinkedIn', href: portfolioData.personal.linkedin || 'https://linkedin.com' },
  { name: 'X / Twitter', href: portfolioData.personal.twitter || 'https://x.com' },
];

const overlayVariants = {
  closed: {
    clipPath: 'circle(0% at calc(100% - 3.5rem) 3.5rem)',
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
  },
  open: {
    clipPath: 'circle(150% at calc(100% - 3.5rem) 3.5rem)',
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
  },
};

const linkVariants = {
  closed: { opacity: 0, y: 60 },
  open: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const Navbar = ({ onReplayLoader }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  };

  const handleCopyEmail = (e) => {
    e.stopPropagation();
    if (portfolioData.personal.email) {
      navigator.clipboard.writeText(portfolioData.personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <>
      {/* ── Top Bar ── */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 md:px-12 py-5"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-3 group z-[61]"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-purple-600 p-[1px] shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-[#07090e] rounded-[11px] flex items-center justify-center">
              <Cpu className="w-4 h-4 text-sky-400 group-hover:rotate-180 transition-transform duration-700" />
            </div>
          </div>
          <div>
            <span className="font-heading font-bold text-base tracking-wider text-white flex items-center gap-1">
              ABINAND<span className="text-sky-400">.AI</span>
            </span>
            <span className="text-[9px] font-mono text-slate-400 block -mt-0.5">
              AI ENGINEER
            </span>
          </div>
        </a>

        {/* Right Header Actions: Contact CTA + Menu Toggle */}
        <div className="flex items-center gap-3 sm:gap-4 z-[61]">
          {/* Quick Contact Button */}
          <a
            href="#contact"
            onClick={() => {
              if (menuOpen) setMenuOpen(false);
            }}
            className="group px-3.5 py-1.5 text-xs font-mono rounded-full border border-sky-500/30 bg-sky-500/10 hover:bg-sky-500/20 hover:border-sky-400/50 text-sky-300 flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(56,189,248,0.15)]"
          >
            <span className="pulse-emerald" />
            <span className="tracking-wide">Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Menu Toggle Button */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="relative flex items-center gap-2.5 cursor-pointer group py-1.5 px-2 rounded-lg bg-slate-900/40 hover:bg-slate-800/60 border border-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-slate-400 group-hover:text-white transition-colors duration-200 select-none">
              {menuOpen ? 'Close' : 'Menu'}
            </span>
            <div className="flex flex-col justify-center items-end gap-[5px]" style={{ width: '26px', height: '24px' }}>
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                className="block origin-center"
                style={{ height: '1.5px', width: '22px', background: menuOpen ? 'white' : 'rgba(148,163,184,0.8)' }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="block origin-right"
                style={{ height: '1.5px', width: '15px', background: 'rgba(148,163,184,0.8)' }}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                className="block origin-center"
                style={{ height: '1.5px', width: '22px', background: menuOpen ? 'white' : 'rgba(148,163,184,0.8)' }}
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* ── Fullscreen Overlay Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="fullscreen-menu"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[55] flex flex-col overflow-hidden"
            style={{ background: '#05070c', willChange: 'clip-path' }}
          >
            {/* Subtle grid texture */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

            {/* Top accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeInOut' }}
              className="absolute top-0 left-0 right-0 origin-left"
              style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(56,189,248,0.4), transparent)' }}
            />

            {/* Nav & Contact Main Area */}
            <div className="flex-1 flex flex-col lg:flex-row justify-between items-start lg:items-center px-8 md:px-16 lg:px-24 pt-24 pb-4 overflow-y-auto gap-8 lg:gap-16">
              {/* Left: Nav Links */}
              <nav className="w-full lg:w-7/12">
                <ul>
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.name}
                      custom={i}
                      variants={linkVariants}
                      initial="closed"
                      animate="open"
                      exit={{ opacity: 0, y: -30, transition: { duration: 0.15, delay: i * 0.02 } }}
                      className="border-b"
                      style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                        className="flex items-center justify-between py-3.5 md:py-4 lg:py-5 group"
                      >
                        <div className="flex items-baseline gap-4 md:gap-6">
                          <motion.span
                            animate={{ color: hoveredIndex === i ? '#38bdf8' : 'rgba(255,255,255,0.2)' }}
                            className="font-mono text-xs tracking-widest"
                          >
                            {link.number}
                          </motion.span>
                          <motion.span
                            animate={{
                              WebkitTextStroke: hoveredIndex === i ? '1px rgba(255,255,255,0.85)' : '0px transparent',
                              color: hoveredIndex === i ? 'transparent' : 'white',
                              letterSpacing: hoveredIndex === i ? '0.04em' : '-0.02em',
                            }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            className="font-heading font-bold leading-none"
                            style={{ fontSize: 'clamp(2rem, 5.5vw, 5rem)' }}
                          >
                            {link.name}
                          </motion.span>
                        </div>

                        <motion.span
                          animate={{ x: hoveredIndex === i ? 0 : 16, opacity: hoveredIndex === i ? 1 : 0 }}
                          transition={{ duration: 0.22, ease: 'easeOut' }}
                          className="text-sky-400 font-thin hidden sm:block"
                          style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)' }}
                        >
                          ↗
                        </motion.span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Right: Dedicated Contact Panel */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5, ease: 'easeOut' }}
                className="w-full lg:w-5/12 flex flex-col gap-6 lg:pl-12 lg:border-l border-white/[0.08] my-auto"
              >
                <div>
                  <span className="text-[10px] font-mono text-sky-400 uppercase tracking-[0.25em] block mb-2">
                    // Contact & Inquiries
                  </span>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-white tracking-tight">
                    Let's Build Something Intelligent
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 max-w-sm leading-relaxed">
                    Have a project in mind, need machine learning consulting, or want to discuss AI architecture?
                  </p>
                </div>

                {/* Email Box with One-Click Copy */}
                <div className="p-4 rounded-xl bg-slate-900/50 border border-white/10 flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                      <Mail className="w-3 h-3 text-sky-400" /> Direct Email
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      className="text-[10px] font-mono text-sky-400 hover:text-sky-300 flex items-center gap-1 cursor-pointer transition-colors"
                      title="Copy email to clipboard"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="text-sm md:text-base font-mono text-slate-200 hover:text-sky-300 break-all transition-colors"
                  >
                    {portfolioData.personal.email}
                  </a>
                </div>

                {/* Location & Quick Action */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span className="font-mono text-[11px]">{portfolioData.personal.location}</span>
                  </div>
                  <button
                    onClick={() => handleNavClick('#contact')}
                    className="group px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-purple-600 text-white font-medium text-xs flex items-center justify-center gap-2 hover:opacity-95 transition-opacity cursor-pointer self-start sm:self-auto"
                  >
                    <span>Send Message</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Footer bar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.4, ease: 'easeOut' }}
              className="px-8 md:px-16 lg:px-24 pb-8 pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="flex items-center gap-6 md:gap-8">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-slate-500 hover:text-sky-400 tracking-widest uppercase transition-colors duration-200"
                    style={{ fontSize: '10px' }}
                  >
                    {s.name}
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-4">
                {onReplayLoader && (
                  <button
                    onClick={() => { setMenuOpen(false); setTimeout(onReplayLoader, 350); }}
                    className="font-mono text-slate-600 hover:text-sky-400 tracking-widest uppercase transition-colors duration-200 cursor-pointer"
                    style={{ fontSize: '10px' }}
                  >
                    [ Replay Loader ]
                  </button>
                )}
                <div className="flex items-center gap-2">
                  <span className="pulse-emerald" />
                  <span className="font-mono text-slate-500 tracking-widest uppercase" style={{ fontSize: '10px' }}>
                    Available for Work
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


