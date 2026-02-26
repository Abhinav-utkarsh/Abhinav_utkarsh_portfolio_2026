import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const workExperience = [
  {
    id: 1,
    role: "Programmer Analyst",
    company: "Cognizant | Bengaluru, India",
    period: "December 2023 - Present",
    description: "As a Programmer Analyst at Cognizant, I am responsible for designing and executing both manual and automation test cases for web-based applications. My work primarily focuses on functional, regression, and integration testing to ensure software quality and reliability. I actively use Jira board for tracking defects, managing sprints, and streamlining project tasks, while collaborating closely with developers and business analysts to resolve issues efficiently and deliver stable solutions."
  },
  {
    id: 2,
    role: "Programmer Analyst Trainee",
    company: "Cognizant | Bengaluru, India",
    period: "September - December 2023",
    description: "As a Programmer Analyst Trainee, I gained hands-on experience in manual and functional testing, defect tracking with Jira, and Agile practices. I was also trained in automation testing as an SDET, working with Selenium WebDriver, Java, Maven, and TestNG, along with advance web technologies like HTML, CSS, and JavaScript."
  },
  {
    id: 3,
    role: "Web Developer",
    company: "OctaNet Pvt.Ltd",
    period: "June 2023 - October 2023",
    description: "As a Web Developer at OctaNet Pvt. Ltd., I was involved in designing and developing responsive websites using HTML, CSS, JavaScript, and Bootstrap."
  },
  {
    id: 4,
    role: "Web Developer Internship",
    company: "CadDesk Pvt.Ltd",
    period: "May 2023 - June 2023",
    description: "During my internship at CadDesk Pvt. Ltd., I contributed to building interactive web pages using HTML, CSS, and JavaScript, while also performing manual testing on different modules to identify and report issues."
  }
];

const educationHistory = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "Sir M. Visvesvaraya Institute of Technology",
    year: "2021 - 2023"
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "IIMT Group of Colleges",
    year: "2018 - 2021"
  },
  {
    id: 3,
    degree: "Diploma in Computer Application",
    institution: "RCSM Institute(Wizardtech)",
    year: "2017 - 2018 (Open)"
  },
  {
    id: 4,
    degree: "12th (Senior Secondary)",
    institution: "Gyan Niketan (CBSE)",
    year: "2018"
  },
  {
    id: 5,
    degree: "10th (Secondary)",
    institution: "ACME Public School (CBSE)",
    year: "2016"
  }
];

const Experience = () => {
  return (
    <PageTransition>
    <div className="min-h-screen bg-transparent pt-24 pb-20 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">My <span className="text-sky-400">Journey</span></h1>

        {/* Work Experience Section */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-400 mb-10 flex items-center gap-3">
            <span className="text-2xl">💼</span> Work Experience
          </h2>
          <div className="space-y-12 border-l-2 border-slate-700 ml-3 md:ml-6 pl-8 md:pl-12 relative">
            {workExperience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot - Centered on the border */}
                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-sky-400 border-4 border-black/20"></span>
                <h3 className="text-2xl font-bold text-white">{job.role}</h3>
                <div className="text-teal-400 font-semibold mb-2">{job.company}</div>
                <div className="text-sm text-slate-400 mb-4 italic">{job.period}</div>
                <p className="text-slate-300 leading-relaxed">{job.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-sky-400 mb-10 flex items-center gap-3">
            <span className="text-2xl">🎓</span> Education
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {educationHistory.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-teal-400 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-sky-400 font-medium mb-1">{edu.institution}</p>
                <p className="text-slate-400 text-sm">{edu.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
    </PageTransition>
  );
};
export default Experience;