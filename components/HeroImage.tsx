import Image from "next/image"
import { StarFilledIcon } from "@radix-ui/react-icons"


import { CirclePattern } from '@/public/svg/CirclePattern'
import { BackgroundCircle } from '@/public/svg/BackgroundCircle'
import ProfileHighlights from "@/components/ProfileHighlights"

import Hero from '@/public/img/hero.png'

export default function HeroImage() {
  return (
    <div className="absolute bottom-0 md:left-1/4 sm:w-[600px] sm:h-[600px] md:w-[700px] md:h-[700px] xl:w-[800px] xl:h-[800px] w-[400px] h-[400px] overflow-hidden">
      <StarFilledIcon className="absolute sm:left-20 top-40 sm:h-24 sm:w-24 h-8 w-8" />
      <StarFilledIcon className="absolute right-20 sm:bottom-40 bottom-0 sm:h-24 sm:w-24 h-8 w-8" />
      <CirclePattern className='h-56 w-32 absolute bottom-4' />
      <BackgroundCircle className='absolute top-[200px] left-0 sm:w-[800px] sm:h-[800px] w-72 h-72 -z-0' />
      <ProfileHighlights className='absolute right-10 top-14' yearsOfExperience={7} rating={5} />
      <Image 
        src={Hero}
        alt="Фото команды"
        className="absolute inset-0 w-full h-full object-cover"
        priority
      />
    </div>
  );
}