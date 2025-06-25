import gifs from '@/data/gifs.json';
import GifCard from '@/components/GifCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl mb-6 font-bold">Ksut Zeo</h1>
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
        {gifs.map((gif) => (
          <GifCard key={gif.filename} gif={gif} />
        ))}
      </div>
    </div>
  );
}
