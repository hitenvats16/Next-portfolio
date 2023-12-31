'use client'

import { intersectionObserver } from '@/utils/observer'
import { useEffect, useRef } from 'react'
import { StarFilledIcon } from '@radix-ui/react-icons'
import { SquareAsterisk } from 'lucide-react'
import gsap from 'gsap'

export default function HeroSection() {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      intersectionObserver.observe(ref.current)
      const cb = AnimationInit()
      return cb
    }
  }, [])

  return (
    <main
      ref={ref}
      className='h-[calc(100vh_-_336px)] grid place-items-center p-10'
      nav-theme='teal'>
      <div className='flex flex-col items-center justify-center w-full h-full gap-10 lg:items-start lg:justify-start max-w-82'>
        <div className='flex-col items-start justify-center '>
          <h1 className='text-teal-300 text-6xl mb-6 lg:text-[6rem] font-poppins font-semibold'>
            Hiten Vats
          </h1>
          <p className='font-semibold text-teal-300 font-nunito text-3xl lg:text-[2rem] lg:text-justify lg:max-w-[900px]'>
            Under the hushed cloak of night, where moonlight inspires and
            caffeine invigorates, a digital artisan breathes life into code,
            defying the ordinary. Step into their world, a wonderland spun from
            pixels and innovation.
          </p>
        </div>
        <div className='flex-col flex-1 hidden w-full h-full gap-5 lg:flex'>
          <div className='flex flex-1 gap-5'>
            <div id='block1' className='h-full overflow-hidden rounded-3xl'>
              <div
                className={`bg-[url('/vibrant-2.avif')] blur-md w-full h-full bg-cover bg-no-repeat`}
              />
            </div>
            <div
              id='block2'
              className='flex flex-1 bg-gradient-to-bl from-blue-500 to-amber-500 rounded-3xl'
            />
          </div>
          <div className='flex flex-1 gap-5'>
            <div
              id='block3'
              className='h-full bg-gradient-to-bl from-orange-500 to-indigo-500 w-44 rounded-3xl'
            />
            <div
              id='block4'
              className={`flex flex-1 rounded-3xl overflow-hidden`}>
              <div
                className={`bg-[url('/vibrant-1.jpeg')] blur-md w-full h-full bg-cover bg-no-repeat`}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function AnimationInit() {
  const tl = gsap.timeline({
    repeat: -1,
    yoyo: true,
  })

  tl.to('#block1', {
    width: '80%',
    duration: 2,
    ease: 'elastic.inOut(1,0.3)',
  })
    .to('#block2', {
      width: 300,
      height: 300,
      duration: 2,
      ease: 'elastic.inOut(1,0.3)',
    })
    .to('#block3', {
      width: '60%',
      duration: 2,
      ease: 'elastic.inOut(1,0.3)',
    })
    .to('#block2', {
      width: '100%',
      height: '170',
      duration: 2,
      ease: 'elastic.inOut(1,0.3)',
    })

  return () => {
    tl.clear()
  }
}
