import Link from 'next/link'
import React from 'react'

import ProjectObject from '@/static/projects.json'

import Container from '../Container'
import Typography from '../Typography'

const WorkSection: React.FC<{}> = () => (
  <Container className='mt-10'>
    <Typography.Heading variant='h5' boldness={600} className='mb-5'>
      His work
    </Typography.Heading>
    <div className='grid gap-5 md:grid-cols-2'>
      {ProjectObject.map((project, index) => (
        <Card key={index} {...project} />
      ))}
    </div>
  </Container>
)

export default WorkSection

const Card: React.FC<(typeof ProjectObject)[0]> = ({
  label,
  description,
  link,
}) => (
  <Link href={link}>
    <div className='p-5 border-[4px] border-blue-900 rounded-xl hover:bg-blue-900 group duration-300 ease-in-out'>
      <Typography.Heading variant='h6' className=' group-hover:text-yellow-50 duration-300 ease-in-out'>
        {label}
      </Typography.Heading>
      <Typography.Content size='sm' className=' group-hover:text-yellow-50 duration-300 ease-in-out'>
        {description}
      </Typography.Content>
    </div>
  </Link>
)
