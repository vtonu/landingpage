import { MoveUp } from 'lucide-react';

const Contacts = ({ homeRef }) => {
  return (
    <div className="mt-20 tracking-wide min-h-[300px] border-t border-blue-700">
      <h2 className="pt-20 mt-6 text-5xl tracking-wide text-center sm:text-5xl lg:text-6xl">
        CONTACT{' '}
        <span className="text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">
          US
        </span>
        <br></br>
        <br></br>
        <h6 className="text-lg">Email - meterelectrical@gmail.com</h6>
        <h6 className="text-lg">Website - www.meterelectrical.com</h6>
        <h6 className="text-lg">Phone - (425)-588-7578</h6>
      </h2>
      <div className="button-container">
        <button
          onClick={() => homeRef.current?.scrollIntoView({ behavior: 'smooth' })}
          className="flex px-2 py-2 mx-2 rounded-sm shadow-sm text-neutral-900 shadow-blue-300">
          <MoveUp />
          Back to Top
        </button>
      </div>
    </div>
  );
};

export default Contacts;
