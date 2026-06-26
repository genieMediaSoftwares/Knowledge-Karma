import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

const Logo = () => (
  <Link to="/" className="no-underline flex-shrink-0 flex items-center select-none">
    <img
      src="https://s3.us-east-1.amazonaws.com/contents.newzenler.com/33830/library/6a27bc31130b3_1780988977_knklogoonwhite-large-3100-1.png"
      alt="Knowledge & Karma"
      className="h-10 sm:h-12 w-auto object-contain"
    />
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
    `font-heading text-sm font-semibold whitespace-nowrap pb-1 border-b-2 transition-all duration-200 ${
      isActive
        ? "text-accent border-accent"
        : "text-black border-transparent hover:text-accent"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block py-2.5 font-heading text-base font-medium transition-all duration-200 ${
      isActive ? "text-accent" : "text-black hover:text-accent"
    }`;

  return (
    <header
      className="bg-white sticky top-0 z-50 w-full"
      style={{ borderBottom: "1px solid rgba(13,31,60,0.06)", boxShadow: "0 2px 10px rgba(13,31,60,0.02)" }}
    >
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
          className="hidden md:flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-md flex-shrink-0 transition-all duration-200 hover:-translate-y-0.5 bg-whatsapp hover:bg-[#1ebd5b] shadow-md hover:shadow-lg"
        >
          <FaWhatsapp size={18} />
          Join WhatsApp Group
        </a>

        {/* Hamburger — Mobile only */}
        <button
          className="md:hidden p-1 bg-transparent border-none cursor-pointer focus:outline-none active:outline-none"
          style={{ color: "#0D1F3C" }}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className="md:hidden bg-white shadow-lg px-6 pt-2 pb-6 flex flex-col gap-1 border-t border-black/5"
        >
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={mobileLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <a
            href="https://wa.me/919552782037"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 text-white text-sm font-semibold px-4 py-3 rounded-md transition-all duration-200 bg-whatsapp hover:bg-[#1ebd5b] shadow-md"
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