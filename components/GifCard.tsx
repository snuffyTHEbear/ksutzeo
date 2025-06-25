type Gif = {
  filename: string;
  title: string;
  tags: string[];
};
const _gifPath = process.env.NEXT_PUBLIC_GIF_HOST || "";
export default function GifCard({ gif }: { gif: Gif }) {
  return (
    <div className="bg-gray-900 rounded overflow-hidden shadow-md">
      <video
        src={`${_gifPath}/gifs/${gif.filename}`}
        className="w-full"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="p-2">
        <h2 className="text-lg font-semibold">{gif.title}</h2>
        <p className="text-sm text-gray-400">{gif.tags.join(', ')}</p>
      </div>
    </div>
  );
}
