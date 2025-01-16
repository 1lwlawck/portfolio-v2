'use client'

import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { FaPlay, FaPause, FaCog } from 'react-icons/fa'

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
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-yellow-500 hover:bg-yellow-600"
        >
          <FaCog />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="mr-4 w-64 bg-yellow-500 p-4 text-black">
        {/* Playback Controls */}
        <div className="mb-4 flex items-center justify-between">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-blue-500 text-white hover:bg-blue-600"
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

// Utility function to format time as minutes:seconds
function formatTime(time: number) {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}
