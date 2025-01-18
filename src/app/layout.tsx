'use client'

import { Montserrat } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import { ViewTransitions } from 'next-view-transitions'
import { ThemeProvider } from '@/components/theme-provider'
import MusicControl from '@/components/sections/MusicControl'
import Pets from '@/components/sections/Pets'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
