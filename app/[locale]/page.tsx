import { AccessibilityIcon, ArrowTopRightIcon, BackpackIcon, CodeIcon, LightningBoltIcon, MagicWandIcon, RocketIcon, StarFilledIcon } from "@radix-ui/react-icons"
import { useTranslations } from 'next-intl'
import Image from "next/image"

import ContactForm from "@/components/ContactForm"
import ProfileHighlights from "@/components/ProfileHighlights"
import { InView } from '@/components/core/InView'
import { AnimatedGroup } from '@/components/core/AnimatedGroup'
import { TextEffect } from '@/components/core/TextEffect'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import LenisProvider from '@/providers/LenisProvider'
import { BackgroundCircle } from '@/public/svg/BackgroundCircle'
import { CirclePattern } from '@/public/svg/CirclePattern'


import Hero from '@/public/img/hero.webp'
import About from './about/page'
import Contacts from './contacts/page'


export default function Home() {
  const tHero = useTranslations('HomePage.HeroSection')
  const tServices = useTranslations('HomePage.ServicesSection')
  const tAbout = useTranslations('HomePage.AboutUsSection')
  const tContacts = useTranslations('HomePage.ContactsSection')
  const cards = [
    {
      heading: tServices('cards.0.heading'),
      subHeading: tServices('cards.0.subHeading'),
      content: tServices('cards.0.content'),
      icon: AccessibilityIcon,
    },
    {
      heading: tServices('cards.1.heading'),
      subHeading: tServices('cards.1.subHeading'),
      content: tServices('cards.1.content'),
      icon: RocketIcon,
    },
    {
      heading: tServices('cards.2.heading'),
      subHeading: tServices('cards.2.subHeading'),
      content: tServices('cards.2.content'),
      icon: MagicWandIcon,
    },
    {
      heading: tServices('cards.3.heading'),
      subHeading: tServices('cards.3.subHeading'),
      content: tServices('cards.3.content'),
      icon: BackpackIcon,
    },
    {
      heading: tServices('cards.4.heading'),
      subHeading: tServices('cards.4.subHeading'),
      content: tServices('cards.4.content'),
      icon: CodeIcon,
    },
    {
      heading: tServices('cards.5.heading'),
      subHeading: tServices('cards.5.subHeading'),
      content: tServices('cards.5.content'),
      icon: LightningBoltIcon,
    },
  ];
  const contactTranslations = {
    privacyError: tContacts('privacyError'),
    nameLabel: tContacts('nameLabel'),
    namePlaceholder: tContacts('namePlaceholder'),
    phoneLabel: tContacts('phoneLabel'),
    phonePlaceholder: tContacts('phonePlaceholder'),
    messageLabel: tContacts('messageLabel'),
    messagePlaceholder: tContacts('messagePlaceholder'),
    submitButton: tContacts('submitButton'),
    successMessage: tContacts('successMessage'),
    errorMessage: tContacts('errorMessage'),
    errorOccurred: tContacts('errorOccurred'),
    privacyLabel:tContacts('privacyLabel'),
    privacyPolicy:tContacts('privacyPolicy'),
    labelPrivacyPolicy:tContacts('labelPrivacyPolicy'),
    ValidationMessages: {
      name: {
        minLength: tContacts('ValidationMessages.name.minLength'),
      },
      phone: {
        invalid: tContacts('ValidationMessages.phone.invalid'),
        length: tContacts('ValidationMessages.phone.length'),
      },
      message: {
        minLength: tContacts('ValidationMessages.message.minLength'),
      }
    },
  };

  return (
    <LenisProvider>
    {/* Hero Section */}
      <div className="flex flex-col lg:flex-row lg:items-end sm:h-[1100px] h-[900px] container mx-auto">
      <section className="w-full lg:w-1/2 lg:h-2/3 flex-row  mt-12 sm:mt-10">
      <TextEffect className="text-2xl sm:text-4xl md:text-4xl lg:text-6xl font-semibold mb-4 sm:mb-7 lg:mb-10" as='h1' preset='fade'>
        {tHero('title')}
        </TextEffect>
        <TextEffect className="pl-1 text-lg font-light sm:text-2xl md:text-lg lg:text-lg mb-6 lg:mb-14" per='word' as='p' preset='blur'>
        {tHero('subTitle')}
        </TextEffect>
        <Dialog>
      <DialogTrigger asChild>
      <Button className="text-sm sm:text-xl px-6 py-2 sm:px-10 sm:py-4 mb-10">{tHero('heroButton')}<ArrowTopRightIcon className="ml-1 sm:ml-2 w-6 h-6 sm:w-8 sm:h-8"/></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-1/3"> 
        <DialogHeader>
          <DialogTitle className="text-3xl font-semibold mb-4">{tContacts('titleCard')}</DialogTitle>
          <DialogDescription className="text-lg text-foreground">{tContacts('subTitleCard')}</DialogDescription>
        </DialogHeader>
        <ContactForm contactTranslations={contactTranslations} />
      </DialogContent>
    </Dialog>
      </section>
        {/* <HeroImage /> */}
        <div className="relative overflow-hidden xl:pr-20">
      <StarFilledIcon className="absolute top-[24%] left-[6%] sm:h-6 sm:w-6 h-5 w-5 fill-primary" />
      <StarFilledIcon className="absolute right-[5%] sm:bottom-50 bottom-[6%] sm:h-6 sm:w-24 h-5 w-5 fill-primary" />
      <CirclePattern className='h-44 w-32 absolute left-[10%] bottom-[3%] -z-10' />
      <BackgroundCircle className='absolute -bottom-1/4 w-full h-full -z-20 fill-popover' />
      <ProfileHighlights 
        className='absolute right-[5%] top-0' 
        yearsOfExperience={8} 
        rating={5}
        tYears={tHero('years')}
        tExperience={tHero('experience')}
        tRating={tHero('rating')}
        tOutOf={tHero('outOf')}
        />
      <Image 
        src={Hero}
        alt={tAbout('firstImageAlt')}
        className="object-contain w-full h-full max-h-[85vh] "
        priority
      />
    </div>
      </div>
    {/* Services Section */}
      <div className="min-h-[1100px] relative bg-background-secondary">
        <section className="text-center container mx-auto pt-16 md:pt-20 lg:pt-28 pb-16">
          <h2 className="text-3xl xl:text-4xl font-semibold mb-8">{tServices('title')}</h2>
          <p className="xl:text-xl text-lg font-light mb-24">{tServices('subTitle')}</p>
          <InView
                viewOptions={{ once: true, margin: '0px 0px -250px 0px' }}
                variants={{
                  hidden: {
                    opacity: 0,
                  },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.09,
                    },
                  },
                }}
              >
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4"> */}
          <AnimatedGroup
      className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4'
      preset='scale'
    >
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Card key={index} className="w-full text-left mx-auto bg-background">
                  <CardHeader className="flex flex-row items-center">
                    <Icon className="w-24 h-14"/>
                    <div>
                      <CardTitle>{card.heading}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className='text-lg font-light'>
                    {card.content}
                  </CardContent>
                </Card>
              );
            })}
              </AnimatedGroup>
          </InView>
        </section>
      </div>

{/* About Section */}
  <About />
{/* Contacts Section */}
<Contacts />
</LenisProvider>
  );
}