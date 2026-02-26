import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import profileImage from "../assets/images/abhinav.jfif";
import PageTransition from '../components/PageTransition';

const Hero = () => {
  return (
    <PageTransition>
    <section id="hero" className="pt-40 pb-20 bg-transparent text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-sky-400">Abhinav Utkarsh</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0">
            A passionate Software Engineer specializing in Automation, Generative AI, and Web Development.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Link 
              to="/projects" 
              className="px-8 py-3 rounded-full bg-sky-500 text-white font-bold hover:bg-sky-600 transition-all shadow-lg hover:shadow-sky-500/25"
            >
              View Projects
            </Link>
            <Link 
              to="/experience" 
              className="px-8 py-3 rounded-full border border-slate-600 text-slate-300 font-bold hover:border-sky-400 hover:text-sky-400 transition-all"
            >
              My Journey
            </Link>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center lg:justify-end"
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 group">
            <div className="absolute inset-0 bg-sky-400/20 blur-3xl animate-pulse group-hover:bg-sky-400/30 transition-all duration-500" />
            <motion.img 
              src={profileImage} 
              alt="Abhinav Utkarsh" 
              className="relative w-full h-full object-cover drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
              animate={{
                borderRadius: [
                  "70% 30% 30% 70% / 60% 40% 60% 40%",
                  "30% 70% 70% 30% / 30% 30% 70% 70%",
                  "50% 50% 20% 80% / 25% 80% 20% 75%",
                  "70% 30% 30% 70% / 60% 40% 60% 40%"
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
    </PageTransition>
  );
};

export default Hero;