import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Workflow from './components/Workflow';
import Footer from './components/Footer';
import Partners from './components/Partners';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="px-6 pt-20 mx-auto max-w-7xl">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Partners />
        <Footer />
      </div>
    </>
  );
};

export default App;
