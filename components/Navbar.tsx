import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Sun, Moon, Laptop } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Language } from '../translations';
import { useTheme, Theme } from '../ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();

  const LangButton = ({ code, label }: { code: Language, label: string }) => (
    <button 
      onClick={() => setLanguage(code)}
      className={`text-[10px] font-bold px-2 py-1 transition-colors ${language === code ? 'text-gold' : 'text-gray-500 hover:text-charcoal dark:hover:text-white'}`}
    >
      {label}
    </button>
  );

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
            <a href="#about" className="text-xs font-bold uppercase tracking-[0.2em] hover:text-gold transition-colors">{t.nav.vision}</a>
            <a href="#services" className="text-xs font-bold uppercase tracking-[0.2em] hover:text-gold transition-colors">{t.nav.engine}</a>
            <a href="#projects" className="text-xs font-bold uppercase tracking-[0.2em] hover:text-gold transition-colors">{t.nav.productions}</a>
            <a href="#contact" className="text-xs font-bold uppercase tracking-[0.2em] hover:text-gold transition-colors">{t.nav.connect}</a>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-white/5 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
              <Globe size={12} className="text-gold mr-1" />
              <LangButton code="en" label="EN" />
              <span className="text-white/10 text-[8px]">|</span>
              <LangButton code="vi" label="VI" />
              <span className="text-white/10 text-[8px]">|</span>
              <LangButton code="no" label="NO" />
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
              <div className="flex gap-4">
                <button onClick={() => {setLanguage('en'); setIsOpen(false)}} className={`text-xl font-bold ${language === 'en' ? 'text-gold' : 'text-charcoal/20 dark:text-white/20'}`}>EN</button>
                <button onClick={() => {setLanguage('vi'); setIsOpen(false)}} className={`text-xl font-bold ${language === 'vi' ? 'text-gold' : 'text-charcoal/20 dark:text-white/20'}`}>VI</button>
                <button onClick={() => {setLanguage('no'); setIsOpen(false)}} className={`text-xl font-bold ${language === 'no' ? 'text-gold' : 'text-charcoal/20 dark:text-white/20'}`}>NO</button>
              </div>
              <div className="flex gap-6 mt-4">
                <button onClick={() => setTheme('light')} className={`p-2 rounded-full ${theme === 'light' ? 'bg-gold/20 text-gold' : 'text-charcoal dark:text-white'}`}><Sun size={24}/></button>
                <button onClick={() => setTheme('dark')} className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gold/20 text-gold' : 'text-charcoal dark:text-white'}`}><Moon size={24}/></button>
                <button onClick={() => setTheme('system')} className={`p-2 rounded-full ${theme === 'system' ? 'bg-gold/20 text-gold' : 'text-charcoal dark:text-white'}`}><Laptop size={24}/></button>
              </div>
           </div>
           <a href="#hero" onClick={() => setIsOpen(false)} className="text-4xl font-display font-bold text-transparent outline-text hover:text-charcoal dark:hover:text-white transition-all tracking-wider uppercase">{t.nav.zen}</a>
           <a href="#about" onClick={() => setIsOpen(false)} className="text-4xl font-display font-bold text-transparent outline-text hover:text-charcoal dark:hover:text-white transition-all tracking-wider uppercase">{t.nav.vision}</a>
           <a href="#services" onClick={() => setIsOpen(false)} className="text-4xl font-display font-bold text-transparent outline-text hover:text-charcoal dark:hover:text-white transition-all tracking-wider uppercase">{t.nav.engine}</a>
           <a href="#projects" onClick={() => setIsOpen(false)} className="text-4xl font-display font-bold text-transparent outline-text hover:text-charcoal dark:hover:text-white transition-all tracking-wider uppercase">{t.nav.productions}</a>
           <a href="#contact" onClick={() => setIsOpen(false)} className="text-4xl font-display font-bold text-transparent outline-text hover:text-charcoal dark:hover:text-white transition-all tracking-wider uppercase">{t.nav.connect}</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;