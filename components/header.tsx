import { useTranslations } from 'next-intl'
import { StarFilledIcon } from "@radix-ui/react-icons";

import { ModeToggle } from "./ModeToggle"
import { LanguageToggle } from './LanguageToggle'
import NavMenu from './NavMenu'

export default function Header() {
  const tModeToggle = useTranslations('Header.ModeToggle')
  const tLanguageToggle = useTranslations('Header.LanguageToggle')
  const tLanguageNavMenu = useTranslations('Header.Nav')



  return (
    <header className="flex container mx-auto justify-between items-center">
      <div className='flex items-center gap-x-2'><StarFilledIcon className="w-12 h-12" /><h3 className='text-3xl'>Logo</h3></div>
      <nav className="flex items-center space-x-6">
        <NavMenu 
          home={tLanguageNavMenu('home')}
          about={tLanguageNavMenu('about')}
          contacts={tLanguageNavMenu('contacts')}
        />
        <div className="flex items-center border-l border-slate-200 ml-6 pl-6 space-x-6">
          <ModeToggle 
            lightLabel={tModeToggle('lightLabel')}
            darkLabel={tModeToggle('darkLabel')}
            systemLabel={tModeToggle('systemLabel')}
            toggleTheme={tModeToggle('toggleTheme')}
          />
          <LanguageToggle 
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
