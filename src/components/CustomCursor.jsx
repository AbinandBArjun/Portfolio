import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isMouseDown, setIsMouseDown] = useState(false);

  // Mouse position motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Ultra-responsive, silky smooth spring follower for the outer halo
  // High stiffness + low mass = instant response with zero stiffness/static feel
  const springConfig = { damping: 22, stiffness: 450, mass: 0.15 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on coarse touch pointer devices (smartphones/tablets)
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

    // Dynamic hover handler for interactive elements
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
      {/* Outer Halo Ring - Silky smooth high-stiffness spring follower */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isMouseDown ? 0.75 : isHovered ? 1.6 : 1,
          borderColor: isHovered ? 'rgba(56, 189, 248, 0.9)' : 'rgba(56, 189, 248, 0.4)',
          backgroundColor: isHovered ? 'rgba(56, 189, 248, 0.12)' : 'rgba(56, 189, 248, 0.03)',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 24 }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-sky-400/50 backdrop-blur-xs flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.25)] will-change-transform"
      >
        {hoverText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[9px] font-mono uppercase tracking-widest text-sky-300 font-bold"
          >
            {hoverText}
          </motion.span>
        )}
      </motion.div>

      {/* Center Precision Pointer Dot - Instant 1:1 position lock */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isMouseDown ? 1.4 : isHovered ? 0.5 : 1,
          backgroundColor: isHovered ? '#a855f7' : '#38bdf8',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full shadow-[0_0_10px_#38bdf8] will-change-transform"
      />
    </div>
  );
};
