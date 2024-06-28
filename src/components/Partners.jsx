import { partners } from '../constants';

const Partners = () => {
  return (
    <div className="mt-20 tracking-wide min-h-[300px] border-t border-blue-700">
      <h2 className="mt-6 text-3xl tracking-wide text-center sm:text-5xl lg:text-6xl">
        OUR{' '}
        <span className="text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">
          PARTNERS
        </span>
        <br></br> <br></br>
      </h2>
      <div className="flex flex-wrap justify-center">
        {partners.map((partner, index) => (
          <div key={index} className="w-full px-4 py-2 sm:w-1/2 lg:w-1/3">
            <div className="p-4 border-2 border-blue-700 rounded-md bg-neutral-800">
              <img className="w-full h-20 rounded-md object-fit" src={partner.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
