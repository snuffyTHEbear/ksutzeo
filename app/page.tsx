'use client'

import gifs from '@/data/gifs.json';
import GifCard from '@/components/GifCard';
import { useCallback, useState } from 'react';

export const dynamic = 'force-dynamic';

export default function Home() {
  const getRandomGif = useCallback(() => {
    return gifs[Math.floor(Math.random() * gifs.length)];
  }, []);

  const [currentGif, setCurrentGif] = useState(() => getRandomGif());

  const handleClick = useCallback((event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.closest('a')) {
      return;
    }
    setCurrentGif(getRandomGif());
  }, [getRandomGif]);

  return (
    <div
      className="min-h-screen text-white flex items-start justify-center pt-8 p-4"
      onClick={handleClick}
    >
      <GifCard gif={currentGif} />
    </div>
  );
}
