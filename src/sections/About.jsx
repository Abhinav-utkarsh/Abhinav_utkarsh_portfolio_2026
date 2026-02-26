import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import resumePdf from '../assets/resume/Abhinav_Utkarsh_Resume.pdf';

const About = () => {
  const achievements = [
    "GUINNESS WORLD RECORDS™ title (Vibe coding Cognizant) 🏆",
    "Swami Vivekananda Professional Excellence Award 2026 🏆",
    "Certified GenAI Associate",
    "Extend Gemini with controlled generation and Tool use",
    "Certified Prompt Engineering",
    "OCI Cloud Certified"
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const phrases = ["Generative AI", "Automation Engineer", "Web Development & Integration"];
    const i = loopNum % phrases.length;
    const fullText = phrases[i];

    const handleTyping = () => {
      setDisplayedText(prev => isDeleting 
        ? fullText.substring(0, prev.length - 1) 
        : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayedText === fullText) {
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setLoopNum(l => l + 1);
        setTypingSpeed(150);
      } else {
        setTypingSpeed(isDeleting ? 50 : 150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="about" className="py-20 bg-transparent text-slate-300">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full text-center lg:text-left"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">About <span className="text-sky-400">Me</span></h2>
          <h3 className="text-lg md:text-xl text-sky-400 font-semibold mb-6 min-h-[28px]">
            {displayedText}
            <span className="animate-pulse text-white">|</span>
          </h3>
          
          <div className="mb-6 text-lg space-y-1">
            <p><span className="font-bold text-sky-400">Designation:</span> Software Engineer</p>
            <p><span className="font-bold text-sky-400">Qualification:</span> MCA</p>
          </div>
          
          <p className="text-lg leading-relaxed mb-6">
            I am a passionate and detail-oriented tech professional with expertise in Automation Engineering, Generative and Agentic AI, Web Development and Integration.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            As a certified GenAI Enthusiast (Cognizant GenAI Associate, Oracle GenAI Cloud), I am deeply fascinated by the potential of AI-driven solutions. I am constantly exploring new technologies and am on a journey towards becoming a full-stack developer, aiming to build seamless and intelligent applications.
          </p>

          {/* Achievements List */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {achievements.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-teal-400 mt-1">✓</span>
                <span className="text-slate-300 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* Resume Button */}
          <div className="flex justify-center lg:justify-start">
            <button 
              onClick={() => setShowResume(true)}
              className="px-8 py-3 rounded-full bg-sky-400 text-slate-900 font-bold hover:bg-cyan-300 transition-all shadow-lg hover:scale-105 hover:shadow-[0_0_25px_rgba(56,189,248,0.6)]"
            >
              View Resume
            </button>
          </div>
        </motion.div>
      </div>

      {/* Resume Popup Modal */}
      <AnimatePresence>
        {showResume && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setShowResume(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl h-[85vh] bg-slate-800 rounded-xl overflow-hidden shadow-2xl border border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowResume(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-slate-900/50 text-white rounded-full hover:bg-sky-500 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <iframe src={resumePdf} className="w-full h-full" title="Resume Viewer"></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
