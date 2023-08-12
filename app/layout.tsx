import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react';

import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hiten Vats',
  description: 'Funk-tastic portfolio created by Hiten.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.png' sizes='any' />
      </head>
      <body className={'my-16 md:my-20 lg:my-40 bg-yellow-50'}>
        {children}
        <Footer />
        <Analytics/>
      </body>
    </html>
  )
}
