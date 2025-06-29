
import RandomGif from '@/components/RandomGif';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="min-h-screen text-white flex items-start justify-center pt-8 p-4">
      <RandomGif />
    </div>
  );
}
