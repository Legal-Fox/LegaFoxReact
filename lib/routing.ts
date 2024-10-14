import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'pl', 'ua', 'ru'];
export const localePrefix = 'always'; // или 'as-needed'

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales, localePrefix });