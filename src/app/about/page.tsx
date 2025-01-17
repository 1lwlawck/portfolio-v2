import Hobbies from '@/components/sections/About/Hobbies'
import Intro from '@/components/sections/About/Intro'
import Education from '@/components/sections/About/Education'
import Motivation from '@/components/sections/About/Motivation'
import Skills from '@/components/sections/Work/Skills'
import Experience from '@/components/sections/Work/Experience'

import { aboutMetadata } from '@/data/metadata'

export const metadata = aboutMetadata

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About</h1>
      <Intro />
      <Education />
      <Motivation />
      <Hobbies />
      <Skills />
      <Experience />
    </div>
  )
}
