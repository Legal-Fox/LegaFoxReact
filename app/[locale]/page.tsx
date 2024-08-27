import { ArrowTopRightIcon, AccessibilityIcon, RocketIcon, MagicWandIcon, BackpackIcon, CodeIcon, LightningBoltIcon } from "@radix-ui/react-icons";
import { useTranslations } from 'next-intl'

import { Button } from "@/components/ui/button";
import ProfileHighlights from "@/components/ProfileHighlights";
import HeroImage from "@/components/HeroImage";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import ContactForm from "@/components/ContactForm";
import Map from "@/components/Map";
import { LOCATION_IN_MAP } from '@/constants/setting'

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
    <main className="container mx-auto">
      {/* Hero Section */}
      <div className="flex justify-between items-center h-[1100px] relative bg-slate-100 -z-20">
        <section className="w-[600px]">
          <h1 className="text-6xl font-semibold mb-7">{tHero('title')}</h1>
          <p className="text-2xl mb-14">{tHero('subTitle')}</p>
          <Button className="text-2xl px-10 py-4">{tHero('heroButton')}<ArrowTopRightIcon className="ml-2 w-8 h-8"/></Button>
        </section>
        <ProfileHighlights />
        <HeroImage />
      </div>

      {/* Services Section */}
      <div className="min-h-[1100px] relative bg-slate-200">
        <section className="text-center pt-12 pb-12">
          <h2 className="text-5xl font-semibold mb-7">{tServices('title')}</h2>
          <p className="text-xl mb-14">{tServices('subTitle')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Card key={index} className="w-[350px] bg-red-100 text-left mx-auto">
                  <CardHeader className="flex flex-row items-center">
                    <Icon className="w-24 h-14"/>
                    <div>
                      <CardTitle>{card.heading}</CardTitle>
                      <CardDescription>{card.subHeading}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {card.content}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </div>

      {/* About Section */}
      <div className="flex justify-between items-center h-[1100px] relative bg-slate-100 -z-20">
        <section className="w-[600px]">
          <h2 className="text-6xl font-semibold mb-7">{tAbout('title')}</h2>
          <p className="text-2xl mb-14">{tAbout('subTitle')}</p>
        </section>
        <HeroImage />
      </div>
{/* Contacts Section */}
<section className="relative bg-slate-200 py-12">
  <header className="text-center mb-10">
    <h1 className="text-6xl font-semibold mb-4">{tContacts('title')}</h1>
    <p className="text-2xl">{tContacts('subTitle')}</p>
  </header>

  <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center">
    <article className="w-full lg:w-[600px] mb-10 lg:mb-0">
      <Card className="bg-red-100 text-left mx-auto">
        <CardHeader className="flex flex-row items-center p-6">
          <div>
            <CardTitle className="text-3xl font-semibold">{tContacts('titleCard')}</CardTitle>
            <CardDescription className="text-lg">{tContacts('subTitleCard')}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <ContactForm contactTranslations={contactTranslations} />
        </CardContent>
      </Card>
    </article>

    <aside className="w-full lg:w-[600px] h-[400px] lg:h-[600px]">
      <Map location={LOCATION_IN_MAP} />
    </aside>
  </div>
</section>
    </main>
  );
}