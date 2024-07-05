import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl tracking-wide text-center sm:text-6xl lg:text-7xl ">
        <span className="font-semibold text-blue-700">METER</span>
        <span className="font-semibold text-red-700">ELECTRIC</span>
      </h1>
      <br></br>
      <span className="font-semibold text-neutral-900">
        LEADER IN QUALITY ELECTRICAL SOLUTIONS{' '}
      </span>
      <br></br>
      <p className="max-w-4xl mt-10 text-center text-balance text-md text-neutral-700">
        Welcome to METER ELECTRIC, your go-to destination for quality electrical solutions. As
        specialists in the industry, we provide comprehensive commercial, residential and industrial
        services tailored to your needs. Choose METER ELECTRIC for reliable service that illuminates
        your world with safety & efficiency.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="px-4 py-3 mx-2 border-blue-600 rounded-sm shadow-sm border-1 bg-gradient-to-r from-blue-400 to-blue-800 text-amber-50 hover:to-blue-600 shadow-sky-200">
          SERVICES
        </a>
        <a
          href="#"
          className="px-4 py-3 mx-3 border-red-600 rounded-sm shadow-sm border-1 bg-gradient-to-r from-red-400 to-red-800 text-amber-50 hover:to-red-600 shadow-sky-200">
          PROJECTS
        </a>
      </div>
      <div className="flex justify-center mt-10">
        <video
          autoPlay
          loop
          muted
          className="w-1/2 mx-1 my-2 border border-blue-700 rounded-lg shadow-sm shadow-sky-400">
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="w-1/2 mx-1 my-2 border border-blue-700 rounded-lg shadow-sm shadow-sky-400">
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
