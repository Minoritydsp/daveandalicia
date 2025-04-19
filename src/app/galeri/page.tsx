"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";

// Define types for gallery item
interface GalleryItem {
  src: string;
  title: string;
  description: string;
}

const galleryData: GalleryItem[] = [
  {
    src: "/galeri/1.jpg",
    title: "Video Call Pertama",
    description: "Pertama kali video call sama kamu. aku kaget! Kukira kamu pemalu, ternyata kamu suka cerita dan ekspresif banget 🥹💕",
  },
  {
    src: "/galeri/2.jpg",
    title: "Gambar Pertama Kita",
    description: "Baru kali ini ada seseorang yang tiba-tiba ngegambar kita berdua, kamu nibanin aku di gambar itu! Aku langsung ngerasa istimewa 🥰",
  },
  {
    src: "/galeri/3.jpg",
    title: "Pertemuan Pertama",
    description: "Hari pertama kita ketemu aku gugup banget. Tapi semua terbayar waktu kamu bilang ‘iya’ jadi pacarku 💖",
  },
  {
    src: "/galeri/4.jpg",
    title: "Cafe Date",
    description: "Kita cuma nugas bareng di kafe, tapi rasanya deket banget. dan dunia kayak berhenti sebentar waktu pertama kali kamu peluk aku di motor 🍃",
  },
  {
    src: "/galeri/6.jpg",
    title: "Mulai Suka Foto",
    description: "Katanya kamu nggak suka foto, tapi karena sering kuajak. kamu mulai suka foto bareng aku 📸✨",
  },
  {
    src: "/galeri/5.jpg",
    title: "Sushi Date",
    description: "Makan sushi bareng kamu. emang boleh sedeket ini? Takut dighibahin ibu ibu ah 😝🍣",
  },
  {
    src: "/galeri/12.jpg",
    title: "Jemput Cia di Cikarang",
    description: "Pertama kali jemput kamu, pulangnya kita kehujanan. Tapi kita tetap makan McD di Bekasi. lengkap rasanya ☔🍔",
  },
  {
    src: "/galeri/13.jpg",
    title: "Bakar2 Bareng Keluarga",
    description: "Kamu bareng keluargaku bakar-bakaran. dan hari itu kamu juga masakin aku untuk pertama kalinya 🍢💞",
  },
  {
    src: "/galeri/7.jpg",
    title: "Jalan Jauh ke PIK",
    description: "Jalan jauh ke PIK bareng kamu, naik mobil sendiri. rasanya kayak berpetualang ke tempat baru bareng kamu 😆💨",
  },
  {
    src: "/galeri/8.jpg",
    title: "Langit & Kamu",
    description: "Aku bingung mana yang lebih cantik. langitnya atau kamu? Tapi aku tahu, hatiku udah milih kamu 🌅💓",
  },
  {
    src: "/galeri/9.jpg",
    title: "Lari Pagi Bareng",
    description: "Olahraga bareng kamu meski sekali aja. tapi cukup bikin jantungku lari lebih kencang dari biasanya 🏃‍♂️❤️",
  },
  {
    src: "/galeri/14.jpg",
    title: "Stress Relief Kaleyo",
    description: "Hari penuh stress semua orang full makan di resto, ketemu bebek kaleyo dan senyumanmu 🍽️🫶",
  },
  {
    src: "/galeri/10.jpg",
    title: "Dessert Manis & Kamu",
    description: "Nyoba makanan fancy bareng kamu tapi yang paling manis tetap kamu. Bingung pilih dessert atau pipimu 🍓😚",
  },
  {
    src: "/galeri/11.jpg",
    title: "Photobooth Bucin",
    description: "photobooth babyyyy akhirnyaaa 🎞️💞",
  },
  {
    src: "/galeri/15.jpg",
    title: "Hari Terakhir Sebelum Jogja",
    description: "Hari terakhir ketemu sebelum aku ke Jogja. Kita ke gereja bareng, dan aku menyimpan semua momen hari itu sebelum ditukar dengan rindu 🙏😢",
  },
  {
    src: "/galeri/16.jpg",
    title: "Masakan Cinta",
    description: "pelukan dalam bentuk makanan 🍛💗",
  },
];

