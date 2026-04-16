import React from 'react';
import { useLanguage } from '../LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-40 bg-softWhite dark:bg-dark relative overflow-hidden transition-colors duration-500">
      
      {/* 3D Background - New Diamond Theme */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img 
            src="./pictures/Sun-zen-circle-diamond.jpg" 
            alt="Zen Philosophy Background" 
            className="w-full h-full object-cover opacity-[0.08] dark:opacity-30 brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-softWhite via-transparent to-softWhite dark:from-dark dark:via-transparent dark:to-dark"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Sticky Title */}
          <div className="lg:col-span-4 lg:sticky lg:top-40 h-fit">
             <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">{t.about.badge}</span>
             <h2 className="text-5xl md:text-7xl font-display font-bold leading-none mb-8 text-charcoal dark:text-white uppercase tracking-tighter">
               {t.about.title}<br/><span className="text-transparent outline-text-gold">ZEN VISUAL MEDIA</span>
             </h2>
             <div className="w-12 h-1 bg-gold"></div>
          </div>

          {/* Right Column: Content & Stats */}
          <div className="lg:col-span-1 invisible md:visible"></div> {/* Spacer */}

          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-16">
                <p 
                    className="text-2xl md:text-4xl font-display font-bold leading-tight mb-10 text-charcoal dark:text-white uppercase tracking-tight"
                    dangerouslySetInnerHTML={{ __html: t.about.quote }}
                />
                <div className="space-y-8 text-charcoal/60 dark:text-gray-400 font-light text-base md:text-xl leading-relaxed max-w-2xl">
                    <p dangerouslySetInnerHTML={{ __html: t.about.p1 }} />
                    <p dangerouslySetInnerHTML={{ __html: t.about.p2 }} />
                </div>
            </div>

            {/* Value Cards Grid - Balanced & Minimalist */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                {[t.about.cards.year1, t.about.cards.year2, t.about.cards.projects_count, t.about.cards.year3].map((card, idx) => (
                  <div 
                    key={idx}
                    className="group border border-charcoal/10 dark:border-white/10 p-6 md:p-8 bg-white dark:bg-charcoal/40 backdrop-blur-md transition-all duration-500 hover:border-gold/50 hover:bg-gold/5 dark:hover:bg-black/80 flex flex-col justify-center items-center text-center relative overflow-hidden aspect-square rounded-sm shadow-sm hover:shadow-xl dark:shadow-none"
                  >
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <span className="block text-2xl md:text-3xl font-display font-black text-charcoal dark:text-white group-hover:text-gold transition-colors tracking-widest uppercase leading-none mb-2">
                        {card.label}
                    </span>
                    
                    <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-charcoal/40 dark:text-white/40 group-hover:text-gold/80 transition-colors">
                        {card.sub}
                    </span>
                    
                    <div className="absolute -bottom-1 -right-1 text-[40px] md:text-[50px] font-display font-black text-charcoal/[0.03] dark:text-white/[0.02] select-none pointer-events-none group-hover:text-gold/[0.04] transition-colors italic leading-none">
                        0{idx + 1}
                    </div>
                  </div>
                ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;