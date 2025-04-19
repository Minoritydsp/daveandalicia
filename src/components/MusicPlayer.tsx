"use client";
import { useMusic } from "./MusicContext";
import { FaPlay, FaPause, FaBackward, FaForward } from "react-icons/fa";
import Image from "next/image"; // Import komponen Image dari Next.js

export default function MusicPlayer() {
  const { isPlaying, currentSongIndex, togglePlay, nextSong, prevSong, songs } = useMusic();

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ color: "#ff69b4", fontSize: "24px" }}>{songs[currentSongIndex].title}</h2>
      <h3 style={{ color: "#555", fontSize: "18px" }}>{songs[currentSongIndex].artist}</h3>

      <div style={{ marginTop: "1rem" }}>
        {/* Mengganti <img> menjadi <Image> dari Next.js */}
        <Image
          src="/galeri/vinyl.png"
          alt="Vinyl"
          width={150} // Ukuran gambar 150px
          height={150} // Ukuran gambar 150px
          style={{
            borderRadius: "50%",
            animation: isPlaying ? "spin 4s linear infinite" : "none",
            objectFit: "cover", // Menghindari distorsi gambar
          }}
        />
      </div>

      <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
        <button onClick={prevSong} className="jelly-button">
          <FaBackward size={24} />
        </button>
        <button onClick={togglePlay} className="jelly-button">
          {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
        </button>
        <button onClick={nextSong} className="jelly-button">
          <FaForward size={24} />
        </button>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .jelly-button {
          padding: 1rem;
          background-color: #ff69b4;
          color: white;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          font-size: 18px;
          transition: transform 0.2s ease, background-color 0.3s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .jelly-button:hover {
          transform: scale(1.2);
          background-color: #ff85c1;
        }

        .jelly-button:active {
          animation: jelly 0.3s ease-out;
        }

        @keyframes jelly {
          0%, 100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.2, 0.9);
          }
          50% {
            transform: scale(0.9, 1.2);
          }
          75% {
            transform: scale(1.1, 0.95);
          }
        }
      `}</style>
    </div>
  );
}
