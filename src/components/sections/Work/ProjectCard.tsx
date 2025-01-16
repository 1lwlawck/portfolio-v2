import { AspectRatio } from '@/components/ui/aspect-ratio'

interface ProjectCardProps {
  name: string
  description: string
  previewImage: string
  liveLink: string
}

export function ProjectCard({
  name,
  description,
  previewImage,
  liveLink,
}: ProjectCardProps) {
  return (
    <div className="rounded-base border-2 border-border bg-main p-4 shadow-light dark:border-darkBorder dark:shadow-dark sm:p-6 lg:p-8">
      {/* Gambar dengan AspectRatio */}
      <AspectRatio
        className="overflow-hidden rounded-base border-2 border-border dark:border-darkBorder"
        ratio={72 / 35}
      >
        <img
          className="h-full w-full object-cover"
          src={previewImage}
          alt={name}
        />
      </AspectRatio>

      {/* Konten Card */}
      <div className="mt-4 font-base text-text sm:mt-6">
        <h2 className="text-xl font-heading sm:text-2xl lg:text-3xl">{name}</h2>
        <p className="mt-2 text-sm sm:mt-4 sm:text-base lg:text-lg">
          {description}
        </p>

        {/* Tombol Responsif */}
        <div className="mt-4 flex flex-wrap justify-between gap-2 sm:mt-6">
          <a
            className="cursor-pointer rounded-lg border-2 border-border bg-white px-4 py-2 text-center text-xs font-medium shadow-light transition-all hover:bg-gray-100 hover:shadow-md dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText dark:shadow-dark sm:px-5 sm:py-3 sm:text-sm lg:text-base"
            href={liveLink}
            target="_blank"
          >
            Visit
          </a>
        </div>
      </div>
    </div>
  )
}
