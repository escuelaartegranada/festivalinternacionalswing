import { motion } from 'motion/react';
import { MapPin, Calendar, ArrowDown, Mic, Star, Music } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-retro-teal to-retro-navy pt-20 pb-16">
      
      {/* Background Graphic Elements - Jukebox Arch approximation */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[60vh] bg-gradient-to-b from-retro-yellow/20 to-transparent rounded-t-full border-t-[20px] border-retro-yellow opacity-60"></div>
      <div className="absolute top-[20px] left-1/2 -translate-x-1/2 w-full max-w-3xl h-[55vh] rounded-t-full border-t-[10px] border-retro-red opacity-80"></div>
      
      <div className="absolute top-1/4 left-[10%] opacity-40 transform -rotate-12">
        <Mic className="w-24 h-24 text-retro-cream drop-shadow-xl" />
      </div>

      <div className="absolute top-1/3 right-[10%] opacity-40 transform rotate-12">
         <Music className="w-24 h-24 text-retro-yellow drop-shadow-xl" />
      </div>

      {/* Retro Checkerboard Floor Accent at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32" style={{ 
        backgroundImage: 'linear-gradient(45deg, #d3202e 25%, transparent 25%, transparent 75%, #d3202e 75%, #d3202e), linear-gradient(45deg, #d3202e 25%, transparent 25%, transparent 75%, #d3202e 75%, #d3202e)',
        backgroundPosition: '0 0, 40px 40px',
        backgroundSize: '80px 80px',
        backgroundColor: '#F3E5D8',
        transform: 'perspective(500px) rotateX(60deg)',
        transformOrigin: 'bottom',
        boxShadow: 'inset 0 20px 40px rgba(0,0,0,0.5)'
      }}></div>

      <div className="relative z-10 container flex flex-col items-center justify-center text-center px-4 mt-12">
        
        {/* Poster Top Label */}
        <div className="flex items-center gap-3 mb-2 bg-retro-red/80 px-6 py-2 rounded-t-lg border-2 border-retro-yellow">
           <Star className="w-5 h-5 text-retro-yellow fill-retro-yellow" />
           <span className="font-script text-retro-cream text-4xl -rotate-2">Festival</span>
           <Star className="w-5 h-5 text-retro-yellow fill-retro-yellow" />
        </div>

        <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 0.8, type: 'spring' }}
           className="relative flex flex-col items-center"
        >
          <h1 className="font-swing text-[8rem] md:text-[14rem] text-retro-yellow tracking-tighter text-shadow-swing relative z-10 leading-[0.8] mb-4">
            Swing
          </h1>
          
          <div className="relative z-20 flex flex-col items-center">
            <div className="bg-retro-red text-retro-yellow font-rye text-3xl md:text-5xl py-2 px-10 border-4 border-retro-yellow shadow-[4px_4px_0_#153243] transform rotate-1 uppercase tracking-widest">
              Monachil
            </div>
            
            <div className="bg-retro-navy text-retro-yellow font-deco text-4xl md:text-6xl py-2 px-12 border-4 border-retro-yellow shadow-[4px_4px_0_rgba(0,0,0,0.5)] mt-[-15px] transform -rotate-2">
              2026
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 flex flex-col gap-4 items-center relative z-20 drop-shadow-lg"
        >
          <div className="flex items-center gap-6 bg-retro-cream px-10 py-4 transform rotate-1 border-4 border-retro-navy shadow-[8px_8px_0_rgba(0,0,0,0.3)] text-retro-navy">
            <span className="font-sans font-black text-4xl md:text-5xl tracking-widest">17<span className="text-retro-red mx-1">*</span>18<span className="text-retro-red mx-1">*</span>19</span>
            <span className="font-script text-retro-red capitalize text-5xl md:text-6xl border-l-4 border-retro-navy pl-6">Julio</span>
          </div>
        </motion.div>
      </div>

      <motion.a 
        href="#programacion"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-retro-cream hover:text-retro-yellow transition-colors z-20"
      >
        <span className="font-sans text-sm font-bold tracking-widest uppercase mb-2 bg-retro-navy px-4 py-1 rounded-full border border-retro-cyan/30">Descubre</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown className="w-8 h-8 drop-shadow-[0_0_10px_rgba(0,0,0,1)]" />
        </motion.div>
      </motion.a>
    </section>
  );
}
