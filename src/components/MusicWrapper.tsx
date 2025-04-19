"use client";
import MusicProvider from "./MusicContext";
import MiniPlayer from "./MiniPlayer";

export default function MusicWrapper() {
  return (
    <MusicProvider>
      <MiniPlayer />
    </MusicProvider>
  );
}
