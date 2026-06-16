import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

const Logo = () => (
  <Link to="/" className="no-underline flex-shrink-0">
    <div className="flex flex-col leading-tight">
      <span
        className="font-extrabold italic tracking-wide text-lg"
        style={{ color: "#1a3aad", fontFamily: "Georgia, serif" }}
      >
        KNOWLEDGE
      </span>
      <span
        className="font-extrabold italic tracking-wide text-lg text-center"
        style={{ color: "#c0176e", fontFamily: "Georgia, serif" }}
      >
        & KARMA
      </span>
    </div>
  </Link>
);

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/courses", label: "Courses" },
  { to: "/contact", label: "Contact Us" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const desktopLinkClass = ({ isActive }) =>
    isActive
      ? "text-sm font-semibold whitespace-nowrap pb-1 border-b-2 transition-colors duration-200"
      : "text-sm font-medium text-gray-700 whitespace-nowrap pb-1 border-b-2 border-transparent hover:text-blue-700 transition-colors duration-200";

  const desktopLinkStyle = ({ isActive }) =>
    isActive ? { color: "#1a3aad", borderColor: "#1a3aad" } : {};

  const mobileLinkClass = ({ isActive }) =>
    isActive
      ? "block py-2.5 text-sm font-semibold border-b border-gray-100"
      : "block py-2.5 text-sm font-medium text-gray-700 border-b border-gray-100 hover:text-blue-700 transition-colors duration-200";

  const mobileLinkStyle = ({ isActive }) =>
    isActive ? { color: "#1a3aad" } : {};

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 w-full">
      {/* Desktop / Tablet Bar */}
      <div className="max-w-6xl mx-auto px-6 h-[70px] flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={desktopLinkClass}
              style={desktopLinkStyle}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop WhatsApp Button */}
        <a
          href="https://wa.me/919552782037"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 text-white text-sm font-semibold px-4 py-2.5 rounded-md flex-shrink-0 transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
          style={{ backgroundColor: "#1a3aad" }}
        >
          <FaWhatsapp size={18} />
          Join WhatsApp Group
        </a>

        {/* Hamburger — Mobile only */}
        <button
          className="md:hidden p-1 bg-transparent border-none cursor-pointer"
          style={{ color: "#1a3aad" }}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md px-6 pt-4 pb-5 flex flex-col gap-0">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={mobileLinkClass}
              style={mobileLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <a
            href="https://wa.me/919552782037"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 text-white text-sm font-semibold px-4 py-3 rounded-md transition-opacity duration-200 hover:opacity-90"
            style={{ backgroundColor: "#1a3aad" }}
          >
            <FaWhatsapp size={18} />
            Join WhatsApp Group
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;