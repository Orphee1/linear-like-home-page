import classNames from 'classnames'

interface HeroProps {
  children: React.ReactNode
  className?: string
}

interface HeroElementProps {
  children: React.ReactNode
  className?: string
}

export const HeroTitle = ({ children, className }: HeroProps) => {
  return (
    <h1
      className={classNames(
        'text-gradient text-6xl md:text-8xl my-6',
        className
      )}
    >
      {children}
    </h1>
  )
}

export const HeroSubtitle = ({ children, className }: HeroElementProps) => {
  return (
    <p
      className={classNames(
        'text-lg text-primary-text md:text-xl mb-12',
        className
      )}
    >
      {children}
    </p>
  )
}

export const Hero = ({ children }: HeroProps) => {
  return <div className='text-center'>{children}</div>
}
