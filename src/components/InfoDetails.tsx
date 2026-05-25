import { motion } from 'motion/react';
import { Bed, Map, Bus, Info } from 'lucide-react';

export default function InfoDetails() {
  return (
    <section id="info" className="py-20 bg-pattern px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="font-deco text-4xl md:text-6xl text-retro-navy uppercase tracking-wider mb-4 bg-retro-cream inline-block px-8 py-2 border-4 border-retro-navy shadow-[8px_8px_0px_#d90368]">Información Útil</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Alojamiento */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-retro-cream border-4 border-retro-navy p-8 relative"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-retro-cyan border-l-4 border-b-4 border-retro-navy flex items-center justify-center">
              <Bed className="w-8 h-8 text-retro-navy" />
            </div>
            <h3 className="font-deco text-3xl text-retro-navy mb-4">Alojamientos</h3>
            <div className="space-y-4 font-sans text-retro-navy">
              <p>Monachil cuenta con una gran variedad de opciones para tu estancia durante el festival.</p>
              <ul className="list-disc pl-5 space-y-2 font-medium">
                <li><span className="text-retro-red font-bold">Hotel Granada Palace</span> (Sede de la Pool Party) - Oferta especial para asistentes.</li>
                <li>Casas rurales en el casco antiguo.</li>
                <li>Hostales y apartamentos turísticos cerca del Parque de los Aragones.</li>
              </ul>
              <button className="mt-6 bg-retro-yellow text-retro-navy border-2 border-retro-navy font-bold py-3 px-6 hover:bg-retro-navy hover:text-retro-yellow transition-colors uppercase tracking-widest text-sm">
                Ver Guía Completa
              </button>
            </div>
          </motion.div>

          {/* Transporte y Lugares */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-retro-cream border-4 border-retro-navy p-8 relative"
          >
             <div className="absolute top-0 right-0 w-16 h-16 bg-retro-yellow border-l-4 border-b-4 border-retro-navy flex items-center justify-center">
              <Map className="w-8 h-8 text-retro-navy" />
            </div>
            <h3 className="font-deco text-3xl text-retro-navy mb-4">Lugares & Transporte</h3>
            <div className="space-y-4 font-sans text-retro-navy">
              <p>El festival se desarrolla principalmente en Monachil pueblo, a tan solo unos minutos de Granada.</p>
              
              <div className="bg-white p-4 border-2 border-retro-navy/20 rounded">
                <h4 className="font-bold text-retro-cyan flex items-center gap-2 mb-2">
                  <Bus className="w-4 h-4"/> Línea de Autobús 0183
                </h4>
                <p className="text-sm">Granada (Paseo de los Basilios) - Monachil Pueblo. Salidas regulares cada hora.</p>
              </div>

              <div className="bg-white p-4 border-2 border-retro-navy/20 rounded">
                <h4 className="font-bold text-retro-cyan flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4"/> Turismo Local
                </h4>
                <p className="text-sm">Aprovecha para visitar Los Cahorros o tapear por el casco histórico entre talleres y conciertos.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
