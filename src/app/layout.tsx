'use client'

import { Montserrat } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import { ViewTransitions } from 'next-view-transitions'
import { ThemeProvider } from '@/components/theme-provider'
import MusicControl from '@/components/sections/MusicControl'
import Pets from '@/components/sections/Pets'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { usePathname } from 'next/navigation'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const transitionRef = useRef<HTMLDivElement | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    // Animasi saat route berubah
    const animateTransition = async () => {
      if (transitionRef.current) {
        // Munculkan overlay
        await gsap.to(transitionRef.current, {
          duration: 0.7,
          scaleX: 1,
          transformOrigin: 'left',
          ease: 'power2.inOut',
        })

        // Sembunyikan overlay
        gsap.to(transitionRef.current, {
          duration: 0.7,
          scaleX: 0,
          transformOrigin: 'right',
          ease: 'power2.inOut',
        })
      }
    }

    animateTransition()
  }, [pathname])

  return (
    <html lang="en">
      <body
        className={`${montserrat.className} absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#09122C_0.1px,transparent_1px)] [background-size:32px_32px] dark:bg-gray-900 dark:bg-[radial-gradient(#374151_1px,transparent_1px)]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <ViewTransitions>
            {/* Overlay untuk transisi halaman */}
            <div
              ref={transitionRef}
              className="fixed inset-0 z-[999] flex scale-x-0 transform items-center justify-center bg-yellow-500"
              style={{ transformOrigin: 'left' }}
            >
              <div className="text-center text-white">
                <p className="text-4xl font-bold">🌟 Loading... 🌟</p>
                <p className="mt-2 text-lg">
                  Please wait while the magic happens!
                </p>
              </div>
            </div>

            {/* Konten halaman */}
            <Nav />
            <MusicControl />
            <main className="mx-auto w-[750px] max-w-full px-5 pb-10 pt-28 text-text dark:text-darkText">
              {children}
            </main>
            <Pets />
          </ViewTransitions>
        </ThemeProvider>
      </body>
    </html>
  )
}
