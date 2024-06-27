import { features } from '../constants';

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-blue-700 min-h-[600px]">
      <h2 className="text-2xl tracking-wide text-center border-t border-blue-700 sm:text-5xl lg:text-6xl">
        <br></br>
        OUR{' '}
        <span className="text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">
          SERVICES
        </span>
        <br></br> <br></br>
      </h2>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="grid gap-4 justify-items-center">
              <div>{feature.text}</div>
              <div className="flex items-center justify-center w-10 h-10 text-blue-700 rounded-sm">
                {feature.icon}
              </div>
              <p className="p-2 mb-20 text-md text-amber-50">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
