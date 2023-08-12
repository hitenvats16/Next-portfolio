import experienceObject from '@/static/experience.json'

import Container from '../Container'
import Typography from '../Typography'
import Link from 'next/link'

const ExperienceSection: React.FC<{}> = () => (
  <Container parentClassName='mt-10'>
    <Typography.Heading
      boldness={600}
      variant='h5'
      className='mb-5'>{`He's currently`}</Typography.Heading>
    <ol className='list-disc text-blue-900'>
      {experienceObject.current.map(({ heading, link,linkLable }, index) => (
        <li key={index} className=' ml-8'>
          <Typography.Content>
            {link ? (
              <>
                {heading.replace('[link]', '')}
                <Link href={link} className=' font-bold underline'>
                  {linkLable}
                </Link>
              </>
            ) : (
              heading
            )}
          </Typography.Content>
        </li>
      ))}
    </ol>
    <Typography.Heading
      boldness={600}
      variant='h5'
      className='mb-5 mt-10'>{`He was`}</Typography.Heading>
    <ol className='list-disc text-blue-900'>
      {experienceObject.past.map(({ heading, link, linkLable }, index) => (
        <li key={index} className=' ml-8'>
          <Typography.Content>
            {link ? (
              <>
                {heading.replace('[link]', '')}
                <Link href={link} className='font-bold underline'>
                  {linkLable}
                </Link>
              </>
            ) : (
              heading
            )}
          </Typography.Content>
        </li>
      ))}
    </ol>
  </Container>
)

export default ExperienceSection
