import { BatteryCharging } from 'lucide-react';
import { Cable } from 'lucide-react';
import { KeyboardMusic } from 'lucide-react';

import user1 from '../assets/profile-pictures/user1.jpg';
import user2 from '../assets/profile-pictures/user2.jpg';

import codeImg from '../assets/code.jpg';
import techImg from '../assets/tech.jpg';
import digitalImg from '../assets/digital.jpg';

export const navItems = [
  { label: 'HOME', href: '#' },
  { label: 'SERVICES', href: '#' },
  { label: 'PROJECTS', href: '#' },
  { label: 'CONTACT', href: '#' },
];

export const partners = [
  {
    user: 'GENERAC',
    company: 'GENERAC COMPANY',
    image: user1,
    text: 'backup power generation products for residential, light commercial and industrial markets.',
  },
  {
    user: 'Company Name',
    company: 'COMPANY NAME HERE',
    image: user2,
    text: 'COMPANY SLOGAN HERE',
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
      <div className="p-6 font-normal border rounded-md bg-neutral-800 text-md border-neutral-600">
        <p className="text-center">
          From logic systems to automations & controls, Meter Electric provides tailored solutions
          for every project. Choose METER ELECTRIC!
        </p>
        <div className="w-full p-2">
          <img
            src={codeImg}
            alt="Project 1"
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
      <div className="p-6 font-normal border rounded-md bg-neutral-800 text-md border-neutral-600">
        <p className="text-center ">
          Top-quality residential services, from EV charger installations to emergency generators,
          meter service upgrades, panel replacements, and more.
        </p>
        <div className="w-full p-2">
          <img
            src={digitalImg}
            alt="Project 4"
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
      <div className="p-6 font-normal border rounded-md bg-neutral-800 text-md border-neutral-600">
        <p className="text-center ">
          From control systems troubleshooting to automations & controls, Meter Electric provides
          tailored solutions for every industry.
        </p>
        <div className="w-full p-2">
          <img
            src={techImg}
            alt="Project 2"
            className="object-cover h-48 border border-blue-600 rounded-md w-96"
          />
        </div>
      </div>
    ),
  },
];
