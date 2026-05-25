import { motion } from 'motion/react';
import { bands } from '../data';

export default function Artists() {
  return (
    <section id="artistas" className="py-20 bg-retro-teal text-retro-cream px-4">
      <div className="container mx-auto max-w-6xl relative z-10">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="font-deco text-4xl md:text-6xl text-retro-yellow uppercase tracking-wider mb-4">Artistas Invitados</h2>
          <div className="h-1 w-32 bg-retro-red mx-auto mt-6"></div>
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
              <div className="relative h-64 w-full overflow-hidden border-4 border-retro-cream shadow-[8px_8px_0_#153243] bg-slate-800 rounded-none mix-blend-normal">
                <img 
                  src={band.image} 
                  alt={band.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-retro-navy flex flex-col justify-end p-4">
                  <div className="font-sans font-bold text-xs tracking-widest text-retro-navy uppercase bg-retro-car py-1 px-3 inline-block self-start mb-2 border border-retro-navy">
                    {band.role}
                  </div>
                  <h3 className="font-rye text-xl md:text-2xl text-retro-yellow leading-tight">{band.name}</h3>
                </div>
              </div>
            </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
