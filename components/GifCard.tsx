type Gif = {
  filename: string;
  title: string;
  tags: string[];
};
const _gifPath = 'http://192.168.1.137:3000/public/gifs/';
export default function GifCard({ gif }: { gif: Gif }) {
  return (
    <div className="bg-gray-900 rounded overflow-hidden shadow-md">
      <img
        src={`${_gifPath}${gif.filename}`}
        alt={gif.title}
        className="w-full"
        loading="lazy"
      />
      <div className="p-2">
        <h2 className="text-lg font-semibold">{gif.title}</h2>
        <p className="text-sm text-gray-400">{gif.tags.join(', ')}</p>
      </div>
    </div>
  );
}
