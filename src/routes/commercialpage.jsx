import Navbar from '../components/Navbar';

import Work1 from '../assets/services/commercialwork/1.jpg';
import Work2 from '../assets/services/commercialwork/2.jpg';

import Footer from '../components/Footer';

const Projects = () => {
  return (
    <div className="mt-20 min-h-[600px]">
      <Navbar />
      <h2 className="mt-6 text-5xl tracking-wide text-center sm:text-5xl lg:text-6xl">
        COMMERCIAL{' '}
        <span className="text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">
          WORK
        </span>
        <br></br> <br></br>
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
        <div className="w-full p-2">
          <img src={Work1} alt="Work 1" className="border border-blue-600 rounded-md" />
        </div>
        <div className="w-full p-2">
          <img src={Work2} alt="Work 2" className="border border-blue-600 rounded-md" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;