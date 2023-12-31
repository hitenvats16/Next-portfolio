import React from 'react'
import Typography from '../Typography'

export default function Footer() {
  return (
    <footer className='grid w-full p-10 place-items-center bg-stone-800'>
      <div className='flex items-center justify-center w-full max-w-82'>
        <Typography.Content className='text-white'>
          Created and maintained by <b>Hiten</b>
        </Typography.Content>
      </div>
    </footer>
  )
}