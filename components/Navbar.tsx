import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Sun, Moon, Laptop } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Language } from '../translations';
import { useTheme, Theme } from '../ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();

  const [isLangOpen, setIsLangOpen] = useState(false);
  const languages: { code: Language, label: string }[] = [
    { code: 'en', label: 'ENGLISH' },
    { code: 'vi', label: 'TIẾNG VIỆT' },
    { code: 'jp', label: '日本語' },
    { code: 'kr', label: '한국어' }
  ];

  const currentLangLabel = languages.find(l => l.code === language)?.label || 'LANGUAGE';

  const ThemeButton = ({ type, icon: Icon }: { type: Theme, icon: any }) => (
    <button 
      onClick={() => setTheme(type)}
      className={`p-1.5 rounded-full transition-all ${theme === type ? 'text-gold bg-black/5 dark:bg-white/5' : 'text-gray-500 hover:text-charcoal dark:hover:text-white'}`}
      title={type}
    >
      <Icon size={12} />
    </button>
  );

  return (
    <>
      <div 
        className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark/40 via-dark/20 to-transparent backdrop-blur-md z-[45] pointer-events-none transition-opacity duration-500"
        style={{ maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }}
      ></div>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-between items-center px-6 md:px-12 py-6 mix-blend-difference text-white`}
      >
        <a href="#hero" className="flex flex-col group">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-display font-black tracking-tighter group-hover:text-gold transition-colors uppercase">ZEN</span>
            <span className="text-[10px] font-black tracking-[0.4em] opacity-80 pt-1 uppercase">VISUAL MEDIA</span>
          </div>
          <div className="h-[1px] w-0 group-hover:w-full bg-gold transition-all duration-500 mt-0.5"></div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-8 border-r border-white/10 pr-6">
            <a href="#hero" className="text-xs font-bold uppercase tracking-[0.2em] hover:text-gold transition-colors">{t.nav.zen}</a>
            <a href="#projects" className="text-xs font-bold uppercase tracking-[0.2em] hover:text-gold transition-colors">{t.nav.productions}</a>
            <a href="#about" className="text-xs font-bold uppercase tracking-[0.2em] hover:text-gold transition-colors">{t.nav.vision}</a>
            <a href="#services" className="text-xs font-bold uppercase tracking-[0.2em] hover:text-gold transition-colors">{t.nav.engine}</a>
            <a href="#clients" className="text-xs font-bold uppercase tracking-[0.2em] hover:text-gold transition-colors">{t.nav.clients}</a>
            <a href="#contact" className="text-xs font-bold uppercase tracking-[0.2em] hover:text-gold transition-colors">{t.nav.connect}</a>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative group/lang">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 hover:border-gold/50 transition-all"
              >
                <Globe size={12} className="text-gold" />
                <span className="text-[10px] font-black tracking-widest">{language.toUpperCase()}</span>
              </button>
              
              <div className={`absolute top-full right-0 mt-2 w-40 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 origin-top ${isLangOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                 {languages.map(lang => (
                   <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsLangOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-[10px] font-bold tracking-widest hover:bg-gold hover:text-black transition-all border-b border-white/5 last:border-0 ${language === lang.code ? 'text-gold' : 'text-gray-400'}`}
                   >
                     {lang.label}
                   </button>
                 ))}
              </div>
            </div>

            <div className="flex items-center gap-1 bg-white/5 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
              <ThemeButton type="light" icon={Sun} />
              <ThemeButton type="dark" icon={Moon} />
              <ThemeButton type="system" icon={Laptop} />
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-softWhite dark:bg-dark z-40 flex items-center justify-center transition-all duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-8">
           <div className="flex flex-col items-center gap-6 mb-8">
              <div className="flex flex-wrap justify-center gap-4">
                {languages.map(lang => (
                  <button 
                    key={lang.code}
                    onClick={() => {setLanguage(lang.code); setIsOpen(false)}} 
                    className={`text-xl font-bold ${language === lang.code ? 'text-gold' : 'text-charcoal/20 dark:text-white/20'}`}
                  >
                    {lang.code.toUpperCase()}
                  </button>
                ))}
              </div>
              <div className="flex gap-6 mt-4">
                <button onClick={() => setTheme('light')} className={`p-2 rounded-full ${theme === 'light' ? 'bg-gold/20 text-gold' : 'text-charcoal dark:text-white'}`}><Sun size={24}/></button>
                <button onClick={() => setTheme('dark')} className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gold/20 text-gold' : 'text-charcoal dark:text-white'}`}><Moon size={24}/></button>
                <button onClick={() => setTheme('system')} className={`p-2 rounded-full ${theme === 'system' ? 'bg-gold/20 text-gold' : 'text-charcoal dark:text-white'}`}><Laptop size={24}/></button>
              </div>
           </div>
           <a href="#hero" onClick={() => setIsOpen(false)} className="text-4xl font-display font-bold text-transparent outline-text hover:text-charcoal dark:hover:text-white transition-all tracking-wider uppercase">{t.nav.zen}</a>
           <a href="#projects" onClick={() => setIsOpen(false)} className="text-4xl font-display font-bold text-transparent outline-text hover:text-charcoal dark:hover:text-white transition-all tracking-wider uppercase">{t.nav.productions}</a>
           <a href="#about" onClick={() => setIsOpen(false)} className="text-4xl font-display font-bold text-transparent outline-text hover:text-charcoal dark:hover:text-white transition-all tracking-wider uppercase">{t.nav.vision}</a>
           <a href="#services" onClick={() => setIsOpen(false)} className="text-4xl font-display font-bold text-transparent outline-text hover:text-charcoal dark:hover:text-white transition-all tracking-wider uppercase">{t.nav.engine}</a>
           <a href="#clients" onClick={() => setIsOpen(false)} className="text-4xl font-display font-bold text-transparent outline-text hover:text-charcoal dark:hover:text-white transition-all tracking-wider uppercase">{t.nav.clients}</a>
           <a href="#contact" onClick={() => setIsOpen(false)} className="text-4xl font-display font-bold text-transparent outline-text hover:text-charcoal dark:hover:text-white transition-all tracking-wider uppercase">{t.nav.connect}</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;