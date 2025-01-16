/* eslint-disable react/no-unescaped-entities */
import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Deny Faishal Ard',
  description: 'Welcome to the personal website of Deny Faishal Ard.',
}
export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About</h1>

      {/* Intro Section */}
      <div className="mb-10 text-base sm:text-lg">
        <p>
          I am a passionate Web Developer with expertise in creating modern,
          responsive, and accessible web applications. My goal is to build
          software solutions that positively impact businesses and communities.
        </p>
      </div>

      {/* Education */}
      <div className="mb-10">
        <h2 className="mb-4 text-xl font-heading sm:text-2xl">Education</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Undergraduate in informatic engineering</strong> -
            Politeknik Harapan Bersama
            <p>( 2022 - now )</p>
          </li>
        </ul>
      </div>

      {/* Motivation */}
      <div className="mb-10">
        <h2 className="mb-4 text-xl font-heading sm:text-2xl">Motivation</h2>
        <p>
          I have always been passionate about creating solutions that make
          people's lives easier. I believe in the power of technology to
          transform and improve how we work, communicate, and live.
        </p>
      </div>

      {/* Hobbies */}
      <div className="mb-10">
        <h2 className="mb-4 text-xl font-heading sm:text-2xl">
          Hobbies & Interests
        </h2>
        <p>
          When I’m not coding, you can find me exploring nature, playing chess,
          or reading books on psychology and personal development. I also enjoy
          contributing to open-source projects and mentoring aspiring
          developers.
        </p>
      </div>

      {/* Skills */}
      <Skills />

      {/* Experience */}
      <Experience />
    </div>
  )
}
