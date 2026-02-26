import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/abhinav-utkarsh-450614177",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: "GitHub",
      url: "https://github.com/Abhinav-utkarsh",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-700 mt-auto">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left Side: Logo with Glow */}
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative w-12 h-12 flex items-center justify-center group">
               {/* Tech Circle Background */}
               <div className="absolute inset-0 bg-sky-500/10 rounded-full blur-sm group-hover:bg-sky-500/20 transition-all"></div>
               
               {/* Rotating Borders */}
               <div className="absolute inset-0 border-2 border-sky-500/30 rounded-full transition-colors duration-300 group-hover:border-sky-400/50"></div>
               <div className="absolute inset-0 border-2 border-transparent border-t-amber-500 rounded-full animate-[spin_4s_linear_infinite] transition-transform duration-300 group-hover:scale-105"></div>
               <div className="absolute inset-1 border-2 border-transparent border-b-white rounded-full animate-[spin_3s_linear_infinite_reverse] transition-transform duration-300 group-hover:scale-105"></div>
               <div className="absolute inset-2 border-2 border-transparent border-l-green-500 rounded-full animate-[spin_2s_linear_infinite] transition-transform duration-300 group-hover:scale-105"></div>
               
               {/* Logo Text */}
               <span className="text-transparent font-bold text-xl [-webkit-text-stroke:1px_#22d3ee] drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.9)]">AU</span>
            </div>
            <span className="text-xl font-bold text-white tracking-wide">
              Abhinav<span className="text-sky-400">.dev</span>
            </span>
          </motion.div>

          {/* Right Side: Social Icons */}
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-sky-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            &copy; 2026 Abhinav Utkarsh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;