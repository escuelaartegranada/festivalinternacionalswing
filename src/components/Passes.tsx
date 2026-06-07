import { motion } from 'motion/react';
import { passes } from '../data';
import { Ticket } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Passes() {
  const { t } = useTranslation();
  return (
    <section id="pases" className="py-20 bg-retro-yellow border-y-[16px] border-retro-navy px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="font-rye text-4xl md:text-6xl text-retro-navy uppercase tracking-wider mb-4">{t('passes.title')}</h2>
          <p className="font-sans font-bold text-xl text-retro-navy">{t('passes.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {passes.map((pass, index) => (
            <motion.div 
              key={pass.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-retro-cream p-6 border-4 border-retro-navy flex flex-col relative transform hover:-translate-y-2 transition-transform shadow-[6px_6px_0_#153243]"
            >
              {/* Ticket Notch effect using pseudo elements would be complex here, so we use an icon */}
              <div className="absolute top-4 right-4 text-retro-red opacity-80">
                <Ticket className="w-8 h-8" />
              </div>
              <h3 className="font-deco text-2xl text-retro-red uppercase mb-4 pr-10">{t(`data.passesName.${index}`, { defaultValue: pass.name })}</h3>
              <p className="font-sans font-medium text-retro-navy text-sm flex-grow leading-relaxed">
                {t(`data.passesDesc.${index}`, { defaultValue: pass.description })}
              </p>
              <div className="mt-6 pt-4 border-t-2 border-retro-navy/20 border-dashed">
                <div className="font-swing text-4xl text-retro-teal text-center">
                  {pass.price}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSf6grafjmkP253TS5wsydkEgOH2u-CHtNYuK6hWhja09wD7Sg/viewform" target="_blank" rel="noopener noreferrer" className="inline-block bg-retro-red text-retro-yellow font-rye text-2xl uppercase tracking-widest py-4 px-12 border-4 border-retro-navy shadow-[8px_8px_0_#153243] hover:translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0_#153243] transition-all">
            {t('passes.buy')}
          </a>
        </div>
      </div>
    </section>
  );
}
