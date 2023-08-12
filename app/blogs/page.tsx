import Container from '@/components/Container'
import Typography from '@/components/Typography'
import Link from 'next/link'

const Blogs: React.FC<{}> = () => (
  <Container>
    <Typography.Content className='text-sm'>
      {`Seems like he has't published anything as of now ☹️. Remind him at his `}
      <Link href={'mailto:me@hitenvats.one'} className='font-bold underline'>Email</Link>
    </Typography.Content>
  </Container>
)

export default Blogs