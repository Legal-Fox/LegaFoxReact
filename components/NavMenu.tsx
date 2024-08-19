'use client'

import { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { cn } from "@/lib/utils"
import { HOME_ROUTE, ABOUT_ROUTE, CONTACTS_ROUTE } from '@/constants/routes'

interface NavMenuProps {
  home: string
  about: string
  contacts: string
}

export default function NavMenu({home, about, contacts} :NavMenuProps ) {
  const pathName = usePathname()

  const routes = useMemo(() => [
    {
      label: home,
      active: pathName === HOME_ROUTE || pathName.startsWith(HOME_ROUTE),
      href: HOME_ROUTE,
    },
    {
      label: about,
      active: pathName.startsWith(ABOUT_ROUTE),
      href: ABOUT_ROUTE,
    },
    {
      label: contacts,
      active: pathName.startsWith(CONTACTS_ROUTE),
      href: CONTACTS_ROUTE,
    },
  ], [about, contacts, home, pathName])

  return (
    <>
      {routes.map((item) => (
        <Link
          key={item.href}
          className={cn(item.active && 'underline')}
          href={item.href}
        >
          {item.label}
        </Link>
      ))}
    </>
  )
}
