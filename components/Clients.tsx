import React from 'react';
import { useLanguage } from '../LanguageContext';

const Clients: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="clients" className="pt-40 pb-20 bg-white dark:bg-dark relative overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6 relative z-10 mb-0 text-center">
         <h2 className="text-4xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter text-black dark:text-white uppercase leading-none">
            {t.clients.title}
         </h2>
         <div className="w-20 h-1 bg-gold mx-auto mt-2"></div>
      </div>
      
      <div className="w-full relative z-10 px-6 md:px-0 -mt-16 md:-mt-24 lg:-mt-32">
        <div className="w-full">
          <div className="relative group overflow-hidden max-w-lg mx-auto md:max-w-none">
            <img 
              src="./pictures/our clients/20260416-125504.png" 
              alt={t.clients.title} 
              className="w-full h-[180px] md:h-auto object-cover md:object-contain object-bottom md:object-center opacity-80 filter invert dark:invert-0 brightness-110 dark:brightness-100 transition-all duration-700 hover:opacity-100"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2"></div>
    </section>
  );
};

export default Clients;
