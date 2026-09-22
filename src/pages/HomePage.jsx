import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25 } },
};

export const HomePage = () => (
  <motion.main variants={pageVariants} initial="initial" animate="animate" exit="exit">
    <Hero />
  </motion.main>
);
