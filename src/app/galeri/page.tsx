"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Image from "next/image";

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
        <Image
          src={images[loadingStep]}
          alt="Loading"
          width={parseInt(sizes[loadingStep])}
          height={parseInt(sizes[loadingStep])}
          style={{
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
      <div
        style={{
          backgroundColor: "#fce4ec",
          padding: "2rem",
          fontFamily: "'Press Start 2P', cursive",
          minHeight: "100vh",
        }}
      >
        <button
          onClick={() => router.push("/")}
          style={{
            backgroundColor: "#ff69b4",
            color: "white",
            padding: "0.75rem 1.5rem",
            fontFamily: "'Press Start 2P', cursive",
            fontSize: "0.7rem",
            border: "2px solid #000",
            boxShadow: "3px 3px 0 #000",
            cursor: "pointer",
            marginBottom: "2rem",
            transition: "transform 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          ⬅ Kembali ke Halaman Utama
        </button>

        {/* Grid Galeri */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
          }}
        >
          {galleryData.map((item, index) => (
            <div
              key={index}
              onClick={() => openLightbox(item)}
              style={{
                backgroundColor: "#fff0f5",
                border: "4px solid #ff69b4",
                boxShadow: "4px 4px 12px rgba(0,0,0,0.2)",
                borderRadius: "10px",
                cursor: "pointer",
                padding: "1rem",
                textAlign: "center",
                transition: "transform 0.3s ease-in-out",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <div style={{ width: "100%", aspectRatio: "1", position: "relative" }}>
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  style={{
                    objectFit: "cover",
                    border: "2px dashed #ff69b4",
                    imageRendering: "pixelated",
                    borderRadius: "8px",
                  }}
                />
              </div>
              <h3
                style={{
                  fontSize: "0.8rem",
                  marginTop: "0.5rem",
                  color: "#d81b60",
                  fontWeight: "bold",
                }}
              >
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {lightboxOpen && currentImage && (
          <div
            onClick={closeLightbox}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 100,
              padding: "1rem",
              opacity: lightboxOpen ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                width: "70%",
                backgroundColor: "#fff0f5",
                border: "4px solid #ff69b4",
                padding: "2rem",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)",
                animation: "fadeIn 0.5s ease-out",
                maxWidth: "90%",
              }}
            >
              <Image
                src={currentImage.src}
                alt={currentImage.title}
                width={500}
                height={350}
                style={{
                  objectFit: "contain",
                  borderRadius: "8px",
                  transition: "transform 0.5s ease-in-out",
                }}
              />
              <h3
                style={{
                  marginTop: "1rem",
                  fontSize: "1.2rem",
                  color: "#880e4f",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {currentImage.title}
              </h3>
              <p
                style={{
                  marginTop: "0.5rem",
                  fontSize: "0.9rem",
                  color: "#880e4f",
                  backgroundColor: "#ffe4ec",
                  padding: "1rem",
                  borderRadius: "8px",
                  textAlign: "center",
                  maxWidth: "80%",
                  lineHeight: "1.4",
                }}
              >
                {currentImage.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
