import Link from 'next/link'
import Container from './container'
import { GitHubIcon, Logo, SlackIcon, TwitterIcon } from './icons'

const footerLinks = [
  {
    title: 'Product',
    links: [
      { title: 'Features', href: '#' },
      { title: 'Integrations', href: '#' },
      { title: 'Pricing', href: '#' },
      { title: 'Changelog', href: '#' },
      { title: 'Docs', href: '#' },
      { title: 'Linear Method', href: '#' },
      { title: 'Download', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About us', href: '#' },
      { title: 'Blog', href: '#' },
      { title: 'Careers', href: '#' },
      { title: 'Customers', href: '#' },
      { title: 'Brand', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { title: 'Community', href: '#' },
      { title: 'Contact', href: '#' },
      { title: 'DPA', href: '#' },
      { title: 'Terms of service', href: '#' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { title: 'API', href: '#' },
      { title: 'Status', href: '#' },
      { title: 'GitHub', href: '#' },
    ],
  },
]

const Footer = () => {
  return (
    <footer
      className='mt-12 p-[5.6rem] border-t border-transparent-white text-sm
  
    '
    >
      <Container className=' flex flex-col justify-between md:flex-row '>
        <div>
          <div
            className='h-full flex flex-row justify-between lg:flex-col
          
          '
          >
            <div className=' flex items-center text-grey '>
              <Logo className='mr-4 w-4 h-4' /> Linear - Designed worldwide
            </div>
            <div className='mt-auto flex space-x-4 text-grey'>
              <TwitterIcon />
              <GitHubIcon />
              <SlackIcon />
            </div>
          </div>
        </div>
        {/* second column */}
        <div className='flex flex-wrap'>
          {footerLinks.map((column) => {
            return (
              <div
                className='mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]'
                key={column.title}
              >
                <h3 className='mb-3 font-medium'>{column.title}</h3>
                <ul>
                  {column.links.map((link) => {
                    return (
                      <li key={link.title} className='[&_a]:last:mb-0'>
                        <Link
                          className='text-grey mb-3 block hover:text-off-white transition-colors'
                          href={link.href}
                        >
                          {link.title}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </Container>
    </footer>
  )
}

export default Footer
