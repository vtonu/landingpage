import { useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Projects from './components/Projects';
import Partners from './components/Partners';
import Contacts from './components/ContactUs';
import Footer from './components/Footer';

const App = () => {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navbar
        servicesRef={servicesRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        homeRef={homeRef}
      />
      <div className="px-2 pt-20 mx-auto max-w-7xl">
        <HeroSection servicesRef={servicesRef} projectsRef={projectsRef} homeRef={homeRef} />
        <div ref={servicesRef}>
          <FeatureSection />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <Partners />
        <div ref={contactRef}>
          <Contacts />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
