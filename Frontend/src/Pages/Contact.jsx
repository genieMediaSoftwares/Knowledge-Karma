import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  ChevronRight,
  Briefcase,
  Handshake,
  CalendarClock,
  BookOpen,
  Monitor,
  CheckCircle2,
  X,
  Building2,
  Mic,
} from "lucide-react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

/* ─────────────── CONSTANTS ─────────────── */
const WHATSAPP_NUMBER = "919665022037";
const EMAIL = "pavan@knowledgeandkarma.com";

/* ─────────────── DATA ─────────────── */
const INTENT_TABS = [
  "General",
  "Course query",
  "Corporate training",
  "Speaking invite",
  "Collaboration",
];

const connectCards = [
  {
    icon: <FaWhatsapp size={24} />,
    title: "WhatsApp",
    desc: "Quickest way to get answers. Usually responds within the hour.",
    btnLabel: "Chat now",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    bgStyle: { backgroundColor: "rgba(37, 211, 102, 0.12)", border: "1.5px solid rgba(37, 211, 102, 0.3)", color: "#25D366" },
  },
  {
    icon: <Mail size={24} />,
    title: "Email",
    desc: "Drop us an email. We reply within 24 hours on weekdays.",
    btnLabel: "Send email",
    href: `mailto:${EMAIL}`,
    bgStyle: { backgroundColor: "rgba(29, 75, 201, 0.15)", border: "1.5px solid rgba(29, 75, 201, 0.3)", color: "#5483FF" },
  },
  {
    icon: <Building2 size={24} />,
    title: "Corporate Training",
    desc: "Tailored programs for teams, leadership and organizations.",
    btnLabel: "Know more",
    href: `mailto:${EMAIL}?subject=Corporate Training Enquiry`,
    bgStyle: { backgroundColor: "rgba(245, 158, 11, 0.12)", border: "1.5px solid rgba(245, 158, 11, 0.3)", color: "#FBBF24" },
  },
  {
    icon: <Handshake size={24} />,
    title: "Collaborations",
    desc: "Open to meaningful partnerships with aligned creators and brands.",
    btnLabel: "Let's talk",
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'd like to discuss a collaboration.`,
    bgStyle: { backgroundColor: "rgba(236, 72, 153, 0.12)", border: "1.5px solid rgba(236, 72, 153, 0.3)", color: "#F472B6" },
  },
  {
    icon: <Mic size={24} />,
    title: "Speaking Events",
    desc: "Invite Pavan Bhattad to speak at your event or conference.",
    btnLabel: "Invite now",
    href: `mailto:${EMAIL}?subject=Speaking Event Invitation`,
    bgStyle: { backgroundColor: "rgba(139, 92, 246, 0.12)", border: "1.5px solid rgba(139, 92, 246, 0.3)", color: "#A78BFA" },
  },
];

