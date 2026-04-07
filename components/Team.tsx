import React from 'react';
import { useLanguage } from '../LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 bg-softWhite dark:bg-dark relative overflow-hidden transition-colors duration-500">
      
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img 
            src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop" 
            alt="CGI Context" 
            className="w-full h-full object-cover opacity-[0.05] dark:opacity-20 brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-softWhite via-transparent to-softWhite dark:from-dark dark:via-transparent dark:to-dark"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          <div className="lg:col-span-5">
             <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">{t.about.badge}</span>
             <h2 className="text-5xl md:text-7xl font-display font-bold leading-none mb-8 text-charcoal dark:text-white uppercase tracking-tighter">
               {t.about.title}<br/><span className="text-transparent outline-text-gold">ZEN VISUAL MEDIA</span>
             </h2>
             <div className="w-12 h-1 bg-gold mb-12"></div>
             
             <div className="w-full h-[300px] md:h-[350px] border border-charcoal/5 dark:border-white/5 bg-white/40 dark:bg-black/40 backdrop-blur-md relative p-4 mb-8 flex items-center justify-center rounded-sm overflow-hidden">
                 <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
                    alt="Zen Team" 
                    className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                 />
                {/* Decorative corner lines */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold/30"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold/30"></div>
             </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-12">
                <p 
                    className="text-2xl md:text-3xl font-display font-bold leading-tight mb-8 text-charcoal dark:text-white uppercase tracking-tight"
                    dangerouslySetInnerHTML={{ __html: t.about.quote }}
                />
                <div className="space-y-6 text-charcoal/60 dark:text-gray-400 font-light text-base md:text-lg leading-relaxed max-w-2xl">
                    <p dangerouslySetInnerHTML={{ __html: t.about.p1 }} />
                    <p dangerouslySetInnerHTML={{ __html: t.about.p2 }} />
                </div>
            </div>

            {/* Value Cards Grid - Ultra Mini Font for Precision UI */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mt-8">
                {[t.about.cards.year1, t.about.cards.year2, t.about.cards.projects_count, t.about.cards.year3].map((card, idx) => (
                  <div 
                    key={idx}
                    className="group border border-charcoal/10 dark:border-white/10 p-4 md:p-6 bg-white dark:bg-charcoal/40 backdrop-blur-md transition-all duration-500 hover:border-gold/50 hover:bg-gold/5 dark:hover:bg-black/80 flex flex-col justify-center items-center text-center relative overflow-hidden aspect-square rounded-sm shadow-sm hover:shadow-xl dark:shadow-none"
                  >
                    {/* Top sliding line effect */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    {/* Label - Set to small fixed sizes to avoid overflow in any language */}
                    <span className="block text-xl md:text-2xl font-display font-black text-charcoal dark:text-white group-hover:text-gold transition-colors tracking-widest uppercase leading-none mb-2">
                        {card.label}
                    </span>
                    
                    {/* Sub-label */}
                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/40 dark:text-white/40 group-hover:text-gold/80 transition-colors">
                        {card.sub}
                    </span>
                    
                    {/* Decorative Index Number - Smaller and more subtle */}
                    <div className="absolute -bottom-1 -right-1 text-[30px] md:text-[40px] font-display font-black text-charcoal/[0.03] dark:text-white/[0.02] select-none pointer-events-none group-hover:text-gold/[0.04] transition-colors italic leading-none">
                        0{idx + 1}
                    </div>

                    {/* Subtle hover glow */}
                    <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/[0.01] transition-colors pointer-events-none"></div>
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