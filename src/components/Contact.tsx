import { motion } from 'motion/react';
import { MapPin, Mail, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t, i18n } = useTranslation();
  return (
    <section id="contacto" className="py-20 bg-retro-red text-retro-cream px-4 border-t-[12px] border-retro-yellow relative overflow-hidden">
      <div className="absolute inset-0 bg-checkerboard-red opacity-50 z-0"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16 flex flex-col items-center"
        >
          <div className="bg-retro-cream px-10 py-3 border-4 border-retro-navy shadow-[6px_6px_0_rgba(0,0,0,0.5)] transform -rotate-1 relative">
             <h2 className="font-rye text-4xl md:text-5xl text-retro-navy uppercase tracking-widest mt-1">{t('contact.title')}</h2>
          </div>
          <p className="font-sans text-lg mt-6 max-w-2xl text-retro-cream bg-retro-navy/80 p-4 rounded-xl shadow-lg border-2 border-retro-yellow">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="lg:col-span-3 bg-retro-cream text-retro-navy p-6 md:p-12 border-4 border-retro-navy shadow-[10px_10px_0_#153243] transform rotate-1 relative flex flex-col items-center justify-center text-center"
          >
             <h3 className="font-rye text-3xl mb-6 text-retro-red">{t('contact.formTitle')}</h3>
             <p className="font-sans text-lg mb-8 max-w-md">{t('contact.formDesc')}</p>
             
             <a 
               href="https://docs.google.com/forms/d/e/1FAIpQLSf6grafjmkP253TS5wsydkEgOH2u-CHtNYuK6hWhja09wD7Sg/viewform" 
               target="_blank" 
               rel="noopener noreferrer"
               className="bg-retro-red text-retro-cream font-sans font-black text-xl tracking-widest uppercase py-5 px-8 md:px-12 border-4 border-retro-navy shadow-[6px_6px_0_#153243] hover:translate-y-1 hover:shadow-[2px_2px_0_#153243] transition-all flex items-center justify-center gap-3 w-full md:w-auto"
             >
                {t('contact.btn')} <ExternalLink className="w-6 h-6" />
             </a>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="lg:col-span-2 flex flex-col gap-8 justify-start"
          >
             <div className="bg-retro-navy p-8 border-4 border-retro-yellow shadow-[10px_10px_0_#F3E5D8] transform -rotate-1">
                <h3 className="font-rye text-3xl mb-4 text-retro-yellow">{i18n.language === 'es' ? '¿Dudas?' : 'Questions?'}</h3>
                <p className="font-sans text-lg mb-6 leading-relaxed">
                  {i18n.language === 'es' ? 'Si venís en grupo o tenéis alguna consulta, podéis escribirnos directamente a nuestro correo electrónico. Estaremos encantados de ayudaros.' : 'If you come in a group or have any questions, you can write to us directly. We will be happy to help.'}
                </p>
                <div className="flex flex-col gap-4">
                  <a href="mailto:festivalswingmonachil@gmail.com" className="flex items-center gap-4 group cursor-pointer">
                     <div className="bg-retro-red p-3 rounded-full border-2 border-retro-cream group-hover:bg-retro-yellow transition-colors shrink-0">
                       <Mail className="w-6 h-6 group-hover:text-retro-navy" />
                     </div>
                     <span className="font-sans font-bold text-lg group-hover:text-retro-yellow transition-colors break-all">festivalswingmonachil<br/>@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-4 mt-2">
                     <div className="bg-retro-teal p-3 rounded-full border-2 border-retro-cream shrink-0">
                       <MapPin className="w-6 h-6" />
                     </div>
                     <span className="font-sans font-bold opacity-80 text-lg">Monachil, Granada</span>
                  </div>
                </div>
             </div>

             <div className="bg-retro-cream text-retro-navy font-sans p-6 border-4 border-retro-navy shadow-[6px_6px_0_#153243] transform rotate-1">
               <h4 className="font-black uppercase tracking-wider text-retro-red mb-2 text-xl">{i18n.language === 'es' ? 'Prioridad Inscripción' : 'Registration Priority'}</h4>
               <p className="font-medium text-[15px] leading-relaxed">
                 {i18n.language === 'es' ? 'Tendrán prioridad las inscripciones en pareja. Las individuales pasarán a la lista de espera hasta adjudicar una pareja. Haremos lo posible para que nadie se quede sin plaza.' : 'Couple registrations will have priority. Single registrations will be placed on the waiting list until a partner is assigned. We will do our best to accommodate everyone.'}
               </p>
             </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
