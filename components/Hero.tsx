import React from 'react';
import { MoveDown, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen w-full bg-dark flex flex-col justify-center overflow-hidden transition-colors duration-500">
      {/* 3D Abstract Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="./pictures/Sun-zen-circle.jpg" 
          alt="Zen Family Background" 
          className="w-full h-full object-cover opacity-50 transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/50 to-dark"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 h-full flex flex-col justify-center items-center text-center">
        <div className="max-w-5xl mt-20 md:mt-0 flex flex-col items-center">
          
          <div className="relative mb-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[0.9] text-white tracking-tighter uppercase flex flex-col items-center text-center w-full">
              <span>{t.hero.title}</span>
              <span className="text-transparent outline-text-gold mt-2">{t.hero.subtitle}</span>
            </h1>
          </div>

          <div className="mb-10 max-w-2xl">
            <p className="text-gray-300 font-light text-lg md:text-2xl leading-relaxed italic mb-4">
              "{t.hero.slogan}"
            </p>
            <p className="text-gold font-bold tracking-[0.3em] uppercase text-sm md:text-base">
              {t.hero.power}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <a 
              href="#projects" 
              className="group flex items-center gap-4 text-white hover:text-gold transition-colors"
            >
              <span className="text-sm font-bold uppercase tracking-widest border-b border-white group-hover:border-gold pb-1 transition-colors">
                {t.hero.cta}
              </span>
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 animate-pulse z-20">
        <MoveDown className="text-gold" size={24} />
      </div>
    </section>
  );
};

export default Hero;