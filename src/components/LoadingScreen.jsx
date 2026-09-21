import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phaseText, setPhaseText] = useState('Initializing system...');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Prevent scrolling while loading screen is active
    document.body.style.overflow = 'hidden';

    // Organic non-linear counter logic
    let currentProgress = 0;
    const interval = setInterval(() => {
      // Acceleration & deceleration curves
      let increment = 1;
      if (currentProgress < 20) {
        increment = Math.floor(Math.random() * 3) + 2; // 2-4
      } else if (currentProgress < 60) {
        increment = Math.floor(Math.random() * 5) + 3; // 3-7
      } else if (currentProgress < 90) {
        increment = Math.floor(Math.random() * 4) + 2; // 2-5
      } else {
        increment = 1; // slow down at the finish
      }

      currentProgress = Math.min(100, currentProgress + increment);
      setProgress(currentProgress);

      // Dynamic phase text updates
      if (currentProgress < 25) {
        setPhaseText('[01/04] Booting system architecture...');
      } else if (currentProgress < 55) {
        setPhaseText('[02/04] Loading AI models & neural weights...');
      } else if (currentProgress < 85) {
        setPhaseText('[03/04] Compiling glassmorphism UI & particle engine...');
      } else if (currentProgress < 100) {
        setPhaseText('[04/04] Finalizing telemetry & experience...');
      } else {
        setPhaseText('[READY] Welcome to Portfolio.');
      }

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          document.body.style.overflow = '';
          if (onComplete) onComplete();
        }, 350); // slight pause at 100% for smooth visual payoff
      }
    }, 35);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {!isDone && (
        <motion.div
          key="loading-screen"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between p-6 md:p-12 bg-[#07090e] bg-grid-pattern text-slate-100 select-none overflow-hidden"
        >
          {/* Ambient Background Glows */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

          {/* Top Info Bar */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-slate-400">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="tracking-widest uppercase text-slate-300 font-semibold">
                Portfolio // OS v2.0
              </span>
            </div>
            <div className="hidden sm:block text-slate-500 tracking-wider">
              10°48'32.0"N 106°46'55.2"E
            </div>
            <div className="text-sky-400/80 tracking-widest uppercase">
              Abinand B Arjun
            </div>
          </div>

          {/* Center Content: Giant Percentage Counter */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center">
            {/* Minimalist Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-sky-400 mb-4"
            >
              System Initialization
            </motion.p>

            {/* Huge Display Counter */}
            <div className="relative flex items-baseline justify-center">
              <span className="text-7xl sm:text-9xl md:text-[13rem] font-extrabold tracking-tighter font-mono text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 leading-none drop-shadow-[0_0_35px_rgba(56,189,248,0.2)]">
                {String(progress).padStart(2, '0')}
              </span>
              <span className="text-3xl sm:text-5xl md:text-7xl font-bold font-mono text-purple-400 ml-2">
                %
              </span>
            </div>

            {/* Dynamic Status Text */}
            <motion.div
              key={phaseText}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-6 text-xs sm:text-sm font-mono text-slate-400 tracking-wider h-6 flex items-center justify-center gap-2"
            >
              <span>{phaseText}</span>
            </motion.div>
          </div>

          {/* Bottom Info Bar & Animated Progress Line */}
          <div className="relative z-10 w-full space-y-4">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>DESIGNED FOR PERFORMANCE</span>
              <span>{progress}% COMPLETE</span>
            </div>

            {/* Progress Bar Container */}
            <div className="relative w-full h-1 bg-slate-800/80 rounded-full overflow-hidden border border-white/5">
              <motion.div
                className="h-full bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 rounded-full shadow-[0_0_15px_#38bdf8]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
