import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const NAV_LINKS = [
    { name: t('nav.programacion'), href: '#programacion' },
    { name: t('nav.workshops'), href: '#workshops' },
    { name: t('nav.info'), href: '#info' },
    { name: t('nav.contacto'), href: '#contacto' },
    { name: t('nav.patrocinadores'), href: '#patrocinadores' },
  ];

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-retro-navy shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 xl:px-12 flex items-center justify-between">
        <a href="#" className={`font-deco text-base xl:text-xl tracking-widest uppercase notranslate shrink-0 ${isScrolled ? 'text-retro-yellow' : 'text-retro-cream'}`} translate="no">
          Festival Swing <span className="text-retro-car">Monachil</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden 2xl:flex gap-4 2xl:gap-8 items-center">
          {NAV_LINKS.map(link => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-sans font-bold text-xs 2xl:text-sm tracking-widest uppercase transition-colors hover:text-retro-red whitespace-nowrap ${
                isScrolled ? 'text-retro-cream' : 'text-retro-cream'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleLanguage}
            className="font-sans font-black text-xs 2xl:text-sm tracking-widest uppercase transition-all flex items-center gap-1.5 bg-retro-yellow text-retro-navy px-3 py-1.5 border-2 border-retro-yellow hover:bg-retro-red hover:border-retro-red hover:text-retro-cream hover:-translate-y-0.5 shadow-[2px_2px_0_#153243]"
          >
            <Globe className="w-4 h-4" /> {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="2xl:hidden flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="font-sans font-black text-xs tracking-widest uppercase transition-all flex items-center gap-1 px-2.5 py-1.5 bg-retro-yellow text-retro-navy border-2 border-retro-yellow hover:bg-retro-red hover:border-retro-red hover:text-retro-cream shadow-[2px_2px_0_#153243]"
          >
            <Globe className="w-4 h-4" /> {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>
          <button 
            className="text-retro-cream p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="2xl:hidden bg-retro-navy border-t border-retro-cyan/30 overflow-hidden"
          >
            <nav className="flex flex-col items-center py-6 gap-6">
               {NAV_LINKS.map(link => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-sans font-bold text-lg tracking-widest uppercase text-retro-yellow transition-colors hover:text-retro-red"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
