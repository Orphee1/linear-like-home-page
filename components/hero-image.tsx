'use client'

import { useEffect, useRef, useState } from 'react'

import classNames from 'classnames'
import { useInView } from 'react-intersection-observer'

const randomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

interface Line {
  direction: 'to bottom' | 'to right'
  duration: number
  size: number
  id: string
}

const HeroImage = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  })

  const [lines, setLines] = useState<Line[]>([])
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const removeLine = (id: string) => {
    setLines((prev) => prev.filter((line) => line.id !== id))
  }

  useEffect(() => {
    if (!inView) return

    const renderLines = (timeout: number) => {
      timeoutRef.current = setTimeout(() => {
        setLines((lines) => [
          ...lines,
          {
            direction: Math.random() > 0.5 ? 'to bottom' : 'to right',
            duration: randomNumberBetween(1300, 3500),
            size: randomNumberBetween(10, 30),
            id: Math.random().toString().substring(7),
          },
        ])
        renderLines(randomNumberBetween(800, 2500))

        return () => {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
          }
        }
      }, timeout)
    }
    renderLines(randomNumberBetween(800, 1300))
  }, [inView, setLines])

  return (
    <div ref={ref} className='mt-[12.8rem] [perspective:2000px]'>
      <div
        className={classNames(
          'relative rounded-lg border border-transparent-white bg-hero-gradient bg-white bg-opacity-[0.01]',
          inView ? 'animate-image-rotate' : '[transform:rotateX(25deg)]',
          'before:w-full before:h-full before:top-0 before:left-0 before:absolute before:bg-hero-glow before:[filter:blur(120px)] before:opacity-0',
          inView && 'before:animate-image-glow'
        )}
      >
        {/* lines around image */}
        <div className='absolute top-0 left-0 h-full w-full z-30'>
          {lines.map((line) => (
            <span
              onAnimationEnd={() => removeLine(line.id)}
              key={line.id}
              style={
                {
                  '--direction': line.direction,
                  '--size': line.size,
                  '--animation-duration': `${line.duration}ms`,
                } as React.CSSProperties
              }
              className={classNames(
                'absolute top-0 bg-glow-lines h-[1px] w-[10rem]',
                line.direction === 'to right' &&
                  'w-[calc(var(--size)*1rem)] h-[1px] left-0 animate-glow-line-horizontal',
                line.direction === 'to bottom' &&
                  'h-[calc(var(--size)*1rem)] w-[1px] right-0 animate-glow-line-vertical'
              )}
            />
          ))}
        </div>
        {/* lines before image is poping up */}
        <svg
          className={classNames(
            'absolute top-O left-O w-full h-full',
            '[&_path]:stroke-white [&_path]:[stroke-opacity:0.2] [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1]',
            inView && '[&_path]:animate-sketch-lines'
          )}
          width='100%'
          viewBox='0 0 1499 778'
          fill='none'
        >
          <path pathLength='1' d='M1500 72L220 72'></path>
          <path pathLength='1' d='M1500 128L220 128'></path>
          <path pathLength='1' d='M1500 189L220 189'></path>
          <path pathLength='1' d='M220 777L220 1'></path>
          <path pathLength='1' d='M538 777L538 128'></path>
        </svg>

        <img
          className={classNames(
            'relative z-10 transition-opacity delay-[600ms]',
            inView ? 'opacity-100' : 'opacity-0'
          )}
          src='/img/hero.webp'
          alt='Hero Image'
        />
      </div>
    </div>
  )
}

export default HeroImage
