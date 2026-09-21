import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isMouseDown, setIsMouseDown] = useState(false);

  // Real-time mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth fluid spring physics for outer follower halo (curtisdesignr.me spec)
  const springConfig = { damping: 24, stiffness: 380, mass: 0.2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on desktop/fine pointer devices
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    // Interactive element hover detection
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, [role="button"], input, textarea, .glass-panel, [data-cursor]');
      if (target) {
        setIsHovered(true);
        const customText = target.getAttribute('data-cursor');
        setHoverText(customText || '');
      } else {
        setIsHovered(false);
        setHoverText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Outer Follower Ring - curtisdesignr.me style thin halo (36px) */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isMouseDown ? 0.75 : isHovered ? 1.75 : 1,
          borderColor: isHovered ? 'rgba(56, 189, 248, 0.85)' : 'rgba(255, 255, 255, 0.35)',
          backgroundColor: isHovered ? 'rgba(56, 189, 248, 0.1)' : 'rgba(255, 255, 255, 0.02)',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 24 }}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-white/35 backdrop-blur-[1px] flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.2)] will-change-transform"
      >
        {hoverText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[9px] font-mono uppercase tracking-widest text-sky-300 font-bold px-1"
          >
            {hoverText}
          </motion.span>
        )}
      </motion.div>

      {/* Inner Precision Dot - curtisdesignr.me style 8px solid dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isMouseDown ? 1.4 : isHovered ? 0.35 : 1,
          backgroundColor: isHovered ? '#a855f7' : '#38bdf8',
        }}
        transition={{ type: 'spring', stiffness: 450, damping: 26 }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_10px_#38bdf8] will-change-transform"
      />
    </div>
  );
};
