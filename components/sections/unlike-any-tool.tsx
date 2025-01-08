import { Button, IconWrapper } from '../button'
import Container from '../container'
import KeyboardShortcuts from '../keyboard-shortcuts'
import { LogoLightIllustration, ZapIllustration } from '../illustrations'
import CommandMenu from '../command-menu'

const UnlikeAnyTool = () => {
  return (
    <div className='text-white'>
      <Container>
        <div className='text-center'>
          <h2 className='mb-4 md:mb-7 text-4xl md:text-7xl '>
            Unlike any tool <br className='hidden md:inline-blockblock' />{' '}
            you&apos; ve used before
          </h2>
          <p className='text-primary-text mx-auto max-w-[68rem]  text-lg md:text-xl mb-12'>
            Designed to the last pixel and engineered with unforgiving
            precision, Linear combines UI elegance with world class performance.
          </p>
        </div>
      </Container>
      <div className='h-[48rem] overflow-hidden md:h-auto md:h-overflow-auto'>
        <div className='px-8 snap-x snap-mandatory flex md:flex-wrap gap-6 overflow-x-auto pb-12'>
          <div className='shrink-0 flex flex-col items-center justify-end overflow-hidden snap-center min-h-[48rem] w-full md:basis-[calc(66.66%-12px)] md:max-w-[calc(66.66%-12px)] bg-glass-gradient p-8 md:p-14 border border-transparent-white rounded-[4.8rem] '>
            <KeyboardShortcuts />
            <p className='mb-4 text-3xl'>Built foy your keyboard</p>
            <p className='text-md text-primary-text'>
              Fly through your tasks with rapid-fire keyboard shortcuts for
              everything. Literally everything.
            </p>
          </div>
          <div className=' shrink-0 relative flex flex-col items-center justify-end overflow-hidden snap-center min-h-[48rem] w-full md:basis-[calc(33.33%-12px)] md:max-w-[calc(66.66%-12px)] bg-glass-gradient p-8 md:p-14 border border-transparent-white rounded-[4.8rem]'>
            <div className='mask-linear-faded absolute top-[-9.2rem]  '>
              <ZapIllustration />
            </div>
            <p className='mb-4 text-3xl'>Breathtakingly fast</p>
            <p className='text-md text-primary-text'>
              Built for speed with 50ms interactions and real-time sync.
            </p>
          </div>
          <div className='shrink-0 group relative flex flex-col items-center justify-end overflow-hidden snap-center min-h-[48rem] w-full md:basis-[calc(33.33%-12px)] md:max-w-[calc(66.66%-12px)] bg-glass-gradient p-8 md:p-14 border border-transparent-white rounded-[4.8rem]'>
            <div className='absolute top-[-8rem] w-[130%] pointer-events-none'>
              <LogoLightIllustration />
            </div>
            <p className='mb-4 text-3xl'>Designed for modern software teams</p>
            <p className='text-md text-primary-text'>
              Comes with built-in workflows that create focus and routine.
            </p>
            <Button
              className='absolute bottom-[25rem] opacity-0 translate-y-[30%] scale-[0.8] group-hover:opacity-100 group-hover:transform-none transition-[transform,opacity]'
              variant='secondary'
              href='/'
            >
              <IconWrapper>Linear Method</IconWrapper>
              Product principles
              <svg
                className='ml-1'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='#8A8F98'
              >
                <path d='M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z'></path>
              </svg>
            </Button>
          </div>
          <div className='relative shrink-0 flex flex-col items-center justify-start overflow-hidden snap-center min-h-[48rem] w-full md:basis-[calc(66.66%-12px)] md:max-w-[calc(66.66%-12px)] bg-glass-gradient p-8 md:p-14 border border-transparent-white rounded-[4.8rem]'>
            <CommandMenu />
            <div className='transition-opacity [.opened+&]:opacity-0'>
              <p className='mb-4 text-3xl'>Meet your command line</p>
              <p className='text-md text-primary-text'>
                Complete any action in seconds with the global command menu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UnlikeAnyTool
