import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Briefcase, Folder, Home, Moon, SquarePen, Sun, Wrench } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'Home', to: '/', icon: Home },
  { name: 'Projects', to: '/projects', icon: Folder },
  { name: 'Experience', to: '/experience', icon: Briefcase },
  { name: 'About & specialties', to: '/#about', icon: Wrench },
  { name: 'Contact', to: '/contact', icon: SquarePen },
];

export const Navbar = () => {
  const { toggleTheme, isDark } = useTheme();
  const location = useLocation();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-4 py-4 sm:px-6 md:px-12 md:py-5 pointer-events-none"
    >
      <Link to="/" className="flex items-center gap-2.5 group z-[61] pointer-events-auto">
        <span className="h-9 w-9 shrink-0 rounded-xl bg-gradient-to-tr from-sky-500 to-purple-600 p-[1px] transition-transform group-hover:scale-105">
          <img
            src="/favicon.jpg"
            alt=""
            aria-hidden="true"
            className="h-full w-full rounded-[11px] object-cover"
          />
        </span>
        <span className="hidden min-[420px]:inline font-heading text-sm font-bold tracking-wide text-white sm:text-base">
          Abinand B Arjun
        </span>
      </Link>

      <div className="z-[61] flex items-center gap-2 pointer-events-auto">
        <button
          onClick={toggleTheme}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-slate-900/60 text-slate-300 shadow-lg backdrop-blur-md transition-all hover:border-sky-500/30 hover:bg-slate-800/80 hover:text-white"
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isDark ? (
              <motion.span
                key="sun"
                initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.2 }}
              >
                <Sun className="h-4 w-4 text-amber-400" />
              </motion.span>
            ) : (
              <motion.span
                key="moon"
                initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.2 }}
              >
                <Moon className="h-4 w-4 text-sky-500" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        <nav
          aria-label="Main navigation"
          className="flex items-center gap-0.5 rounded-full border border-white/[0.06] bg-slate-900/80 p-1 shadow-lg backdrop-blur-xl sm:gap-1 sm:p-1.5"
        >
          {navLinks.map(({ name, to, icon: Icon }) => {
            const isAboutLink = name === 'About & specialties';
            const isActive = isAboutLink
              ? location.pathname === '/' && location.hash === '#about'
              : location.pathname === to;

            return (
              <Link
                key={name}
                to={to}
                aria-label={name}
                aria-current={isActive ? 'page' : undefined}
                title={name}
                className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors sm:h-9 sm:w-9 ${
                  isActive
                    ? 'bg-[var(--accent-surface)] text-[var(--accent-cyan)]'
                    : 'text-slate-300 hover:bg-white/[0.08] hover:text-white'
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-highlight)]`}
              >
                <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
              </Link>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
};
