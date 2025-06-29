import React from "react";
import clsx from "clsx";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
    variant?: "default" | "cyberpunk" | "crt" | "gradient" | "glass" | "terminal";
}
//https://danmarshall.github.io/google-font-to-svg-path/
//Nabla
export const SubHeaderLogo: React.FC<LogoProps> = ({variant = "default", className, ...props}) => {
    const strokeColor = {
        default: "#FFF",
        cyberpunk: "#39ffe6",
        crt: "#00ff88",
        gradient: "url(#strokeGradient)",
        glass: "#ffffffcc",
        terminal: "#00ff00",
    }[variant];

    return (
        <svg
            viewBox="0 0 142.325 24.911"
            xmlns="http://www.w3.org/2000/svg"
            className={clsx("max-w-xl mx-auto w-full h-auto", className)}
            {...props}
        >
            <defs>
                {/* Neon glow filter */}
                <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur1"/>
                    <feGaussianBlur in="SourceGraphic" stdDeviation="4.5" result="blur2"/>
                    <feMerge>
                        <feMergeNode in="blur1"/>
                        <feMergeNode in="blur2"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>

                {/* CRT Scanlines */}
                <pattern id="scanlines" width="100%" height="4" patternUnits="userSpaceOnUse">
                    <rect width="100%" height="2" fill="rgba(0, 255, 0, 0.08)"/>
                </pattern>

                {/* Gradient fill */}
                <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ff00cc">
                        <animate attributeName="stop-color" values="#ff00cc;#00ffff;#ff00cc" dur="3s"
                                 repeatCount="indefinite"/>
                    </stop>
                    <stop offset="100%" stopColor="#00ffff">
                        <animate attributeName="stop-color" values="#00ffff;#ff00cc;#00ffff" dur="3s"
                                 repeatCount="indefinite"/>
                    </stop>
                </linearGradient>

                {/* Style block */}
                <style>
                    {`
            .neon-glow {
              filter: url(#neonGlow);
              animation: pulse 2.5s infinite ease-in-out;
            }

            .pulse {
              animation: pulse 2s infinite ease-in-out;
            }

            .scanline-overlay {
              mix-blend-mode: overlay;
              pointer-events: none;
            }

            @keyframes pulse {
              0%, 100% {
                opacity: 1;
              }
              50% {
                opacity: 0.7;
              }
            }
          `}
                </style>
            </defs>

            {/* CRT Scanline Layer */}
            {variant === "crt" && (
                <rect width="100%" height="100%" fill="url(#scanlines)" className="scanline-overlay"/>
            )}

            <g
                id="svgGroup"
                className={clsx({
                    "neon-glow": variant === "cyberpunk",
                    "pulse": variant === "terminal",
                })}
                strokeLinecap="round"
                fillRule="evenodd"
                fontSize="9pt"
                stroke={strokeColor}
                strokeWidth="0.25mm"
                fill={variant === "glass" ? "#ffffff22" : "none"}
                style={{
                    backdropFilter: variant === "glass" ? "blur(3px)" : undefined,
                }}
            >
                <path
                    d="M 35.975 14.5 L 40.3 12 L 42.475 13.25 L 42.475 9.75 L 42.475 13.25 L 38.15 15.75 L 42.475 13.25 L 40.3 12 L 35.975 14.5 Q 35.4 14.825 34.9 15.462 Q 34.4 16.1 34.1 16.838 Q 33.8 17.575 33.8 18.25 L 33.8 21.75 Q 33.8 22.75 34.45 23.125 L 36.625 24.375 Q 37.275 24.75 38.15 24.25 L 40.3 23 Q 40.875 22.675 41.375 22.038 Q 41.875 21.4 42.175 20.65 Q 42.475 19.9 42.475 19.25 L 38.15 21.75 L 35.975 20.5 L 40.3 18 L 42.475 19.25 L 40.3 18 L 40.3 14.5 L 42.475 15.75 L 42.475 19.25 L 42.475 21.75 L 40.3 20.5 L 40.3 18 L 42.475 19.25 L 42.475 15.75 L 38.15 18.25 L 38.15 21.75 L 42.475 19.25 L 42.475 21.75 L 44.625 20.5 L 44.625 8.5 Q 44.625 7.5 43.975 7.125 Q 43.325 6.75 42.475 7.25 Q 43.325 6.75 43.975 7.125 L 41.825 5.875 Q 41.175 5.5 40.3 6 L 33.8 9.75 L 35.975 11 L 42.475 7.25 L 35.975 11 L 35.975 13.5 L 42.475 9.75 L 40.3 8.5 L 40.3 12 M 117.2 18 L 119.375 19.25 L 115.05 21.75 L 112.875 20.5 L 117.2 18 L 117.2 9.5 L 119.375 10.75 L 119.375 4.5 L 117.2 3.25 L 119.375 2 L 121.525 3.25 L 119.375 4.5 L 117.2 3.25 L 117.2 9.5 L 117.2 18 L 119.375 19.25 L 119.375 10.75 L 115.05 13.25 L 115.05 21.75 L 119.375 19.25 L 117.2 18 Q 117.2 19 117.85 19.375 L 120.025 20.625 Q 120.675 21 121.525 20.5 L 121.525 3.25 L 119.375 4.5 L 119.375 10.75 L 117.2 9.5 L 115.05 10.75 L 117.2 9.5 Q 118.075 9 118.725 9.375 L 116.55 8.125 Q 115.9 7.75 115.05 8.25 L 112.875 9.5 Q 112.3 9.825 111.8 10.462 Q 111.3 11.1 111 11.837 Q 110.7 12.575 110.7 13.25 L 110.7 21.75 Q 110.7 22.75 111.35 23.125 L 113.525 24.375 Q 114.175 24.75 115.05 24.25 L 117.2 23 Q 117.775 22.675 118.275 22.038 Q 118.775 21.4 119.075 20.65 Q 119.375 19.9 119.375 19.25 L 115.05 21.75 M 67.4 7.625 L 67.4 10.125 L 69.55 11.375 L 67.4 10.125 L 67.4 7.625 L 69.55 8.875 L 69.55 11.375 L 67.4 12.625 L 67.4 22.125 Q 67.4 23.125 68.05 23.5 L 70.2 24.75 Q 70.85 25.125 71.725 24.625 L 76.05 22.125 L 76.05 19.625 L 71.725 22.125 L 71.725 12.625 L 69.55 11.375 Q 69.55 10.7 69.85 9.962 Q 70.15 9.225 70.65 8.587 Q 71.15 7.95 71.725 7.625 L 69.55 8.875 L 67.4 7.625 L 69.55 6.375 L 71.725 7.625 L 73.875 6.375 L 76.05 7.625 L 73.875 8.875 L 76.05 7.625 L 76.05 10.125 L 71.725 12.625 L 71.725 7.625 L 69.55 8.875 L 69.55 11.375 L 67.4 12.625 L 67.4 15.125 L 69.55 13.875 L 69.55 23.375 L 69.55 13.875 L 67.4 12.625 L 67.4 22.125 M 132.375 7.25 Q 133.225 6.75 133.875 7.125 L 131.725 5.875 Q 131.075 5.5 130.2 6 L 125.875 8.5 Q 125.3 8.825 124.8 9.462 Q 124.3 10.1 124 10.837 Q 123.7 11.575 123.7 12.25 L 123.7 21.75 Q 123.7 22.75 124.35 23.125 L 126.525 24.375 Q 127.175 24.75 128.05 24.25 L 134.525 20.5 L 134.525 18 L 128.05 21.75 L 128.05 16 L 128.05 12.25 L 132.375 9.75 L 132.375 13.5 L 128.05 16 L 125.875 14.75 L 128.05 16 L 132.375 13.5 L 132.375 9.75 L 130.2 8.5 L 130.2 12.25 L 132.375 13.5 L 130.2 12.25 L 125.875 14.75 Q 125.875 15.75 126.525 16.125 L 128.7 17.375 Q 129.35 17.75 130.2 17.25 L 132.375 16 Q 132.95 15.675 133.438 15.038 Q 133.925 14.4 134.225 13.65 Q 134.525 12.9 134.525 12.25 L 134.525 8.5 Q 134.525 7.5 133.875 7.125 Q 133.225 6.75 132.375 7.25 Z M 48.975 24.5 L 48.975 11 L 51.15 9.75 L 51.15 12.25 L 55.475 9.75 L 55.475 20.75 L 57.625 19.5 L 57.625 8.5 Q 57.625 7.5 56.975 7.125 L 54.825 5.875 Q 54.175 5.5 53.3 6 L 51.15 7.25 Q 50.575 7.575 50.075 8.212 Q 49.575 8.85 49.275 9.587 Q 48.975 10.325 48.975 11 L 46.8 9.75 L 46.8 23.25 L 48.975 24.5 Z M 29.475 7.25 Q 30.325 6.75 30.975 7.125 L 28.825 5.875 Q 28.175 5.5 27.3 6 L 22.975 8.5 Q 22.4 8.825 21.9 9.462 Q 21.4 10.1 21.1 10.837 Q 20.8 11.575 20.8 12.25 L 20.8 21.75 Q 20.8 22.75 21.45 23.125 L 23.625 24.375 Q 24.275 24.75 25.15 24.25 L 29.475 21.75 Q 30.05 21.425 30.538 20.788 Q 31.025 20.15 31.325 19.4 Q 31.625 18.65 31.625 18 L 31.625 15.5 L 29.475 16.75 L 29.475 19.25 L 25.15 21.75 L 25.15 12.25 L 29.475 9.75 L 29.475 12.25 L 31.625 11 L 31.625 8.5 Q 31.625 7.5 30.975 7.125 Q 30.325 6.75 29.475 7.25 Z M 93.375 7.25 Q 94.225 6.75 94.875 7.125 L 92.725 5.875 Q 92.075 5.5 91.2 6 L 86.875 8.5 Q 86.3 8.825 85.8 9.462 Q 85.3 10.1 85 10.837 Q 84.7 11.575 84.7 12.25 L 84.7 21.75 Q 84.7 22.75 85.35 23.125 L 87.525 24.375 Q 88.175 24.75 89.05 24.25 L 93.375 21.75 Q 93.95 21.425 94.438 20.788 Q 94.925 20.15 95.225 19.4 Q 95.525 18.65 95.525 18 L 95.525 15.5 L 93.375 16.75 L 93.375 19.25 L 89.05 21.75 L 89.05 12.25 L 93.375 9.75 L 93.375 12.25 L 95.525 11 L 95.525 8.5 Q 95.525 7.5 94.875 7.125 Q 94.225 6.75 93.375 7.25 Z M 2.175 22 L 6.075 19.75 L 6.075 7.25 L 2.175 9.5 L 2.175 7 L 12.125 1.25 L 12.125 3.75 L 8.225 6 L 8.225 18.5 L 12.125 16.25 L 12.125 18.75 L 2.175 24.5 L 2.175 22 Z M 106.375 7.25 Q 107.225 6.75 107.875 7.125 L 105.725 5.875 Q 105.075 5.5 104.2 6 L 99.875 8.5 Q 99.3 8.825 98.8 9.462 Q 98.3 10.1 98 10.837 Q 97.7 11.575 97.7 12.25 L 97.7 21.75 Q 97.7 22.75 98.35 23.125 L 100.525 24.375 Q 101.175 24.75 102.05 24.25 L 106.375 21.75 Q 106.95 21.425 107.438 20.788 Q 107.925 20.15 108.225 19.4 Q 108.525 18.65 108.525 18 L 108.525 8.5 Q 108.525 7.5 107.875 7.125 Q 107.225 6.75 106.375 7.25 Z M 53.3 8.5 Q 52.725 8.825 52.238 9.462 Q 52.725 8.825 53.3 8.5 L 55.475 9.75 L 55.475 20.75 L 53.3 19.5 L 53.3 8.5 L 55.475 7.25 L 53.3 8.5 Q 52.725 8.825 52.238 9.462 Q 51.75 10.1 51.45 10.837 Q 51.15 11.575 51.15 12.25 Q 51.15 11.575 51.45 10.837 Q 51.75 10.1 52.238 9.462 M 102.05 21.75 L 106.375 19.25 L 106.375 9.75 L 104.2 8.5 L 104.2 18 L 106.375 19.25 L 104.2 18 L 99.875 20.5 L 102.05 21.75 Z M 2.175 9.5 L 2.175 7 L 12.125 1.25 L 9.975 0 L 0 5.75 L 2.175 7 L 0 5.75 L 0 8.25 L 2.175 9.5 Z M 25.15 21.75 L 29.475 19.25 L 29.475 16.75 L 31.625 15.5 L 29.475 14.25 L 27.3 15.5 L 29.475 16.75 L 27.3 15.5 L 27.3 18 L 29.475 19.25 L 27.3 18 L 22.975 20.5 L 25.15 21.75 Z M 89.05 21.75 L 93.375 19.25 L 93.375 16.75 L 95.525 15.5 L 93.375 14.25 L 91.2 15.5 L 93.375 16.75 L 91.2 15.5 L 91.2 18 L 93.375 19.25 L 91.2 18 L 86.875 20.5 L 89.05 21.75 Z M 64.15 1.25 L 64.15 8.75 Q 63.275 9.25 62.625 8.875 L 60.45 7.625 Q 59.8 7.25 59.8 6.25 L 59.8 1.25 L 61.975 2.5 L 61.975 7.5 L 61.975 2.5 L 64.15 1.25 Z M 141.85 20.35 Q 141.35 20.075 140.6 20.5 Q 141.35 20.075 141.838 20.35 Q 142.325 20.625 142.325 21.5 Q 142.325 22.375 141.838 23.225 Q 141.35 24.075 140.6 24.5 Q 139.85 24.925 139.363 24.65 Q 138.875 24.375 138.875 23.5 Q 138.875 22.625 139.363 21.775 Q 139.85 20.925 140.6 20.5 Q 141.35 20.075 141.85 20.35 L 139.675 19.1 Q 139.2 18.825 138.45 19.25 Q 137.675 19.675 137.188 20.525 Q 136.7 21.375 136.7 22.25 Q 136.7 23.125 137.2 23.4 L 139.35 24.65 Q 138.875 24.375 138.875 23.5 Q 138.875 22.625 139.363 21.775 Q 139.85 20.925 140.6 20.5 M 6.075 7.25 L 3.9 6 L 3.9 18.5 L 6.075 19.75 L 6.075 7.25 Z M 48.975 11 L 51.15 12.25 L 51.15 23.25 L 48.975 24.5 L 48.975 11 Z M 102.05 12.25 L 102.05 21.75 L 106.375 19.25 L 106.375 9.75 L 102.05 12.25 Z M 128.05 21.75 L 134.525 18 L 132.375 16.75 L 125.875 20.5 L 128.05 21.75 Z M 22.975 23 L 22.975 13.5 L 22.975 23 Z M 86.875 23 L 86.875 13.5 L 86.875 23 Z M 99.875 23 L 99.875 13.5 L 99.875 23 Z M 125.875 23 L 125.875 13.5 L 125.875 23 Z M 112.875 23 L 112.875 14.5 L 112.875 23 Z M 67.4 12.625 L 65.225 11.375 L 67.4 12.625 L 67.4 15.125 L 65.225 13.875 L 65.225 11.375 L 67.4 12.625 Z M 71.725 22.125 L 76.05 19.625 L 73.875 18.375 L 69.55 20.875 L 71.725 22.125 Z M 6.075 19.75 L 3.9 18.5 L 0 20.75 L 2.175 22 L 6.075 19.75 Z M 8.225 18.5 L 12.125 16.25 L 9.975 15 L 6.075 17.25 L 8.225 18.5 Z M 119.075 20.65 Q 119.375 19.9 119.375 19.25 L 119.375 10.75 Q 119.375 9.75 118.725 9.375 Q 118.075 9 117.2 9.5 M 59.8 6.25 L 59.8 1.25 L 61.975 2.5 L 61.975 7.5 M 49.275 9.587 Q 48.975 10.325 48.975 11 L 46.8 9.75 L 48.975 8.5 L 51.15 9.75 L 48.975 11 M 2.175 24.5 L 2.175 22 L 0 20.75 L 0 23.25 L 2.175 24.5 Z M 29.475 12.25 L 29.475 9.75 L 27.3 8.5 L 27.3 11 L 29.475 12.25 Z M 35.975 11 L 33.8 9.75 L 33.8 12.25 L 35.975 13.5 L 35.975 11 Z M 93.375 12.25 L 93.375 9.75 L 91.2 8.5 L 91.2 11 L 93.375 12.25 Z M 25.15 9.75 L 29.475 7.25 L 25.15 9.75 Z M 89.05 9.75 L 93.375 7.25 L 89.05 9.75 Z M 102.05 9.75 L 106.375 7.25 L 102.05 9.75 Z M 128.05 9.75 L 132.375 7.25 L 128.05 9.75 Z M 22.975 13.5 Q 22.975 12.825 23.275 12.087 Q 23.575 11.35 24.075 10.712 Q 24.575 10.075 25.15 9.75 Q 24.575 10.075 24.075 10.712 Q 23.575 11.35 23.275 12.087 Q 22.975 12.825 22.975 13.5 Z M 86.875 13.5 Q 86.875 12.825 87.175 12.087 Q 87.475 11.35 87.975 10.712 Q 88.475 10.075 89.05 9.75 Q 88.475 10.075 87.975 10.712 Q 87.475 11.35 87.175 12.087 Q 86.875 12.825 86.875 13.5 Z M 99.875 13.5 Q 99.875 12.825 100.175 12.087 Q 100.475 11.35 100.975 10.712 Q 101.475 10.075 102.05 9.75 Q 101.475 10.075 100.975 10.712 Q 100.475 11.35 100.175 12.087 Q 99.875 12.825 99.875 13.5 Z M 112.875 14.5 Q 112.875 13.825 113.175 13.087 Q 113.475 12.35 113.975 11.712 Q 114.475 11.075 115.05 10.75 Q 114.475 11.075 113.975 11.712 Q 113.475 12.35 113.175 13.087 Q 112.875 13.825 112.875 14.5 Z M 125.875 13.5 Q 125.875 12.825 126.175 12.087 Q 126.475 11.35 126.975 10.712 Q 127.475 10.075 128.05 9.75 Q 127.475 10.075 126.975 10.712 Q 126.475 11.35 126.175 12.087 Q 125.875 12.825 125.875 13.5 Z M 35.975 19.5 Q 35.975 18.825 36.275 18.088 Q 36.575 17.35 37.075 16.713 Q 37.575 16.075 38.15 15.75 Q 37.575 16.075 37.075 16.713 Q 36.575 17.35 36.275 18.088 Q 35.975 18.825 35.975 19.5 Z M 71.725 12.625 Q 71.725 11.95 72.025 11.212 Q 72.325 10.475 72.813 9.837 Q 73.3 9.2 73.875 8.875 Q 73.3 9.2 72.813 9.837 Q 72.325 10.475 72.025 11.212 Q 71.725 11.95 71.725 12.625 Z M 61.975 2.5 L 64.15 1.25 L 61.975 0 L 59.8 1.25 M 35.975 23 L 35.975 19.5 L 35.975 23 Z M 57.625 8.5 Q 57.625 7.5 56.975 7.125 Q 56.325 6.75 55.475 7.25 Q 56.325 6.75 56.975 7.125 M 23.625 24.375 Q 22.975 24 22.975 23 Q 22.975 24 23.625 24.375 Z M 36.625 24.375 Q 35.975 24 35.975 23 Q 35.975 24 36.625 24.375 Z M 61.975 7.5 Q 61.975 8.5 62.625 8.875 Q 61.975 8.5 61.975 7.5 Z M 70.2 24.75 Q 69.55 24.375 69.55 23.375 Q 69.55 24.375 70.2 24.75 Z M 87.525 24.375 Q 86.875 24 86.875 23 Q 86.875 24 87.525 24.375 Z M 100.525 24.375 Q 99.875 24 99.875 23 Q 99.875 24 100.525 24.375 Z M 119.375 19.25 Q 119.375 20.25 120.025 20.625 Q 119.375 20.25 119.375 19.25 Z M 113.525 24.375 Q 112.875 24 112.875 23 Q 112.875 24 113.525 24.375 Z M 126.525 24.375 Q 125.875 24 125.875 23 Q 125.875 24 126.525 24.375 Z M 128.05 16 Q 128.05 17 128.7 17.375 Q 128.05 17 128.05 16 Z"
                    vectorEffect="non-scaling-stroke"
                />
            </g>
        </svg>
    );
};
