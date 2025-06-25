import Script from "next/script";

export default function Lab() {
  return (
    <div className="relative min-h-screen bg-black text-white p-4">
      <h1 className="text-2xl font-bold z-10 relative">🎨 Dev Lab</h1>
      <p className="text-gray-400">This is your playground. Go wild with p5.js.</p>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js" strategy="lazyOnload" />
      <Script id="p5-sketch" strategy="lazyOnload">
        {`
          function setup() {
            createCanvas(window.innerWidth, window.innerHeight);
            background(0);
          }

          function draw() {
            fill(255, 0, 255);
            ellipse(mouseX, mouseY, 20, 20);
          }
        `}
      </Script>
    </div>
  );
}
