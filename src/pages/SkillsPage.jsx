import { useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const skills = [
  {
    category: "Web Development",
    items: [
      { name: "HTML", level: 100, icon: "🌐" },
      { name: "CSS", level: 95, icon: "🎨" },
      { name: "JavaScript", level: 75, icon: "⚡" },
      { name: "Node JS", level: 85, icon: "🟢" },
      { name: "ReactJS", level: 75, icon: "⚛️" },
      { name: "JSON", level: 75, icon: "📋" },
      { name: "Bootstrap", level: 80, icon: "🅱️" },
      { name: "WordPress", level: 85, icon: "🇼" },
      { name: "CPanel", level: 70, icon: "🎛️" }
    ]
  },
  {
    category: "Automation Engineering",
    items: [
      { name: "Selenium WebDriver", level: 80, icon: "⚙️" },
      { name: "API Automation", level: 80, icon: "🔌" },
      { name: "Build Tools (Maven)", level: 70, icon: "🔨" },
      { name: "Reporting", level: 90, icon: "📊" },
      { name: "Version Control (Git)", level: 75, icon: "🔀" }
    ]
  },
  {
    category: "Testing & Practices",
    items: [
      { name: "Functional Testing", level: 90, icon: "✅" },
      { name: "Automation Testing", level: 85, icon: "🤖" },
      { name: "Manual Testing", level: 100, icon: "🖱️" },
      { name: "Agile Methodology", level: 100, icon: "🔄" }
    ]
  },
  {
    category: "Generative & Agentic AI",
    items: [
      { name: "Generative AI", level: 85, icon: "🧠" },
      { name: "Prompt Engineering", level: 75, icon: "✍️" },
      { name: "Agent Architecture", level: 80, icon: "🏗️" },
      { name: "AI Workflow Design", level: 80, icon: "🔗" },
      { name: "Cloud Vertex AI", level: 65, icon: "☁️" },
      { name: "Agentic AI Tool", level: 65, icon: "🛠️" }
    ]
  },
  {
    category: "Programming & Tools",
    items: [
      { name: "Advanced JAVA", level: 75, icon: "☕" },
      { name: "Python", level: 75, icon: "🐍" },
      { name: "GitHub", level: 80, icon: "🐙" },
      { name: "JIRA", level: 85, icon: "🎫" },
      { name: "Jenkins", level: 80, icon: "🏗️" },
      { name: "Spring Boot", level: 75, icon: "🍃" },
      { name: "Agile", level: 100, icon: "🏃" },
      { name: "Waterfall", level: 90, icon: "🌊" }
    ]
  }
];

const CircularProgress = ({ percentage, isVisible }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const count = useSpring(0, { duration: 1.5, bounce: 0 });
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isVisible) {
      count.set(percentage);
    } else {
      count.set(0);
    }
  }, [isVisible, percentage, count]);

  return (
    <div className="relative flex items-center justify-center">
      <svg className="transform -rotate-90 w-24 h-24">
        <circle
          cx="48"
          cy="48"
          r={radius}
          stroke="currentColor"
          strokeWidth="6"
          fill="transparent"
          className="text-slate-700"
        />
        <motion.circle
          cx="48"
          cy="48"
          r={radius}
          stroke="currentColor"
          strokeWidth="6"
          fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: isVisible ? strokeDashoffset : circumference }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          strokeLinecap="round"
          className="text-sky-400"
        />
      </svg>
      <div className="absolute flex items-center justify-center">
        <motion.span className="text-lg font-bold text-white">{rounded}</motion.span>
        <span className="text-lg font-bold text-white">%</span>
      </div>
    </div>
  );
};

const SkillCard = ({ skill }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-48 w-full cursor-pointer group"
      style={{ perspective: "1000px" }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl flex flex-col items-center justify-center p-4 hover:border-sky-400 transition-colors shadow-lg"
             style={{ backfaceVisibility: "hidden" }}>
          <div className="text-4xl mb-3">{skill.icon}</div>
          <h3 className="text-lg font-bold text-white text-center">{skill.name}</h3>
          <p className="text-slate-400 text-xs mt-2 text-center">Click to view proficiency</p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden bg-slate-900/80 backdrop-blur-sm border border-sky-400 rounded-xl flex items-center justify-center p-4 shadow-[0_0_20px_rgba(56,189,248,0.2)]"
             style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
          <CircularProgress percentage={skill.level} isVisible={isFlipped} />
        </div>
      </motion.div>
    </div>
  );
};

const SkillsPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-transparent pt-24 pb-20 px-6 md:px-12">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            Skills & <span className="text-sky-400">Tech Stack</span>
          </h1>

          {skills.map((category, idx) => (
            <div key={idx} className="mb-12">
              <h2 className="text-2xl font-bold text-sky-400 mb-6 border-b border-slate-700 pb-2 inline-block">
                {category.category}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.items.map((skill, sIdx) => (
                  <SkillCard key={sIdx} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default SkillsPage;