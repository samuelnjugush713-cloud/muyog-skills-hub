import React, { useState } from 'react';
import { Menu, X, School, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Programs', href: '#services' }, // Re-routing Programs to services as it's the most logical destination
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('#')}>
            <div className="bg-[#800000] p-2 rounded-lg">
              <School className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-[#006400] leading-tight">
              MUYOG <br /><span className="text-sm font-medium text-[#800000]">VOCATIONAL COLLEGE</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-700 hover:text-[#006400] font-medium transition-colors"
              >
                {link.name}
              </button>
            ))}
            <Button 
              variant="maroon" 
              className="rounded-full shadow-lg" 
              onClick={() => window.location.href = 'tel:0726000770'}
            >
              <Phone className="w-4 h-4 mr-2" />
              0726 000 770
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#800000] p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left text-lg font-medium text-gray-700 hover:text-[#006400] py-2"
                >
                  {link.name}
                </button>
              ))}
              <Button 
                variant="maroon" 
                className="w-full justify-center h-12 text-lg" 
                onClick={() => { window.location.href = 'tel:0726000770'; setIsOpen(false); }}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call 0726 000 770
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;