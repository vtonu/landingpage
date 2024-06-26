import { testimonials } from '../constants';

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="mt-6 text-3xl tracking-wide text-center sm:text-5xl lg:text-6xl">
        OUR{' '}
        <span className="text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">
          PARTNERS
        </span>
        <br></br> <br></br>
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full px-4 py-2 sm:w-1/2 lg:w-1/3">
            <div className="p-6 font-thin border rounded-md bg-neutral-900 text-md border-neutral-800">
              <p>
                We excel in implementing complex control systems and automation solutions that
                optimize your production processes.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
