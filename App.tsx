import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/Team'; 
import Projects from './components/Projects';
import Contact from './components/Contact';
import { LanguageProvider } from './LanguageContext';
import { ThemeProvider } from './ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="bg-softWhite dark:bg-dark text-charcoal dark:text-white min-h-screen selection:bg-gold-400 selection:text-black font-sans transition-colors duration-500">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Services />
            <Projects />
            <Contact />
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;