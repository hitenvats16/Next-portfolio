import Link from 'next/link'
import { TbBrandGithubFilled as Github } from 'react-icons/tb'
import { ImLinkedin as Linkedin } from 'react-icons/im'

import Container from '../Container'
import Typography from '../Typography'

const Footer: React.FC<{}> = () => (
  <footer>
    <Container className='mt-10'>
      <hr className='h-1 bg-blue-900 dark:bg-yellow-50 mb-10 ease-in-out duration-300' />
      <div className='flex flex-wrap'>
        <div className='flex flex-1 flex-col justify-start'>
          <Typography.Heading variant='h6' boldness={600} className='mb-1'>
            Hiten Vats
          </Typography.Heading>
          <Link href={'mailto:me@hiten.one'}>
            <Typography.Content boldness={600} className='hover:underline'>
              me@hitenvats.one
            </Typography.Content>
          </Link>
        </div>
        <div className='flex-1 flex justify-end items-center gap-3 md:gap-5'>
          <Link href={'https://github.com/hitenvats16'}>
            <Github className='w-8 h-8 text-blue-900 dark:text-yellow-50 p-1 hover:bg-blue-900 hover:text-yellow-50 dark:hover:text-blue-900 dark:hover:bg-yellow-50 rounded-lg duration-300 ease-in-out' />
          </Link>
          <Link href={'https://www.linkedin.com/in/hiten-vats/'}>
            <Linkedin className='w-8 h-8 text-blue-900 p-1 hover:bg-blue-900 dark:text-yellow-50 hover:text-yellow-50 dark:hover:text-blue-900 dark:hover:bg-yellow-50  rounded-lg duration-300 ease-in-out' />
          </Link>
        </div>
      </div>
    </Container>
  </footer>
)

export default Footer