export default function GaleriPage() {
  const [loadingStep, setLoadingStep] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<GalleryItem | null>(null);
  const router = useRouter();

  // Handle loading animation steps
  useEffect(() => {
    const steps = [1000, 1000, 1000, 1300];
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      if (currentStep >= steps.length) {
        clearInterval(interval);
        setLoadingStep(steps.length);
      } else {
        setLoadingStep(currentStep);
      }
    }, steps[currentStep]);

    return () => clearInterval(interval);
  }, []);

  const openLightbox = (image: GalleryItem) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  if (loadingStep < 4) {
    const images = [
      "/galeri/Dave.png",
      "/galeri/DaveLove.png",
      "/galeri/ciaakk.png",
      "/galeri/ciaakkLove.png",
    ];
    const rotations = ["-3deg", "3deg", "0deg", "0deg"];
    const sizes = ["220px", "240px", "260px", "280px"];
    const scale = loadingStep === 3 ? "scale(1.15)" : "scale(1)";

    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffb6c1",
          overflow: "hidden",
        }}
      >
        <img
          src={images[loadingStep]}
          alt="Loading"
          style={{
            width: sizes[loadingStep],
            transform: `${scale} rotate(${rotations[loadingStep]})`,
            transition: "all 0.6s ease",
            filter: "drop-shadow(0 0 0 white) drop-shadow(0 0 8px white)",
            clipPath:
              "polygon(6% 2%, 94% 0%, 100% 15%, 98% 30%, 100% 60%, 96% 82%, 85% 98%, 50% 94%, 20% 100%, 5% 85%, 0% 60%, 2% 30%, 0% 10%)",
            objectFit: "cover",
          }}
        />
      </div>
    );
  }

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Head>

      <div
        style={{
          backgroundColor: "#fce4ec",
          padding: "2rem",
          fontFamily: "'Press Start 2P', cursive",
          minHeight: "100vh",
        }}
      >
        {/* Tombol Kembali */}
        <button
          onClick={() => router.push("/")}
          style={{
            backgroundColor: "#ff69b4",
            color: "white",
            padding: "0.5rem 1rem",
            fontFamily: "'Press Start 2P', cursive",
            fontSize: "0.5rem",
            border: "2px solid #000",
            boxShadow: "3px 3px 0 #000",
            cursor: "pointer",
            marginBottom: "1.5rem",
          }}
        >
          ⬅ Kembali ke Halaman Utama
        </button>

        {/* Gallery Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {galleryData.map((item, index) => (
            <div
              key={index}
              onClick={() => openLightbox(item)}
              style={{
                backgroundColor: "#fff0f5",
                border: "4px solid #ff69b4",
                boxShadow: "4px 4px 0 #000",
                borderRadius: "4px",
                cursor: "pointer",
                padding: "0.5rem",
                textAlign: "center",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <img
                src={item.src}
                alt={item.title}
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                  border: "2px dashed #ff69b4",
                  imageRendering: "pixelated",
                }}
              />
              <h3
                style={{
                  fontSize: "0.6rem",
                  marginTop: "0.5rem",
                  color: "#d81b60",
                }}
              >
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxOpen && currentImage && (
          <div
            onClick={closeLightbox}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
              fontFamily: "'Press Start 2P', cursive",
            }}
          >
            <div
              style={{
                maxWidth: "80%",
                backgroundColor: "#fff0f5",
                padding: "1rem",
                border: "4px solid #ff69b4",
                boxShadow: "6px 6px 0 #000",
                borderRadius: "4px",
                textAlign: "center",
              }}
            >
              <img
                src={currentImage.src}
                alt={currentImage.title}
                style={{
                  width: "50vw",
                  height: "auto",
                  maxHeight: "60vh",
                  objectFit: "contain",
                  imageRendering: "pixelated",
                  border: "2px dashed #d81b60",
                }}
              />
              <h2
                style={{
                  fontSize: "1rem",
                  color: "#d81b60",
                  margin: "1rem 0",
                }}
              >
                {currentImage.title}
              </h2>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#880e4f",
                  marginBottom: "1rem",
                }}
              >
                {currentImage.description}
              </p>
              <button
                onClick={closeLightbox}
                style={{
                  marginTop: "1rem",
                  backgroundColor: "#ff69b4",
                  border: "none",
                  padding: "0.5rem 1rem",
                  color: "#fff",
                  fontSize: "0.6rem",
                  cursor: "pointer",
                  boxShadow: "2px 2px 0 #000",
                }}
              >
                Tutup
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
