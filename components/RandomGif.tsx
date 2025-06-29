'use client'

import { useState } from 'react'
import GifCard, { Gif } from './GifCard'
import gifs from '@/data/gifs.json'

export default function RandomGif() {
  const [gif, setGif] = useState<Gif>(() => gifs[Math.floor(Math.random() * gifs.length)] as Gif)

  function fetchRandom() {
    const random = gifs[Math.floor(Math.random() * gifs.length)] as Gif
    setGif(random)
  }

  return (
    <GifCard gif={gif} onGifClick={fetchRandom} />
  )
}
