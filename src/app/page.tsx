import Links from '@/components/links'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import AVATARS from '@/data/avatar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | Deny Faishal Ard',
  description: 'Welcome to the personal website of Deny Faishal Ard.',
}
export default function Home() {
  return (
    <div className="font-base">
      {/* Render avatar secara dinamis */}
      <div className="flex flex-wrap gap-4">
        {AVATARS.map((avatar, id) => (
          <div key={id} className="flex items-center space-x-4">
            <Avatar className="h-16 w-16 rounded-full border-2 border-gray-300 shadow-lg">
              <AvatarImage
                className="rounded-full"
                src={avatar.previewImage} // URL gambar dari data avatar
                alt={avatar.alt} // Deskripsi alternatif dari data avatar
              />
              <AvatarFallback className="bg-gray-200 text-gray-700">
                {avatar.fallback} {/* Teks fallback */}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-heading sm:text-4xl">
                {avatar.name}
              </h1>
              <p className="text-lg sm:text-xl">{avatar.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Informasi tambahan */}
      <div className="mt-8 text-base sm:text-lg">
        <h2 className="mb-4 text-xl font-heading sm:text-2xl">About Me</h2>
        <p>
          Hi, my name is Deny Faishal Ard, and I am a passionate Web Developer
          and software engineer based in Brebes, Indonesia. I specialize in
          creating responsive and accessible web and mobile applications. My
          journey in tech has led me to work on a variety of impactful projects.
        </p>
        <br />

        <h2 className="mb-4 text-xl font-heading sm:text-2xl">Current Roles</h2>
        <p>
          As the <strong>CEO and Developer</strong> of RecycleHub, I developed
          the platform from scratch, which connects waste collectors with
          businesses and individuals. I am responsible for the frontend,
          backend, and mobile app development using Flutter.
        </p>
        <br />
        <p>
          As a <strong>Freelance Web Developer</strong>, I have worked on
          various projects including e-commerce websites, portfolio websites,
          and tailored web applications that meet specific client needs.
        </p>
        <br />
      </div>
      <Links />
    </div>
  )
}
