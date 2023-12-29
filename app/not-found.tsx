import Logo from '@/components/Icons/Logo'
import Typography from '@/components/Typography'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='grid w-full p-10 place-items-center'>
      <div className='flex flex-col items-center justify-center gap-5 p-5 lg:flex-row'>
        <Logo className='text-teal-400 w-60' />
        <div className='max-w-xl'>
          <Typography.Heading
            variant='h5'
            boldness={900}
            className='text-teal-400'
            fontFamily='inter'>{`This page doesn't exist`}</Typography.Heading>
          <Typography.Content className='mt-4 text-teal-400' fontFamily='manrope'>
            {`This page doesn't seems to have anything. You might be on wrong link or i might be working on this page`}
          </Typography.Content>
          <Link href={'/'} className='block px-4 py-2 mt-4 text-lg font-bold text-teal-800 bg-teal-400 rounded-lg w-max'>Go To Home</Link>
        </div>
      </div>
    </main>
  )
}
