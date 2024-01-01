'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

import { intersectionObserverInit } from '@/utils/observer'

export default function HeroSection() {
  const ref = useRef(null)

  useEffect(() => {
    const intersectionObserver = intersectionObserverInit()
    if (ref.current) {
      intersectionObserver.observe(ref.current)
      const cb = AnimationInit()
      return cb
    }
  }, [])

  return (
    <main
      ref={ref}
      className='lg:h-[calc(100vh_-_336px)] h-[calc(100vh_-_136px)] grid place-items-center p-10'
      nav-theme='white'>
      <div className='flex flex-col items-center justify-center w-full h-full gap-10 lg:items-start lg:justify-start max-w-82'>
        <div className='flex-col items-start justify-center '>
          <p className='font-semibold text-white font-nunito text-3xl lg:text-[2rem] lg:text-justify lg:max-w-[900px]'>
            Under the hushed cloak of night, where moonlight inspires and
            caffeine invigorates, a digital artisan breathes life into code,
            defying the ordinary. Step into their world, a wonderland spun from
            pixels and innovation.
          </p>
        </div>
        <div
          className='flex flex-col flex-1 w-full h-full gap-5 max-h-[275px] lg:max-h-full'
          id='blocksContainer'>
          <div className='flex flex-1 gap-5'>
            <div
              id='block1'
              className='relative w-40 h-full overflow-hidden rounded-3xl'>
              <div
                className={`bg-[url('/vibrant-2.avif')] blur-md z-10 w-full h-full bg-cover bg-no-repeat absolute top-0 left-0`}
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
  const blocks = gsap.timeline({
    repeat: -1,
    yoyo: true,
  })
  blocks.to('#block1', {
    width: '80%',
    duration: 2,
    ease: 'elastic.inOut(1,0.3)',
  })
    .to('#block2', {
      width: 300,
      height: 200,
      duration: 2,
      ease: 'elastic.inOut(1,0.3)',
    })
    .to('#block3', {
      width: '60%',
      duration: 2,
      ease: 'elastic.inOut(1,0.3)',
    })
    .to('#block2', {
      width: '90%',
      height: '150',
      duration: 2,
      ease: 'elastic.inOut(1,0.3)',
    })

  return () => {
    blocks.clear()
  }
}
