import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { teachers, workshops } from '../data';
import { Sparkles, Music, X } from 'lucide-react';
import { Artist } from '../types';
import { useTranslation } from 'react-i18next';

export default function Workshops() {
  const [selectedTeacher, setSelectedTeacher] = useState<Artist | null>(null);
  const { t } = useTranslation();

  // Helper to truncate text to approx 150 characters
  const truncateText = (text: string, limit: number = 150) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit).trim() + '...';
  };

  return (
    <section id="workshops" className="py-20 bg-retro-navy text-retro-cream px-4 relative overflow-hidden">
      {/* Abstract retro shapes background */}
      <div className="absolute top-[-100px] right-[-100px] w-64 h-64 bg-retro-red rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-80 h-80 bg-retro-teal rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* PROFESORES GLOBALES */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
           <h2 className="font-deco text-4xl md:text-6xl text-retro-yellow uppercase tracking-wider mb-4">{t('workshops.title')}</h2>
           <div className="h-1 w-32 bg-retro-car mx-auto mt-6"></div>
        </motion.div>

        <div className="flex flex-col gap-12 mb-24">
          {teachers.map((teacher, index) => {
             const isLongText = teacher.description && teacher.description.length > 200;
             return (
              <motion.div
                key={teacher.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-retro-cream border-4 border-retro-yellow shadow-[12px_12px_0_#d3202e] flex flex-col md:flex-row overflow-hidden group"
              >
                <div className="w-full md:w-2/5 h-80 md:h-auto relative overflow-hidden bg-slate-800 border-b-4 md:border-b-0 md:border-r-4 border-retro-yellow">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 md:p-10 w-full md:w-3/5 flex flex-col justify-center">
                  <div className="mb-4 text-left">
                    <h3 className="font-rye text-3xl md:text-5xl text-retro-red uppercase tracking-wider leading-tight mb-3 drop-shadow-[1px_1px_0_#153243]">{teacher.name}</h3>
                    <div className="font-sans font-black text-sm tracking-widest text-retro-cream uppercase bg-retro-navy py-1.5 px-4 inline-block border-2 border-retro-car">
                      {t(`data.teacherRole.${teacher.id}`, { defaultValue: teacher.role })}
                    </div>
                  </div>
                  {teacher.description && (
                    <div className="font-sans text-retro-navy/80 leading-relaxed text-sm md:text-base font-medium">
                      <p>{isLongText ? truncateText(t(`data.teacherDesc.${teacher.id}`, { defaultValue: teacher.description }), 200) : t(`data.teacherDesc.${teacher.id}`, { defaultValue: teacher.description })}</p>
                      {isLongText && (
                        <button 
                          onClick={() => setSelectedTeacher(teacher)}
                          className="mt-3 text-retro-red font-bold uppercase tracking-wider text-sm hover:text-retro-car transition-colors underline decoration-2 underline-offset-4"
                        >
                          {t('workshops.readMore')}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
             );
          })}
        </div>

        {/* TALLERES DE ESTILOS */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-12"
        >
          <h2 className="font-deco text-3xl md:text-5xl text-retro-car uppercase tracking-wider mb-4">{t('workshops.stylesTitle')}</h2>
          <div className="h-1 w-24 bg-retro-red mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
             /* ... */
            <motion.div 
               key={workshop.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className="bg-retro-navy text-retro-cream border-4 border-retro-yellow flex flex-col group overflow-hidden relative shadow-[8px_8px_0_#d3202e]"
            >
              <div className="h-56 w-full overflow-hidden relative border-b-4 border-retro-yellow bg-slate-800">
                <img 
                   src={workshop.image} 
                   alt={workshop.teachers} 
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute top-3 left-3 bg-retro-red text-retro-cream font-sans font-bold text-xs uppercase px-3 py-1 border-2 border-retro-yellow shadow-[4px_4px_0_#153243] transform -rotate-3 rounded-sm">
                  {t(`data.workshopStyle.${workshop.id}`, { defaultValue: workshop.style })}
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                   <h3 className="font-rye text-2xl uppercase tracking-wider text-retro-yellow mb-2 leading-tight">{workshop.teachers}</h3>
                </div>
                {workshop.school && (
                  <div className="text-xs font-sans font-black uppercase tracking-widest text-retro-car flex items-center gap-2 mt-4 pt-4 border-t-2 border-retro-cream/10 border-dashed">
                    <Sparkles className="w-4 h-4" />
                    {workshop.school}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
      
      {/* MODAL PARA VER INFO DE PROFESORES */}
      <AnimatePresence>
        {selectedTeacher && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm px-4 md:px-12 py-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-retro-cream border-4 border-retro-navy shadow-[12px_12px_0_#d3202e] text-retro-navy w-full max-w-4xl max-h-[85vh] flex flex-col md:flex-row relative"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedTeacher(null)}
                className="absolute top-4 right-4 z-10 bg-retro-red text-retro-cream p-2 border-2 border-retro-navy hover:bg-retro-yellow hover:text-retro-navy cursor-pointer transition-colors shadow-[2px_2px_0_rgba(0,0,0,0.5)]"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden bg-slate-800 border-b-4 md:border-b-0 md:border-r-4 border-retro-navy shrink-0 hidden md:block">
                 <img 
                   src={selectedTeacher.image} 
                   alt={selectedTeacher.name} 
                   className="w-full h-full object-cover"
                 />
              </div>

              <div className="p-6 md:p-10 flex flex-col overflow-y-auto">
                 <div className="mb-4 pr-10">
                    <span className="font-sans font-black text-xs text-retro-cream bg-retro-red py-1 px-3 border-2 border-retro-navy uppercase tracking-widest inline-block mb-3">
                      {t(`data.teacherRole.${selectedTeacher.id}`, { defaultValue: selectedTeacher.role })}
                    </span>
                    <h2 className="font-rye text-4xl text-retro-red drop-shadow-[1px_1px_0_#fff] uppercase leading-none">{selectedTeacher.name}</h2>
                 </div>
                 
                 <div className="font-sans text-retro-navy/90 text-sm md:text-[15px] leading-relaxed font-medium pb-4">
                    {t(`data.teacherDesc.${selectedTeacher.id}`, { defaultValue: selectedTeacher.description || '' }).split('\n').map((paragraph, idx) => (
                      <p key={idx} className="mb-3">{paragraph}</p>
                    ))}
                 </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
