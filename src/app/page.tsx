import AvatarSection from '@/components/sections/Home/Avatar'
import AboutMe from '@/components/sections/Home/AboutMe'
import CurrentRoles from '@/components/sections/Home/CurrentRoles'
import Links from '@/components/links'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | Deny Faishal Ard',
  description: 'Welcome to the personal website of Deny Faishal Ard.',
}

export default function Home() {
  return (
    <div className="font-base">
      <AvatarSection />
      <AboutMe />
      <CurrentRoles />
      <Links />
    </div>
  )
}
