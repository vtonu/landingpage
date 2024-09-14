import project1_yellow from '../assets/projects/project1_yellow.jpg';
import project2_redbluewires from '../assets/projects/project2_redbluewires.jpg';
import project3_yellowstickers from '../assets/projects/project3_yellowstickers.jpg';
import project4_housebackground from '../assets/projects/project4_housebackground.jpg';

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
          <img
            src={project1_yellow}
            alt="Project 3"
            className="border border-blue-600 rounded-md"
          />
        </div>
        <div className="w-full p-2">
          <img
            src={project2_redbluewires}
            alt="Project 4"
            className="border border-blue-600 rounded-md"
          />
        </div>

        <div className="w-full p-2">
          <img
            src={project3_yellowstickers}
            alt="Project 2"
            className="border border-blue-600 rounded-md"
          />
        </div>
        <div className="w-full p-2">
          <img
            src={project4_housebackground}
            alt="Project 2"
            className="border border-blue-600 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
