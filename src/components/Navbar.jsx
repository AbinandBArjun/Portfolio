import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Cpu } from 'lucide-react';
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
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (to) => {
    setMenuOpen(false);
    setTimeout(() => navigate(to), 300);
  };

  return (
    <>
      {/* Top Bar */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 md:px-12 py-5"
      >
        <Link to="/" className="flex items-center gap-3 group z-[61]">
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
          onClick={() => setMenuOpen((v) => !v)}
          className="relative z-[61] flex items-center gap-2.5 cursor-pointer group py-1.5 px-2 rounded-lg hover:bg-slate-800/40 transition-colors"
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
      </motion.header>

      {/* Fullscreen Overlay Menu */}
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
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeInOut' }}
              className="absolute top-0 left-0 right-0 origin-left"
              style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(56,189,248,0.4), transparent)' }}
            />

            <nav className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-28 pt-28 pb-4">
              <ul>
                {navLinks.map((link, i) => {
                  const isActive = location.pathname === link.to;
                  return (
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
                      <button
                        onClick={() => handleNavClick(link.to)}
                        className="w-full flex items-center justify-between py-4 md:py-5 lg:py-6 text-left cursor-pointer"
                      >
                        <div className="flex items-baseline gap-5 md:gap-7">
                          <motion.span
                            animate={{ color: isActive ? '#38bdf8' : hoveredIndex === i ? '#38bdf8' : 'rgba(255,255,255,0.2)' }}
                            className="font-mono text-xs tracking-widest"
                          >
                            {link.number}
                          </motion.span>
                          <motion.span
                            animate={{
                              WebkitTextStroke: hoveredIndex === i && !isActive ? '1px rgba(255,255,255,0.85)' : '0px transparent',
                              color: isActive ? '#38bdf8' : hoveredIndex === i ? 'transparent' : 'white',
                              letterSpacing: hoveredIndex === i ? '0.04em' : '-0.02em',
                            }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            className="font-heading font-bold leading-none"
                            style={{ fontSize: 'clamp(2.2rem, 7vw, 6.5rem)' }}
                          >
                            {link.name}
                          </motion.span>
                        </div>

                        <motion.span
                          animate={{ x: hoveredIndex === i ? 0 : 16, opacity: hoveredIndex === i ? 1 : 0 }}
                          transition={{ duration: 0.22, ease: 'easeOut' }}
                          className="text-sky-400 font-thin hidden sm:block"
                          style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
                        >
                          {String.fromCharCode(8599)}
                        </motion.span>
                      </button>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.4, ease: 'easeOut' }}
              className="px-8 md:px-16 lg:px-28 pb-8 pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
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
