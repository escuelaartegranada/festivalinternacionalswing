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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshops.map((workshop, index) => (
            <motion.div 
               key={workshop.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className="bg-retro-cream text-retro-navy p-6 border-l-8 border-retro-red flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                   <h3 className="font-bold font-sans text-2xl uppercase tracking-wider text-retro-teal">{workshop.style}</h3>
                   <Music className="w-5 h-5 text-retro-yellow" />
                </div>
                <p className="font-sans font-bold text-lg leading-tight mb-2">{workshop.teachers}</p>
              </div>
              {workshop.school && (
                <div className="text-xs font-sans font-medium uppercase tracking-widest text-retro-red flex items-center gap-1 mt-4 border-t border-retro-navy/10 pt-4">
                  <Sparkles className="w-3 h-3" />
                  {workshop.school}
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
