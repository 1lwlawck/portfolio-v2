import Hobbies from '@/components/sections/About/Hobbies'
import Intro from '@/components/sections/About/Intro'
import Education from '@/components/sections/About/Education'
import Motivation from '@/components/sections/About/Motivation'
import Skills from '@/components/sections/Work/Skills'
import Experience from '@/components/sections/Work/Experience'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Deny Faishal Ard',
  description: 'Welcome to the personal website of Deny Faishal Ard.',
}

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
