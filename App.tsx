import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveSelector from './components/ui/interactive-selector';
import ColorChangeCards from './components/ui/color-change-card';
import About from './components/About';
import Experts from './components/Experts';
import Footer from './components/Footer';
import VideoSection from './components/VideoSection';

const App: React.FC = () => {
  // Enforce light mode on mount to clean up any previous state
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme');
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-12 space-y-24">
        <div className="px-2 sm:px-4 w-full mx-auto">
          <Hero />
        </div>
        
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
          <VideoSection />
          <InteractiveSelector />
          <ColorChangeCards />
          <Experts />
          <About />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;