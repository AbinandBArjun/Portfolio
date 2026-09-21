import React, { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoAbout } from './components/BentoAbout';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [loaderKey, setLoaderKey] = useState(0);

  const handleReplayLoader = () => {
    setLoaderKey((prev) => prev + 1);
  };

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 overflow-x-hidden selection:bg-sky-500/30 selection:text-sky-300">
      <LoadingScreen key={loaderKey} />
      <Navbar onReplayLoader={handleReplayLoader} />
      <main>
        <Hero />
        <BentoAbout />
        <Projects />
        <Experience />
        <InteractiveTerminal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
