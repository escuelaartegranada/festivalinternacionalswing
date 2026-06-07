import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { bands } from '../data';
import { Star, Users, X, Music } from 'lucide-react';
import { Artist } from '../types';
import { useTranslation } from 'react-i18next';

export default function Artists() {
  const [selectedBand, setSelectedBand] = useState<Artist | null>(null);
  const { t } = useTranslation();

  return (
    <section id="artistas" className="py-20 bg-retro-navy text-retro-cream px-4 border-t-[8px] border-retro-red relative overflow-hidden">
      {/* Smooth vintage glowing background instead of harsh checkerboard */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1a7a76_0%,_#021422_70%)] opacity-80 z-0 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay z-0 pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16 flex flex-col items-center"
        >
          <div className="bg-retro-red px-10 py-3 border-4 border-retro-yellow shadow-[6px_6px_0_rgba(0,0,0,0.5)] transform -rotate-2 relative">
             <span className="absolute top-2 left-2"><Star className="w-3 h-3 text-retro-yellow fill-retro-yellow" /></span>
             <span className="absolute top-2 right-2"><Star className="w-3 h-3 text-retro-yellow fill-retro-yellow" /></span>
             <h2 className="font-rye text-4xl md:text-5xl text-retro-yellow uppercase tracking-widest mt-1">{t('artists.title')}</h2>
             <span className="absolute bottom-2 left-2"><Star className="w-3 h-3 text-retro-yellow fill-retro-yellow" /></span>
             <span className="absolute bottom-2 right-2"><Star className="w-3 h-3 text-retro-yellow fill-retro-yellow" /></span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bands.map((band, index) => (
            <motion.div
              key={band.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-80 w-full overflow-hidden border-4 border-retro-cream shadow-[10px_10px_0_#d3202e] bg-slate-900 rounded-none flex flex-col justify-end">
                {/* Clean Image Rendering without complex filters */}
                <img 
                  src={band.image} 
                  alt={band.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-retro-navy via-retro-navy/60 to-transparent z-10 pointer-events-none"></div>
                
                <div className="relative z-20 p-5 flex flex-col justify-end h-full">
                  <div className="flex justify-between items-center mb-3">
                     <span className="font-sans font-black text-xs tracking-widest text-retro-red uppercase bg-retro-cream py-1 px-3 inline-block border-2 border-retro-red transform -rotate-2">
                       {t(`data.bandRole.${band.id}`, { defaultValue: band.role })}
                     </span>
                     
                     {band.members && (
                       <button
                         onClick={() => setSelectedBand(band)}
                         className="flex items-center gap-1.5 font-sans font-bold text-xs bg-retro-yellow text-retro-navy px-2.5 py-1 border-2 border-retro-navy shadow-[2px_2px_0_rgba(0,0,0,0.35)] hover:translate-y-0.5 hover:shadow-[1px_1px_0_rgba(0,0,0,0.35)] transition-all uppercase cursor-pointer"
                       >
                         <Users className="w-3.5 h-3.5" />
                         {t('artists.viewMembers')}
                       </button>
                     )}
                  </div>
                  
                  <h3 className="font-rye text-2xl md:text-3xl text-retro-yellow tracking-wider leading-none drop-shadow-[2px_2px_0_#d3202e] mb-1">
                    {band.name}
                  </h3>
                  
                  {band.members && (
                    <span className="font-sans text-xs text-retro-cream/85 font-semibold tracking-wider">
                      {t('artists.quintet')}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
           ))}
        </div>
      </div>

      {/* MODAL PARA VER COMPONENTES DE LA BANDA */}
      <AnimatePresence>
        {selectedBand && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-retro-cream border-4 border-retro-navy shadow-[12px_12px_0_#d3202e] text-retro-navy w-full max-w-4xl p-6 md:p-8 relative max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedBand(null)}
                className="absolute top-4 right-4 bg-retro-red text-retro-cream p-2 border-2 border-retro-navy hover:bg-retro-yellow hover:text-retro-navy cursor-pointer transition-colors shadow-[2px_2px_0_rgba(0,0,0,0.5)]"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-8 border-b-4 border-dashed border-retro-navy/20 pb-4 pr-12">
                 <div className="flex items-center gap-2 mb-2">
                    <span className="font-sans font-black text-xs text-retro-cream bg-retro-red py-1 px-3 border-2 border-retro-navy uppercase transform -rotate-1">
                      {t(`data.bandRole.${selectedBand.id}`, { defaultValue: selectedBand.role })}
                    </span>
                    <span className="font-sans font-bold text-xs uppercase text-retro-teal tracking-widest flex items-center gap-1">
                      <Music className="w-3.5 h-3.5" /> {t('artists.members')}
                    </span>
                 </div>
                 <h2 className="font-rye text-4xl text-retro-red drop-shadow-[1px_1px_0_#fff] uppercase leading-none">{selectedBand.name}</h2>
              </div>

              {/* Grid of members */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {selectedBand.members?.map((member, i) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex flex-col items-center bg-white p-4 border-2 border-retro-navy shadow-[6px_6px_0_#153243] text-center"
                  >
                    <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-retro-yellow mb-4 bg-slate-100">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h4 className="font-rye text-lg text-retro-navy leading-tight mb-1">{member.name}</h4>
                    <span className="font-sans text-xs text-retro-teal uppercase font-black tracking-wide">{t(`data.bandInstrument.${member.name}`, { defaultValue: member.instrumentOrRole })}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
