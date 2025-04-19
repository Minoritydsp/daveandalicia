"use client"
import { useState } from "react";

const images = [
  "/galeri/foto1.jpg",
  "/galeri/foto2.jpg",
  "/galeri/foto3.jpg"
];

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gap: "1rem",
        marginTop: "1rem"
      }}>
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Foto ${i+1}`}
            onClick={() => setSelected(src)}
            style={{
              width: "100%",
              borderRadius: "12px",
              cursor: "pointer",
              border: "2px solid #ffb6c1",
              transition: "transform 0.3s",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
            }}
          />
        ))}
      </div>

      {selected && (
        <div onClick={() => setSelected(null)} style={{
          position: "fixed",
          top: 0, left: 0,
          width: "100%", height: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
        }}>
          <img src={selected} alt="Preview" style={{
            maxWidth: "90%",
            maxHeight: "90%",
            borderRadius: "16px",
            border: "4px solid white"
          }} />
        </div>
      )}
    </div>
  )
}
