import { useTranslations } from 'next-intl';
import Link from 'next/link'; 
import { LinkedInLogoIcon, NotionLogoIcon, InstagramLogoIcon, StarFilledIcon } from "@radix-ui/react-icons";


import { HOME_ROUTE, ABOUT_ROUTE, CONTACTS_ROUTE, PRIVACY_POLICY_ROUTE } from '@/constants/routes';

export default function Footer() {
  const tFooter = useTranslations('HomePage.FooterSection');

  return (
    <footer className="py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div className='flex justify-center items-center'>
        <StarFilledIcon className='h-32 w-32' /> 
        </div>
        {/* Contact Information */}
        <div>
          <h4 className="text-xl font-semibold mb-4">{tFooter('contactInfoTitle')}</h4>
          <p>{tFooter('name')}</p>
          <p>{tFooter('nip')}</p>
          <p>{tFooter('email')}</p>
          <p>{tFooter('city')}</p>
          <p>{tFooter('address')}</p>
          <p>{tFooter('postalCode')}</p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">{tFooter('linksTitle')}</h4>
          <ul>
            <li>
              <Link href={HOME_ROUTE} className="hover:underline">
                {tFooter('home')}
              </Link>
            </li>
            <li>
              <Link href={CONTACTS_ROUTE} className="hover:underline">
                {tFooter('contacts')}
              </Link>
            </li>
            <li>
              <Link href={ABOUT_ROUTE} className="hover:underline">
                {tFooter('aboutUs')}
              </Link>
            </li>
            <li>
              <Link href={PRIVACY_POLICY_ROUTE} className="hover:underline">
                {tFooter('privacyPolicy')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-xl font-semibold mb-4">{tFooter('socialMediaTitle')}</h4>
          <ul className="space-y-2">
          <li>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2">
            <div className='flex items-center justify-center w-10 h-10 border-emerald-400 border-2 rounded-full'>
              <LinkedInLogoIcon /> 
            </div>
            LinkedIn
            </a>
          </li>
          <li>
          <a href="https://www.notion.so/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2">

          <div className='flex items-center justify-center w-10 h-10 border-emerald-400 border-2 rounded-full'>

              <NotionLogoIcon /> 

            </div>
            Notion
            </a>

          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2">
            <div className='flex items-center justify-center w-10 h-10 border-emerald-400 border-2 rounded-full'>
              <InstagramLogoIcon /> 
              </div>
              Instagram
            </a>
          </li>
        </ul>
        </div>
      </div>
      <div className="text-center mt-10 border-t border-gray-700 pt-4">
        <p>{tFooter('copyright')}</p>
      </div>
    </footer>
  );
}
