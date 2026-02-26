import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

// --- Data embedded directly to ensure no import issues ---
const projectsData = [
  {
    id: 1,
    title: "Agentic AI Task Manager",
    description: "Av_eSAFE – AI Agentic Task Manager is an intelligent web-based task management system that uses AI to automatically analyze, prioritize, and optimize tasks based on real-time deadline calculations and urgency rules.",
    techStack: ["HTML", "CSS", "Vanilla JS", "JSON", "Node JS", "AI LLM Model"],
    link: "https://av-esafe-ai-task-manager.onrender.com/"
  },
  {
    id: 2,
    title: "Av_eSAFE Gurukul",
    description: "Av_eSAFE A practical learning & certification platform built for IT students and professionals",
    techStack: ["HTML", "CSS", "JS", "JSON", "Node JS"],
    link: "https://avesafegurukul.netlify.app/"
  },
  {
    id: 3,
    title: "DivyaLok Web Application",
    description: "A full-featured web application for DivyaLok, providing users with a seamless and interactive digital experience. The project includes a dynamic front-end and a robust back-end.",
    techStack: ["HTML", "CSS", "JS", "React", "GenAI"],
    link: "https://divya-lok.co.in/"
  },
  {
    id: 4,
    title: "TestFlow Automation Framework",
    description: "A robust and scalable test automation framework built using Java, Selenium, and TestNG. It is designed for end-to-end testing of web applications, featuring page object model, data-driven testing with Apache POI, and detailed reporting.",
    techStack: ["HTML", "CSS", "JS", "Demo Selenium"],
    link: "https://abhinav-utkarsh.github.io/TestFlow_Automation_Framework/"
  },
  {
    id: 5,
    title: "Av_eSAFE Chat Bot",
    description: "An intelligent chatbot for the Av_eSAFE platform, designed to assist users, answer queries, and provide support 24/7. It's built with natural language processing capabilities for a human-like conversation.",
    techStack: ["HTML", "CSS", "JS", "GenAI", "APIs"],
    link: "https://abhinav-utkarsh.github.io/Av_eSAFE_ChatBot/"
  },
  {
    id: 6,
    title: "MelodyMeets",
    description: "A responsive web application concept for musicians to connect, collaborate, and discover new music. The front-end is built with modern HTML5, CSS3, and JavaScript, utilizing Bootstrap for a mobile-first design.",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "#"
  },
  {
    id: 7,
    title: "Image Generator via Prompt",
    description: "An AI-powered application that generates unique images based on user-provided text prompts. This project leverages modern Generative AI models to create stunning visuals.",
    techStack: ["Python", "Flask", "GenAI APIs", "HTML/CSS"],
    link: "#"
  },
  {
    id: 8,
    title: "Av_eSAFE CHRONOSCOPE ⏳",
    description: "A Temporal News & Data Engine built from scratch using modern web technologies, designed to turn historical intelligence into an interactive, visual experience.",
    techStack: ["HTML", "CSS", "JavaScript", "API"],
    link: "https://avesafechronoscope.netlify.app/"
  }
];

const Projects = () => {
  return (
    <PageTransition>
    <div className="min-h-screen bg-transparent pt-24 pb-20 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">My <span className="text-sky-400">Projects</span></h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-sky-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] flex flex-col"
            >
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-xs rounded-full bg-slate-900 text-sky-400 border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link} 
                  className="inline-flex items-center gap-2 text-teal-400 font-semibold hover:text-white transition-colors mt-auto"
                >
                  Live Demo <span>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
    </PageTransition>
  );
};
export default Projects;