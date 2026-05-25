import { motion } from 'motion/react';
import { scheduleData } from '../data';
import { Music, Star, GlassWater, Info } from 'lucide-react';

export default function Schedule() {
  const getIcon = (type: string) => {
    switch(type) {
      case 'show': return <Star className="w-5 h-5 text-retro-yellow" />;
      case 'party': return <GlassWater className="w-5 h-5 text-retro-cyan" />;
      case 'info': return <Info className="w-5 h-5 text-retro-navy/50" />;
      default: return <Music className="w-5 h-5 text-retro-red" />;
    }
  };

  return (
    <section id="programacion" className="py-20 bg-retro-cream border-t-[16px] border-retro-cyan px-4 relative overflow-hidden">
      {/* Texture bg */}
      <div className="absolute inset-0 bg-pattern opacity-50 z-0 pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="font-rye text-4xl md:text-6xl text-retro-navy uppercase tracking-wider mb-4 shadow-sm inline-block px-10 py-2 border-4 border-retro-navy bg-retro-yellow shadow-[6px_6px_0_#d3202e] transform -rotate-1">Programación</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {scheduleData.map((day, dayIndex) => (
            <motion.div 
              key={day.date}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: dayIndex * 0.2 }}
              className="bg-white p-6 md:p-8 rounded-xl shadow-[10px_10px_0px_#153243] border-4 border-retro-navy flex flex-col relative"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-retro-red rounded-full border-4 border-retro-navy shadow-[4px_4px_0_#153243] flex items-center justify-center font-bold text-retro-cream font-rye z-20 transform rotate-12">
                {dayIndex + 17}
              </div>

              <div className="mb-6 flex flex-col gap-2 border-b-4 border-retro-navy/10 pb-6">
                <span className="font-rye text-3xl text-retro-red uppercase">{day.day}</span>
                <span className="font-sans font-bold text-sm text-retro-teal uppercase tracking-widest bg-retro-teal/10 p-2 rounded">{day.location}</span>
              </div>

              <div className="flex-1 flex flex-col gap-5">
                {day.events.map((event, i) => (
                  <div key={event.id} className={`flex gap-4 items-start ${event.type === 'info' ? 'opacity-80 pb-4 border-b border-dashed border-slate-300' : ''}`}>
                    <div className="font-sans font-bold text-retro-navy bg-retro-yellow px-2 py-1 border-2 border-retro-navy shadow-[2px_2px_0_#153243] transform -rotate-1 whitespace-nowrap mt-1">
                      {event.time}
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-sans font-bold leading-tight mb-1 flex items-center gap-2 ${event.type === 'info' ? 'text-slate-600 text-sm' : 'text-retro-navy text-lg'}`}>
                        {event.title}
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
