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
        <div className="bg-softWhite dark:bg-dark text-charcoal dark:text-white min-h-screen selection:bg-blue-600 selection:text-white font-sans transition-colors duration-500">
          <Navbar />
          <main>
            <Hero />
            <Projects />
            <About />
            <Services />
            <Contact />
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;