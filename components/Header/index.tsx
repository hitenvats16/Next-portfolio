'use client'

import { ButtonHTMLAttributes, DetailedHTMLProps, useEffect } from 'react'
import Container from '../Container'

const Header: React.FC<{}> = () => {
  useEffect(() => {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
    const elem = document.querySelector('html')
    elem?.classList.toggle('dark')
    if (darkThemeMq.matches) {
      elem?.classList.add('dark')
    } else {
        elem?.classList.remove('dark')
    }
  }, [])

  function changeTheme() {
    const elem = document.querySelector('html')
    elem?.classList.toggle('dark')
  }
  
  return (
    <nav className='mb-5'>
      <Container className='flex justify-end'>
        <ThemeToggleButton onClick={changeTheme} />
      </Container>
    </nav>
  )
}

export default Header

const ThemeToggleButton: React.FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = (props) => (
  <button
    {...props}
    className='w-5 h-5 bg-yellow-50 dark:bg-blue-950 rounded-full relative duration-500 ease-in-out'>
    <span className='absolute w-3 h-3 rounded-full bg-blue-900 dark:bg-yellow-50 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 dark:-left-[5px] dark:translate-x-0 dark:w-4 dark:h-4 ease-in-out duration-500' />
    <span className='w-6 h-6 bg-blue-900 block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -z-10 dark:bg-yellow-50 duration-500 dark:rotate-[360deg] ease-spring' />
    <span className='w-6 h-6 bg-blue-900 block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -z-10 rotate-45 dark:bg-yellow-50 duration-500 dark:rotate-[405deg] ease-spring' />
  </button>
)
