import React from 'react';

const Clients: React.FC = () => {
  return (
    <section id="clients" className="pt-0 pb-10 bg-white dark:bg-dark relative overflow-hidden transition-colors duration-500">
      <div className="w-full relative z-10 px-6 md:px-0">
        <div className="w-full">
          <div className="relative group overflow-hidden max-w-lg mx-auto md:max-w-none">
            <img 
              src="./pictures/our clients/20260416-125504.png" 
              alt="Zen Visual Media Clients" 
              className="w-full h-[180px] md:h-auto object-cover md:object-contain object-bottom md:object-center opacity-80 filter brightness-110 dark:brightness-100 transition-all duration-700 hover:opacity-100"
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
