'use client';

import React, { useMemo } from 'react'
import { usePathname, useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { Link } from '@/lib/routing'
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { HOME_ROUTE, ABOUT_ROUTE, CONTACTS_ROUTE, PRIVACY_POLICY_ROUTE } from '@/constants/routes';

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, isActive, className }) => {
  const linkClasses = cn(
    "transition-colors hover:text-foreground/80",
    isActive && "text-foreground pointer-events-none font-semibold",
    !isActive && "text-foreground/60",
    className
  );

  return (
    <>
      {isActive ? (
        <span className={linkClasses}>{label}</span>
      ) : (
        <Button variant="link" className={linkClasses}>
          <Link href={href} className={linkClasses}>{label}</Link>
          </Button>
      )}
    </>
  );
};

interface NavMenuProps {
  variant: 'header' | 'footer' | 'default';
  className?: string;
}

export default function NavMenu({ variant, className }: NavMenuProps) {
  const tNavMenu = useTranslations('Components.Nav');
  const pathName = usePathname() ?? '';
  const params = useParams();
  const locale = params.locale as string;

  const routes = useMemo(() => [
    { label: tNavMenu('home'), href: HOME_ROUTE },
    { label: tNavMenu('about'), href: ABOUT_ROUTE },
    { label: tNavMenu('contacts'), href: CONTACTS_ROUTE },
    { label: tNavMenu('privacyPolicy'), href: PRIVACY_POLICY_ROUTE },
  ], [tNavMenu]);

  const filteredRoutes = useMemo(() => 
    variant === 'header' ? routes.slice(0, 3) : routes,
  [variant, routes]);

  const isActive = (href: string) => {
    const localePrefix = `/${locale}`;
    const fullPath = localePrefix + href;
    return pathName === fullPath;
  };

  return (
    <nav className={className}>
      {filteredRoutes.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          label={item.label}
          isActive={isActive(item.href)}
          className={variant === 'footer' ? 'text-lg font-normal text-left' : 'lg:px-2 px-1  text-lg'}
        />
      ))}
    </nav>
  );
}