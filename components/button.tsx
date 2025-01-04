import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'
import { cva, VariantProps } from 'class-variance-authority'
import classNames from 'classnames'

type ButtonBaseProps = VariantProps<typeof buttonClasses> & {
  children: ReactNode
}

interface ButtonAsAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never
}

type ButtonProps = ButtonBaseProps & (ButtonAsAnchorProps | ButtonAsButtonProps)

const buttonClasses = cva('rounded-full inline-flex items-center', {
  variants: {
    variant: {
      primary: [
        'bg-primary-gradient hover:text-shadow hover:box-shadow-primary transition-[shadow,text-shadow]',
        '[&_.icon-wrapper]:ml-2',
      ],
      secondary: [
        'text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in',
        '[&_.icon-wrapper]:bg-transparent-white [&_.icon-wrapper]:rounded-full [&_.icon-wrapper]:px-2 [&_.icon-wrapper]:ml-2 &_.icon-wrapper]:-mr-2',
      ],
      tertiary: '',
    },
    size: {
      small: 'text-xs px-3 h-7',
      medium: 'text-sm px-4 h-8 px-4',
      large: 'text-md px-6 h-12 px-6',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
})

export const IconWrapper = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <span className={classNames('icon-wrapper', className)}>{children}</span>
  )
}

export const Button = ({
  className,
  children,
  variant,
  size,
  ...props
}: ButtonProps) => {
  const classes = buttonClasses({ variant, size, className })

  if ('href' in props && props.href !== undefined) {
    return (
      <Link className={classes} {...props}>
        {children}
      </Link>
    )
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
