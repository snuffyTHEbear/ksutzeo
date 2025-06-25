import gifs from '@/data/gifs.json';
import GifCard from '@/components/GifCard';

export const dynamic = 'force-dynamic';

export default function Home() {
  const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <GifCard gif={randomGif} />
    </div>
  );
}
