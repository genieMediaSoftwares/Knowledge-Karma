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
    label: "Facebook",
    bgStyle: { backgroundColor: "#1877F2" },
  },
  {
    icon: <FaInstagram size={14} />,
    href: "https://www.instagram.com/withpavanbhattad/",
    label: "Instagram",
    bgStyle: { background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" },
  },
  {
    icon: <FaXTwitter size={14} />,
    href: "https://x.com/pavanbhattad",
    label: "X (Twitter)",
    bgStyle: { backgroundColor: "#000000" },
  },
  {
    icon: <FaYoutube size={14} />,
    href: "https://www.youtube.com/@withpavanbhattad",
    label: "YouTube",
    bgStyle: { backgroundColor: "#FF0000" },
  },
  {
    icon: <FaLinkedinIn size={14} />,
    href: "https://www.linkedin.com/in/pavanbhattad/",
    label: "LinkedIn",
    bgStyle: { backgroundColor: "#0077B5" },
  },
];

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#0D1F3C" }} className="text-white w-full">
      {/* Main Footer Grid */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 text-left">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-3">
            <Link to="/" className="no-underline flex-shrink-0 flex items-center select-none w-fit">
              <img
                src="https://s3.us-east-1.amazonaws.com/contents.newzenler.com/33830/library/6a27bc31130b3_1780988977_knklogoonwhite-large-3100-1.png"
                alt="Knowledge & Karma"
                className="h-10 sm:h-12 w-auto object-contain bg-white rounded-lg p-2"
              />
            </Link>
            <p className="text-sm text-white/70 mt-1 leading-relaxed">
              Learn, Grow, Evolve, Liberate.
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-heading font-bold text-white mb-3">Quick Links</h3>
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className="text-sm text-white/70 hover:text-white transition-colors duration-200 w-fit"
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Col 3 — Connect With Us */}
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-heading font-bold text-white mb-3">Connect With Us</h3>
            <div className="flex items-center gap-3 flex-wrap">
              {socialLinks.map(({ icon, href, label, bgStyle }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  style={bgStyle}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 4 — Stay Connected */}
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-heading font-bold text-white mb-2">Stay Connected</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Join our WhatsApp group for updates, free resources and live session alerts.
            </p>
            <a
              href="https://wa.me/919552782037"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-2 text-whatsapp border border-whatsapp hover:bg-whatsapp hover:text-white text-sm font-semibold px-4 py-2 rounded-md transition-all duration-200 w-fit"
            >
              <FaWhatsapp size={18} />
              Join WhatsApp
              <FaChevronRight size={12} />
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="w-full border-t py-6 px-6"
        style={{ borderColor: "rgba(255,255,255,0.1)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-sm text-white/60">
          <div>
            <p>© 2026 Pavan Bhattad. All Rights Reserved.</p>
            <p className="text-xs text-white/40 mt-1">
              Powered by: <a href="https://kkdigitalgrowth.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 font-semibold text-white/50 underline decoration-white/20 underline-offset-2">KK Digital Growth</a>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-medium">
            <Link to="/privacy-policy" className="hover:text-white transition-colors duration-200 no-underline">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors duration-200 no-underline">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;