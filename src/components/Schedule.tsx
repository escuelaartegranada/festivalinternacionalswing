import { motion } from 'motion/react';
import { scheduleData } from '../data';
import { Music, Star, GlassWater, Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Schedule() {
  const { t } = useTranslation();
  const getIcon = (type: string) => {
    switch(type) {
      case 'show': return <Star className="w-5 h-5 text-retro-yellow" />;
      case 'party': return <GlassWater className="w-5 h-5 text-retro-car" />;
      case 'info': return <Info className="w-4 h-4 text-retro-cream/50" />;
      default: return <Music className="w-4 h-4 text-retro-cream/70" />;
    }
  };

  return (
    <section id="programacion" className="py-20 bg-gradient-to-b from-[#09575A] to-retro-navy border-t-[8px] border-retro-yellow px-4 relative overflow-hidden">
      {/* Texture bg */}
      <div className="absolute inset-0 bg-pattern opacity-10 z-0 pointer-events-none mix-blend-overlay"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {scheduleData.map((day, dayIndex) => (
            <motion.div 
              key={day.date}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: dayIndex * 0.2 }}
              className="flex flex-col relative text-retro-cream"
            >
              <div className="mb-6 flex items-baseline gap-2 pb-2">
                <span className="font-rye text-7xl md:text-8xl text-retro-cream text-shadow-outline leading-none">{dayIndex + 17}</span>
                <div className="flex flex-col">
                  <span className="font-rye text-3xl text-retro-yellow uppercase tracking-widest leading-none mb-1">{t(`data.scheduleDay.${day.day}`, { defaultValue: day.day })}</span>
                  <span className="font-sans font-bold text-xs text-retro-car uppercase tracking-widest">{t(`data.scheduleLoc.${day.day}`, { defaultValue: day.location })}</span>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-4 pl-2 border-l-2 border-retro-yellow/30">
                {day.events.map((event, i) => (
                  <div key={event.id} className={`flex gap-4 items-start ${event.type === 'info' ? 'opacity-80' : ''}`}>
                    <div className={`font-sans font-black ${event.type === 'info' ? 'text-retro-car' : 'text-retro-yellow'} whitespace-nowrap mt-1 tracking-wider w-16`}>
                      {event.time.replace(' h.', 'h')}
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-sans font-bold leading-tight flex items-center gap-2 ${event.type === 'info' ? 'text-retro-cream/70 text-sm' : 'text-retro-cream text-lg uppercase font-black tracking-wide'}`}>
                        {t(`data.scheduleEvent.${event.id}`, { defaultValue: event.title })}
                        {getIcon(event.type)}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
