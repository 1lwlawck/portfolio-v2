'use client'

import { useRef, useState, useEffect } from 'react'
import SettingsPopover from './Settings'

export default function MusicControl() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.5) // Volume dalam rentang 0.0–1.0
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (!audioRef.current && typeof Audio !== 'undefined') {
      const audio = new Audio(
        'https://aac.saavncdn.com/051/1fef3e907319879eda1e3934f2d21ff2_320.mp4',
      )
      audio.loop = false
      audio.volume = volume
      audio.setAttribute('playsinline', 'true')
      audioRef.current = audio

      const handleMetadataLoaded = () => {
        setDuration(audio.duration || 0)
      }

      const handleTimeUpdate = () => {
        setCurrentTime(audio.currentTime || 0)
      }

      audio.addEventListener('loadedmetadata', handleMetadataLoaded)
      audio.addEventListener('timeupdate', handleTimeUpdate)

      return () => {
        audio.removeEventListener('loadedmetadata', handleMetadataLoaded)
        audio.removeEventListener('timeupdate', handleTimeUpdate)
        audioRef.current = null
      }
    }
  }, [])

  // Update volume whenever it changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio
        .play()
        .catch((err) =>
          console.error(
            'Play error (gesture required on mobile devices):',
            err,
          ),
        )
    }
    setIsPlaying(!isPlaying)
  }

  const handleSeek = (value: number[]) => {
    const audio = audioRef.current
    if (!audio) return

    const newTime = value[0]
    audio.currentTime = newTime
    setCurrentTime(newTime)
  }

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0] / 100 // Convert from 0–100 to 0.0–1.0
    setVolume(newVolume) // Update state
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 ml-2 flex flex-col items-center">
      <SettingsPopover
        isPlaying={isPlaying}
        togglePlay={togglePlay}
        currentTime={currentTime}
        duration={duration}
        volume={volume}
        handleSeek={handleSeek}
        handleVolumeChange={handleVolumeChange}
      />
    </div>
  )
}
