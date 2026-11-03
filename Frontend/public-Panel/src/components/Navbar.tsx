import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { college } from "../config/college";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Notices", "#notices"],
    ["Classes", "#classes"],
    ["Admissions", "#admissions"],
    ["Gallery", "#gallery"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="navbar">
      <a href="#home" className="brand">
        <div className="brand-logo">
          <GraduationCap size={27} />
        </div>

        <div>
          <h2>{college.shortName}</h2>
          <span>{college.name}</span>
        </div>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        {links.map(([label, href]) => (
          <a
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}

        <a
          href="#portals"
          className="nav-login"
          onClick={() => setMenuOpen(false)}
        >
          Login
        </a>
      </nav>
    </header>
  );
}