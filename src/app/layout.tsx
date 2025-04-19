import "./globals.css";
import type { ReactNode } from "react";
import { Metadata } from "next";
import MusicProvider from "@/components/MusicContext";
import MiniPlayer from "@/components/MiniPlayer";

// Import the custom font from Google
import { Press_Start_2P } from "next/font/google";

// Initialize the font using next/font
const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
});

export const metadata: Metadata = {
  title: "Putri Alicia",
  description: "Web lucu penuh cinta untuk Putri Alicia 💖",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className={pressStart2P.className}>
        <MusicProvider>
          {children}
          <MiniPlayer />
        </MusicProvider>
      </body>
    </html>
  );
}
