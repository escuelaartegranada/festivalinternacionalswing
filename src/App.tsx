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

export default function App() {
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
        <Sponsors />
      </main>
      
      <footer className="bg-retro-navy py-12 text-center border-t-[16px] border-retro-teal">
        <div className="font-swing text-3xl text-retro-cream mb-4">Swing Monachil 2026</div>
        <p className="font-sans text-retro-cream/60 text-sm max-w-xl mx-auto">
          © 2026 Festival Internacional Swing de Monachil. Todos los derechos reservados. Contacto: intensivofestivalmonachil@gmail.com
        </p>
      </footer>
    </div>
  );
}

