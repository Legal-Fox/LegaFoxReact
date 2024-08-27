import React from 'react';
import { useTranslations } from 'next-intl';
import { StarFilledIcon } from "@radix-ui/react-icons";

import { HOME_ROUTE, ABOUT_ROUTE, CONTACTS_ROUTE, PRIVACY_POLICY_ROUTE } from '@/constants/routes';
import { SocialLinks } from '@/components/SocialLinks'
import NavMenu from '@/components/NavMenu'

const Footer: React.FC = () => {
  const tFooter = useTranslations('HomePage.FooterSection');

  const navLinks = [
    { name: tFooter('home'), route: HOME_ROUTE },
    { name: tFooter('contacts'), route: CONTACTS_ROUTE },
    { name: tFooter('aboutUs'), route: ABOUT_ROUTE },
    { name: tFooter('privacyPolicy'), route: PRIVACY_POLICY_ROUTE },
  ];

  return (
    <footer className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="flex flex-col items-center justify-center">
            <StarFilledIcon className="h-16 w-16 text-emerald-500 mb-4" />
            {/* <h3 className="text-lg font-semibold mb-2">{tFooter('companyName')}</h3>
            <p className="text-sm text-gray-600">{tFooter('slogan')}</p> */}
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{tFooter('contactInfoTitle')}</h4>
            <ul className="space-y-2 text-sm">
              <li>{tFooter('name')}</li>
              <li>{tFooter('nip')}</li>
              <li>{tFooter('email')}</li>
              <li>{tFooter('city')}</li>
              <li>{tFooter('address')}</li>
              <li>{tFooter('postalCode')}</li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col text-start">
          <h4 className="text-lg font-semibold ">{tFooter('linksTitle')}</h4>
          <NavMenu variant="footer" className="flex flex-col"/>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{tFooter('socialMediaTitle')}</h4>
            <SocialLinks variant="footer" />
          </div>
          </div>
        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">{tFooter('copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;