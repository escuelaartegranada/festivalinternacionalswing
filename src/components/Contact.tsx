import { motion } from 'motion/react';
import { Send, MapPin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-retro-red text-retro-cream px-4 border-t-[12px] border-retro-yellow relative overflow-hidden">
      <div className="absolute inset-0 bg-checkerboard-red opacity-50 z-0"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16 flex flex-col items-center"
        >
          <div className="bg-retro-cream px-10 py-3 border-4 border-retro-navy shadow-[6px_6px_0_rgba(0,0,0,0.5)] transform -rotate-1 relative">
             <h2 className="font-rye text-4xl md:text-5xl text-retro-navy uppercase tracking-widest mt-1">Inscripciones</h2>
          </div>
          <p className="font-sans text-lg mt-6 max-w-2xl text-retro-cream bg-retro-navy/80 p-4 rounded-xl shadow-lg border-2 border-retro-yellow">
            Rellena el formulario con tus datos para asegurar tu pase en esta edición del Swing Monachil 2026.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="lg:col-span-3 bg-retro-cream text-retro-navy p-6 md:p-10 border-4 border-retro-navy shadow-[10px_10px_0_#153243] transform rotate-1"
          >
             <h3 className="font-rye text-3xl mb-6 text-retro-red border-b-2 border-dashed border-retro-navy/20 pb-4">Formulario de Inscripción</h3>
             <form className="flex flex-col gap-6" onSubmit={(e) => { 
                e.preventDefault(); 
                const formData = new FormData(e.currentTarget);
                const name = formData.get("name");
                const lastname = formData.get("lastname");
                const email = formData.get("email");
                const phone = formData.get("phone");
                const role = formData.get("role");
                const partner = formData.get("partner");
                const passType = formData.get("passType");
                const message = formData.get("message");
                
                const subject = `Inscripción Swing Monachil 2026 - ${name} ${lastname}`;
                const body = `Nombre: ${name} ${lastname}
Email: ${email}
Teléfono: ${phone}
Rol: ${role || 'No especificado'}
Pareja: ${partner || 'No tiene / No especificado'}
Tipo de Pase: ${passType}

Comentarios:
${message}
`;
                window.location.href = `mailto:festivalswingmonachil@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                alert("Redirigiendo a tu cliente de correo...");
             }}>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="font-sans font-bold text-sm tracking-wider uppercase text-retro-teal">Nombre *</label>
                    <input type="text" id="name" name="name" required className="bg-white border-2 border-retro-navy p-3 font-sans focus:outline-none focus:ring-2 focus:ring-retro-red" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="lastname" className="font-sans font-bold text-sm tracking-wider uppercase text-retro-teal">Apellidos *</label>
                    <input type="text" id="lastname" name="lastname" required className="bg-white border-2 border-retro-navy p-3 font-sans focus:outline-none focus:ring-2 focus:ring-retro-red" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="font-sans font-bold text-sm tracking-wider uppercase text-retro-teal">Email *</label>
                    <input type="email" id="email" name="email" required className="bg-white border-2 border-retro-navy p-3 font-sans focus:outline-none focus:ring-2 focus:ring-retro-red" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="phone" className="font-sans font-bold text-sm tracking-wider uppercase text-retro-teal">Teléfono *</label>
                    <input type="tel" id="phone" name="phone" required className="bg-white border-2 border-retro-navy p-3 font-sans focus:outline-none focus:ring-2 focus:ring-retro-red" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="flex flex-col gap-1">
                      <label htmlFor="role" className="font-sans font-bold text-sm tracking-wider uppercase text-retro-teal">Rol en Pareja</label>
                      <select id="role" name="role" className="bg-white border-2 border-retro-navy p-3 font-sans focus:outline-none focus:ring-2 focus:ring-retro-red">
                         <option value="">No aplica / Solo Jazz</option>
                         <option value="Leader">Leader</option>
                         <option value="Follower">Follower</option>
                      </select>
                   </div>
                   <div className="flex flex-col gap-1">
                      <label htmlFor="partner" className="font-sans font-bold text-sm tracking-wider uppercase text-retro-teal">Nombre de Pareja de Baile</label>
                      <input type="text" id="partner" name="partner" className="bg-white border-2 border-retro-navy p-3 font-sans focus:outline-none focus:ring-2 focus:ring-retro-red" placeholder="(Opcional)" />
                   </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="passType" className="font-sans font-bold text-sm tracking-wider uppercase text-retro-teal">Tipo de Pase (Full Pass) *</label>
                  <select id="passType" name="passType" required className="bg-white border-2 border-retro-navy p-3 font-sans focus:outline-none focus:ring-2 focus:ring-retro-red">
                     <option value="">Selecciona una opción...</option>
                     <option value="FULL PASS LINDY - 100€">FULL PASS LINDY (Veleta / Mulhacén) - 100€</option>
                     <option value="FULL PASS SOLO JAZZ SIERRA NEVADA - 80€">FULL PASS SOLO JAZZ SIERRA NEVADA - 80€</option>
                     <option value="FULL PASS BEGINNER MONACHIL - 80€">FULL PASS BEGINNER MONACHIL - 80€</option>
                     <option value="FULL PASS SHAG INTERMEDIO - 60€">FULL PASS SHAG INTERMEDIO - 60€</option>
                  </select>
                </div>
                
                <div className="flex flex-col gap-1">
                  <label htmlFor="message" className="font-sans font-bold text-sm tracking-wider uppercase text-retro-teal">Comentarios Adicionales</label>
                  <textarea id="message" name="message" rows={3} className="bg-white border-2 border-retro-navy p-3 font-sans focus:outline-none focus:ring-2 focus:ring-retro-red resize-none" placeholder="Alergias, dudas..."></textarea>
                </div>
                
                <button type="submit" className="mt-2 bg-retro-red text-retro-cream font-sans font-black text-lg tracking-widest uppercase py-4 border-4 border-retro-navy shadow-[4px_4px_0_#153243] hover:translate-y-1 hover:shadow-[2px_2px_0_#153243] transition-all flex items-center justify-center gap-2">
                   Enviar Inscripción <Send className="w-6 h-6" />
                </button>
             </form>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="lg:col-span-2 flex flex-col gap-8 justify-start"
          >
             <div className="bg-retro-navy p-8 border-4 border-retro-yellow shadow-[10px_10px_0_#F3E5D8] transform -rotate-1">
                <h3 className="font-rye text-3xl mb-4 text-retro-yellow">¿Dudas?</h3>
                <p className="font-sans text-lg mb-6 leading-relaxed">
                  Si venís en grupo o tenéis alguna consulta, podéis escribirnos directamente a nuestro correo electrónico. Estaremos encantados de ayudaros.
                </p>
                <div className="flex flex-col gap-4">
                  <a href="mailto:festivalswingmonachil@gmail.com" className="flex items-center gap-4 group cursor-pointer">
                     <div className="bg-retro-red p-3 rounded-full border-2 border-retro-cream group-hover:bg-retro-yellow transition-colors shrink-0">
                       <Mail className="w-6 h-6 group-hover:text-retro-navy" />
                     </div>
                     <span className="font-sans font-bold text-lg group-hover:text-retro-yellow transition-colors break-all">festivalswingmonachil<br/>@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-4 mt-2">
                     <div className="bg-retro-teal p-3 rounded-full border-2 border-retro-cream shrink-0">
                       <MapPin className="w-6 h-6" />
                     </div>
                     <span className="font-sans font-bold opacity-80 text-lg">Monachil, Granada</span>
                  </div>
                </div>
             </div>

             <div className="bg-retro-cream text-retro-navy font-sans p-6 border-4 border-retro-navy shadow-[6px_6px_0_#153243] transform rotate-1">
               <h4 className="font-black uppercase tracking-wider text-retro-red mb-2 text-xl">Prioridad Inscripción</h4>
               <p className="font-medium text-[15px] leading-relaxed">
                 Tendrán prioridad las inscripciones en pareja. Las individuales pasarán a la lista de espera hasta adjudicar una pareja. Haremos lo posible para que nadie se quede sin plaza.
               </p>
             </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
