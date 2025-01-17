'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BiShow } from 'react-icons/bi'
import { RiFileCopyLine } from 'react-icons/ri'
import { IoLinkSharp } from 'react-icons/io5'
import { Badge } from '@/components/ui/badge'

interface CertificatesCardProps {
  name: string
  description: string
  previewImage: string
  credentialUrl: string
  issued: string
  type: string
}

export function CertificatesCard({
  name,
  description,
  previewImage,
  credentialUrl,
  issued,
  type,
}: CertificatesCardProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  const handleClipboard = () => {
    navigator.clipboard.writeText(credentialUrl)
  }

  const handleLink = () => {
    window.open(credentialUrl, '_blank')
  }

  const openPreview = () => {
    setIsPreviewOpen(true)
  }

  const closePreview = () => {
    setIsPreviewOpen(false)
  }

  return (
    <>
      <motion.div
        whileInView={{ scale: 1 }}
        initial={{ scale: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="flex flex-col justify-between rounded-lg border border-gray-300 bg-white p-5 shadow-[0px_4px_0px_rgba(4,6,0,31.1)] transition-all hover:scale-105 dark:border-gray-700 dark:bg-gray-800"
      >
        <div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            {name}
          </h2>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <Badge
            variant="secondary"
            className="font-sm mr-2 rounded-lg text-xs dark:bg-yellow-500 dark:text-black"
          >
            {type}
          </Badge>
          <div className="flex gap-2">
            {/* Buttons */}
            <BiShow
              className="rounded-full bg-yellow-300 p-2 text-3xl text-gray-800 transition-all hover:bg-yellow-400 dark:bg-yellow-500 dark:text-black dark:hover:bg-yellow-400"
              title="Preview"
              onClick={openPreview}
            />
            <RiFileCopyLine
              className="rounded-full bg-yellow-300 p-2 text-3xl text-gray-800 transition-all hover:bg-yellow-400 dark:bg-yellow-500 dark:text-black dark:hover:bg-yellow-400"
              title="Copy Link"
              onClick={handleClipboard}
            />
            <IoLinkSharp
              className="rounded-full bg-yellow-300 p-2 text-3xl text-gray-800 transition-all hover:bg-yellow-400 dark:bg-yellow-500 dark:text-black dark:hover:bg-yellow-400"
              title="Open Link"
              onClick={handleLink}
            />
          </div>
        </div>
      </motion.div>

      {/* Popup Modal for Preview */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-2xl rounded-lg bg-white p-4 dark:bg-gray-800">
            <button
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
              onClick={closePreview}
            >
              ✕
            </button>
            <img
              src={previewImage}
              alt="Certificate Preview"
              className="w-full rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}
