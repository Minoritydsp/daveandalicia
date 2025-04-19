import "./globals.css";
import type { ReactNode } from "react";
import { Metadata } from "next";
import MusicProvider from "@/components/MusicContext";
import MiniPlayer from "@/components/MiniPlayer";

export const metadata: Metadata = {
  title: "Putri Alicia",
  description: "Web lucu penuh cinta untuk Putri Alicia 💖",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>
        <MusicProvider>
          {children}
          <MiniPlayer />
        </MusicProvider>
      </body>
    </html>
  );
}
