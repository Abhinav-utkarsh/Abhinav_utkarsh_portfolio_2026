import Hero from './Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Brand from '../sections/Brand';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Brand />
    </div>
  );
};
export default Home;