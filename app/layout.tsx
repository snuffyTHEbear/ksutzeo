import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Logo } from "@/components/KsutZeoLogo";
import { SubHeaderLogo } from "@/components/SubHeaderLogo";

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
            <Logo variant={"gradient"} className="mt-5"/>
            <SubHeaderLogo variant={"gradient"} className="mt-2" />
        {children}
      </body>
    </html>
  );
}
