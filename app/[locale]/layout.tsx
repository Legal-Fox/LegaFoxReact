import { Raleway } from "next/font/google"
import { NextIntlClientProvider } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { getMessages } from 'next-intl/server'

import "./globals.css";
import Header from '@/components/Header'
import Footer from "@/components/Footer"
import ThemeProvider from '@/providers/ThemeProvider'
import type { Metadata } from "next"
import StickyScrollToTopButton from '@/components/StickyScrollToTopButton'


const raleway = Raleway({ subsets: ["cyrillic"] });

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations('Metadata');
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords').split(', '),
  };
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode
  params: {locale: string}
}) {
  const messages = await getMessages()
  const tStickyScrollToTopButton = await getTranslations('Components.StickyScrollToTopButton')

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${raleway.className} flex flex-col min-h-screen bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <Header />
              {children}
            <Footer />
            <StickyScrollToTopButton 
            StickyScrollToTopButton={tStickyScrollToTopButton('scrollToTop')} 
            />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}