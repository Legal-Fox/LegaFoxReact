"use client"

import { useTransition } from "react"
import { useRouter } from 'next/navigation'
import { GlobeIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface LanguageToggleProps {
  variant: 'dropdown' | 'accordion'
  englishLabel: string
  polishLabel: string
  ukrainianLabel: string
  russianLabel: string
  changeLanguageLabel: string
}

export default function LanguageToggle({
  variant,
  englishLabel,
  polishLabel,
  ukrainianLabel,
  russianLabel,
  changeLanguageLabel
}: LanguageToggleProps) {
  const router = useRouter()
  const [isPending, starTransition ] = useTransition()

const changeLanguage = ( newLocale: string) => {
starTransition (()=> {
router.replace(`/${newLocale}`)
})
}

if (variant === 'dropdown') {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <GlobeIcon className="h-5 w-5" />
          <span className="sr-only">{changeLanguageLabel}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage('en')}>
          {englishLabel}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('pl')}>
          {polishLabel}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('ua')}>
          {ukrainianLabel}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('ru')}>
          {russianLabel}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
  if (variant === 'accordion') {
    return (
      <AccordionItem value="language">
      <AccordionTrigger>{changeLanguageLabel}</AccordionTrigger>
      <AccordionContent>
        <ul className="space-y-2 flex flex-col items-start">
          <Button variant="link"><li onClick={() => changeLanguage('en')}>{englishLabel}</li></Button>
          <Button variant="link"><li onClick={() => changeLanguage('pl')}>{polishLabel}</li></Button>
          <Button variant="link"><li onClick={() => changeLanguage('ua')}>{ukrainianLabel}</li></Button>
          <Button variant="link"><li onClick={() => changeLanguage('ru')}>{russianLabel}</li></Button>
        </ul>
      </AccordionContent>
    </AccordionItem>
    )
  }
}
