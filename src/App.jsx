import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Projects from './pages/projects';
import Certifications from './pages/Certifications';
import Experience from './pages/Experience';
import SkillsPage from './pages/SkillsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import Contact from './sections/Contact';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-transparent text-white flex flex-col">

      <AnimatedBackground />
      
      <Navbar />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/skills" element={<SkillsPage />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Contact />

      <Footer />
    </div>
  );
}

export default App;