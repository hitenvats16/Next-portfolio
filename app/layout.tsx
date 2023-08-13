import Footer from '@/components/Footer'
import Header from '@/components/Header'

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
    <html lang='en' className=''>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link
          rel='icon'
          href='/icon?<generated>'
          type='image/<generated>'
          sizes='<generated>'
        />
      </head>
      <body
        className={
          'my-16 md:my-20 lg:my-40 bg-yellow-50 dark:bg-blue-950 duration-300 transition-colors ease-in-out'
        }>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
