import { Hero, HeroTitle, HeroSubtitle } from '../hero'
import { Button, HeroImage, IconWrapper } from '../'
import { ChevronIcon } from '../icons'

const HomepageHero = () => {
  return (
    <Hero>
      <Button
        className='opacity-0 translate-y-[1rem] animate-fade-in'
        href='#'
        variant='secondary'
        size='small'
      >
        Linear {new Date().getFullYear()} Release - Built for scale
        <IconWrapper>→</IconWrapper>
      </Button>
      <HeroTitle className='opacity-0 translate-y-[1rem]  animate-fade-in [--animation-delay:200ms]'>
        Linear is a better way
        <br className='hidden md:block' /> to build products.
      </HeroTitle>
      <HeroSubtitle className='opacity-0 translate-y-[1rem] animate-fade-in [--animation-delay:400ms]'>
        Meet the new standard for modern software.
        <br className='hidden md:block' />
        Streamline issues, prints, and products roadmaps.
      </HeroSubtitle>
      <Button
        className='opacity-0 translate-y-[1rem] animate-fade-in [--animation-delay:600ms]'
        href='/'
        variant='primary'
        size='large'
      >
        Get started <ChevronIcon />
      </Button>
      <HeroImage />
    </Hero>
  )
}

export default HomepageHero
