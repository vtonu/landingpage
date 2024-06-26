import { BotMessageSquare } from 'lucide-react';
import { BatteryCharging } from 'lucide-react';
import { Fingerprint } from 'lucide-react';
import { ShieldHalf } from 'lucide-react';
import { PlugZap } from 'lucide-react';
import { GlobeLock } from 'lucide-react';

import user1 from '../assets/profile-pictures/user1.jpg';
import user2 from '../assets/profile-pictures/user2.jpg';
import user3 from '../assets/profile-pictures/user3.jpg';
import user4 from '../assets/profile-pictures/user4.jpg';
import user5 from '../assets/profile-pictures/user5.jpg';
import user6 from '../assets/profile-pictures/user6.jpg';

export const navItems = [
  { label: 'HOME', href: '#' },
  { label: 'SERVICES', href: '#' },
  { label: 'PROJECTS', href: '#' },
  { label: 'CONTACT', href: '#' },
];

export const testimonials = [
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
  {
    user: 'David Johnson',
    company: 'Quantum Innovations',
    image: user3,
    text: 'Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.',
  },
  {
    user: 'Ronee Brown',
    company: 'Fusion Dynamics',
    image: user4,
    text: 'Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!',
  },
  {
    user: 'Michael Wilson',
    company: 'Visionary Creations',
    image: user5,
    text: 'I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.',
  },
  {
    user: 'Emily Davis',
    company: 'Synergy Systems',
    image: user6,
    text: 'The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.',
  },
];

export const features = [
  {
    icon: <BatteryCharging />,
    text: (
      <span className="h-6 px-2 py-1 text-sm font-medium text-blue-500 uppercase rounded-sm bg-neutral-900">
        Residential
      </span>
    ),
    description: (
      <div className="p-6 font-normal border rounded-md bg-neutral-900 text-md border-neutral-800">
        <p>
          Top-quality residential services, from EV charger installations to emergency generator
          setups. Meter service upgrades, panel replacements, and all your home electrical needs,
          met with precision and care.
        </p>
      </div>
    ),
  },
  {
    icon: <PlugZap />,
    text: (
      <span className="h-6 px-2 py-1 text-sm font-medium text-blue-500 uppercase rounded-sm bg-neutral-900">
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
      <span className="h-6 px-2 py-1 text-sm font-medium text-blue-500 uppercase rounded-sm bg-neutral-900">
        Industrial
      </span>
    ),
    description: (
      <div className="p-6 font-normal border rounded-md bg-neutral-900 text-md border-neutral-800">
        <p>
          We excel in implementing complex control systems and automation solutions that optimize
          your production processes.
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

export const pricingOptions = [
  {
    title: 'Free',
    price: '$0',
    features: ['Private board sharing', '5 Gb Storage', 'Web Analytics', 'Private Mode'],
  },
  {
    title: 'Pro',
    price: '$10',
    features: ['Private board sharing', '10 Gb Storage', 'Web Analytics (Advance)', 'Private Mode'],
  },
  {
    title: 'Enterprise',
    price: '$200',
    features: [
      'Private board sharing',
      'Unlimited Storage',
      'High Performance Network',
      'Private Mode',
    ],
  },
];

export const resourcesLinks = [
  { href: '#', text: 'Getting Started' },
  { href: '#', text: 'Documentation' },
  { href: '#', text: 'Tutorials' },
  { href: '#', text: 'API Reference' },
  { href: '#', text: 'Community Forums' },
];

export const platformLinks = [
  { href: '#', text: 'Features' },
  { href: '#', text: 'Supported Devices' },
  { href: '#', text: 'System Requirements' },
  { href: '#', text: 'Downloads' },
  { href: '#', text: 'Release Notes' },
];

export const communityLinks = [
  { href: '#', text: 'Events' },
  { href: '#', text: 'Meetups' },
  { href: '#', text: 'Conferences' },
  { href: '#', text: 'Hackathons' },
  { href: '#', text: 'Jobs' },
];
