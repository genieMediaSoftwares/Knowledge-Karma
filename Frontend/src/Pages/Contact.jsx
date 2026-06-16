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
    icon: <FaWhatsapp size={24} color="#fff" />,
    bg: "bg-green-700",
    btnBg: "bg-green-700 hover:bg-green-800",
    title: "WhatsApp",
    desc: "Quickest way to get answers. Usually responds within the hour.",
    btnLabel: "Chat now",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    icon: <Mail size={24} color="#fff" />,
    bg: "bg-blue-700",
    btnBg: "bg-blue-700 hover:bg-blue-800",
    title: "Email",
    desc: "Drop us an email. We reply within 24 hours on weekdays.",
    btnLabel: "Send email",
    href: `mailto:${EMAIL}`,
  },
  {
    icon: <Building2 size={24} color="#fff" />,
    bg: "bg-violet-700",
    btnBg: "bg-violet-700 hover:bg-violet-800",
    title: "Corporate Training",
    desc: "Tailored programs for teams, leadership and organizations.",
    btnLabel: "Know more",
    href: `mailto:${EMAIL}?subject=Corporate Training Enquiry`,
  },
  {
    icon: <Handshake size={24} color="#fff" />,
    bg: "bg-orange-600",
    btnBg: "bg-orange-600 hover:bg-orange-700",
    title: "Collaborations",
    desc: "Open to meaningful partnerships with aligned creators and brands.",
    btnLabel: "Let's talk",
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'd like to discuss a collaboration.`,
  },
  {
    icon: <Mic size={24} color="#fff" />,
    bg: "bg-pink-600",
    btnBg: "bg-pink-600 hover:bg-pink-700",
    title: "Speaking Events",
    desc: "Invite Pavan Bhattad to speak at your event or conference.",
    btnLabel: "Invite now",
    href: `mailto:${EMAIL}?subject=Speaking Event Invitation`,
  },
];

const socials = [
  {
    icon: <FaFacebookF size={20} />,
    bg: "bg-[#1877F2]",
    label: "Facebook",
    href: "https://www.facebook.com/knowledgeandkarma",
  },
  {
    icon: <FaInstagram size={20} />,
    bg: "bg-[#C13584]",
    label: "Instagram",
    href: "https://www.instagram.com/withpavanbhattad/",
  },
  {
    icon: <FaXTwitter size={20} />,
    bg: "bg-black",
    label: "X",
    href: "https://x.com/pavanbhattad",
  },
  {
    icon: <FaYoutube size={20} />,
    bg: "bg-red-600",
    label: "YouTube",
    href: "https://www.youtube.com/@withpavanbhattad",
  },
  {
    icon: <FaLinkedinIn size={20} />,
    bg: "bg-[#0A66C2]",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pavanbhattad/",
  },
];

const programs = [
  {
    icon: <BookOpen size={18} color="#fff" />,
    bg: "bg-violet-700",
    title: "Workshops",
    desc: "Interactive workshops for schools, colleges and organizations.",
  },
  {
    icon: <Briefcase size={18} color="#fff" />,
    bg: "bg-blue-700",
    title: "Corporate training",
    desc: "Customized programs to enhance productivity, communication and leadership.",
  },
  {
    icon: <Monitor size={18} color="#fff" />,
    bg: "bg-pink-600",
    title: "Online programs",
    desc: "Live sessions, courses and resources accessible from anywhere.",
  },
];

/* ─────────────── TOAST ─────────────── */
const Toast = ({ show, onClose }) => (
  <div
    className={`fixed top-5 right-5 z-50 flex items-center gap-3 px-5 py-4 rounded-xl shadow-2xl bg-green-700 text-white text-sm font-semibold min-w-72 transition-all duration-300 ${
      show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"
    }`}
  >
    <CheckCircle2 size={18} />
    Message sent! We'll get back to you soon.
    <button onClick={onClose} className="ml-auto">
      <X size={16} />
    </button>
  </div>
);

