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
        homeRef={homeRef}
        servicesRef={servicesRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <div className="px-2 pt-20 mx-auto max-w-7xl">
        <div ref={homeRef}>
          <HeroSection servicesRef={servicesRef} projectsRef={projectsRef} />
        </div>
        <div ref={servicesRef}>
          <FeatureSection />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <Partners />
        <div ref={contactRef}>
          <Contacts homeRef={homeRef} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
