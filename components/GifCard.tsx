type Gif = {
  filename: string;
  title: string;
  gfycat_title: string;
  permalinks: string[];
  subreddits: string[];
  scores: number[];
  created_utc: number | null;
  tags: string[];
};
const _gifPath = process.env.NEXT_PUBLIC_GIF_HOST || "";

export default function GifCard({ gif }: { gif: Gif }) {
  const isRedditPost = gif.gfycat_title !== gif.title;
  const createdDate = gif.created_utc
    ? new Date(gif.created_utc * 1000).toLocaleDateString()
    : null;

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
      <div className="p-2 space-y-1">
        <h2 className="text-lg font-semibold">
          {isRedditPost ? gif.title : gif.gfycat_title}
        </h2>
        {isRedditPost && (
          <div className="text-sm text-gray-400 space-y-1">
            {gif.permalinks.map((link, idx) => (
              <div key={link}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  {gif.subreddits[idx] || 'View on Reddit'}
                </a>
                {typeof gif.scores[idx] === 'number' && (
                  <span className="ml-1">: {gif.scores[idx]}</span>
                )}
              </div>
            ))}
            {createdDate && <p>{createdDate}</p>}
          </div>
        )}
        {gif.tags && gif.tags.length > 0 && (
          <p className="text-sm text-gray-400">{gif.tags.join(', ')}</p>
        )}
      </div>
    </div>
  );
}
