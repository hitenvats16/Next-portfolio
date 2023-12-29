import type { Metadata } from 'next'

import Navbar from '@/components/Navbar'

import './globals.css'

export const metadata: Metadata = {
  title: 'Hiten Vats',
  description: `
    A software engineer at Zella AI, Hiten is driven by a deep passion 
    for coding, skillfully transforming it into impactful solutions. No challenge 
    is insurmountable, every hurdle an opportunity to innovate and build the 
    extraordinary. Whether wielding Python and Django or harnessing the power 
    of Node.js and React, [name]'s diverse toolkit is matched only by a boundless 
    imagination. Witness the magic as lines of code are woven into elegant, functional 
    realities, a testament to the beauty and power of Hiten's software craftsmanship.`,
  authors: {
    name: 'Hiten Vats',
    url: 'https://hitenvats.one',
  },
  keywords: [
    'Software engineer',
    'Zella AI',
    'Software development',
    'Web development',
    'Full-stack developer',
    'Full-stack engineer',
    'Front-end developer',
    'Back-end developer',
    'Python developer',
    'Django developer',
    'Node.js developer',
    'React developer',
    'Tailwind CSS developer',
    'FastAPI developer',
    'Javascript developer',
    'CSS developer',
    'HTML developer',
    'API development',
    'Agile development',
    'DevOps',
    'Cloud computing',
  ],
  openGraph: {
    type: 'website',
    url: 'http://hitenvats.one',
    title: 'Hiten Vats',
    description: `
    A software engineer at Zella AI, Hiten is driven by a deep passion 
    for coding, skillfully transforming it into impactful solutions. No challenge 
    is insurmountable, every hurdle an opportunity to innovate and build the 
    extraordinary. Whether wielding Python and Django or harnessing the power 
    of Node.js and React, [name]'s diverse toolkit is matched only by a boundless 
    imagination. Witness the magic as lines of code are woven into elegant, functional 
    realities, a testament to the beauty and power of Hiten's software craftsmanship.`,
    siteName: 'Hiten Vats',
    images: [
      {
        url: 'https://hitenvats.one/og.png',
      },
    ],
  },
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
      <body className={' bg-stone-900'}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
