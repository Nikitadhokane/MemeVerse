import Link from "next/link";
import "../styles/navbar.css"; 

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/upload">Upload Meme</Link></li>
        <li><Link href="/explore">Explore</Link></li>
      </ul>
    </nav>
  );
}
