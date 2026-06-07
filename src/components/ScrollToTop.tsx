import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 p-3 bg-retro-cyan text-retro-navy border-4 border-retro-navy shadow-[6px_6px_0_#153243] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0_#153243] hover:bg-retro-red hover:text-retro-cream transition-all rounded-none outline-none"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 md:w-8 md:h-8" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
