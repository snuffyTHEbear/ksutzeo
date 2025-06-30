"use client";
import { useEffect, useRef, useState } from "react";

export type Gif = {
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

export default function GifCard({
  gif,
  onGifClick,
}: {
  gif: Gif;
  onGifClick?: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const isRedditPost = gif.gfycat_title !== gif.title;
  const createdDate = gif.created_utc
    ? new Date(gif.created_utc * 1000).toLocaleDateString()
    : null;

  const handleMouseEnter = () => {
    videoRef.current?.pause();
  };

  const handleMouseLeave = () => {
    videoRef.current?.play();
  };

  useEffect(() => {
    setIsLoading(true);
    setProgress(0);
  }, [gif.filename]);

  const metadata = (
    <>
      <h2 className="text-lg font-semibold">
        {isRedditPost ? gif.title : gif.gfycat_title}
      </h2>
      {isRedditPost && (
        <div className="text-gray-300 space-y-1">
          {gif.permalinks.map((link, idx) => (
            <div key={link}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                {gif.subreddits[idx] || "View on Reddit"}
              </a>
              {typeof gif.scores[idx] === "number" && (
                <span className="ml-1">: {gif.scores[idx]}</span>
              )}
            </div>
          ))}
          {createdDate && <p>{createdDate}</p>}
        </div>
      )}
      {gif.tags && gif.tags.length > 0 && (
        <p className="text-gray-300">{gif.tags.join(", ")}</p>
      )}
    </>
  );

  return (
    <div
      className="relative rounded overflow-hidden group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={`${_gifPath}/gifs/${gif.filename}`}
        className="w-full transition-all duration-300 group-hover:blur-sm"
        autoPlay
        loop
        muted
        playsInline
        onClick={onGifClick}
        onLoadStart={() => {
          setIsLoading(true);
          setProgress(0);
        }}
        onProgress={() => {
          const video = videoRef.current;
          if (video && video.buffered.length > 0 && video.duration) {
            const bufferedEnd = video.buffered.end(video.buffered.length - 1);
            const percent = Math.min(bufferedEnd / video.duration, 1) * 100;
            setProgress(percent);
          }
        }}
        onLoadedData={() => {
          setProgress(100);
          setTimeout(() => setIsLoading(false), 200);
        }}
      />
      {isLoading && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
          <div
            className="h-full bg-blue-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
      <div className="absolute inset-0 hidden sm:flex flex-col justify-end p-2 space-y-1 bg-black/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {metadata}
      </div>
      <div className="mt-2 sm:hidden space-y-1 text-sm bg-black/60 p-2">
        {metadata}
      </div>
    </div>
  );
}
