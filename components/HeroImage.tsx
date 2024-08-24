import Image from "next/image";
import { StarFilledIcon } from "@radix-ui/react-icons";

import Hero from '@/public/img/hero.png';

const CirclePattern = () => (
  <svg width="100%" height="100%">
    <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="2" fill="#000" />
    </pattern>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
  </svg>
);

const BackgroundCircle = () => (
  <svg
    className="absolute top-[200px] left-0 -z-10"
    width="800"
    height="800"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="400" cy="400" r="400" fill="blue" />
  </svg>
);

export default function HeroImage() {
  return (
    <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] overflow-hidden">
      <StarFilledIcon className="absolute left-20 top-40" />
      <StarFilledIcon className="absolute right-20 bottom-40" />
      <div className="h-56 w-32 absolute bottom-4">
        <CirclePattern />
      </div>
      <Image 
        src={Hero} 
        alt="Фото команды" 
        className="absolute inset-0 w-full h-full object-cover z-10"
        priority
      />
      <BackgroundCircle />
    </div>
  );
}