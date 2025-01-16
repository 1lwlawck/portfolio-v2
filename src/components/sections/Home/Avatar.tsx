'use client'

import { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import AVATARS from '@/data/avatar'

export default function AvatarSection() {
  return (
    <div className="flex flex-wrap gap-4">
      {AVATARS.map((avatar, id) => (
        <AvatarWithEffects key={id} avatar={avatar} />
      ))}
    </div>
  )
}

function AvatarWithEffects({ avatar }: { avatar: any }) {
  const [displayName, setDisplayName] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayRole, setDisplayRole] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)

  // Generate random name effect
  useEffect(() => {
    let interval: NodeJS.Timeout
    const chars =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

    const randomizeName = () => {
      const tempName = avatar.name
        .split('')
        .map((char: any, i: any) =>
          Math.random() > 0.5
            ? chars[Math.floor(Math.random() * chars.length)]
            : char,
        )
        .join('')
      setDisplayName(tempName)
    }

    interval = setInterval(randomizeName, 80)

    const timeout = setTimeout(() => {
      clearInterval(interval)
      setDisplayName(avatar.name)
    }, 1500)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [avatar.name])

  // Typing and deleting effect for role
  useEffect(() => {
    if (isTyping && !isDeleting) {
      if (roleIndex < avatar.role.length) {
        const timeout = setTimeout(() => {
          setDisplayRole((prev) => prev + avatar.role[roleIndex])
          setRoleIndex((prev) => prev + 1)
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        setTimeout(() => setIsDeleting(true), 3000)
      }
    } else if (isDeleting) {
      if (displayRole.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayRole((prev) => prev.slice(0, -1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        setIsDeleting(false)
        setRoleIndex(0)
        setIsTyping(true)
      }
    }
  }, [avatar.role, displayRole, roleIndex, isTyping, isDeleting])

  return (
    <div className="flex items-center space-x-4">
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
        {/* Display randomized name */}
        <h1 className="text-2xl font-heading transition-all duration-500 ease-in-out sm:text-4xl">
          {displayName}
        </h1>
        {/* Typing effect for role */}
        <p className="text-lg sm:text-xl">
          {displayRole}
          <span
            className={`animate-blink ml-1`}
            style={{
              fontSize: '1.2em',
            }} /* Tambahkan ukuran jika ingin lebih besar */
          >
            |
          </span>
        </p>
      </div>
    </div>
  )
}
