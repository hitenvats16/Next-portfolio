import Link from 'next/link'

import Typography from '@/components/Typography'
import heroText from '@/static/hero.json'
import Skills from '@/static/skills.json'

import Container from '../Container'

const ShuffledSkills = shuffleArray(Skills)

const HeroText: React.FC<{}> = () => (
  <Container>
    <Typography.Heading variant='h6' className='mb-3'>
      {`Ayy! 🎸 This is`}
    </Typography.Heading>
    <div className=' mb-4 flex justify-between'>
      <Typography.Heading variant='h1' boldness={600}>
        {heroText.heading}
      </Typography.Heading>
    </div>
    <Typography.Content
      className='text-blue-900 text-justify'
      boldness={600}
      fontFamily='manrope'>
      {heroText.description}
    </Typography.Content>
    <div className='flex flex-wrap gap-x-1 gap-y-1 mt-5'>
      {ShuffledSkills.map((skill, index) => (
        <Pill name={skill} key={index} />
      ))}
    </div>
  </Container>
)

export default HeroText

const Pill: React.FC<{ name: string }> = ({ name }) => (
  <span className='block text-sm text-yellow-50 bg-blue-900 px-3 py-1.5 rounded'>
    {name}
  </span>
)

function shuffleArray(array: Array<any>) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}
