import PROJECTS from '@/data/projects'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work | Deny Faishal Ard',
  description: 'Welcome to the personal website of Deny Faishal Ard.',
}
export default function Work() {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">Work</h1>

      {/* Grid Layout Responsif */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {PROJECTS.map((project, id) => (
          <div
            className="rounded-base border-2 border-border bg-main p-4 shadow-light dark:border-darkBorder dark:shadow-dark sm:p-6 lg:p-8"
            key={id}
          >
            {/* Gambar dengan AspectRatio */}
            <AspectRatio
              className="overflow-hidden rounded-base border-2 border-border dark:border-darkBorder"
              ratio={72 / 35}
            >
              <img
                className="h-full w-full object-cover"
                src={`${project.previewImage}`}
                alt={project.name}
              />
            </AspectRatio>

            {/* Konten Card */}
            <div className="mt-4 font-base text-text sm:mt-6">
              <h2 className="text-xl font-heading sm:text-2xl lg:text-3xl">
                {project.name}
              </h2>
              <p className="mt-2 text-sm sm:mt-4 sm:text-base lg:text-lg">
                {project.description}
              </p>

              {/* Tombol Responsif */}
              <div className="mt-4 flex flex-wrap justify-between gap-2 sm:mt-6">
                <a
                  className="cursor-pointer rounded-lg border-2 border-border bg-white px-4 py-2 text-center text-xs font-medium shadow-light transition-all hover:bg-gray-100 hover:shadow-md dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText dark:shadow-dark sm:px-5 sm:py-3 sm:text-sm lg:text-base"
                  href={project.liveLink}
                  target="_blank"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
