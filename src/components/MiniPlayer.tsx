"use client";
import { useEffect, useRef, useState } from "react";
import { useMusic } from "./MusicContext";
import {
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
  FaTimes,
  FaMusic,
  FaWindowMinimize,
} from "react-icons/fa";

export default function MiniPlayer() {
  const {
    isPlaying,
    currentSongIndex,
    togglePlay,
    nextSong,
    prevSong,
    songs,
  } = useMusic();

  const playerRef = useRef<HTMLDivElement>(null);
  const [minimized, setMinimized] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateInitialPosition = () => {
      const playerWidth = 280;
      const playerHeight = 120;
      setPos({
        x: window.innerWidth - playerWidth - 20,
        y: window.innerHeight - playerHeight - 20,
      });
    };

    updateInitialPosition();
    window.addEventListener("resize", updateInitialPosition);
    return () => window.removeEventListener("resize", updateInitialPosition);
  }, []);

  const handleDrag = (e: MouseEvent) => {
    setPos({
      x: e.clientX - 100,
      y: e.clientY - 25,
    });
  };

  // Tidak render jika belum dimulai dan tidak sedang bermain
  if (!hasStarted && !isPlaying) return null;

  return (
    <>
      {minimized ? (
        <div
          onClick={() => setMinimized(false)}
          style={{
            position: "fixed",
            left: pos.x,
            top: pos.y,
            width: "50px",
            height: "50px",
            backgroundColor: "#ff69b4",
            borderRadius: "50%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            transition: "all 0.3s ease",
            animation: "jelly 0.6s ease",
          }}
        >
          <FaMusic color="white" size={24} />
        </div>
      ) : (
        <div
          ref={playerRef}
          onMouseDown={() => {
            const onMove = (eMove: MouseEvent) => handleDrag(eMove);
            const onUp = () => {
              document.removeEventListener("mousemove", onMove);
              document.removeEventListener("mouseup", onUp);
            };
            document.addEventListener("mousemove", onMove);
            document.addEventListener("mouseup", onUp);
          }}
          style={{
            position: "fixed",
            left: pos.x,
            top: pos.y,
            background: "#fff",
            border: "2px solid #ff69b4",
            borderRadius: "12px",
            zIndex: 9999,
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            cursor: "move",
            minWidth: "250px",
            transition: "all 0.3s ease",
            animation: "jelly 0.6s ease",
            userSelect: "none",
            padding: 0,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              backgroundColor: "#ff69b4",
              padding: "8px 12px",
              width: "100%",
              color: "white",
              fontSize: "1rem",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              gap: "0.5rem",
            }}
          >
            <button
              onClick={() => setMinimized(true)}
              style={{
                background: "none",
                border: "none",
                color: "white",
                cursor: "pointer",
              }}
            >
              <FaWindowMinimize />
            </button>
            <button
              onClick={() => setHasStarted(false)}
              style={{
                background: "none",
                border: "none",
                color: "white",
                cursor: "pointer",
              }}
            >
              <FaTimes />
            </button>
          </div>

          <div style={{ padding: "0.8rem 1rem" }}>
            <div
              style={{
                fontSize: "0.9rem",
                color: "#ff69b4",
                fontWeight: "bold",
                marginTop: "0.5rem",
              }}
            >
              {songs[currentSongIndex].title}
            </div>
            <div
              style={{
                fontSize: "0.8rem",
                color: "#777",
                marginBottom: "0.5rem",
              }}
            >
              {songs[currentSongIndex].artist}
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button onClick={prevSong}><FaBackward /></button>
              <button onClick={() => { togglePlay(); setHasStarted(true); }}>
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <button onClick={nextSong}><FaForward /></button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes jelly {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.1, 0.9); }
          50% { transform: scale(0.9, 1.1); }
          75% { transform: scale(1.05, 0.95); }
        }

        button:hover,
        div:hover {
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
}
