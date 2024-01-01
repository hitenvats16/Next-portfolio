'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment, useEffect } from 'react'

import { setNavTheme } from '@/components/Navbar'

export default function NotFound() {
  const path = usePathname().substring(1).split('/')

  useEffect(() => {
    setNavTheme('teal')
  }, [])

  return (
    <main className='grid w-full p-10 place-items-center h-[calc(100vh_-_236px)] lg:h-[calc(100vh_-_244px)]'>
      <div className='flex flex-col items-center justify-center gap-5 p-5 lg:flex-row'>
        <div className='max-w-xl'>
          <div className='w-full overflow-x-scroll'>
            <code className='flex gap-2 mb-5 text-teal-400 border-teal-400 w-max'>
              {path.map((segment, key) => (
                <Fragment key={key}>
                  <span key={key} className='block border-b border-b-inherit'>{segment}</span>
                  {key !== path.length - 1 && '>'}
                </Fragment>
              ))}
            </code>
          </div>
          <h5 className='text-3xl font-bold text-teal-400 font-inter'>{`This page doesn't exist`}</h5>
          <p className='mt-4 text-teal-400 font-manrope'>
            {`This page doesn't seems to have anything. You might be on wrong
            link or I might be working on this page`}
          </p>
          <Link
            href={'/'}
            className='block px-4 py-2 mt-4 text-lg font-bold text-teal-800 bg-teal-400 rounded-lg w-max'>
            Go To Home
          </Link>
        </div>
      </div>
    </main>
  )
}
