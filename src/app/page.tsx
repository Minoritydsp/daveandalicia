import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MusicPlayer from "@/components/MusicPlayer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      <main style={{ textAlign: "center", marginTop: "2rem" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            color: "#ff69b4",
            animation: "jelly 1s ease",
          }}
        >
          🎵 Putar Musik Disini !!
        </h2>

        <div style={{ marginTop: "1rem" }}>
          <MusicPlayer />
        </div>
      </main>

      <Footer />
    </>
  );
}
