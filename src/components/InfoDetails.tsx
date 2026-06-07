import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bed, Map, Bus, Info, X } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

export default function InfoDetails() {
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <section id="info" className="py-20 bg-pattern px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="font-deco text-4xl md:text-6xl text-retro-navy uppercase tracking-wider mb-4 bg-retro-cream inline-block px-8 py-2 border-4 border-retro-navy shadow-[8px_8px_0px_#d90368]">{t('info.title')}</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Alojamiento */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-retro-cream border-4 border-retro-navy p-8 relative flex flex-col"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-retro-cyan border-l-4 border-b-4 border-retro-navy flex items-center justify-center">
              <Bed className="w-8 h-8 text-retro-navy" />
            </div>
            <h3 className="font-deco text-3xl text-retro-navy mb-4">{t('info.title')}</h3>
            <div className="space-y-4 font-sans text-retro-navy flex-1">
              <p>{t('info.subtitle')}</p>
              <ul className="list-disc pl-5 space-y-2 font-medium">
                <li><Trans i18nKey="info.hotel1" components={{ 1: <span className="text-retro-red font-bold" /> }} /></li>
                <li>{t('info.hotel2')}</li>
                <li>{t('info.hotel3')}</li>
              </ul>
              <div className="mt-8 pt-4">
                <button 
                  onClick={() => setIsGuideOpen(true)}
                  className="bg-retro-yellow text-retro-navy border-2 border-retro-navy font-bold py-3 px-6 hover:bg-retro-navy hover:text-retro-yellow transition-colors uppercase tracking-widest text-sm w-full md:w-auto"
                >
                  {t('info.guideBtn')}
                </button>
              </div>
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
            <h3 className="font-deco text-3xl text-retro-navy mb-4">{t('info.venueTitle')}</h3>
            <div className="space-y-4 font-sans text-retro-navy">
              <p>{i18n.language === 'es' ? 'El festival se desarrolla principalmente en Monachil pueblo, a tan solo unos minutos de Granada.' : 'The festival takes place mainly in Monachil town, just a few minutes from Granada.'}</p>
              
              <div className="bg-white p-4 border-2 border-retro-navy/20 rounded">
                <h4 className="font-bold text-retro-cyan flex items-center gap-2 mb-2">
                  <Bus className="w-4 h-4"/> {i18n.language === 'es' ? 'Línea de Autobús 0183' : 'Bus Line 0183'}
                </h4>
                <p className="text-sm">{i18n.language === 'es' ? 'Granada (Paseo de los Basilios) - Monachil Pueblo. Salidas regulares cada hora.' : 'Granada (Paseo de los Basilios) - Monachil Pueblo. Regular hourly departures.'}</p>
              </div>

              <div className="bg-white p-4 border-2 border-retro-navy/20 rounded">
                <h4 className="font-bold text-retro-cyan flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4"/> {i18n.language === 'es' ? 'Turismo Local' : 'Local Tourism'}
                </h4>
                <p className="text-sm">{i18n.language === 'es' ? 'Aprovecha para visitar Los Cahorros o tapear por el casco histórico entre talleres y conciertos.' : 'Take the opportunity to visit Los Cahorros or have tapas in the historic center between classes and concerts.'}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <AnimatePresence>
        {isGuideOpen && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm px-4 md:px-12 py-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-retro-cream border-4 border-retro-navy shadow-[12px_12px_0_#d3202e] text-retro-navy w-full max-w-5xl h-[85vh] flex flex-col relative"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsGuideOpen(false)}
                className="absolute top-4 right-4 z-10 bg-retro-red text-retro-cream p-2 border-2 border-retro-navy hover:bg-retro-yellow hover:text-retro-navy cursor-pointer transition-colors shadow-[2px_2px_0_rgba(0,0,0,0.5)]"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-6 md:p-10 flex flex-col overflow-y-auto">
                 <h2 className="font-rye text-3xl md:text-5xl text-retro-red drop-shadow-[1px_1px_0_#fff] uppercase leading-none mb-8 pr-12">
                   {i18n.language === 'es' ? 'GUÍA COMPLETA DEL FESTIVAL' : 'COMPLETE FESTIVAL GUIDE'}
                 </h2>

                 <div className="font-sans text-retro-navy/90 text-sm md:text-base leading-relaxed font-medium space-y-6 max-w-4xl">
                   {i18n.language === 'es' ? (
                     <>
                       <p className="font-bold text-lg">Ya tenemos aquí el esperado Workshop del FESTIVAL DE SWING DE MONACHIL 2026 y tenemos un cartel espectacular!!!</p>
                       
                       <div>
                         <h3 className="font-bold border-b border-retro-navy/20 pb-1 mb-2">Os presentamos a nuestros profesores:</h3>
                         <ul className="list-disc pl-5">
                           <li>MARTA CHAMOSA & PEDRO VIEIRA</li>
                           <li>ASTRID AKAY & SANDER COSTERMANS</li>
                           <li>ROSTOM MHADHBI & REGINA SANCHÍS</li>
                         </ul>
                       </div>

                       <div>
                         <h3 className="font-bold border-b border-retro-navy/20 pb-1 mb-2">Profesores Master Class:</h3>
                         <ul className="list-disc pl-5">
                           <li>ROSTOM MHADHBI : BLUES</li>
                           <li>LEONOR PIÑAR (SWING MAKERS GRANADA): CHARLESTON</li>
                           <li>SONIA & JUAN CARLOS (SWINGDIGO): BALBOA</li>
                           <li>BELÉN & TONI (NINETEEN JIVE): JIVE</li>
                           <li>MARIO REBOLLIDO (HOP HOP SWING): SOLO JAZZ</li>
                           <li>PABLO&CÉCILE (HOP HOP SWING): INICIACIÓN SHAG</li>
                         </ul>
                       </div>

                       <p>Si venís en grupo o tenéis alguna consulta os dejamos nuestro correo: <a href="mailto:intensivofestivalmonachil@gmail.com" className="text-retro-cyan hover:underline">intensivofestivalmonachil@gmail.com</a></p>
                       
                       <div className="h-px w-full bg-retro-navy/20 my-4" />

                       <ul className="list-disc pl-5 space-y-4">
                         <li>Las clases se repartirán entre el Salón de Usos Múltiples/Barrio Monachil/ y la Sala Miraflores/Monachil (Si hay alguna modificación en las ubicaciones se avisará con antelación al evento)</li>
                         <li>Las clases se realizarán entre el viernes 17 (Iniciación 0/1 Lindy) y el domingo 19 de Julio (Resto Workshop)/ Horarios descritos más adelante.</li>
                         <li>La Vintage Pool Party del domingo 19 se realizará en las instalaciones del Hotel Granada Palace.</li>
                         <li>LAS MASTER CLASS A ELEGIR SE ADJUDICARÁN POR ORDEN DE INSCRIPCIÓN HASTA COMPLETAR AFORO, EN ESE CASO CONSIDERAREMOS OTRA POSIBLE OPCIÓN. SERÁN INICIACIÓN A CADA ESTILO, SALVO SOLO JAZZ QUE SERÁ MULTINIVEL, PERO AJUSTAREMOS EL NIVEL DE CUALQUIERA DE ESAS CLASES SEGÚN VUESTRAS NECESIDADES.</li>
                       </ul>

                       <div className="h-px w-full bg-retro-navy/20 my-4" />
                       <h3 className="font-bold font-rye text-2xl text-retro-red mt-4 border-b-2 border-retro-red pb-2 inline-block">PASES Y PRECIOS</h3>

                       <div className="space-y-6">
                         <div className="bg-retro-yellow/20 p-4 border-l-4 border-retro-yellow">
                           <h4 className="font-bold text-lg mb-2">*FULL PASS LINDY: 6 horas de clase</h4>
                           <p>- Incluye 2 horas con cada pareja + 2 Master Class de 1h a elegir + Vintage Pool Party el domingo tarde...............100 euros/persona.</p>
                           <p className="text-sm mt-2">Tendrán prioridad las inscripciones en pareja, las individuales pasarán a la lista de espera hasta que le adjudiquemos una pareja; desde la organización intentaremos hacer lo posible para que nadie se quede sin plaza.</p>
                           <p className="font-bold mt-2">Tenemos 2 niveles:</p>
                           <ul className="list-disc pl-5 text-sm">
                             <li><strong>VELETA:</strong> Si llevas bailando entre aproximadamente 3-5 años bailando este es tu nivel. Trataremos que sea un nivel avanzado para que nadie se quede corto, valoraremos vuestra respuesta en la inscripción para colocaros en el nivel adecuado.</li>
                             <li><strong>MULHACÉN:</strong> Para bailarines con experiencia de más de 5 años bailando, si vas a todos los festivales que puedes y eres adict@ a los sociales, este nivel es para ti.</li>
                           </ul>
                         </div>

                         <div className="bg-retro-cyan/20 p-4 border-l-4 border-retro-cyan">
                           <h4 className="font-bold text-lg mb-2">*FULL PASS SOLO JAZZ SIERRA NEVADA</h4>
                           <p>- Incluye 5 horas de clase: 1h con Sander + 1h con Astrid + 1h Solo Pareja + 1h Master Class Solo Jazz Mario + 1h Master Class Charleston con Leonor + Vintage Pool Party el domingo tarde.......................................80 euros/persona.</p>
                           <p className="text-sm mt-2">Son clases multinivel Intermedio/Avanzado: Si llevas algunos cursos bailando Solo este es tu espacio. Trataremos que sea un nivel adecuado para que nadie se quede corto.</p>
                         </div>

                         <div className="bg-retro-red/10 p-4 border-l-4 border-retro-red">
                           <h4 className="font-bold text-lg mb-2">*FULL PASS BEGINNER MONACHIL</h4>
                           <p>Si llevas algunos cursos aproximadamente bailando y te mueres por bailar más allá de nuestras clases de Iniciación. Y si ya llevas más de 3 años, anímateeee con nuestro nivel Veleta!!!</p>
                           <p className="mt-2">- Incluye 4 h de clase: 2 horas Lindy Hop con Pedro&Marta, 2 h con Rostom&Regina + Vintage Pool Party el domingo tarde................................... 80 euros/persona.</p>
                         </div>

                         <div className="bg-slate-200 p-4 border-l-4 border-slate-500">
                           <h4 className="font-bold text-lg mb-2">*FULL PASS SHAG INTERMEDIO</h4>
                           <p>Si llevas bailando bastante este estilo no lo dudes y apúntate!! Trataremos que sea un nivel adecuado para que nadie se quede corto, valoraremos vuestra respuesta en la inscripción para ajustar las clases.</p>
                           <p className="mt-2">- Incluye 2 h de clase con Pedro&Marta + Vintage Pool Party el domingo tarde...............60 euros/persona.</p>
                         </div>
                       </div>

                       <div className="h-px w-full bg-retro-navy/20 my-6" />
                       <h3 className="font-bold font-rye text-2xl text-retro-red mt-4 border-b-2 border-retro-red pb-2 inline-block">HORARIOS DE CLASES</h3>

                       <div className="space-y-6">
                         <div>
                           <h4 className="font-bold bg-retro-navy text-retro-cream px-3 py-1 inline-block mb-3">VIERNES 17 JULIO / Sala Miraflores (Monachil)</h4>
                           <ul className="list-disc pl-5">
                             <li>15:45-16:00h: Check In</li>
                             <li>16:00-17:00h: Iniciación 0 (Requiere inscripción)</li>
                             <li>17:00-18:00h: Iniciación 1 (Requiere inscripción)</li>
                             <li>18:00-18:15h: Check In</li>
                             <li>18:15-19:15h: Master Class BLUES (Rostom) (Workshop)</li>
                             <li>19:15-20:15h: Master Class CHARLESTON (Leonor) (Workshop)</li>
                           </ul>
                         </div>

                         <div>
                           <h4 className="font-bold bg-retro-navy text-retro-cream px-3 py-1 inline-block mb-3">SÁBADO 18 JULIO</h4>
                           <ul className="list-disc pl-5">
                             <li>09:30h-10:00h: Check In Veleta/Mulhacen - Edificio. Usos Múltiples (Barrio Monachil)</li>
                             <li>10:00h-12:00h: Veleta(Astrid&Sander) | Mulhacen(Pedro&Marta)</li>
                             <li>12:00-12:15h: Check In Beginner Monachil / Solo Sierra Nevada</li>
                             <li>12:00h-12:30h: DESCANSO</li>
                             <li>12:30h-14:30h: Beginner Monachil (Pedro&Marta)</li>
                             <li>12:30h-13:30h: Solo Sierra Nevada 1(Astrid)</li>
                             <li>13:30h-14:30h: Solo Sierra Nevada 2(Sander)</li>
                             <li>14:00h-16:00h: COMIDA</li>
                           </ul>
                           <p className="font-bold mt-3 mb-1">Sala Miraflores (Monachil)</p>
                           <ul className="list-disc pl-5">
                             <li>16:00h-17:00h: Master Class Solo(Mario)</li>
                             <li>17:00h-18:00h: Master Class Shag Iniciación (Pablo&Cécile)</li>
                             <li>18:00h-19:00h: Master Class Balboa (Sonia&Juan Carlos)</li>
                             <li>19:00h-20:00h: Master Class Jive (Nineteen Jive)</li>
                           </ul>
                         </div>

                         <div>
                           <h4 className="font-bold bg-retro-navy text-retro-cream px-3 py-1 inline-block mb-3">DOMINGO 19 JULIO - Edificio. Usos Múltiples</h4>
                           <ul className="list-disc pl-5">
                             <li>10:00h-12:00h: Beginner Monachil (Rostom&Regina) | Veleta (Pedro&Marta)</li>
                             <li>11:00h-12:00h: Solo Sierra Nevada 3 (Astrid&Sander)</li>
                             <li>12:00h-12:30h: DESCANSO | Check In Shag Intermedio</li>
                             <li>12:30h-14:30h: Mulhacen(Astrid&Sander) | Shag Intermedio (Pedro&Marta)</li>
                           </ul>
                         </div>
                       </div>

                       <p className="font-rye text-3xl text-retro-red text-center mt-12 mb-4">¡Arrancamos la nueva edición!</p>
                     </>
                   ) : (
                     <>
                       <p className="font-bold text-lg">The long-awaited SWING MONACHIL 2026 FESTIVAL Workshop is here, and we have a spectacular lineup!!!</p>
                       
                       <div>
                         <h3 className="font-bold border-b border-retro-navy/20 pb-1 mb-2">Introducing our teachers:</h3>
                         <ul className="list-disc pl-5">
                           <li>MARTA CHAMOSA & PEDRO VIEIRA</li>
                           <li>ASTRID AKAY & SANDER COSTERMANS</li>
                           <li>ROSTOM MHADHBI & REGINA SANCHÍS</li>
                         </ul>
                       </div>

                       <div>
                         <h3 className="font-bold border-b border-retro-navy/20 pb-1 mb-2">Master Class Teachers:</h3>
                         <ul className="list-disc pl-5">
                           <li>ROSTOM MHADHBI : BLUES</li>
                           <li>LEONOR PIÑAR (SWING MAKERS GRANADA): CHARLESTON</li>
                           <li>SONIA & JUAN CARLOS (SWINGDIGO): BALBOA</li>
                           <li>BELÉN & TONI (NINETEEN JIVE): JIVE</li>
                           <li>MARIO REBOLLIDO (HOP HOP SWING): SOLO JAZZ</li>
                           <li>PABLO&CÉCILE (HOP HOP SWING): BEGINNERS SHAG</li>
                         </ul>
                       </div>

                       <p>If you are coming in a group or have any questions, please contact us: <a href="mailto:intensivofestivalmonachil@gmail.com" className="text-retro-cyan hover:underline">intensivofestivalmonachil@gmail.com</a></p>
                       
                       <div className="h-px w-full bg-retro-navy/20 my-4" />

                       <ul className="list-disc pl-5 space-y-4">
                         <li>Classes will be held at the Multipurpose Hall (Monachil Neighborhood) and Miraflores Hall (Monachil). (Any location changes will be announced prior to the event).</li>
                         <li>Classes will take place between Friday, July 17 (Beginner 0/1 Lindy) and Sunday, July 19 (Rest of the Workshop) / Schedules described below.</li>
                         <li>The Vintage Pool Party on Sunday 19th will be held at the Hotel Granada Palace.</li>
                         <li>THE MASTER CLASSES OF YOUR CHOICE WILL BE ASSIGNED ON A FIRST-COME, FIRST-SERVED BASIS UNTIL FULL. THESE ARE BEGINNER CLASSES TO EACH STYLE, EXCEPT SOLO JAZZ WHICH WILL BE MULTI-LEVEL. WE WILL ADJUST THE LEVEL DEPENDING ON YOUR NEEDS.</li>
                       </ul>

                       <div className="h-px w-full bg-retro-navy/20 my-4" />
                       <h3 className="font-bold font-rye text-2xl text-retro-red mt-4 border-b-2 border-retro-red pb-2 inline-block">PASSES AND PRICES</h3>

                       <div className="space-y-6">
                         <div className="bg-retro-yellow/20 p-4 border-l-4 border-retro-yellow">
                           <h4 className="font-bold text-lg mb-2">*FULL PASS LINDY: 6 hours of class</h4>
                           <p>- Includes 2 hours with each teachers couple + 2 Master Classes of 1h of your choice + Vintage Pool Party on Sunday afternoon...............100 euros/person.</p>
                           <p className="text-sm mt-2">Couple registrations will have priority, individual registrations will go to a waiting list until we assign you a partner; the organization will do everything possible so nobody is left without a spot.</p>
                           <p className="font-bold mt-2">We have 2 levels:</p>
                           <ul className="list-disc pl-5 text-sm">
                             <li><strong>VELETA:</strong> If you have been dancing for approximately 3-5 years, this is your level. We will try to make it an advanced level so nobody falls short, we will evaluate your response in the registration to place you in the right level.</li>
                             <li><strong>MULHACÉN:</strong> For dancers with more than 5 years of experience, if you go to all the festivals you can and are addicted to socials, this level is for you.</li>
                           </ul>
                         </div>

                         <div className="bg-retro-cyan/20 p-4 border-l-4 border-retro-cyan">
                           <h4 className="font-bold text-lg mb-2">*FULL PASS SOLO JAZZ SIERRA NEVADA</h4>
                           <p>- Includes 5 hours of class: 1h with Sander + 1h with Astrid + 1h couple solo + 1h Solo Jazz Master Class with Mario + 1h Charleston Master Class with Leonor + Vintage Pool Party on Sunday afternoon.......................................80 euros/person.</p>
                           <p className="text-sm mt-2">These are multi-level Intermediate/Advanced classes: If you have been dancing Solo for a few courses, this is your place.</p>
                         </div>

                         <div className="bg-retro-red/10 p-4 border-l-4 border-retro-red">
                           <h4 className="font-bold text-lg mb-2">*FULL PASS BEGINNER MONACHIL</h4>
                           <p>If you have been dancing for a few courses and you are dying to dance beyond our Initiation classes. And if you have been dancing for more than 3 years, go for our Veleta level!!!</p>
                           <p className="mt-2">- Includes 4h of class: 2h Lindy Hop with Pedro&Marta, 2h with Rostom&Regina + Vintage Pool Party on Sunday afternoon................................... 80 euros/person.</p>
                         </div>

                         <div className="bg-slate-200 p-4 border-l-4 border-slate-500">
                           <h4 className="font-bold text-lg mb-2">*FULL PASS SHAG INTERMEDIATE</h4>
                           <p>If you have been dancing this style for a while, don't hesitate and sign up!! We will evaluate your response in the registration to adjust the classes.</p>
                           <p className="mt-2">- Includes 2h of class with Pedro&Marta + Vintage Pool Party on Sunday afternoon...............60 euros/person.</p>
                         </div>
                       </div>

                       <div className="h-px w-full bg-retro-navy/20 my-6" />
                       <h3 className="font-bold font-rye text-2xl text-retro-red mt-4 border-b-2 border-retro-red pb-2 inline-block">CLASS SCHEDULES</h3>

                       <div className="space-y-6">
                         <div>
                           <h4 className="font-bold bg-retro-navy text-retro-cream px-3 py-1 inline-block mb-3">FRIDAY JULY 17 / Sala Miraflores (Monachil)</h4>
                           <ul className="list-disc pl-5">
                             <li>15:45-16:00h: Check In</li>
                             <li>16:00-17:00h: Beginners 0 (Registration required)</li>
                             <li>17:00-18:00h: Beginners 1 (Registration required)</li>
                             <li>18:00-18:15h: Check In</li>
                             <li>18:15-19:15h: BLUES Master Class (Rostom) (Workshop)</li>
                             <li>19:15-20:15h: CHARLESTON Master Class (Leonor) (Workshop)</li>
                           </ul>
                         </div>

                         <div>
                           <h4 className="font-bold bg-retro-navy text-retro-cream px-3 py-1 inline-block mb-3">SATURDAY JULY 18</h4>
                           <ul className="list-disc pl-5">
                             <li>09:30h-10:00h: Check In Veleta/Mulhacen - Multipurpose Building (Monachil Neighborhood)</li>
                             <li>10:00h-12:00h: Veleta(Astrid&Sander) | Mulhacen(Pedro&Marta)</li>
                             <li>12:00-12:15h: Check In Beginner Monachil / Solo Sierra Nevada</li>
                             <li>12:00h-12:30h: BREAK</li>
                             <li>12:30h-14:30h: Beginner Monachil (Pedro&Marta)</li>
                             <li>12:30h-13:30h: Solo Sierra Nevada 1(Astrid)</li>
                             <li>13:30h-14:30h: Solo Sierra Nevada 2(Sander)</li>
                             <li>14:00h-16:00h: LUNCH</li>
                           </ul>
                           <p className="font-bold mt-3 mb-1">Sala Miraflores (Monachil)</p>
                           <ul className="list-disc pl-5">
                             <li>16:00h-17:00h: Solo Master Class (Mario)</li>
                             <li>17:00h-18:00h: Beginners Shag Master Class (Pablo&Cécile)</li>
                             <li>18:00h-19:00h: Balboa Master Class (Sonia&Juan Carlos)</li>
                             <li>19:00h-20:00h: Jive Master Class (Nineteen Jive)</li>
                           </ul>
                         </div>

                         <div>
                           <h4 className="font-bold bg-retro-navy text-retro-cream px-3 py-1 inline-block mb-3">SUNDAY JULY 19 - Multipurpose Building</h4>
                           <ul className="list-disc pl-5">
                             <li>10:00h-12:00h: Beginner Monachil (Rostom&Regina) | Veleta (Pedro&Marta)</li>
                             <li>11:00h-12:00h: Solo Sierra Nevada 3 (Astrid&Sander)</li>
                             <li>12:00h-12:30h: BREAK | Check In Intermediate Shag</li>
                             <li>12:30h-14:30h: Mulhacen(Astrid&Sander) | Intermediate Shag (Pedro&Marta)</li>
                           </ul>
                         </div>
                       </div>

                       <p className="font-rye text-3xl text-retro-red text-center mt-12 mb-4">Let's kick off the new edition!</p>
                     </>
                   )}
                 </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
