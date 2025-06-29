import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ksut Zeo",
  description: "I can't code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex justify-between">
          <h1 className="mt-5 ml-4 text-[30px] text-white drop-shadow-md font-sans">
            Ksut Zeo
          </h1>
          <h2 className="mt-5 mr-4 text-right text-[25px] text-white drop-shadow-md font-sans">
            I can't code.
          </h2>
        </header>
        {children}
      </body>
    </html>
  );
}
