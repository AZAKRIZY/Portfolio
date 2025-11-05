// Define the type for each tech stack icon
export interface TechStackIcon {
  name: string;
  image: string;
  scale: number;
  rotation: [number, number, number];
}

// Define the type for social media icons
export interface SocialImg {
  image: string;
  path: string;
}

// Image imports
import git from '../assets/images/logos/git.svg';
import react from '../assets/images/logos/react.png';

import tailwind from '../assets/images/logos/tailwind.svg';
import node from '../assets/images/logos/node.png';

import fb from '../assets/images/fb.png';
import insta from '../assets/images/insta.png';
import linkedIn from '../assets/images/linkedin.png';

// Exported arrays
export const TechStackIcons: TechStackIcon[] = [
  { name: 'React', image: react, scale: 1, rotation: [0, 0, 0] },
  { name: 'Tailwind CSS', image: tailwind, scale: 1, rotation: [0, 0, 0] },
  { name: 'Git', image: git, scale: 1, rotation: [0, 0, 0] },
  { name: 'Node.js', image: node, scale: 1, rotation: [0, 0, 0] },
  { name: 'flask', image: 'https://icon.icepanel.io/Technology/png-shadow-512/Flask.png', scale: 1, rotation: [0, 0, 0] },
];

export const SocialImgs: SocialImg[] = [
  { image: fb, path: 'https://www.facebook.com/?hl=fr' },
  { image: insta, path: 'https://www.instagram.com/?hl=fr' },
  { image: linkedIn, path: 'https://fr.linkedin.com/' },
];
