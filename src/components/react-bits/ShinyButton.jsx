import React from 'react';
import { motion } from 'framer-motion';

export const ShinyButton = ({
  children,
  onClick,
  className = '',
  icon: Icon,
  variant = 'primary' // 'primary' | 'secondary' | 'emerald'
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'emerald':
        return 'bg-slate-500/10 hover:bg-slate-500/20 text-slate-200 border-slate-500/30';
      case 'secondary':
        return 'bg-slate-800/60 hover:bg-slate-800 text-slate-200 border-slate-700/60 shadow-[0_0_15px_rgba(255,255,255,0.05)]';
      case 'primary':
      default:
        return 'bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border-sky-500/40';
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={`relative group overflow-hidden px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 border flex items-center justify-center gap-2 backdrop-blur-md cursor-pointer ${getVariantStyles()} ${className}`}
    >
      {/* Shimmer sweep line effect */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      
      {Icon && <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};
