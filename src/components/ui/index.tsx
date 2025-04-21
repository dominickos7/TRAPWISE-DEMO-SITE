import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Menu, X, Search } from 'lucide-react';
export { TypewriterIntro } from './TypewriterIntro';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  return (
    <nav className="fixed w-full bg-white z-50 py-[15px] shadow-sm">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div 
            className="flex items-center flex-shrink-0 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <img 
              src="/Assets/TRAPWISE.AI (4).png" 
              alt="TRAPWISE.AI Logo" 
              className="h-12 w-auto mr-4"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 space-x-8">
            <a href="/#solutions" className="text-gray-800 hover:text-[#4F6DF5] transition-colors">Solutions</a>
            <a href="/#why" className="text-gray-800 hover:text-[#4F6DF5] transition-colors">Why Us</a>
            <a href="/#contact" className="text-gray-800 hover:text-[#4F6DF5] transition-colors">Contact</a>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-gray-800 placeholder-gray-500 outline-none w-[200px]"
            />
            <Search className="h-5 w-5 text-[#4F6DF5] ml-2" />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? 
              <X className="h-6 w-6 text-[#4F6DF5]" /> : 
              <Menu className="h-6 w-6 text-[#4F6DF5]" />
            }
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 mb-4">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-gray-800 placeholder-gray-500 outline-none w-full"
              />
              <Search className="h-5 w-5 text-[#4F6DF5] ml-2" />
            </div>
            <a href="/#solutions" className="block py-2 text-gray-800 hover:text-[#4F6DF5]">Solutions</a>
            <a href="/#why" className="block py-2 text-gray-800 hover:text-[#4F6DF5]">Why Us</a>
            <a href="/#contact" className="block py-2 text-gray-800 hover:text-[#4F6DF5]">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export const FadeInSection = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        y: [0, -10, 0],
        transition: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      className="bg-white p-6 md:p-10 rounded-2xl border border-gray-100 hover:border-[#4F6DF5]/20 transition duration-300 relative group"
    >
      <div className="absolute inset-0 gradient-blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      <Icon className="h-10 w-10 md:h-12 md:w-12 text-[#4F6DF5] mb-4 md:mb-6 flex-shrink-0" />
      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{title}</h3>
      <p className="text-base md:text-lg text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};