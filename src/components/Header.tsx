import Link from "next/link";

export default function Header() {
  return (
    <header style={{
      backgroundColor: "#ffb6c1",
      padding: "1rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      <h2 style={{ margin: 0 }}>💖 Alicia & Dave</h2>
      <nav>
        <Link href="/" style={{ margin: "0 1rem" }}>Home</Link>
        <Link href="/galeri" style={{ margin: "0 1rem" }}>Galeri</Link>
      </nav>
    </header>
  )
}
