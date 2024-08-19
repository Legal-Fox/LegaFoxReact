import { useTranslations } from 'next-intl'

import { ModeToggle } from "./ModeToggle"
import { LanguageToggle } from './LanguageToggle'

export default function Header() {
  const tModeToggle = useTranslations('Header.ModeToggle')
  const tLanguageToggle = useTranslations('Header.LanguageToggle')

  return (
    <header className="flex container mx-auto justify-between items-center">
      Logo
      <nav className="flex items-center">
        <ul className="flex space-x-6">
          <li>Главная</li>
          <li>О нас</li>
          <li>Контакты</li>
        </ul>
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
