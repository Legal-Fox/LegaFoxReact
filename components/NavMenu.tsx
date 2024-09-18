'use client';

import React, { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useTranslations } from 'next-intl'

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
    isActive && "text-foreground pointer-events-none font-semibold underline",
    !isActive && "text-foreground/60",
    className
  );

  return (
    <Button
      variant="link"
      asChild={!isActive}
      className={linkClasses}
      aria-current={isActive ? 'page' : undefined}
    >
      {isActive ? (
        <span>{label}</span>
      ) : (
        <Link href={href}>{label}</Link>
      )}
    </Button>
  );
};

interface NavMenuProps {
  variant: 'header' | 'footer' | 'default';
  className?: string;
}

export default function NavMenu({ variant, className }: NavMenuProps) {
  const tNavMenu = useTranslations('Components.Nav');
  const pathName = usePathname() ?? '';

  const routes = useMemo(() => [
    { label: tNavMenu('home'), href: HOME_ROUTE },
    { label: tNavMenu('about'), href: ABOUT_ROUTE },
    { label: tNavMenu('contacts'), href: CONTACTS_ROUTE },
    { label: tNavMenu('privacyPolicy'), href: PRIVACY_POLICY_ROUTE },
  ], [tNavMenu]);

  const filteredRoutes = useMemo(() => 
    variant === 'header' ? routes.slice(0, 3) : routes, 
  [variant, routes]);

  return (
    <nav>
      <ul className={cn("flex", className)}>
        {filteredRoutes.map((item) => (
          <li key={item.href}>
            <NavLink
              href={item.href}
              label={item.label}
              isActive={pathName.startsWith(item.href)}
              className={variant === 'footer' ? 'text-sm' : 'text-lg'}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}