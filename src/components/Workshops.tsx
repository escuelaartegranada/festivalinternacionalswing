import { motion } from 'motion/react';
import { teachers, workshops } from '../data';
import { Sparkles, Music } from 'lucide-react';

export default function Workshops() {
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
          <h2 className="font-deco text-4xl md:text-6xl text-retro-yellow uppercase tracking-wider mb-4">Profesores de Baile</h2>
          <div className="h-1 w-32 bg-retro-car mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative h-80 w-full overflow-hidden border-4 border-retro-yellow bg-slate-800">
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale sepia group-hover:grayscale-0 group-hover:sepia-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-retro-navy via-retro-navy/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 text-center transform transition-transform duration-300">
                  <h3 className="font-deco text-2xl text-retro-cream mb-1 text-shadow-retro uppercase">{teacher.name}</h3>
                  <div className="font-sans font-bold text-xs tracking-widest text-retro-navy uppercase bg-retro-yellow py-1 px-3 inline-block">
                    {teacher.role}
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 inset-0 bg-retro-car translate-x-3 translate-y-3 transition-transform group-hover:translate-x-5 group-hover:translate-y-5"></div>
            </motion.div>
           ))}
        </div>

        {/* TALLERES DE ESTILOS */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-12"
        >
          <h2 className="font-deco text-3xl md:text-5xl text-retro-car uppercase tracking-wider mb-4">Talleres de Estilos</h2>
          <div className="h-1 w-24 bg-retro-red mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
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
                   className="w-full h-full object-cover grayscale sepia transition-transform duration-500 group-hover:scale-110 group-hover:grayscale-0 group-hover:sepia-0" 
                />
                <div className="absolute top-3 left-3 bg-retro-red text-retro-cream font-sans font-bold text-xs uppercase px-3 py-1 border-2 border-retro-yellow shadow-[4px_4px_0_#153243] transform -rotate-3 rounded-sm">
                  {workshop.style}
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
    </section>
  );
}
