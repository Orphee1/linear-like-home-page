import {
  BuildMomentum,
  Clients,
  Container,
  EnjoyIssueTracking,
  HomepageHero,
  SetDirection,
  UnlikeAnyTool,
} from '@/components'
import { StarsIllustration } from '@/components/icons'
import classNames from 'classnames'

const HomePage = () => {
  return (
    <>
      <div className='overflow-hidden pb-[25.6rem] md:pb-[25.6rem]'>
        <Container className='pt-[6.4rem] overflow-hidden'>
          <HomepageHero />
        </Container>
      </div>
      <Container>
        <Clients />
      </Container>
      <div
        className={classNames(
          'z-[-1] pointer-events-none my-[-12.8rem] h-[60rem] overflow-hidden relative mask-radial-faded',
          'before:absolute before:opacity-[0.4] before:bg-radial-faded before:inset-0 [--color:#7877C6]',
          'after:absolute after:top-1/2 after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background'
        )}
      >
        <StarsIllustration />
      </div>
      <UnlikeAnyTool />
      <EnjoyIssueTracking />
      <BuildMomentum />
      <SetDirection />
    </>
  )
}

export default HomePage
