import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const skills = [
  {
    category: "Automation Engineering",
    items: [
      { name: "Selenium WebDriver", level: 90, icon: "⚙️" },
      { name: "Java (SDET)", level: 85, icon: "☕" },
      { name: "TestNG & Cucumber", level: 85, icon: "🥒" },
      { name: "API Testing (RestAssured)", level: 80, icon: "📡" },
      { name: "Jira & Agile Workflow", level: 85, icon: "🎫" },
      { name: "Git & CI/CD Pipelines", level: 75, icon: "🔀" }
    ]
  },
  {
    category: "Generative AI",
    items: [
      { name: "Prompt Engineering", level: 95, icon: "✍️" },
      { name: "LLM Integration (Gemini/GPT)", level: 90, icon: "🤖" },
      { name: "AI Agents Development", level: 80, icon: "🕵️" },
      { name: "Python for AI", level: 85, icon: "🐍" },
      { name: "Vector Databases", level: 75, icon: "🗄️" },
      { name: "Vertex AI", level: 65, icon: "☁️" }
    ]
  },
  {
    category: "Web Development",
    items: [
      { name: "React.js & Modern UI", level: 80, icon: "⚛️" },
      { name: "JavaScript (ES6+)", level: 85, icon: "📜" },
      { name: "Node.js & Backend", level: 75, icon: "🟢" },
      { name: "HTML5, CSS3 & Tailwind", level: 90, icon: "🎨" },
      { name: "API Integration", level: 85, icon: "🔌" },
      { name: "Database (SQL/NoSQL)", level: 75, icon: "💾" }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-transparent text-slate-300">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-center text-white mb-12"
        >
          Technical <span className="text-sky-400">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-sky-400/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-sky-400 mb-6 text-center">{category.category}</h3>
              <div className="space-y-4">
                {category.items.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-slate-200 flex items-center gap-2">
                        <span>{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-xs text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
                      <motion.div 
                        className="bg-gradient-to-r from-sky-400 to-teal-400 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link 
            to="/skills" 
            className="px-8 py-3 rounded-full bg-sky-400 text-slate-900 font-bold hover:bg-cyan-300 transition-all shadow-lg hover:scale-105 hover:shadow-[0_0_25px_rgba(56,189,248,0.6)]"
          >
            Skills & Tech Stack
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Skills;