import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certifications', path: '/certifications' },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
      <div className="container mx-auto px-6 py-1 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative w-14 h-14 flex items-center justify-center">
             {/* Tech Circle Background */}
             <div className="absolute inset-0 bg-sky-500/10 rounded-full blur-sm group-hover:bg-sky-500/20 transition-all"></div>
             
             {/* Rotating Borders */}
             <div className="absolute inset-0 border-2 border-sky-500/30 rounded-full transition-colors duration-300 group-hover:border-sky-400/50"></div>
             <div className="absolute inset-0 border-2 border-transparent border-t-amber-500 rounded-full animate-[spin_4s_linear_infinite] transition-transform duration-300 group-hover:scale-105"></div>
             <div className="absolute inset-1 border-2 border-transparent border-b-white rounded-full animate-[spin_3s_linear_infinite_reverse] transition-transform duration-300 group-hover:scale-105"></div>
             <div className="absolute inset-2 border-2 border-transparent border-l-green-500 rounded-full animate-[spin_2s_linear_infinite] transition-transform duration-300 group-hover:scale-105"></div>
             
             {/* Logo Text */}
             <span className="text-transparent font-bold text-2xl [-webkit-text-stroke:1px_#22d3ee] drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.9)]">
               AU
             </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm font-medium transition-colors duration-300 group ${
                location.pathname === link.path ? 'text-sky-400' : 'text-slate-300 hover:text-sky-400'
              }`}
            >
              {link.name}
              <span className={`absolute left-0 -bottom-1 w-full h-0.5 bg-sky-400 transform origin-left transition-transform duration-300 ${
                location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-800 border-b border-slate-700 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium block px-4 py-2 rounded-r-lg transition-all duration-300 ${
                    location.pathname === link.path 
                      ? 'text-sky-400 bg-slate-700/50 border-l-4 border-sky-400' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/30'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;