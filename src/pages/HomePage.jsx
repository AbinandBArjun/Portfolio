import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { BentoAbout } from '../components/BentoAbout';

export const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#about') {
      const elem = document.getElementById('about');
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, [location.hash]);

  return (
    <main>
      <Hero />
      <BentoAbout />
    </main>
  );
};