/* ─────────────── FIELD WRAPPER ─────────────── */
const Field = ({ label, icon, children }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
      {label}
    </label>
    <div className="relative">
      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none">
        {icon}
      </span>
      {children}
    </div>
  </div>
);

const TextareaField = ({ label, icon, ...props }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
      {label}
    </label>
    <div className="relative">
      <span className="absolute left-3.5 top-3.5 text-white/30 pointer-events-none">
        {icon}
      </span>
      <textarea
        {...props}
        className="w-full pl-10 pr-4 py-3 bg-[#111d3a] border border-[#1e2f6a] rounded-xl text-sm text-white placeholder-white/20 outline-none focus:border-pink-500 transition-colors resize-none font-sans"
      />
    </div>
  </div>
);

/* ─────────────── MAIN COMPONENT ─────────────── */
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [activeTab, setActiveTab] = useState("General");
  const [toast, setToast] = useState(false);

  const inputClass =
    "w-full pl-10 pr-4 py-3 bg-[#111d3a] border border-[#1e2f6a] rounded-xl text-sm text-white placeholder-white/20 outline-none focus:border-pink-500 transition-colors";

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setToast(false), 4000);
  };

  return (
    <div className="w-full font-sans">
      <Toast show={toast} onClose={() => setToast(false)} />

      {/* ══ HERO ══ */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg,#060d2e 0%,#0d1b5e 50%,#1a0050 100%)",
        }}
      >
        {/* Decorative orb */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "rgba(233,30,140,0.07)" }} />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-14 pb-0 flex flex-col lg:flex-row gap-10 items-end">

          {/* LEFT */}
          <div className="flex-1 pb-14">
             <img
              src="https://res.cloudinary.com/dbazx1qbu/image/upload/v1781584509/ChatGPT_Image_Jun_16_2026_10_04_54_AM_u2aavv.png"
              alt="Pavan Bhattad"
              className="object-contain drop-shadow-2xl flex-shrink-0"
              style={{ height: 320, maxWidth: 180, objectPosition: "top" }}
            />
            <p className="text-xs font-bold tracking-[2px] uppercase text-pink-500 mb-4">
              Get in Touch
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white mb-4">
              Let's talk about<br />
              <em className="not-italic text-pink-500">what's possible</em>
            </h1>
            <p className="text-base text-white/55 leading-relaxed max-w-sm mb-8">
              For courses, corporate training, collaborations, or speaking events — we're here and happy to connect.
            </p>

            {/* Quick pills */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-700 text-white text-sm font-semibold hover:-translate-y-0.5 hover:opacity-90 transition-all"
              >
                <FaWhatsapp size={16} /> WhatsApp · +91 96650 22037
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-700 text-white text-sm font-semibold hover:-translate-y-0.5 hover:opacity-90 transition-all"
              >
                <Mail size={16} /> Email us
              </a>
            </div>
          </div>

          {/* FORM CARD — grows flush into hero */}
          <div
            className="w-full lg:w-[460px] flex-shrink-0 rounded-t-2xl px-8 pt-8 shadow-2xl"
            style={{
              backgroundColor: "#0a1535",
              border: "1px solid rgba(255,255,255,0.08)",
              borderBottom: "none",
            }}
          >
            <h2 className="text-white text-xl font-bold mb-1">Send a message</h2>
            <p className="text-white/40 text-sm mb-7">We respond within 24 hours on weekdays.</p>

            {/* Intent tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {INTENT_TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                    activeTab === tab
                      ? "bg-pink-500/15 border-pink-500 text-pink-400"
                      : "border-white/15 text-white/45 hover:border-pink-500 hover:text-pink-400"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Name" icon={<User size={15} />}>
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                  />
                </Field>
                <Field label="Email" icon={<Mail size={15} />}>
                  <input
                    type="email"
                    placeholder="Your email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                </Field>
              </div>

              {/* Phone */}
              <Field label="Phone (optional)" icon={<Phone size={15} />}>
                <input
                  type="tel"
                  placeholder="+91 00000 00000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputClass}
                />
              </Field>

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
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm transition-colors mt-1 mb-8"
              >
                <Send size={15} /> Send message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ══ OTHER WAYS TO CONNECT ══ */}
      <section className="w-full py-16 px-5 sm:px-8 bg-[#f5f6fa]">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-[2px] uppercase text-pink-600 mb-2">
            More ways to reach us
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d1b5e] mb-10">
            Other Ways to Connect
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {connectCards.map(({ icon, bg, btnBg, title, desc, btnLabel, href }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center rounded-2xl px-5 py-7 gap-3 bg-[#0d1b5e] hover:-translate-y-1 transition-transform duration-200"
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${bg}`}>
                  {icon}
                </div>
                <p className="text-white font-bold text-sm">{title}</p>
                <p className="text-white/55 text-xs leading-relaxed flex-1">{desc}</p>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-1.5 w-full px-4 py-2 rounded-lg text-white text-xs font-bold transition-opacity mt-1 ${btnBg}`}
                >
                  {btnLabel} <ChevronRight size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SOCIAL + QUOTE ══ */}
      <section className="w-full py-6 px-5 sm:px-8 bg-[#f5f6fa]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-5">

          {/* Social card */}
          <div className="flex-1 rounded-2xl px-8 py-9 bg-[#0d1b5e]">
            <h3 className="text-white text-lg font-extrabold mb-1.5">
              Connect on social media
            </h3>
            <div className="w-12 h-0.5 bg-pink-500 rounded-full mb-8" />
            <div className="flex items-center gap-6 flex-wrap">
              {socials.map(({ icon, bg, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className={`w-13 h-13 w-12 h-12 rounded-full flex items-center justify-center text-white transition-transform duration-200 group-hover:scale-110 ${bg}`}>
                    {icon}
                  </div>
                  <span className="text-white/50 text-xs font-medium">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quote card */}
          <div className="lg:w-80 flex-shrink-0 rounded-2xl px-8 py-9 bg-[#0d1b5e] flex flex-col relative">
            <span className="text-5xl font-serif leading-none text-pink-500 mb-2">❝</span>
            <p className="text-white text-base font-semibold italic leading-relaxed flex-1">
              The mind is like a muscle. The more you understand it, the stronger your life becomes.
            </p>
            <p className="text-sm font-bold text-pink-500 mt-5">— Pavan Bhattad</p>
            <span className="absolute bottom-6 right-7 text-4xl font-serif text-blue-600">❞</span>
          </div>
        </div>
      </section>

      {/* ══ CTA + PROGRAMS ══ */}
      <section className="w-full py-6 px-5 sm:px-8 pb-16 bg-[#f5f6fa]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-5">

          {/* CTA */}
          <div
            className="flex-1 rounded-2xl px-10 py-12 flex flex-col gap-6"
            style={{
              background: "linear-gradient(135deg,#0d1b5e,#1a0050)",
            }}
          >
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-snug">
              Let's learn, grow<br />
              and{" "}
              <em className="not-italic text-pink-500">transform</em>{" "}
              together
            </h3>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              Whether you're an individual learner, educator, or organization — we're here to unlock the true potential of the human mind.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-green-700 hover:bg-green-800 text-white text-sm font-bold transition-colors w-fit"
            >
              <FaWhatsapp size={18} /> Join WhatsApp group <ChevronRight size={15} />
            </a>
          </div>

          {/* Programs */}
          <div className="flex-1 rounded-2xl px-10 py-12 bg-white">
            <h3 className="text-lg font-extrabold text-[#0d1b5e] mb-8">
              We conduct programs in
            </h3>
            <div className="flex flex-col gap-6">
              {programs.map(({ icon, bg, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${bg}`}>
                    {icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800 mb-0.5">{title}</p>
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