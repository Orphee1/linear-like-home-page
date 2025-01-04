import { Footer, Header } from '@/components'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HL Linear',
  description: 'Linear like Homepage',
}

export const viewport: Viewport = {
  width: 'device-width',
  height: 'device-height',
  initialScale: 1,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <div>
          <Header />
          <main className='pt-navigation-height bg-page-gradient'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
