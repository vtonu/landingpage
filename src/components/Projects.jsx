import testerImg from '../assets/tester.jpg';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';
import project5 from '../assets/project5.jpg';
import project6 from '../assets/project6.jpg';
import project7 from '../assets/project7.jpg';
import project8 from '../assets/project8.jpg';

const Projects = () => {
  return (
    <div className="mt-20 min-h-[600px]">
      <h2 className="mt-6 text-5xl tracking-wide text-center sm:text-5xl lg:text-6xl">
        OUR{' '}
        <span className="text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">
          PROJECTS
        </span>
        <br></br> <br></br>
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <div className="w-full p-2">
          <img src={project2} alt="Project 3" className="border border-blue-600 rounded-md" />
        </div>
        <div className="w-full p-2">
          <img src={project3} alt="Project 4" className="border border-blue-600 rounded-md" />
        </div>

        <div className="w-full p-2">
          <img src={project5} alt="Project 2" className="border border-blue-600 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
