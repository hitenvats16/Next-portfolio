'use client'
import { ExternalLink, Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useRef } from 'react'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

import Logo from '../Icons/Logo'

export default function Navbar() {
  return (
    <nav className='grid w-full p-10 place-items-center' id='navbar'>
      <div className='flex items-center justify-between w-full max-w-82'>
        <Link href={'/'}>
          <Logo className='w-20 text-nav-text' />
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
  const ref = useRef<HTMLButtonElement>(null)
  const closeSheet = () => {
    if (ref.current) {
      ref.current.click()
    }
  }
  return (
    <Sheet>
      <SheetTrigger
        ref={ref}
        className='p-2 ease-in-out group hover:bg-nav-background hover:rounded-full duration-snap'>
        <Menu className='w-10 h-10 ease-in-out text-nav-text group-hover:text-nav-selected duration-snap' />
      </SheetTrigger>
      <SheetContent
        side='top'
        className='grid bg-nav-background place-items-center'>
        <div className='grid w-full h-full grid-rows-1 lg:grid-cols-3 max-w-82'>
          <div className='flex flex-col items-center justify-center gap-10 py-10 lg:p-10'>
            {LINKS.map(
              ({ label, href, external, segment: linkSegment }, index) => (
                <Link
                  href={href}
                  key={index}
                  onClick={closeSheet}
                  className='block w-full text-nav-selected group'>
                  <div className='flex items-center justify-between'>
                    <h6 className='font-extrabold text-nav-selected font-manrope'>
                      {label}
                    </h6>
                    {external && (
                      <ExternalLink className='w-6 h-6 text-nav-selected' />
                    )}
                  </div>
                  <span
                    className={cn(
                      'block h-1 mt-2 bg-nav-selected rounded-full ease-linear duration-snap w-0 group-hover:w-full',
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
          <div className='p-10 border-2 border-nav-selected lg:col-span-2 rounded-xl'>
            <p className='text-nav-selected'>
              Blog Posts will go here
            </p>
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

export function setNavTheme(theme: keyof typeof colorToThemeMap): void {
  const r: any = document.querySelector(':root')

  const colors = colorToThemeMap[theme]

  if (!colors || !r || !r?.style) return
  for (const key in colors) {
    const val: any = cssVals[key as keyof typeof cssVals]
    const color: any = colors[key as keyof typeof colors]
    r.style.setProperty(val, color)
  }
}

const cssVals = {
  text: '--text-color',
  background: '--background-color',
  selected: '--selected-color',
}

const colorToThemeMap = {
  teal: {
    text: 'rgb(94 234 212)',
    background: 'rgb(94 234 212)',
    selected: 'rgb(19 78 74)',
  },
  indigo: {
    text: 'rgb(165 180 252)',
    background: 'rgb(165 180 252)',
    selected: 'rgb(49 46 129)',
  },
  white: {
    text: '#FAFAFA',
    background: '#FAFAFA',
    selected: 'rgb(41 37 36)',
  },
}
