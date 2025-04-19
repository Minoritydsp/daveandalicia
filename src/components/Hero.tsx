import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        backgroundColor: "#ffe6f0",
        padding: "4rem 2rem",
        textAlign: "center",
        borderRadius: "0 0 40px 40px",
        position: "relative",
      }}
    >
      <div style={{ position: "relative", display: "inline-block" }}>
        {/* ❤️ Love floating */}
        <span
          style={{
            position: "absolute",
            top: "-30px",
            left: "-20px",
            fontSize: "2rem",
            animation: "floatLove 3s infinite ease-in-out",
          }}
        >
          ❤️
        </span>

        {/* 🧸 Boneka */}
        <span
          style={{
            position: "absolute",
            bottom: "-30px",
            right: "-20px",
            fontSize: "2.2rem",
            animation: "floatBear 4s infinite ease-in-out",
          }}
        >
          🧸
        </span>

        {/* Foto Bulat menggunakan Image Next.js */}
        <Image
          src="/galeri/foto-alicia.jpg"
          alt="Putri Alicia"
          className="jelly"
          width={180} // Ukuran gambar 180px
          height={180} // Ukuran gambar 180px
          style={{
            borderRadius: "50%",
            border: "5px solid #ffb6c1",
            objectFit: "cover",
            boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
          }}
        />
      </div>

      <h1 style={{ fontSize: "2.5rem", margin: "1rem 0 0.5rem" }}>
        Haii Putri Alicia
      </h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>
        Selamat datang di webku yang lucu kayak kamu! liat liat galerinya yuk, kamu bisa puter musik favoritmu juga lohh !! 💘
      </p>

      {/* Tombol Lihat Galeri */}
      <div style={{ marginTop: "1.5rem" }}>
        <Link
          href="/galeri"
          className="jelly"
          style={{
            display: "inline-block",
            padding: "0.8rem 1.5rem",
            backgroundColor: "#ff69b4",
            color: "#fff",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "bold",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        >
          Lihat Galeri 📸
        </Link>
      </div>
    </section>
  );
}
