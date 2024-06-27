import { features } from '../constants';

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[600px]">
      <div className="text-center">
        <h2 className="mt-8 text-3xl tracking-wide sm:text-5xl lg:text-5xl lg:mt-20">
          <span className="text-transparent bg-gradient-to-r from-blue-500 to-sky-800 bg-clip-text">
            SERVICES
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex items-center justify-center w-10 h-10 p-2 mx-4 text-blue-700 rounded-full bg-neutral-900">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="p-2 mb-20 text-md text-neutral-500">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
