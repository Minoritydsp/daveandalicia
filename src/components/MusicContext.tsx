"use client";
import { createContext, useContext, useState, useRef, useEffect, ReactNode } from "react";

// Define the types for the song and context value
interface Song {
  title: string;
  artist: string;
  file: string;
}

interface MusicContextType {
  isPlaying: boolean;
  currentSongIndex: number;
  togglePlay: () => void;
  nextSong: () => void;
  prevSong: () => void;
  songs: Song[];
}

const songs: Song[] = [
  { title: "Love, Wave to Earth", artist: "Wave to Earth", file: "/audio/love.mp3" },
  { title: "The Way You Look at Me", artist: "Nyoman Paul, Andi Rianto", file: "/audio/thewayyoulookatme.mp3" },
  { title: "Untukmu Aku Bertahan", artist: "Afgan", file: "/audio/untukmuakubertahan.mp3" },
  { title: "Everything", artist: "The Black Skirts", file: "/audio/everything.mp3" },
  { title: "Star", artist: "Colde", file: "/audio/star.mp3" },
];

// Create context with the correct type
const MusicContext = createContext<MusicContextType | null>(null);

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("useMusic must be used within a MusicProvider");
  }
  return context;
};

export default function MusicProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) audioRef.current.play();
      else audioRef.current.pause(); // Pause if isPlaying is false
    }
  }, [currentSongIndex, isPlaying]);  // Add isPlaying here  

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
