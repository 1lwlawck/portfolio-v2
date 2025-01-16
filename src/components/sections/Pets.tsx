'use client'

import Image from 'next/image'

const animals = [
  {
    src: '/animals/white_walk_8fps.gif', // Chicken
    alt: 'Chicken',
    direction: 'right', // Bergerak ke kanan
    size: 'h-10 w-10 sm:h-8 sm:w-8 md:h-12 md:w-12',
    duration: '20s',
  },
  {
    src: '/animals/brown_walk_8fps.gif', // Snail
    alt: 'Snail',
    direction: 'left', // Bergerak ke kiri
    size: 'h-13 w-15 sm:h-10 sm:w-10 md:h-14 md:w-14',
    duration: '50s',
  },
  {
    src: '/animals/white_run_8fps.gif', // White Dog
    alt: 'White Dog',
    direction: 'right', // Bergerak ke kanan
    size: 'h-12 w-16 sm:h-10 sm:w-14 md:h-14 md:w-18',
    duration: '15s',
  },
  {
    src: '/animals/white_run_8fps.gif', // White Dog
    alt: 'White Dog',
    direction: 'left', // Bergerak ke kiri
    size: 'h-12 w-16 sm:h-10 sm:w-14 md:h-14 md:w-18',
    duration: '18s',
  },
  {
    src: '/animals/brown_walk_dog_8fps.gif', // Brown Dog
    alt: 'Brown Dog',
    direction: 'left', // Bergerak ke kiri
    size: 'h-8 w-12 sm:h-6 sm:w-10 md:h-10 md:w-14',
    duration: '30s',
  },
  {
    src: '/animals/brown_walk_dog_8fps.gif', // Brown Dog
    alt: 'Brown Dog',
    direction: 'right', // Bergerak ke kanan
    size: 'h-8 w-12 sm:h-6 sm:w-10 md:h-10 md:w-14',
    duration: '35s',
  },
  {
    src: '/animals/green_walk_8fps.gif', // Turtle
    alt: 'Turtle',
    direction: 'right', // Bergerak ke kanan
    size: 'h-14 w-16 sm:h-12 sm:w-14 md:h-16 md:w-18',
    duration: '60s',
  },
  {
    src: '/animals/green_walk_8fps.gif', // Turtle
    alt: 'Turtle',
    direction: 'left', // Bergerak ke kiri
    size: 'h-14 w-16 sm:h-12 sm:w-14 md:h-16 md:w-18',
    duration: '70s',
  },
  {
    src: '/animals/red_lie_8fps.gif', // Red Lie
    alt: 'Red Lie',
    direction: '', // Tidak bergerak
    size: 'h-16 w-16 sm:h-14 sm:w-14 md:h-18 md:w-18 translate-x-64',
    duration: '', // Tidak ada animasi
  },
  {
    src: '/animals/white_idle_8fps.gif', // White Idle
    alt: 'White Idle',
    direction: '', // Tidak bergerak
    size: 'h-16 w-16 sm:h-14 sm:w-14 md:h-18 md:w-18 translate-x-80',
    duration: '', // Tidak ada animasi
  },
  {
    src: '/animals/akita_swipe_8fps.gif', // Akita Swipe
    alt: 'Akita Swipe',
    direction: '', // Tidak bergerak
    size: 'h-12 w-16 sm:h-10 sm:w-14 md:h-14 md:w-18 translate-x-96',
    duration: '', // Tidak ada animasi
  },
]

export default function Pets() {
  return (
    <div className="fixed bottom-0 left-0 z-10 w-full bg-transparent">
      <div className="relative flex h-20 w-full items-end">
        {animals.map((animal, index) => (
          <div
            key={index}
            className={`absolute bottom-0 ${
              animal.direction
                ? animal.direction === 'right'
                  ? 'animate-walk-right'
                  : 'animate-walk-left'
                : ''
            } ${
              animal.direction === ''
                ? 'left-1/2 sm:left-auto sm:translate-x-24'
                : ''
            }`}
            style={{
              animationDuration: animal.duration,
              animationTimingFunction: 'linear',
            }}
          >
            <Image
              src={animal.src}
              height={100}
              width={100}
              className={`${animal.size}`}
              alt={animal.alt}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
