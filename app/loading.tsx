'use client'

import Logo from "@/components/Icons/Logo"

export default function Loading(props: any) {
  return (
    <div className='fixed top-0 flex items-center justify-center w-screen h-screen text-indigo-300 bg-stone-900'>
      <div className='flex items-center gap-3'>
        <Logo className='w-20 h-20 text-inherit animate-pulse' solid />
      </div>
    </div>
  )
}
