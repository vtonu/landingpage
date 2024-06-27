import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl tracking-wide text-center sm:text-6xl lg:text-7xl">
        Meter
        <span className="text-transparent bg-gradient-to-r from-sky-500 to-blue-800 bg-clip-text">
          {' '}
          Electric
        </span>
      </h1>
      <br></br>LEADER IN QUALITY ELECTRICAL SOLUTIONS <br></br>
      <p className="max-w-4xl mt-10 text-lg text-center text-neutral-500">
        Welcome to Meter Electric, your go-to destination for quality electrical solutions. As
        specialists in the industry, we provide comprehensive residential, commercial, and
        industrial services tailored to your needs. Choose METER ELECTRIC for reliable service that
        illuminates your world with safety and efficiency.
      </p>
      <div className="flex justify-center my-10">
        <a href="#" className="px-4 py-3 mx-3 rounded-sm bg-gradient-to-r from-sky-500 to-blue-800">
          SERVICES
        </a>
        <a href="#" className="px-4 py-3 mx-3 border rounded-sm">
          PROJECTS
        </a>
      </div>
      <div className="flex justify-center mt-10">
        <video
          autoPlay
          loop
          muted
          className="w-1/2 mx-2 my-4 border border-blue-700 rounded-lg shadow-sm shadow-sky-400">
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="w-1/2 mx-2 my-4 border border-blue-700 rounded-lg shadow-sm shadow-sky-400">
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
