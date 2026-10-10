import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const applyThemeToDOM = (newTheme) => {
  const root = document.documentElement;

  // Temporarily disable transitions to prevent multi-element layout thrashing
  const css = document.createElement('style');
  css.appendChild(
    document.createTextNode('*, *::before, *::after { transition: none !important; }')
  );
  document.head.appendChild(css);

  if (newTheme === 'light') {
    root.classList.add('light');
    root.classList.remove('dark');
    root.style.colorScheme = 'light';
  } else {
    root.classList.add('dark');
    root.classList.remove('light');
    root.style.colorScheme = 'dark';
  }

  // Force style calculation while transitions are locked
  void window.getComputedStyle(document.body).opacity;

  // Re-enable transitions for hovers and micro-interactions in next frame
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (document.head.contains(css)) {
        document.head.removeChild(css);
      }
    });
  });
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    // Check user system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  });

  // Sync initial DOM class on mount or theme update
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
      root.style.colorScheme = 'dark';
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    applyThemeToDOM(nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
