import React from 'react';
import { SERVICES } from '../constants';
import { useLanguage } from '../LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-16 md:py-24 bg-dark relative overflow-hidden">
      
      {/* 3D Background - Technical Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=2000&auto=format&fit=crop" 
            alt="Technical 3D Background" 
            className="w-full h-full object-cover opacity-15 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-dark/95"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 border-b border-white/10 pb-8">
          <div className="flex flex-col gap-2">
            <span className="text-gold text-xs font-bold tracking-[0.4em] uppercase">{t.services.badge}</span>
            <h2 className="text-2xl md:text-4xl font-display font-bold text-white uppercase leading-tight">
                {t.services.title}
            </h2>
          </div>
          <p className="text-gray-500 text-sm font-light tracking-wide mt-4 md:mt-0 max-w-xs md:text-right">
            {t.services.desc}
          </p>
        </div>

        <div className="flex flex-col">
          {SERVICES.map((service, index) => {
            const translatedService = t.services.items[index];
            return (
              <div 
                key={service.id}
                className="group border-b border-white/10 py-8 md:py-12 hover:border-gold transition-colors duration-500 flex flex-col md:flex-row gap-4 md:gap-8 md:items-center relative"
              >
                {/* Header: Number + Title + Icon (on mobile) */}
                <div className="flex items-center justify-between w-full md:contents">
                  <div className="flex items-center gap-4 md:contents">
                    <div className="md:w-1/12 text-gray-800 font-display text-2xl group-hover:text-gold transition-colors shrink-0">
                      {index + 1}.
                    </div>
                    
                    <div className="md:w-4/12">
                      <h3 className="text-xl md:text-2xl font-display text-white group-hover:pl-4 transition-all duration-300 uppercase tracking-tight">
                        {translatedService.title}
                      </h3>
                    </div>
                  </div>

                  {/* Icon on right for mobile header */}
                  <div className="md:hidden opacity-40 group-hover:opacity-100 transition-all duration-300">
                    <service.icon className="text-gold w-6 h-6" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="md:w-5/12 pl-10 md:pl-0">
                  <p className="text-gray-400 font-light text-sm leading-relaxed max-w-md group-hover:text-gray-300 transition-colors">
                    {translatedService.desc}
                  </p>
                </div>

                {/* Icon for Desktop */}
                <div className="hidden md:flex md:w-2/12 justify-end opacity-20 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <service.icon className="text-gold w-12 h-12 group-hover:scale-110 transition-transform" strokeWidth={1} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;