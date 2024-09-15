import Navbar from '../components/Navbar';

import Work1 from '../assets/services/residentialwork/1.jpg';
import Work2 from '../assets/services/residentialwork/2.jpg';
import Work3 from '../assets/services/residentialwork/3.jpg';
import Work4 from '../assets/services/residentialwork/4.jpg';
import Work5 from '../assets/services/residentialwork/5.jpg';

import Footer from '../components/Footer';

const Projects = () => {
  return (
    <div className="mt-20 min-h-[600px]">
      <Navbar />
      <h2 className="mt-6 text-5xl tracking-wide text-center sm:text-5xl lg:text-6xl">
        RESIDENTIAL{' '}
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

        <div className="w-full p-2">
          <img src={Work3} alt="Work 3" className="border border-blue-600 rounded-md" />
        </div>
        <div className="w-full p-2">
          <img src={Work4} alt="Work 4" className="border border-blue-600 rounded-md" />
        </div>
        <div className="w-full p-2">
          <img src={Work5} alt="Work 5" className="border border-blue-600 rounded-md" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
