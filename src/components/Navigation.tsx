import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Programación', href: '#programacion' },
  { name: 'Workshops', href: '#workshops' },
  { name: 'Info & Alojamientos', href: '#info' },
  { name: 'Patrocinadores', href: '#patrocinadores' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
        <a href="#" className={`font-deco text-xl tracking-widest uppercase ${isScrolled ? 'text-retro-yellow' : 'text-retro-cream'}`}>
          Swing<span className="text-retro-car">Monachil</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map(link => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-sans font-bold text-sm tracking-widest uppercase transition-colors hover:text-retro-red ${
                isScrolled ? 'text-retro-cream' : 'text-retro-cream'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-retro-cream p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-retro-navy border-t border-retro-cyan/30 overflow-hidden"
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
