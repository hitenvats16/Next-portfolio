'use client'

import Logo from "@/components/Icons/Logo"

export default function Loading(props: any) {
  return (
    <div className='w-screen h-screen fixed bg-stone-900 top-0 text-[#f1f1f1] flex items-center justify-center'>
      <div className='flex items-center gap-3'>
        <Logo className='w-20 h-20 text-inherit animate-pulse' solid />
      </div>
    </div>
  )
}
