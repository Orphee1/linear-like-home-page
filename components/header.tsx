'use client'

import { useEffect, useState } from 'react'
import Container from './container'
import { Button } from './button'
import { Logo, HamburgerIcon } from './icons'
import Link from 'next/link'
import classNames from 'classnames'

const Header = () => {
  const [isColNavOpen, setIsColNavOpen] = useState(false)

  useEffect(() => {
    document
      .querySelector('html')
      ?.classList.toggle('overflow-hidden', isColNavOpen)
  }, [isColNavOpen])

  useEffect(() => {
    const closeColNavigation = () => setIsColNavOpen(false)
    window.addEventListener('resize', closeColNavigation)
    window.addEventListener('orientationchange', closeColNavigation)
    return () => {
      window.removeEventListener('resize', closeColNavigation)
      window.removeEventListener('orientationchange', closeColNavigation)
    }
  }, [isColNavOpen])

  return (
    <header
      className='z-50 fixed top-0 left-0 w-full border-b border-transparent-white backdrop-blur-[12px]

    '
    >
      <Container className='flex h-navigation-height'>
        <Link className='flex items-center text-md' href='/'>
          <Logo className='w-[1.8rem] h-[1.8rem] mr-4' /> Linear
        </Link>

        <div
          className={classNames(
            'transition-[visibility] md:visible',
            isColNavOpen ? 'visible' : 'invisible delay-500'
          )}
        >
          <nav
            className={classNames(
              'transition-opacity duration-500 fixed top-navigation-height left-0 w-full h-[calc(100vh_-_var(--navigation-height))] overflow-auto bg-background',
              'md:block md:w-auto md:relative md:top-0 md:h-auto md:bg-transparent md:opacity-100 md:translate-x-0 md:overflow-hidden md:transition-none',
              isColNavOpen
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-[-100vw]'
            )}
          >
            <ul
              className={classNames(
                'flex h-full flex-col',
                '[&_li]:ml-6 [&_li]:border-b [&_li]:border-grey-dark',
                '[&_a:hover]:text-grey [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:items-center [&_a]:text-lg [&_a]:transition-[color,transform] ease-in [&_a]:duration-500',
                // '[&_a]:translate-y-8',
                // isColNavOpen && '[&_a]:translate-y-2',
                'md:flex-row md:items-center md:[&_li]:border-none md:[&_a]:text-sm md:[&_a]:translate-y-0 md:[&_a]:transition-colors'
              )}
            >
              <li>
                <Link href='#'>Features</Link>
              </li>
              <li>
                <Link href='#'>Method</Link>
              </li>
              <li className='md:hidden lg:block'>
                <Link href='#'>Customers</Link>
              </li>
              <li className='md:hidden lg:block'>
                <Link href='#'>Changelog</Link>
              </li>
              <li className='md:hidden lg:block'>
                <Link href='#'>Integrations</Link>
              </li>
              <li>
                <Link href='#'>Pricing</Link>
              </li>
              <li>
                <Link href='#'>Company</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='ml-auto h-full flex items-center'>
          <Link className='text-sm mr-6' href='#'>
            Log in
          </Link>

          <Button href='#'>Sign up</Button>
        </div>
        <button
          className='ml-6 md:hidden'
          onClick={() => {
            setIsColNavOpen((open) => !open)
          }}
        >
          <span className='sr-only'>Toggle menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  )
}

export default Header
