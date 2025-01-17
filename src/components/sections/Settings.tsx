'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { FaPlay, FaPause, FaCog, FaTimes } from 'react-icons/fa'
import { formatTime } from '@/lib/time'

type SettingsPopoverProps = {
  isPlaying: boolean
  togglePlay: () => void
  currentTime: number
  duration: number
  volume: number
  handleSeek: (value: number[]) => void
  handleVolumeChange: (value: number[]) => void
}

export default function SettingsPopover({
  isPlaying,
  togglePlay,
  currentTime,
  duration,
  volume,
  handleSeek,
  handleVolumeChange,
}: SettingsPopoverProps) {
  // State untuk track popover
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  // Mengambil state popover dari localStorage
  useEffect(() => {
    const storedPopoverState = localStorage.getItem('isPopoverOpen')
    if (storedPopoverState !== null) {
      setIsPopoverOpen(JSON.parse(storedPopoverState))
    }
  }, [])

  // Fungsi untuk toggle popover dan menyimpan state
  const handleTogglePopover = () => {
    const newPopoverState = !isPopoverOpen
    setIsPopoverOpen(newPopoverState)
    localStorage.setItem('isPopoverOpen', JSON.stringify(newPopoverState)) // Simpan state ke localStorage
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-yellow-500 hover:bg-yellow-600"
          onClick={handleTogglePopover} // Menangani click untuk toggle
        >
          {/* Ganti ikon berdasarkan status popover */}
          {isPopoverOpen ? <FaTimes /> : <FaCog />}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="mr-4 w-64 bg-yellow-500 p-4 text-black"
        onInteractOutside={() => setIsPopoverOpen(false)} // Menutup popover saat klik di luar
      >
        {/* Kontrol Pemutaran */}
        <div className="mb-4 flex items-center justify-between">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-[#213555] text-white hover:bg-[#3E5879] hover:text-white"
            onClick={togglePlay}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </Button>
          <span className="text-sm">{isPlaying ? 'Playing' : 'Paused'}</span>
        </div>

        {/* Slider Timeline */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
          <Slider
            value={[currentTime]}
            max={duration}
            step={1}
            onValueChange={handleSeek}
            className="w-full"
          />
        </div>

        {/* Slider Volume */}
        <div className="mt-4">
          <label className="mb-2 block text-sm font-medium">Volume</label>
          <Slider
            value={[volume * 100]}
            max={100}
            step={1}
            onValueChange={handleVolumeChange}
            className="w-full"
          />
        </div>
      </PopoverContent>
    </Popover>
  )
}
