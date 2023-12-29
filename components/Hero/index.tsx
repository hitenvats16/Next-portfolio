'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap-trial/SplitText'
import Logo from '../Icons/Logo'

export default function HeroSection() {
  const contentRef = useRef(null)
  useEffect(() => {
    gsap.registerPlugin(SplitText)
    const tl = gsap.timeline(),
      mySplitText = new SplitText(contentRef.current, { type: 'words,chars' }),
      chars = mySplitText.chars
    gsap.set(contentRef.current, { perspective: 400 })

    tl.from(chars, {
      duration: 0.8,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: '0% 50% -50',
      ease: 'back',
      stagger: 0.01,
    })
      .fromTo(
        '#navbar',
        {
          opacity: 0,
        },
        {
          ease: 'sine.in',
          opacity: 100,
        }
      )
      .fromTo(
        '#cloud1',
        {
          opacity: 0,
        },
        {
          opacity: 100,
          ease: 'power.in',
        }
      )
      .fromTo(
        '#cloud2',
        {
          opacity: 0,
        },
        {
          opacity: 100,
          ease: 'power.in',
        },
        '<'
      )
      .add(
        gsap
          .timeline({
            repeat: -1,
          })
          .to('#cloud1', {
            rotate: '360deg',
            duration: 12,
            ease: 'power.inOut',
          })
          .to('#cloud1', {
            rotate: '0deg',
            duration: 12,
            ease: 'power.inOut',
          })
      )
      .add(
        gsap
          .timeline({
            repeat: -1,
            yoyo: true,
          })
          .to('#cloud2', {
            rotate: '-360deg',
            duration: 12,
            ease: 'power.inOut',
          })
          .to('#cloud2', {
            rotate: '0deg',
            duration: 12,
            ease: 'power.inOut',
          }),
        '<'
      )
  }, [])
  return (
    <main className='grid w-full place-items-center h-[calc(100vh_-_136px)]'>
      <div className='flex flex-col w-full h-full gap-20 py-10 max-w-82'>
        <div className='relative hidden lg:block lg:h-[40vh] px-5'>
          <svg
            className='absolute w-40 lg:w-96'
            viewBox='0 0 229 174'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            id='cloud1'>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M141.508 143.082C150.67 153.457 164.071 160 179 160C206.614 160 229 137.614 229 110C229 88.283 215.155 69.7999 195.809 62.8958C196.589 59.3883 197 55.7422 197 52C197 24.3858 174.614 2 147 2C136.798 2 127.31 5.05524 119.401 10.3006C110.977 3.83984 100.437 0 89 0C63.7232 0 42.8271 18.7565 39.4708 43.1106C16.9126 47.9457 0 67.9978 0 92C0 109.184 8.66864 124.343 21.8715 133.343C26.2471 156.492 46.579 174 71 174C88.241 174 103.444 165.274 112.433 151.997C112.622 151.999 112.811 152 113 152C123.596 152 133.421 148.704 141.508 143.082Z'
              fill='#818CF8'
            />
          </svg>
          <svg
            viewBox='0 0 219 172'
            fill='none'
            className='absolute w-40 lg:w-96'
            xmlns='http://www.w3.org/2000/svg'
            id='cloud2'>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M131 0C157.063 0 178.468 19.9411 180.791 45.3983C202.715 50.6984 219 70.4474 219 94C219 121.614 196.614 144 169 144C165.378 144 161.846 143.615 158.443 142.883C150.532 160.069 133.16 172 113 172C102.584 172 92.912 168.815 84.9046 163.366C77.5718 167.586 69.0678 170 60 170C32.3857 170 10 147.614 10 120C10 116.658 10.3279 113.392 10.9533 110.234C4.09924 101.676 0 90.8168 0 79C0 57.0746 14.1124 38.4453 33.7493 31.7001C42.1268 15.8225 58.7995 5 78 5C86.1057 5 93.7609 6.92879 100.532 10.3524C108.967 3.86037 119.533 0 131 0Z'
              fill='#818CF8'
            />
          </svg>
        </div>
        <div className='flex items-center justify-center h-full px-5 pb-10 lg:justify-end lg:h-max lg:pb-0'>
          <p
            ref={contentRef}
            className='text-xl lg:text-[2rem] font-manrope leading-snug font-semibold text-indigo-400 lg:max-w-[70%]'>
            Under the hushed cloak of night, where moonlight inspires and
            caffeine invigorates, a digital artisan breathes life into code,
            defying the ordinary. Step into their world, a wonderland spun from
            pixels and innovation.
          </p>
        </div>
      </div>
    </main>
  )
}
