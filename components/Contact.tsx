import React from 'react';
import { SOCIALS } from '../constants';
import { useLanguage } from '../LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 bg-gold text-dark relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          <h2 className="text-4xl md:text-[10vw] leading-none font-display font-black tracking-tighter mb-4 text-dark opacity-90 uppercase px-4">
            {t.contact.title}
          </h2>
          
          <p className="max-w-screen-lg text-lg md:text-2xl font-serif font-medium mb-12 text-dark/80 px-6">
            {t.contact.desc}
          </p>

          <div className="flex flex-col gap-2 mb-20 px-4">
            <a 
                href={`mailto:${SOCIALS.email}`}
                className="text-lg sm:text-2xl md:text-5xl lg:text-7xl font-bold border-b-2 border-dark pb-2 hover:text-white hover:border-white transition-colors duration-300 break-all"
            >
                {SOCIALS.email}
            </a>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] mt-4 opacity-60">
                {t.contact.partner}
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-12">
             <a href={`https://${SOCIALS.website}`} target="_blank" className="text-sm font-bold uppercase tracking-widest hover:text-white transition-colors">Website</a>
             <a href={`https://tiktok.com/@${SOCIALS.tiktok}`} target="_blank" className="text-sm font-bold uppercase tracking-widest hover:text-white transition-colors">IG/TikTok</a>
             <a href={`https://wa.me/${SOCIALS.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" className="text-sm font-bold uppercase tracking-widest hover:text-white transition-colors">WhatsApp</a>
          </div>

        </div>
        
        <div className="mt-32 border-t border-dark/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-bold uppercase tracking-widest text-dark/60 gap-4">
            <div className="flex items-center gap-2">
              <span className="opacity-60">© 2026</span>
              <span className="font-black text-dark tracking-tighter uppercase">{t.contact.copyright}</span>
            </div>
            <div className="flex gap-8">
                <span>CGI Production</span>
                <span>Visual Effects</span>
                <span>Vietnam Based</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;