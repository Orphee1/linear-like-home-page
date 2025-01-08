'use client'

import { useInView } from 'react-intersection-observer'
import classNames from 'classnames'
import Container from './container'

type FeatureProps = {
  children: React.ReactNode
  color: string
  colorDark: string
}

export const Features = ({ children, color, colorDark }: FeatureProps) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false })

  return (
    <section
      ref={ref}
      className={classNames(
        'relative overflow-x-hidden  flex flex-col items-center after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_100%_40%_at_50%_60%,rgba(var(--feature-color),0.1),transparent)] before:[mask:radial-gradient(100%_50%_at_center_center,_black,_transparent)] before:[background-size:50%_100%,50%_100%] before:opacity-40 before:pointer-events-none after:pointer-events-none before:[background-position:1%_0%,99%_0%] before:bg-no-repeat before:absolute before:w-full before:h-[40rem] before:bg-[conic-gradient(from_90deg_at_80%_50%,#000212,rgb(var(--feature-color-dark))),conic-gradient(from_270deg_at_20%_50%,rgb(var(--feature-color-dark)),#000212)] before:transition-[transform,opacity] before:duration-1000 before:ease-in',
        inView &&
          'is-visible before:opacity-100 before:[transform:rotate(180deg)_scale(2)]',
        !inView && 'before:opacity-40 before:rotate-180'
      )}
      style={
        {
          '--feature-color': color,
          '--feature-color-dark': colorDark,
        } as React.CSSProperties
      }
    >
      <div className='mt-[12.8rem] mb-16 w-full md:mt-[25.2rem] md:mb-[12.8rem]'>
        {children}
      </div>
    </section>
  )
}

type MainFeatureProps = {
  image: string
  text: string
  title: React.ReactNode
  imageSize?: 'small' | 'large'
}

const MainFeature = ({
  image,
  text,
  title,
  imageSize = 'small',
}: MainFeatureProps) => {
  return (
    <>
      <div className='relative before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_50%_50%_at_center,rgba(var(--feature-color),0.1),transparent)]'>
        <Container
          className={classNames(
            'max-w-[90%] text-center',
            imageSize === 'small' ? 'w-[78rem]' : 'w-[102.4rem]'
          )}
        >
          <h2 className='[.is-visible_&]:translate-y-0 translate-y-[40%] mb-11 text-gradient text-6xl md:text-8xl text-center [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] '>
            {title}
          </h2>
          <div className='relative z-10 rounded-[14px] backdrop-blur-[6px] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0)_120%)] before:p-[1px] before:[mask:linear-gradient(black,_black)_content-box_content-box,_linear-gradient(black,_black)] before:[mask-composite:xor] after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-[rgba(255,_255,_255,_0.15)] after:[mask:linear-gradient(black,transparent)]'>
            <img src={image} className='w-ful h-auto' />
          </div>
        </Container>
      </div>
      <Container className='w-[78rem] max-w-[90%] text-center'>
        <p className='text-white my-16 text-2xl md:text-4xl leading-tight md:w-[80%] mx-auto'>
          {text}
        </p>
        <hr className='mb-[7.2rem] h-[1px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_50%,transparent)]' />
      </Container>
    </>
  )
}

type FeatureGridProps = {
  features: {
    icon: React.FC
    title: string
    text: string
  }[]
}

const FeatureGrid = ({ features }: FeatureGridProps) => {
  return (
    <Container>
      <div className='w-full mb-[14rem] text-sm md:text-md text-primary-text grid grid-cols-2 md:grid-cols-3 gap-y-9 place-items-center'>
        {features.map(({ title, text, icon: Icon }) => (
          <div
            key={title}
            className='max-w-[25.6rem] md:[&_svg]:inline [&_svg] :fill-white [&_svg]:mb-[4px] md:[&_svg]:mr-[6px] md:[&_svg]:mb-[2px]  '
          >
            <Icon />
            <span className='text-white block md:inline'>{title}</span> {text}
          </div>
        ))}
      </div>
    </Container>
  )
}

type FeatureCardsProps = {
  features: {
    image: string
    imageClassName: string
    title: string
    text: string
  }[]
}

const FeatureCards = ({ features }: FeatureCardsProps) => {
  return (
    <Container>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
        {features.map(({ title, text, image, imageClassName }) => (
          <div
            key={title}
            className='relative aspect-[1.1/1] border border-transparent-white rounded-[2.4rem] md:rounded-[4.8rem] py-6 px-8 md:p-14 overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(var(--feature-color),0.15),transparent)] before:absolute before:inset-0 before:bg-glass-gradient '
          >
            <h3 className='mb-2 text-2xl text-white'>{title}</h3>
            <p className='text-md text-primary-text maw-w-[31rem]'>{text}</p>
            <img
              src={image}
              alt={title}
              className={classNames('absolute max-w-none', imageClassName)}
            />
          </div>
        ))}
      </div>
    </Container>
  )
}

Features.Main = MainFeature
Features.Grid = FeatureGrid
Features.Cards = FeatureCards

// export default Features
