import AvatarSection from '@/components/sections/Home/Avatar'
import AboutMe from '@/components/sections/Home/AboutMe'
import CurrentRoles from '@/components/sections/Home/CurrentRoles'
import Links from '@/components/links'

import { homeMetadata } from '@/data/metadata'

export const metadata = homeMetadata
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
