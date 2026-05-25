import { motion } from 'motion/react';
import { sponsors } from '../data';

export default function Sponsors() {
  return (
    <section id="patrocinadores" className="py-16 bg-retro-cream border-t-[16px] border-retro-red px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-10"
        >
          <h2 className="font-deco text-3xl md:text-5xl text-retro-navy uppercase tracking-wider mb-4">Patrocinadores</h2>
          <div className="h-1 w-20 bg-retro-cyan mx-auto"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70 hover:opacity-100 transition-opacity">
          {sponsors.map((sponsor, index) => (
            <motion.div 
              key={sponsor.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <span className="font-sans text-xs font-bold text-retro-red tracking-widest uppercase mb-2">{sponsor.role}</span>
              <div className="font-deco text-xl md:text-2xl text-retro-navy">
                {sponsor.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
