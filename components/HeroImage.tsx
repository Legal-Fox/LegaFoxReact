import Image from "next/image"
import { StarFilledIcon } from "@radix-ui/react-icons"

import { CirclePattern } from '@/public/svg/CirclePattern'
import { BackgroundCircle } from '@/public/svg/BackgroundCircle'
import ProfileHighlights from "@/components/ProfileHighlights"

import Hero from '@/public/img/hero.webp'

export default function HeroImage() {
  return (
    <div className="relative overflow-hidden xl:pr-20">
      <StarFilledIcon className="absolute top-[24%] left-[6%] sm:h-6 sm:w-6 h-5 w-5 fill-primary" />
      <StarFilledIcon className="absolute right-[5%] sm:bottom-50 bottom-[6%] sm:h-6 sm:w-24 h-5 w-5 fill-primary" />
      <CirclePattern className='h-44 w-32 absolute left-[10%] bottom-[3%] -z-10' />
      <BackgroundCircle className='absolute -bottom-1/4 w-full h-full -z-20 fill-popover' />
      <ProfileHighlights className='absolute right-[5%] top-0' yearsOfExperience={7} rating={5} />
      <Image 
        src={Hero}
        alt="Фото команды"
        className="object-contain w-full h-full max-h-[85vh] "
        priority
      />
    </div>
  );
}