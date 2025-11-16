import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      padding: "20px",
      background: "#ffb6d9",
      borderBottom: "2px solidrgb(170, 39, 107)",
      fontFamily: "monospace",
      fontSize: "30px",
      justifyContent: "space-around"
    }}>
      <Link href="/">home </Link>
      <Link href="/gallery">gallery </Link>
      <Link href="/maps">maps </Link>
      <Link href="/itinerary">itinerary </Link>
    </nav>
  );
}