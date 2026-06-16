import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaWhatsapp, FaChevronRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/courses", label: "Courses" },
  { to: "/contact", label: "Contact Us" },
];

const socialLinks = [
  {
    icon: <FaFacebookF size={14} />,
    href: "https://www.facebook.com/knowledgeandkarma",
    bg: "#1877F2",
    label: "Facebook",
  },
  {
    icon: <FaInstagram size={14} />,
    href: "https://www.instagram.com/withpavanbhattad/",
    bg: "radial-gradient(circle at 30% 110%, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    label: "Instagram",
  },
  {
    icon: <FaXTwitter size={14} />,
    href: "https://x.com/pavanbhattad",
    bg: "#000000",
    label: "X (Twitter)",
  },
  {
    icon: <FaYoutube size={14} />,
    href: "https://www.youtube.com/@withpavanbhattad",
    bg: "#FF0000",
    label: "YouTube",
  },
  {
    icon: <FaLinkedinIn size={14} />,
    href: "https://www.linkedin.com/in/pavanbhattad/",
    bg: "#0A66C2",
    label: "LinkedIn",
  },
];

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#0d1b3e" }} className="text-white w-full">
      {/* Main Footer Grid */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-3">
            <Link to="/" className="no-underline">
              <div className="flex flex-col leading-tight">
                <span
                  className="font-extrabold italic text-xl tracking-wide"
                  style={{ color: "#4d7cfe", fontFamily: "Georgia, serif" }}
                >
                  KNOWLEDGE
                </span>
                <span
                  className="font-extrabold italic text-xl tracking-wide text-center"
                  style={{ color: "#e91e8c", fontFamily: "Georgia, serif" }}
                >
                  & KARMA
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-300 mt-1 leading-relaxed">
              Learn, Grow, Evolve, Liberate.
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold text-white mb-2">Quick Links</h3>
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className="text-sm text-gray-300 hover:text-white transition-colors duration-200 w-fit"
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Col 3 — Connect With Us */}
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-semibold text-white mb-2">Connect With Us</h3>
            <div className="flex items-center gap-3 flex-wrap">
              {socialLinks.map(({ icon, href, bg, label }) => (
                
              <a    key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: bg }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 4 — Stay Connected */}
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-semibold text-white mb-1">Stay Connected</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Join our WhatsApp group for updates, free resources and live session alerts.
            </p>
        <a    
              href="https://wa.me/919552782037"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-2 text-white text-sm font-semibold px-4 py-2.5 rounded-md border border-green-500 hover:bg-green-500 transition-colors duration-200 w-fit"
              style={{ borderColor: "#25d366" }}
            >
              <FaWhatsapp size={18} style={{ color: "#25d366" }} />
              Join WhatsApp
              <FaChevronRight size={12} />
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="w-full border-t text-center py-4 px-6"
        style={{ borderColor: "#1e2f5a" }}
      >
        <p className="text-sm text-gray-400">
          © 2026 Pavan Bhattad. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;