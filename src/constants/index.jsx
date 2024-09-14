import { BatteryCharging } from 'lucide-react';
import { Cable } from 'lucide-react';
import { KeyboardMusic } from 'lucide-react';
import generac from '../assets/profile-pictures/generac.jpg';
import commercial from '../assets/services/commercial.jpg';
import residential from '../assets/services/residential.jpg';
import industrial from '../assets/services/industrial.jpg';

export const navItems = [
  { label: 'HOME', scrollTo: 'homeRef' },
  { label: 'SERVICES', scrollTo: 'servicesRef' },
  { label: 'PROJECTS', scrollTo: 'projectsRef' },
  { label: 'CONTACT', scrollTo: 'contactRef' },
];

export const partners = [
  {
    company: 'GENERAC COMPANY',
    image: generac,
  },
];

export const features = [
  {
    icon: <KeyboardMusic />,
    text: (
      <span className="px-4 py-2 text-sm font-medium tracking-wide text-blue-600 uppercase rounded-sm bg-neutral-100">
        Commercial
      </span>
    ),
    description: (
      <div className="p-6 font-normal border rounded-md bg-neutral-900 text-md border-neutral-600">
        <p className="text-center">
          From logic systems to automations & controls, Meter Electric provides tailored solutions
          for every project.
        </p>
        <div className="w-full p-2">
          <img
            src={commercial}
            alt="Commercial Image"
            className="object-cover h-48 border border-blue-600 rounded-md w-96"
          />
        </div>
      </div>
    ),
  },
  {
    icon: <BatteryCharging />,
    text: (
      <span className="px-4 py-2 text-sm font-medium tracking-wide text-blue-600 uppercase rounded-sm bg-neutral-100">
        Residential
      </span>
    ),
    description: (
      <div className="p-6 font-normal border rounded-md bg-neutral-900 text-md border-neutral-600">
        <p className="text-center ">
          Top-quality residential services, from EV charger installations to emergency generators,
          meter service upgrades, panel replacements & more.
        </p>
        <div className="w-full p-2">
          <img
            src={residential}
            alt="Residential Image"
            className="object-cover h-48 border border-blue-600 rounded-md w-96"
          />
        </div>
      </div>
    ),
  },
  {
    icon: <Cable />,
    text: (
      <span className="px-4 py-2 text-sm font-medium tracking-wide text-blue-600 uppercase rounded-sm bg-neutral-100">
        Industrial
      </span>
    ),
    description: (
      <div className="p-6 font-normal border rounded-md bg-neutral-900 text-md border-neutral-600">
        <p className="text-center ">
          From control systems troubleshooting to automations & controls, Meter Electric provides
          tailored solutions for every industry.
        </p>
        <div className="w-full p-2">
          <img
            src={industrial}
            alt="Industrial Image"
            className="object-cover h-48 border border-blue-600 rounded-md w-96"
          />
        </div>
      </div>
    ),
  },
];
