import PROJECTS from '@/data/projects'
import { ProjectCard } from '@/components/sections/Work/ProjectCard'
import { workMetadata } from '@/data/metadata'

export const metadata = workMetadata

export default function Work() {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">Work ⚒️</h1>

      {/* Grid Layout Responsif */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {PROJECTS.map((project, id) => (
          <ProjectCard
            key={id}
            name={project.name}
            description={project.description}
            previewImage={project.previewImage}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </div>
  )
}
