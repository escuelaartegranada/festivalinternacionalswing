import { motion } from 'motion/react';
import { ArrowDown, Mic, Star, Music } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-retro-teal to-[#09575A] pt-12 pb-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]">
      
      {/* Background Graphic Elements - Jukebox Arch approximation */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-full max-w-5xl h-[70vh] bg-gradient-to-b from-retro-yellow/30 to-transparent rounded-t-full border-t-[30px] border-retro-yellow opacity-80 shadow-[0_0_50px_rgba(244,208,63,0.3)] pointer-events-none"></div>
      <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-full max-w-4xl h-[65vh] bg-retro-red/20 rounded-t-full border-t-[20px] border-retro-red opacity-80 pointer-events-none"></div>
      
      {/* Sparkles / Stars Background */}
      <div className="absolute top-1/4 left-[10%] transform -rotate-12 animate-pulse z-0">
        <Mic className="w-20 h-20 text-retro-cream/50 drop-shadow-xl" />
      </div>

      <div className="absolute top-1/3 right-[10%] transform rotate-12 animate-pulse z-0">
         <Music className="w-20 h-20 text-retro-yellow/50 drop-shadow-xl" />
      </div>

      <div className="relative z-20 container flex flex-col items-center justify-center text-center px-4 mt-8 mb-16">
        
        {/* Poster Top Label */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="flex items-center gap-3 mb-2 bg-retro-red px-8 py-2 rounded-full border-4 border-retro-yellow shadow-[4px_4px_0_rgba(0,0,0,0.3)] z-30 relative"
        >
           <Star className="w-5 h-5 text-retro-yellow fill-retro-yellow" />
           <span className="font-script text-retro-cream text-3xl md:text-4xl">Festival</span>
           <Star className="w-5 h-5 text-retro-yellow fill-retro-yellow" />
        </motion.div>

        <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 0.8, type: 'spring', delay: 0.2 }}
           className="relative flex flex-col items-center"
        >
          {/* Big "Swing" */}
          <h1 className="font-swing text-[7rem] md:text-[14rem] text-retro-yellow tracking-tighter text-shadow-swing relative z-10 leading-[0.8] mb-4 transform -rotate-2">
            Swing
          </h1>
          
          <div className="relative z-20 flex flex-col items-center mt-[-30px] md:mt-[-50px]">
            {/* Banner for MONACHIL */}
            <div className="bg-retro-red text-retro-yellow font-rye text-3xl md:text-6xl py-2 px-12 border-[6px] border-retro-yellow shadow-[6px_6px_0_#153243] transform rotate-1 uppercase tracking-widest relative">
              <span className="absolute top-2 left-2"><Star className="w-3 h-3 md:w-4 md:h-4 text-retro-yellow fill-retro-yellow" /></span>
              <span className="absolute top-2 right-2"><Star className="w-3 h-3 md:w-4 md:h-4 text-retro-yellow fill-retro-yellow" /></span>
              Monachil
              <span className="absolute bottom-2 left-2"><Star className="w-3 h-3 md:w-4 md:h-4 text-retro-yellow fill-retro-yellow" /></span>
              <span className="absolute bottom-2 right-2"><Star className="w-3 h-3 md:w-4 md:h-4 text-retro-yellow fill-retro-yellow" /></span>
            </div>
            
            <div className="bg-retro-navy text-retro-yellow font-deco text-4xl md:text-6xl py-2 px-16 border-4 border-retro-yellow shadow-[4px_4px_0_rgba(0,0,0,0.5)] mt-[-10px] transform -rotate-2 z-10">
              2026
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8 md:mt-12 flex flex-col gap-4 items-center relative z-20 drop-shadow-lg transform rotate-2"
        >
          <div className="flex items-center gap-4 md:gap-6 bg-retro-cream px-8 md:px-10 py-5 rounded-xl border-4 border-retro-navy shadow-[10px_10px_0_#d3202e] text-retro-navy">
            <span className="font-sans font-black text-3xl md:text-6xl tracking-widest flex items-center gap-1 md:gap-2">
              17<Star className="w-6 h-6 md:w-8 md:h-8 text-retro-red fill-retro-red" />
              18<Star className="w-6 h-6 md:w-8 md:h-8 text-retro-red fill-retro-red" />
              19
            </span>
          </div>
          <div className="bg-retro-red text-retro-cream font-rye text-2xl md:text-4xl py-2 px-12 rounded-full border-4 border-retro-yellow shadow-[4px_4px_0_#153243] uppercase tracking-widest mt-[-20px] relative z-10">
            Julio
          </div>
        </motion.div>
      </div>

      {/* Retro Checkerboard Floor Accent at bottom - 3D skewed effect */}
      <div className="relative w-full h-[25vh] overflow-hidden border-t-[10px] border-retro-yellow z-0">
        <div className="absolute inset-0 bg-checkerboard-red" style={{ 
          transform: 'perspective(1000px) rotateX(60deg) scale(2)',
          transformOrigin: 'top',
          boxShadow: 'inset 0 30px 50px rgba(0,0,0,0.8)'
        }}></div>
      </div>

    </section>
  );
}
