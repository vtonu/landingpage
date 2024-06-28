import { BatteryCharging } from 'lucide-react';
import { PlugZap } from 'lucide-react';
import { Cable } from 'lucide-react';

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
    icon: <PlugZap />,
    text: (
      <span className="px-4 py-2 text-sm font-medium tracking-wide text-blue-600 uppercase rounded-sm bg-neutral-100">
        Commercial
      </span>
    ),
    description: (
      <div className="p-6 font-normal border rounded-md bg-neutral-900 text-md border-neutral-800">
        <p>
          From logic & control systems to automations & controls, Meter Electric provides tailored
          solutions for every project.
        </p>
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
      <div className="p-6 font-normal border rounded-md bg-neutral-900 text-md border-neutral-800">
        <p>
          Top-quality residential services, from EV charger installations to emergency generators,
          meter service upgrades, panel replacements, and more.
        </p>
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
      <div className="p-6 font-normal border rounded-md bg-neutral-900 text-md border-neutral-800">
        <p>
          From control systems troubleshooting to automations & controls, Meter Electric provides
          tailored solutions for every industry.
        </p>
      </div>
    ),
  },
];
