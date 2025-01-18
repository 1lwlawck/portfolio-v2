'use client'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { motion } from 'framer-motion'

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
    <motion.div
      className="rounded-base border-2 border-border bg-main p-4 shadow-light dark:border-darkBorder dark:shadow-dark sm:p-6 lg:p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
    >
      {/* Gambar dengan AspectRatio */}
      <AspectRatio
        className="overflow-hidden rounded-base border-2 border-border dark:border-darkBorder"
        ratio={72 / 35}
      >
        <motion.img
          className="h-full w-full object-cover"
          src={previewImage}
          alt={name}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </AspectRatio>

      {/* Konten Card */}
      <motion.div
        className="mt-4 font-base text-text sm:mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-xl font-heading sm:text-2xl lg:text-3xl">{name}</h2>
        <p className="mt-2 text-sm sm:mt-4 sm:text-base lg:text-lg">
          {description}
        </p>

        {/* Tombol Responsif */}
        <motion.div
          className="mt-4 flex flex-wrap justify-between gap-2 sm:mt-6"
          whileHover={{ scale: 1.1 }}
        >
          <a
            className="cursor-pointer rounded-lg border-2 border-border bg-white px-4 py-2 text-center text-xs font-medium shadow-light transition-all hover:bg-gray-100 hover:shadow-md dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText dark:shadow-dark sm:px-5 sm:py-3 sm:text-sm lg:text-base"
            href={liveLink}
            target="_blank"
          >
            Visit
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
