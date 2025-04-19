// components/MusicContext.tsx
"use client";
import { createContext, useContext, useState, useRef, useEffect, ReactNode } from "react";

const songs = [
  { title: "Love, Wave to Earth", artist: "Wave to Earth", file: "/audio/love.mp3" },
  { title: "The Way You Look at Me", artist: "Nyoman Paul, Andi Rianto", file: "/audio/thewayyoulookatme.mp3" },
  { title: "Untukmu Aku Bertahan", artist: "Afgan", file: "/audio/untukmuakubertahan.mp3" },
  { title: "Everything", artist: "The Black Skirts", file: "/audio/everything.mp3" },
  { title: "Star", artist: "Colde", file: "/audio/star.mp3" },
];

const MusicContext = createContext<any>(null);

export const useMusic = () => useContext(MusicContext);

export default function MusicProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) audioRef.current.play();
    }
  }, [currentSongIndex]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => setCurrentSongIndex((i) => (i + 1) % songs.length);
  const prevSong = () => setCurrentSongIndex((i) => (i - 1 + songs.length) % songs.length);

  return (
    <MusicContext.Provider value={{ isPlaying, currentSongIndex, togglePlay, nextSong, prevSong, songs }}>
      {children}
      <audio ref={audioRef} src={songs[currentSongIndex].file} />
    </MusicContext.Provider>
  );
}
