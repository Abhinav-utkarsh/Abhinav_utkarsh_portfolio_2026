import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../components/projects';

const Brand = () => {
  return (
    <section id="brand" className="py-20 bg-transparent text-slate-300 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-2"
          >
            Av_eSAFE <span className="text-sky-400">Hub</span>
          </motion.h2>
          <p className="text-slate-400">Innovation • Automation • Intelligence</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-sky-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]"
            >
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 mb-6 line-clamp-2">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-xs rounded-full bg-slate-800 text-sky-400 border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>

              <Link to="/projects" className="text-teal-400 font-semibold hover:text-white transition-colors flex items-center gap-2">
                View Details <span>→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brand;