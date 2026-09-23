import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Cpu, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const navLinks = [
  { name: 'Home',       to: '/',           number: '01' },
  { name: 'About',      to: '/about',      number: '02' },
  { name: 'Projects',   to: '/projects',   number: '03' },
  { name: 'Experience', to: '/experience', number: '04' },
  { name: 'Contact',    to: '/contact',    number: '05' },
];

const socialLinks = [
  { name: 'GitHub',       href: portfolioData.personal.github   || 'https://github.com/AbinandBArjun' },
  { name: 'LinkedIn',     href: portfolioData.personal.linkedin  || 'https://linkedin.com' },
  { name: 'X / Twitter',  href: portfolioData.personal.twitter  || 'https://x.com' },
];

const drawerVariants = {
  closed: {
    x: '100%',
    transition: { duration: 0.35, ease: [0.32, 0.72, 0, 1] },
  },
  open: {
    x: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

const linkVariants = {
  closed: { opacity: 0, x: 25 },
  open: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.12 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const Navbar = ({ onReplayLoader }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const menuRef = useRef(null);
  const toggleBtnRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Click outside listener to close the side menu
  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!menuOpen) return;
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [menuOpen]);

  const handleNavClick = (to) => {
    setMenuOpen(false);
    navigate(to);
  };

  return (
    <>
      {/* Top Bar */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 md:px-12 py-5 pointer-events-none"
      >
        <Link to="/" className="flex items-center gap-3 group z-[61] pointer-events-auto">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-purple-600 p-[1px] shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-[#07090e] rounded-[11px] flex items-center justify-center">
              <Cpu className="w-4 h-4 text-sky-400 group-hover:rotate-180 transition-transform duration-700" />
            </div>
          </div>
          <div>
            <span className="font-heading font-bold text-base tracking-wider text-white flex items-center gap-1">
              ABINAND<span className="text-sky-400">.AI</span>
            </span>
            <span className="text-[9px] font-mono text-slate-400 block -mt-0.5">AI ENGINEER</span>
          </div>
        </Link>

        <button
          ref={toggleBtnRef}
          onClick={() => setMenuOpen((v) => !v)}
          className="relative z-[61] pointer-events-auto flex items-center gap-2.5 cursor-pointer group py-1.5 px-3 rounded-xl bg-slate-900/60 backdrop-blur-md border border-white/10 hover:border-sky-500/30 hover:bg-slate-800/80 transition-all shadow-lg"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-slate-300 group-hover:text-white transition-colors duration-200 select-none">
            {menuOpen ? 'Close' : 'Menu'}
          </span>
          <div className="flex flex-col justify-center items-end gap-[5px]" style={{ width: '22px', height: '20px' }}>
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
              className="block origin-center"
              style={{ height: '1.5px', width: '20px', background: menuOpen ? '#38bdf8' : 'rgba(255,255,255,0.9)' }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block origin-right"
              style={{ height: '1.5px', width: '14px', background: 'rgba(255,255,255,0.9)' }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
              className="block origin-center"
              style={{ height: '1.5px', width: '20px', background: menuOpen ? '#38bdf8' : 'rgba(255,255,255,0.9)' }}
            />
          </div>
        </button>
      </motion.header>

      {/* Side Menu Drawer & Backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop: translucent dimming of the page, clicking closes the side menu */}
            <motion.div
              key="menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[54] bg-black/45 backdrop-blur-[2px] cursor-pointer"
              aria-label="Close menu by clicking outside"
            />

            {/* Side Menu Drawer */}
            <motion.aside
              key="side-menu-drawer"
              ref={menuRef}
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 z-[55] w-full sm:w-[420px] md:w-[460px] max-w-[90vw] h-full flex flex-col justify-between overflow-y-auto bg-[#07090e]/95 backdrop-blur-2xl border-l border-white/10 shadow-[-20px_0_50px_rgba(0,0,0,0.85)]"
            >
              {/* Subtle top ambient glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Drawer Header */}
              <div className="px-8 pt-8 pb-4 flex items-center justify-between border-b border-white/[0.06] relative z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                  <span className="font-mono text-[10px] tracking-[0.25em] text-slate-400 uppercase">
                    Navigation
                  </span>
                </div>
                <span className="font-mono text-[10px] text-slate-500">
                  {navLinks.find((l) => l.to === location.pathname)?.name || 'Exploring'}
                </span>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 flex flex-col justify-center px-8 py-6 relative z-10">
                <ul className="space-y-1">
                  {navLinks.map((link, i) => {
                    const isActive = location.pathname === link.to;
                    const isHovered = hoveredIndex === i;

                    return (
                      <motion.li
                        key={link.name}
                        custom={i}
                        variants={linkVariants}
                        initial="closed"
                        animate="open"
                        exit={{ opacity: 0, x: 20, transition: { duration: 0.15, delay: i * 0.02 } }}
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <button
                          onClick={() => handleNavClick(link.to)}
                          className={`w-full group flex items-center justify-between py-3.5 px-4 rounded-xl text-left cursor-pointer transition-all duration-200 ${
                            isActive
                              ? 'bg-sky-500/10 border border-sky-500/20 shadow-[0_0_20px_rgba(56,189,248,0.08)]'
                              : 'hover:bg-white/[0.04] border border-transparent'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <span
                              className={`font-mono text-xs transition-colors duration-200 ${
                                isActive ? 'text-sky-400' : isHovered ? 'text-sky-400' : 'text-slate-500'
                              }`}
                            >
                              {link.number}
                            </span>
                            <span
                              className={`font-heading text-2xl sm:text-3xl font-bold tracking-tight transition-all duration-200 ${
                                isActive
                                  ? 'text-sky-400 translate-x-1'
                                  : isHovered
                                  ? 'text-white translate-x-1'
                                  : 'text-slate-300'
                              }`}
                            >
                              {link.name}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            {isActive && (
                              <span className="font-mono text-[9px] uppercase px-2 py-0.5 rounded-full bg-sky-400/15 text-sky-400 border border-sky-400/30">
                                Current
                              </span>
                            )}
                            <ArrowUpRight
                              className={`w-4 h-4 transition-all duration-200 ${
                                isActive
                                  ? 'text-sky-400 opacity-100 rotate-45'
                                  : isHovered
                                  ? 'text-sky-400 opacity-100 translate-x-0.5 -translate-y-0.5'
                                  : 'text-slate-600 opacity-0 group-hover:opacity-100'
                              }`}
                            />
                          </div>
                        </button>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Drawer Footer */}
              <div className="px-8 py-6 border-t border-white/[0.06] flex flex-col gap-4 relative z-10 bg-[#05070c]/50">
                {/* Social links */}
                <div className="flex items-center gap-5">
                  {socialLinks.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-slate-400 hover:text-sky-400 tracking-wider uppercase transition-colors duration-200 text-[10px]"
                    >
                      {s.name}
                    </a>
                  ))}
                </div>

                {/* Status and Action row */}
                <div className="flex items-center justify-between pt-2 border-t border-white/[0.04]">
                  <div className="flex items-center gap-2">
                    <span className="pulse-emerald" />
                    <span className="font-mono text-slate-400 tracking-wider uppercase text-[10px]">
                      Available for Work
                    </span>
                  </div>

                  {onReplayLoader && (
                    <button
                      onClick={() => { setMenuOpen(false); setTimeout(onReplayLoader, 250); }}
                      className="font-mono text-slate-500 hover:text-sky-400 tracking-wider uppercase transition-colors duration-200 cursor-pointer text-[10px]"
                    >
                      [ Replay ]
                    </button>
                  )}
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
