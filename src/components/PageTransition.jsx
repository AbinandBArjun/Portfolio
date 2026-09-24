import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const ROUTE_METADATA = {
  '/': {
    number: '01',
    code: 'SYS.CORE',
    title: 'OVERVIEW',
    category: 'INTELLIGENCE ARCHITECTURE & RESEARCH',
    tag: 'T1 // PRIMARY NODE'
  },
  '/projects': {
    number: '02',
    code: 'DEV.DEPLOY',
    title: 'WORK & PROJECTS',
    category: 'PRODUCTION RAG & FINE-TUNED MODELS',
    tag: 'T2 // ARTIFACT ARCHIVE'
  },
  '/experience': {
    number: '03',
    code: 'OPS.TRACK',
    title: 'EXPERIENCE',
    category: 'ENGINEERING RESEARCH & MILESTONES',
    tag: 'T3 // TELEMETRY'
  },
  '/contact': {
    number: '04',
    code: 'COMM.LINK',
    title: 'DISPATCH & CONTACT',
    category: 'SECURE COLLABORATION & INQUIRY',
    tag: 'T4 // DISPATCH'
  },
};

// Pensatori Irrazionali signature cubic-bezier curve
const PENSATORI_EASE = [0.76, 0, 0.24, 1];

// 5 Columns stagger: expanding outwards from center or cascading across
const SLAT_DELAYS_ENTER = [0.0, 0.04, 0.08, 0.04, 0.0];
const SLAT_DELAYS_EXIT  = [0.0, 0.04, 0.08, 0.04, 0.0];

