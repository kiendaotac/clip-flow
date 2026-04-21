import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Clip Flow — TikTok Video Workflow, Self-Hosted',
  description: 'Self-hosted tool to prepare and upload videos to TikTok using official TikTok APIs.',
  keywords: ['TikTok upload', 'TikTok content posting API', 'content workflow', 'TikTok automation'],
  authors: [{ name: 'Kien Dao', url: 'https://kiendaotac.com' }],
  openGraph: {
    title: 'Clip Flow — TikTok Video Workflow, Self-Hosted',
    description: 'Prepare and upload videos to TikTok with official APIs, scheduling, and account management.',
    url: 'https://tiktok.kiendaotac.com',
    siteName: 'Clip Flow',
    type: 'website',
  },
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'en' | 'vi')) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale} className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Nav />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
