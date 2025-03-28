import type { Metadata } from "next";
import { Kavivanar } from 'next/font/google'
import "./globals.css";
import LenisSmoothScroll from "@/components/LenisSmoothScroll";
import Header from "@/components/header/Header";

const kavivanar = Kavivanar({
  weight: '400',
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Deb Rajbanshi",
    template: "%s - Deb Rajbanshi"
  },
  description: "Portfolio of Deb Rajbanshi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kavivanar.className} antialiased overflow-x-hidden`}
      >
        <LenisSmoothScroll>
          <Header />
          {children}
        </LenisSmoothScroll>
      </body>
    </html>
  );
}