export const PageTransition = ({ children }) => {
  const location = useLocation();
  const currentRoute = ROUTE_METADATA[location.pathname] || {
    number: '00',
    code: 'SYS.VIEW',
    title: 'SYSTEM VIEW',
    category: 'NAVIGATION INTERFACE',
    tag: 'T0 // DISPATCH'
  };

  useEffect(() => {
    // Restore scroll to top instantly upon new page mount
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="relative w-full min-h-screen">
      {/* ============================================================== */}
      {/* PENSATORI IRRAZIONALI CURTAIN OVERLAY                          */}
      {/* 5 Vertical Blinds that wipe in on exit and wipe out on entry   */}
      {/* ============================================================== */}

      {/* Enter Curtain (Initial: full screen -> Scales down to bottom) */}
      <div 
        aria-hidden="true" 
        className="fixed inset-0 z-[9980] flex pointer-events-none overflow-hidden"
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={`enter-slat-${i}`}
            initial={{ scaleY: 1 }}
            animate={{ 
              scaleY: 0,
              transition: {
                duration: 0.55,
                delay: SLAT_DELAYS_ENTER[i],
                ease: PENSATORI_EASE,
              }
            }}
            style={{ originY: 1 }} // wipes downwards to reveal new page
            className="flex-1 h-full bg-[#080b12] border-r border-white/[0.06] relative last:border-r-0"
          >
            {/* Slat bottom highlight */}
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />
          </motion.div>
        ))}

        {/* Studio HUD that fades out during curtain reveal */}
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ 
            opacity: 0, 
            scale: 0.98,
            transition: { duration: 0.28, ease: 'easeOut' }
          }}
          className="absolute inset-0 flex flex-col justify-between p-6 md:p-12 z-[9985] text-white"
        >
          {/* Top HUD Row */}
          <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-slate-400 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SYS.ROUTER // {currentRoute.code}</span>
            </div>
            <div className="hidden sm:flex items-center gap-6 text-slate-400">
              <span>LAT 12.9716° N / LON 77.5946° E</span>
              <span className="text-sky-400">{currentRoute.tag}</span>
            </div>
          </div>

          {/* Center Monospace Typography */}
          <div className="my-auto text-center space-y-2">
            <div className="text-xs md:text-sm font-mono tracking-[0.25em] text-sky-400 uppercase">
              // [{currentRoute.number}] {currentRoute.title}
            </div>
            <div className="text-xl md:text-3xl font-extrabold tracking-tight text-white uppercase">
              {currentRoute.category}
            </div>
          </div>

          {/* Bottom HUD Row */}
          <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-slate-400 border-t border-white/10 pt-4">
            <span>ABINAND.AI STUDIO // SYSTEM CORE</span>
            <span className="text-emerald-400 font-mono">STATUS: DISPATCH_OK</span>
          </div>
        </motion.div>
      </div>

      {/* Exit Curtain (Initial: scaleY 0 -> Scales in from top on unmount) */}
      <div 
        aria-hidden="true" 
        className="fixed inset-0 z-[9980] flex pointer-events-none overflow-hidden"
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={`exit-slat-${i}`}
            initial={{ scaleY: 0 }}
            exit={{ 
              scaleY: 1,
              transition: {
                duration: 0.48,
                delay: SLAT_DELAYS_EXIT[i],
                ease: PENSATORI_EASE,
              }
            }}
            style={{ originY: 0 }} // drops down from top
            className="flex-1 h-full bg-[#080b12] border-r border-white/[0.06] relative last:border-r-0"
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />
          </motion.div>
        ))}

        {/* Studio HUD that fades in when exit curtain covers the screen */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          exit={{ 
            opacity: 1, 
            scale: 1,
            transition: { delay: 0.12, duration: 0.28, ease: 'easeIn' }
          }}
          className="absolute inset-0 flex flex-col justify-between p-6 md:p-12 z-[9985] text-white"
        >
          {/* Top HUD Row */}
          <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-slate-400 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
              <span>ROUTING TRANSITION // DISPATCHING</span>
            </div>
            <div className="hidden sm:flex items-center gap-6 text-slate-400">
              <span>SYSTEM / STUDIO CORE</span>
              <span className="text-emerald-400">T1 2 3 4 5 6 7</span>
            </div>
          </div>

          {/* Center Monospace Typography & Animated Geometric Emblem */}
          <div className="my-auto flex flex-col items-center justify-center space-y-4">
            {/* Pensatori-style animated geometric monogram */}
            <div className="relative w-20 h-10 flex items-center justify-center">
              <motion.div 
                initial={{ scaleX: 0 }}
                exit={{ scaleX: 1, transition: { delay: 0.15, duration: 0.35, ease: 'easeInOut' } }}
                className="absolute inset-x-0 h-px bg-gradient-to-r from-sky-400/20 via-sky-400 to-sky-400/20"
              />
              <motion.div 
                initial={{ scaleY: 0 }}
                exit={{ scaleY: 1, transition: { delay: 0.2, duration: 0.25, ease: 'easeInOut' } }}
                className="absolute inset-y-0 w-px bg-white/70"
              />
              <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 shadow-[0_0_15px_rgba(56,189,248,0.9)] z-10" />
            </div>

            <div className="text-center space-y-1.5">
              <div className="text-xs font-mono tracking-[0.25em] text-slate-400">
                PENSATORI STUDIO SYSTEM
              </div>
              <div className="text-xl md:text-2xl font-mono font-bold tracking-tight text-white uppercase">
                DISPATCHING // [{currentRoute.number}] {currentRoute.title}
              </div>
            </div>
          </div>

          {/* Bottom HUD Row */}
          <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-slate-400 border-t border-white/10 pt-4">
            <span>PORTFOLIO // ABINAND B ARJUN</span>
            <span className="font-mono text-sky-400">SYSTEM STABILITY 100%</span>
          </div>
        </motion.div>
      </div>

      {/* ============================================================== */}
      {/* PAGE CONTENT                                                   */}
      {/* Smoothly glides up as the curtain opens                        */}
      {/* ============================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(3px)' }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          filter: 'blur(0px)',
          transition: {
            duration: 0.6,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }
        }}
        exit={{ 
          opacity: 0, 
          y: -10,
          transition: {
            duration: 0.25,
            delay: 0.25, // stays visible until slats cover viewport
            ease: 'easeIn',
          }
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  );
};
