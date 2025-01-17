'use client'

import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { useState } from 'react'
import { ThemeSwitcher } from './theme-switcher'

export default function Nav() {
  const path = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    { path: '/', text: '🚀Home' },
    { path: '/about', text: '😎About' },
    { path: '/work', text: '⚒️Work' },
    { path: '/certificates', text: '🏅Certificates' },
  ]

  return (
    <div className="fixed left-0 top-0 z-50 w-full">
      {/* Overlay for closing menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 sm:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu Button and ThemeSwitcher */}
      <div className="relative z-50 flex items-center justify-between bg-white p-4 sm:hidden">
        <button
          className="rounded-md border-b border-gray-300 bg-white px-4 py-2 text-gray-800 shadow-light"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>
        {/* ThemeSwitcher for Mobile */}
        <div className="rounded-md p-2 text-gray-800 shadow-light">
          <ThemeSwitcher />
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={clsx(
          'mt- absolute left-0 right-0 z-50 mx-auto mt-3 w-full bg-white p-3 shadow-lg sm:relative sm:flex sm:w-max sm:gap-4 sm:rounded-base sm:border-2 sm:border-gray-300 sm:shadow-light',
          isMenuOpen ? 'top-full block' : 'hidden sm:flex',
        )}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          {links.map((link) => (
            <Link
              key={link.path}
              className={clsx(
                'relative px-3 py-2 font-semibold text-gray-800 transition-all duration-300 ease-in-out',
                'after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-yellow-500 after:transition-transform after:duration-300',
                path === link.path
                  ? 'text-yellow-500 after:scale-x-100'
                  : 'hover:text-yellow-500 hover:after:scale-x-100',
              )}
              href={link.path}
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {link.text}
            </Link>
          ))}
          {/* ThemeSwitcher for Desktop */}
          <div className="hidden sm:block">
            <ThemeSwitcher />
          </div>
        </div>
      </nav>
    </div>
  )
}
