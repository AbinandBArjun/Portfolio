import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './components/LoadingScreen';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PageTransition } from './components/PageTransition';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ContactPage } from './pages/ContactPage';

// Inner component so useLocation works inside BrowserRouter
function AppRoutes() {
  const location = useLocation();
  const [loaderKey, setLoaderKey] = useState(0);

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 overflow-x-hidden selection:bg-sky-500/30 selection:text-sky-300">
      <CustomCursor />
      {/* Loading screen only on home page */}
      {location.pathname === '/' && <LoadingScreen key={loaderKey} />}
      <Navbar onReplayLoader={() => setLoaderKey((p) => p + 1)} />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/"           element={<PageTransition><HomePage /></PageTransition>} />
          <Route path="/about"      element={<Navigate to="/#about" replace />} />
          <Route path="/projects"   element={<PageTransition><ProjectsPage /></PageTransition>} />
          <Route path="/experience" element={<PageTransition><ExperiencePage /></PageTransition>} />
          <Route path="/contact"    element={<PageTransition><ContactPage /></PageTransition>} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

