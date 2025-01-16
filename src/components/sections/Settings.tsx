'use client'

import { useState } from 'react'
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
  const [isPopoverOpen, setIsPopoverOpen] = useState(false) // State to track popover status

  const handleTogglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen) // Toggle popover state
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-yellow-500 hover:bg-yellow-600"
          onClick={handleTogglePopover} // Update state on click
        >
          {isPopoverOpen ? <FaCog /> : <FaTimes />} {/* Fixed logic */}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="mr-4 w-64 bg-yellow-500 p-4 text-black"
        onInteractOutside={() => setIsPopoverOpen(false)} // Close popover when clicked outside
      >
        {/* Playback Controls */}
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

        {/* Timeline Slider */}
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

        {/* Volume Slider */}
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
