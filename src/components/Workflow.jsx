import { CheckCircle2 } from 'lucide-react';
import codeImg from '../assets/code.jpg';
import { checklistItems } from '../constants';

const Workflow = () => {
  return (
    <div className="mt-20 min-h-[600px]">
      <h2 className="mt-6 text-3xl tracking-wide text-center sm:text-5xl lg:text-6xl">
        OUR{' '}
        <span className="text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">
          PROJECTS
        </span>
        <br></br> <br></br>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full p-2 lg:w-1/2">
          <img src={codeImg} alt="Coding" />
        </div>
        <div className="w-full pt-12 lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="items-center justify-center w-10 h-10 p-2 mx-6 text-blue-400 rounded-full bg-neutral-900">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
