import { motion } from 'motion/react';
import { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';

export default function Hero() {
  const [headerLoaded, setHeaderLoaded] = useState(true);
  const { t } = useTranslation();

  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-retro-navy pt-20">
      
      <div className="relative z-20 w-full h-[50vh] md:h-[70vh] lg:h-[85vh] flex flex-col items-center justify-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="relative w-full h-full"
        >
          <img 
            src="/images/cabecera.jpg" 
            alt="Festival Internacional de Swing Monachil 2026" 
            className={`w-full h-full object-cover object-center ${!headerLoaded ? 'hidden' : 'block'}`}
            onError={() => setHeaderLoaded(false)}
          />
          
          {!headerLoaded && (
            <div className="w-full h-full bg-retro-navy flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#1a7a76] to-[#0c4442]">
               <h2 className="font-rye text-3xl md:text-5xl text-retro-yellow mb-4">{t('hero.title')}</h2>
               <p className="font-sans text-retro-cream text-lg md:text-xl">
                 <Trans i18nKey="hero.subtitle" components={{ 1: <code className="bg-black/30 px-2 py-1 rounded" />, 3: <code className="text-[#f4d03f]" /> }} />
               </p>
            </div>
          )}
        </motion.div>
        
      </div>

    </section>
  );
}

