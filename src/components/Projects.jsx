import testerImg from '../assets/tester.jpg';

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
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="w-full p-2">
          <img src={testerImg} alt="Project 1" className="border border-blue-600 rounded-md" />
        </div>
        <div className="w-full p-2">
          <img src={testerImg} alt="Project 2" className="border border-blue-600 rounded-md" />
        </div>
        <div className="w-full p-2">
          <img src={testerImg} alt="Project 3" className="border border-blue-600 rounded-md" />
        </div>
        <div className="w-full p-2">
          <img src={testerImg} alt="Project 4" className="border border-blue-600 rounded-md" />
        </div>
        <div className="w-full p-2">
          <img src={testerImg} alt="Project 1" className="border border-blue-600 rounded-md" />
        </div>
        <div className="w-full p-2">
          <img src={testerImg} alt="Project 2" className="border border-blue-600 rounded-md" />
        </div>
        <div className="w-full p-2">
          <img src={testerImg} alt="Project 3" className="border border-blue-600 rounded-md" />
        </div>
        <div className="w-full p-2">
          <img src={testerImg} alt="Project 4" className="border border-blue-600 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
