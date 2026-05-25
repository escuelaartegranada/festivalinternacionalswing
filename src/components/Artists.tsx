import { motion } from 'motion/react';
import { bands } from '../data';
import { Star } from 'lucide-react';

export default function Artists() {
  return (
    <section id="artistas" className="py-20 bg-retro-navy text-retro-cream px-4 border-y-[12px] border-retro-red relative overflow-hidden">
      <div className="absolute inset-0 bg-checkerboard-blue opacity-50 z-0"></div>

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
             <h2 className="font-rye text-4xl md:text-5xl text-retro-yellow uppercase tracking-widest mt-1">Artistas Invitados</h2>
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
              <div className="relative h-72 w-full overflow-hidden border-4 border-retro-cream shadow-[10px_10px_0_#d3202e] bg-slate-900 rounded-none mix-blend-normal">
                <img 
                  src={band.image} 
                  alt={band.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter contrast-125 sepia-[.3]"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-retro-navy via-retro-navy/40 to-transparent flex flex-col justify-end p-5">
                  <div className="font-sans font-black text-xs tracking-widest text-retro-red uppercase bg-retro-cream py-1 px-3 inline-block self-start mb-3 border-2 border-retro-red transform -rotate-2">
                    {band.role}
                  </div>
                  <h3 className="font-rye text-2xl md:text-3xl text-retro-yellow tracking-wider leading-none drop-shadow-[2px_2px_0_#d3202e]">{band.name}</h3>
                </div>
              </div>
            </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