const socials = [
  {
    icon: <FaFacebookF size={20} />,
    label: "Facebook",
    href: "https://www.facebook.com/knowledgeandkarma",
    bgStyle: { backgroundColor: "#1877F2" },
  },
  {
    icon: <FaInstagram size={20} />,
    label: "Instagram",
    href: "https://www.instagram.com/withpavanbhattad/",
    bgStyle: { background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" },
  },
  {
    icon: <FaXTwitter size={20} />,
    label: "X",
    href: "https://x.com/pavanbhattad",
    bgStyle: { backgroundColor: "#000000" },
  },
  {
    icon: <FaYoutube size={20} />,
    label: "YouTube",
    href: "https://www.youtube.com/@withpavanbhattad",
    bgStyle: { backgroundColor: "#FF0000" },
  },
  {
    icon: <FaLinkedinIn size={20} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pavanbhattad/",
    bgStyle: { backgroundColor: "#0077B5" },
  },
];

const programs = [
  {
    icon: <BookOpen size={18} />,
    title: "Workshops",
    desc: "Interactive workshops for schools, colleges and organizations.",
    bgStyle: { backgroundColor: "rgba(245, 158, 11, 0.08)", border: "1.5px solid rgba(245, 158, 11, 0.2)", color: "#FBBF24" },
  },
  {
    icon: <Briefcase size={18} />,
    title: "Corporate training",
    desc: "Customized programs to enhance productivity, communication and leadership.",
    bgStyle: { backgroundColor: "rgba(16, 185, 129, 0.08)", border: "1.5px solid rgba(16, 185, 129, 0.2)", color: "#10B981" },
  },
  {
    icon: <Monitor size={18} />,
    title: "Online programs",
    desc: "Live sessions, courses and resources accessible from anywhere.",
    bgStyle: { backgroundColor: "rgba(29, 75, 201, 0.08)", border: "1.5px solid rgba(29, 75, 201, 0.2)", color: "#1D4BC9" },
  },
];

/* ─────────────── TOAST ─────────────── */
const Toast = ({ show, onClose }) => (
  <div
    className={`fixed top-5 right-5 z-50 flex items-center gap-3 px-5 py-4 rounded-xl shadow-2xl text-white text-sm font-semibold min-w-72 transition-all duration-300 ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"
      }`}
    style={{ backgroundColor: "#0D1F3C" }}
  >
    <CheckCircle2 size={18} />
    Message sent! We'll get back to you soon.
    <button onClick={onClose} className="ml-auto">
      <X size={16} />
    </button>
  </div>
);

/* ─────────────── FIELD WRAPPER ─────────────── */
const Field = ({ label, icon, ...props }) => (
  <div className="flex flex-col gap-1.5 w-full">
    <label className="text-[11px] font-heading font-semibold uppercase tracking-wider text-gray-500">
      {label}
    </label>
    <div className="relative">
      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
        {icon}
      </span>
      <input
        {...props}
        className="w-full pl-10 pr-4 py-3 rounded-xl text-sm text-[#0D1F3C] placeholder-gray-400 bg-gray-50 border border-gray-200 outline-none transition-all duration-200 focus:border-accent focus:ring-2 focus:ring-accent/30 font-sans"
      />
    </div>
  </div>
);

const TextareaField = ({ label, icon, ...props }) => (
  <div className="flex flex-col gap-1.5 w-full">
    <label className="text-[11px] font-heading font-semibold uppercase tracking-wider text-gray-500">
      {label}
    </label>
    <div className="relative">
      <span className="absolute left-3.5 top-3.5 text-gray-400 pointer-events-none">
        {icon}
      </span>
      <textarea
        {...props}
        className="w-full pl-10 pr-4 py-3 rounded-xl text-sm text-[#0D1F3C] placeholder-gray-400 bg-gray-50 border border-gray-200 outline-none transition-all duration-200 focus:border-accent focus:ring-2 focus:ring-accent/30 resize-none font-sans"
      />
    </div>
  </div>
);

/* ─────────────── MAIN COMPONENT ─────────────── */
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [activeTab, setActiveTab] = useState("General");
  const [toast, setToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setToast(false), 4000);
  };

  return (
    <div className="w-full font-sans bg-white">
      <Toast show={toast} onClose={() => setToast(false)} />

      {/* ══ HERO ══ */}
      <section
        className="relative w-full overflow-hidden bg-white"
        style={{
          borderBottom: "1px solid rgba(13,31,60,0.06)",
        }}
      >
        {/* Decorative orb */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "rgba(13,31,60,0.02)" }} />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-14 flex flex-col lg:flex-row gap-10 items-center">

          {/* LEFT */}
          <div className="flex-1 text-[#0D1F3C]">
            <img
              src="https://res.cloudinary.com/dbazx1qbu/image/upload/v1781584509/ChatGPT_Image_Jun_16_2026_10_04_54_AM_u2aavv.png"
              alt="Pavan Bhattad"
              className="object-contain drop-shadow-2xl flex-shrink-0"
              style={{ height: 320, maxWidth: 180, objectPosition: "top" }}
            />
            <p className="text-xs font-heading font-bold tracking-[2px] uppercase text-gray-500 mb-4">
              Get in Touch
            </p>
            <h1 className="text-4xl sm:text-5xl font-heading font-extrabold leading-tight mb-4 text-[#0D1F3C]">
              Let's talk about<br />
              <em className="not-italic text-[#0D1F3C]/80">what's possible</em>
            </h1>
            <p className="text-base text-gray-600 leading-relaxed max-w-sm mb-8 font-sans">
              For courses, corporate training, collaborations, or speaking events — we're here and happy to connect.
            </p>

            {/* Quick pills */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold hover:-translate-y-0.5 transition-all bg-whatsapp hover:bg-[#1ebd5b]"
              >
                <FaWhatsapp size={16} /> WhatsApp · +91 96650 22037
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[#0D1F3C] text-sm font-semibold hover:-translate-y-0.5 transition-all bg-black/5 hover:bg-black/10 border border-black/10"
              >
                <Mail size={16} /> Email us
              </a>
            </div>
          </div>

          {/* FORM CARD */}
          <div
            className="w-full lg:w-[460px] flex-shrink-0 rounded-2xl p-8 shadow-2xl bg-white"
            style={{
              border: "1px solid rgba(13,31,60,0.08)",
            }}
          >
            <h2 className="text-[#0D1F3C] text-xl font-heading font-bold mb-1">Send a message</h2>
            <p className="text-gray-500 text-sm mb-7">We respond within 24 hours on weekdays.</p>

            {/* Intent tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {INTENT_TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${activeTab === tab
                      ? "text-white"
                      : "text-gray-500 hover:text-black"
                    }`}
                  style={
                    activeTab === tab
                      ? { backgroundColor: "#0D1F3C", borderColor: "#0D1F3C" }
                      : { borderColor: "rgba(13,31,60,0.12)" }
                  }
                >
                  {tab}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field
                  label="Name"
                  icon={<User size={15} />}
                  type="text"
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <Field
                  label="Email"
                  icon={<Mail size={15} />}
                  type="email"
                  placeholder="Your email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              {/* Phone */}
              <Field
                label="Phone (optional)"
                icon={<Phone size={15} />}
                type="tel"
                placeholder="+91 00000 00000"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />

              {/* Message */}
              <TextareaField
                label="Message"
                icon={<MessageSquare size={15} />}
                rows={4}
                placeholder="What would you like to discuss?"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-heading font-bold text-sm transition-all duration-200 mt-1 bg-[#0D1F3C] hover:bg-black shadow-lg shadow-black/20 border-none cursor-pointer"
              >
                <Send size={15} /> Send message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ══ OTHER WAYS TO CONNECT ══ */}
      <section className="w-full py-16 px-5 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-heading font-bold tracking-[2px] uppercase mb-2 text-gray-500">
            More ways to reach us
          </p>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold mb-10 text-[#0D1F3C]">
            Other Ways to Connect
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {connectCards.map(({ icon, title, desc, btnLabel, href, bgStyle }) => {
              const isWhatsApp = title === "WhatsApp";
              return (
                <div
                  key={title}
                  className="flex flex-col items-center text-center rounded-2xl px-5 py-7 gap-4 hover:-translate-y-1 transition-all duration-300 h-full border border-gray-200 shadow-lg shadow-black/5"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={bgStyle}
                  >
                    {icon}
                  </div>
                  <p className="text-[#0D1F3C] font-heading font-bold text-sm">{title}</p>
                  <p className="text-gray-600 text-xs leading-relaxed flex-1">{desc}</p>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-1.5 w-full px-4 py-2.5 rounded-lg text-white text-xs font-heading font-bold transition-all duration-200 mt-1 hover:-translate-y-0.5 ${isWhatsApp
                        ? "bg-whatsapp hover:bg-[#1ebd5b] shadow-lg shadow-whatsapp/20"
                        : "bg-[#0D1F3C] hover:bg-black shadow-lg shadow-black/20"
                      }`}
                  >
                    {btnLabel} <ChevronRight size={13} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ SOCIAL + QUOTE ══ */}
      <section className="w-full py-6 px-5 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-5">

          {/* Social card */}
          <div className="flex-1 rounded-2xl px-8 py-9 border border-gray-200 bg-white shadow-lg shadow-black/5">
            <h3 className="text-[#0D1F3C] text-lg font-heading font-extrabold mb-1.5">
              Connect on social media
            </h3>
            <div className="w-12 h-0.5 rounded-full mb-8" style={{ backgroundColor: "rgba(13,31,60,0.15)" }} />
            <div className="flex items-center gap-6 flex-wrap">
              {socials.map(({ icon, label, href, bgStyle }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 group"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-transform duration-200 group-hover:scale-110"
                    style={bgStyle}
                  >
                    {icon}
                  </div>
                  <span className="text-gray-500 text-xs font-medium">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quote card */}
          <div
            className="lg:w-80 flex-shrink-0 rounded-2xl px-8 py-9 flex flex-col relative border border-gray-200 bg-white shadow-lg shadow-black/5"
          >
            <span className="text-5xl font-serif leading-none text-gray-300 mb-2">❝</span>
            <p className="text-[#0D1F3C] text-base font-semibold italic leading-relaxed flex-1">
              The mind is like a muscle. The more you understand it, the stronger your life becomes.
            </p>
            <p className="text-sm font-bold text-gray-500 mt-5">— Pavan Bhattad</p>
            <span className="absolute bottom-6 right-7 text-4xl font-serif text-gray-300">❞</span>
          </div>
        </div>
      </section>

      {/* ══ CTA + PROGRAMS ══ */}
      <section className="w-full py-6 px-5 sm:px-8 pb-16 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-5">

          {/* CTA */}
          <div
            className="flex-1 rounded-2xl px-10 py-12 flex flex-col gap-6 border border-gray-200 bg-white shadow-lg shadow-black/5"
          >
            <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0D1F3C] leading-snug">
              Let's learn, grow<br />
              and{" "}
              <em className="not-italic text-[#0D1F3C]/80">transform</em>{" "}
              together
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Whether you're an individual learner, educator, or organization — we're here to unlock the true potential of the human mind.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-white text-sm font-heading font-bold transition-all duration-200 bg-whatsapp hover:bg-[#1ebd5b] shadow-lg shadow-whatsapp/25 hover:-translate-y-0.5 w-fit"
            >
              <FaWhatsapp size={18} /> Join WhatsApp group <ChevronRight size={15} />
            </a>
          </div>

          {/* Programs */}
          <div
            className="flex-1 rounded-2xl px-10 py-12 bg-white border border-gray-200 shadow-lg shadow-black/5"
          >
            <h3 className="text-lg font-heading font-extrabold mb-8" style={{ color: "#0D1F3C" }}>
              We conduct programs in
            </h3>
            <div className="flex flex-col gap-6">
              {programs.map(({ icon, title, desc, bgStyle }) => (
                <div key={title} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 border"
                    style={bgStyle}
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="text-sm font-heading font-bold text-[#0D1F3C] mb-0.5">{title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;