import { BatteryCharging } from 'lucide-react';
import { PlugZap } from 'lucide-react';

import user1 from '../assets/profile-pictures/user1.jpg';
import user2 from '../assets/profile-pictures/user2.jpg';

export const navItems = [
  { label: 'HOME', href: '#' },
  { label: 'SERVICES', href: '#' },
  { label: 'PROJECTS', href: '#' },
  { label: 'CONTACT', href: '#' },
];

export const partners = [
  {
    user: 'John Doe',
    company: 'Stellar Solutions',
    image: user1,
    text: 'I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.',
  },
  {
    user: 'Jane Smith',
    company: 'Blue Horizon Technologies',
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
];

export const features = [
  {
    icon: <BatteryCharging />,
    text: (
      <span className="px-4 py-2 text-sm font-medium tracking-wide text-blue-500 uppercase rounded-sm bg-neutral-200">
        Residential
      </span>
    ),
    description: (
      <div className="p-6 font-normal border rounded-md bg-neutral-900 text-md border-neutral-800">
        <p>
          Top-quality residential services, from EV charger installations to emergency generators.
          Meter service upgrades, panel replacements, and more.
        </p>
      </div>
    ),
  },
  {
    icon: <PlugZap />,
    text: (
      <span className="px-4 py-2 text-sm font-medium tracking-wide text-blue-500 uppercase rounded-sm bg-neutral-200">
        Commercial
      </span>
    ),
    description: (
      <div className="p-6 font-normal border rounded-md bg-neutral-900 text-md border-neutral-800">
        <p>
          We specialize in logic & control systems, as well as automation systems. We ensure your
          operations run smoothly and efficiently.
        </p>
      </div>
    ),
  },
  {
    icon: <PlugZap />,
    text: (
      <span className="px-4 py-2 text-sm font-medium tracking-wide text-blue-500 uppercase rounded-sm bg-neutral-200">
        Industrial
      </span>
    ),
    description: (
      <div className="p-6 font-normal border rounded-md bg-neutral-900 text-md border-neutral-800">
        <p>
          We excel in implementing complex control systems and automation solutions that optimize
          your business and production processes.
        </p>
      </div>
    ),
  },
];

export const checklistItems = [
  {
    title: 'Project 1',
    description: 'Project 1 Details go here ...',
  },
  {
    title: 'Project 2',
    description: 'Project 1 Details go here ...',
  },
  {
    title: 'Project 3',
    description: 'Project 1 Details go here ...',
  },
];
