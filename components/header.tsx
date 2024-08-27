import { useTranslations } from 'next-intl'

import ModeToggle from "./ModeToggle"
import LanguageToggle from './LanguageToggle'
import NavMenu from './NavMenu'
import MobileMenu from './MobileMenu';
import Logo from './Logo';

export default function Header() {
  const tModeToggle = useTranslations('Header.ModeToggle')
  const tLanguageToggle = useTranslations('Header.LanguageToggle')
  const tLanguageNavMenu = useTranslations('Header.Nav')

  return (
    <header className="flex container mx-auto justify-between items-center">
      <Logo variant="header"/>
      <MobileMenu
        className="block lg:hidden"
        home={tLanguageNavMenu('home')}
        about={tLanguageNavMenu('about')}
        contacts={tLanguageNavMenu('contacts')}
      tModeToggle={{
        lightLabel: tModeToggle('lightLabel'),
        darkLabel: tModeToggle('darkLabel'),
        systemLabel: tModeToggle('systemLabel'),
        toggleTheme: tModeToggle('toggleTheme'),
        }}
      tLanguageToggle={{
        english: tLanguageToggle('english'),
        polski: tLanguageToggle('polski'),
        ukrainian: tLanguageToggle('ukrainian'),
        russian: tLanguageToggle('russian'),
        changeLanguage: tLanguageToggle('changeLanguage'),
        }}
        />
      <nav className="items-center space-x-6 hidden lg:flex">
        <NavMenu 
          home={tLanguageNavMenu('home')}
          about={tLanguageNavMenu('about')}
          contacts={tLanguageNavMenu('contacts')}
        />
        <div className="flex items-center border-l border-slate-200 ml-6 pl-6 space-x-6">
          <ModeToggle 
            variant="dropdown"
            lightLabel={tModeToggle('lightLabel')}
            darkLabel={tModeToggle('darkLabel')}
            systemLabel={tModeToggle('systemLabel')}
            toggleTheme={tModeToggle('toggleTheme')}
          />
          <LanguageToggle
            variant="dropdown"
            englishLabel={tLanguageToggle('english')}
            polishLabel={tLanguageToggle('polski')}
            ukrainianLabel={tLanguageToggle('ukrainian')}
            russianLabel={tLanguageToggle('russian')}
            changeLanguageLabel={tLanguageToggle('changeLanguage')}
          />
        </div>
      </nav>
    </header>
  )
}
