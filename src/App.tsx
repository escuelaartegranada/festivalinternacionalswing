/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Artists from './components/Artists';
import Schedule from './components/Schedule';
import Workshops from './components/Workshops';
import Passes from './components/Passes';
import InfoDetails from './components/InfoDetails';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import { Facebook, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-retro-cream font-sans scroll-smooth">
      <Navigation />
      <main>
        <Hero />
        <Artists />
        <Schedule />
        <Workshops />
        <Passes />
        <InfoDetails />
        <Contact />
        <Sponsors />
      </main>
      <ScrollToTop />
      
      <footer className="bg-retro-navy py-12 text-center border-t-[16px] border-retro-teal object-contain relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay z-0 pointer-events-none"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="font-swing text-3xl text-retro-cream mb-6 drop-shadow-md">Swing Monachil 2026</div>
          
          <div className="flex gap-6 mb-8">
            <a 
              href="https://www.facebook.com/FestivaldeSwingMonachil/?locale=es_ES" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-retro-cream/10 text-retro-cream p-3 rounded-full hover:bg-retro-red hover:text-white transition-all transform hover:scale-110 shadow-lg border border-retro-cream/20"
            >
              <Facebook strokeWidth={1.5} className="w-6 h-6" />
            </a>
            <a 
              href="https://www.instagram.com/festivalswingmonachil/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-retro-cream/10 text-retro-cream p-3 rounded-full hover:bg-retro-red hover:text-white transition-all transform hover:scale-110 shadow-lg border border-retro-cream/20"
            >
              <Instagram strokeWidth={1.5} className="w-6 h-6" />
            </a>
          </div>
          
          <p className="font-sans text-retro-cream/60 text-sm max-w-xl mx-auto px-4">
            {t('footer.rights')}
          </p>
        </div>
      </footer>
    </div>
  );
}

