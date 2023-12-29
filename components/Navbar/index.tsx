'use client'
import { ExternalLink, Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

import Logo from '../Icons/Logo'
import Typography from '../Typography'

export default function Navbar() {
  return (
    <nav className='grid w-full p-10 place-items-center' id='navbar'>
      <div className='flex items-center justify-between w-full max-w-82'>
        <Link href={'/'}>
          <Logo className='w-20 text-indigo-300' />
        </Link>
        <span className='block'>
          <Drawer />
        </span>
      </div>
    </nav>
  )
}

function Drawer() {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger className='p-2 ease-in-out group hover:bg-indigo-300 hover:rounded-full duration-snap'>
        <Menu className='w-10 h-10 text-indigo-300 ease-in-out group-hover:text-indigo-800 duration-snap' />
      </SheetTrigger>
      <SheetContent
        side='top'
        className='grid bg-indigo-300 place-items-center'>
        <div className='grid w-full h-full grid-rows-1 lg:grid-cols-2 max-w-82'>
          <div className='flex flex-col items-center justify-center gap-10 py-10 lg:p-10'>
            {LINKS.map(
              ({ label, href, external, segment: linkSegment }, index) => (
                <Link
                  href={href}
                  key={index}
                  className='block w-full text-indigo-900 group'>
                  <div className='flex items-center justify-between'>
                    <Typography.Heading
                      variant='h6'
                      fontFamily='manrope'
                      boldness={800}>
                      {label}
                    </Typography.Heading>
                    {external && (
                      <ExternalLink className='w-6 h-6 text-indigo-900' />
                    )}
                  </div>
                  <span
                    className={cn(
                      'block h-1 mt-2 bg-indigo-900 rounded-full ease-linear duration-snap w-0 group-hover:w-full',
                      {
                        'w-full':
                          pathname.split('/')[1] === linkSegment && !external,
                      }
                    )}
                  />
                </Link>
              )
            )}
          </div>
          <div className='p-10 border-2 border-indigo-900 rounded-xl'>
            <Typography.Content>Blog Posts will go here</Typography.Content>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

const LINKS = [
  {
    label: 'Home',
    href: '/',
    segment: '',
    external: false,
  },
  {
    label: 'Contact',
    href: '/contact',
    segment: 'contact',
    external: false,
  },
  {
    label: 'Blog',
    href: '/blog',
    external: true,
    segment: '',
  },
]
