import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Projects from './components/Projects';
import Partners from './components/Partners';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="px-2 pt-20 mx-auto max-w-7xl">
        <HeroSection />
        <FeatureSection />
        <Projects />
        <Partners />
        <Footer />
      </div>
    </>
  );
};

export default App;
