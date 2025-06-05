// Define the type for each tech stack icon
interface TechStackIcon {
  name: string;
  image: string; 
  scale: number;
  rotation: [number, number, number];
}

// Image imports
import git from '../assets/images//logos/git.svg'
import react from'../assets/images//logos/react.png'
import three from '../assets/images//logos/three.png'
import tailwind from'../assets/images//logos/tailwind.svg'
import node from '../assets/images/logos/node.png'
// Create the array with the defined type
const TechStackIcons: TechStackIcon[] = [
  {
    name: "React",
    image: react,
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "tailwind css",
    image: tailwind,
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "git",
    image: git,
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "React three fiber",
    image: three,
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name:"Nodejs",
    image:node,
    scale:1,
    rotation:[0,0,0]

  },
];

export default TechStackIcons;
