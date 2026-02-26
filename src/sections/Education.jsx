import { motion } from 'framer-motion';
import { education } from '../components/education';

const Education = () => {
  return (
    <section id="education" className="py-10 md:py-20 bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-white mb-8 md:mb-12"
        >
          Education
        </motion.h2>

        <div className="max-w-3xl relative border-l-2 border-slate-700 ml-4 md:mx-auto">
          {education.map((edu, index) => (
            <motion.div 
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-8 md:mb-10 ml-8 relative"
            >
              {/* Dot */}
              <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-sky-400 border-4 border-slate-900"></span>
              
              <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
              <span className="text-teal-400 text-sm font-semibold">{edu.year}</span>
              <p className="text-slate-400 mt-1">{edu.institution}</p>
              <p className="mt-3 text-slate-300">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;