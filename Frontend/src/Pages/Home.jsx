import { Link } from "react-router-dom";
import {
  BookOpen,
  ChartLine,
  Sparkles,
  Rocket,
  ChevronRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

/* ─── DATA ─────────────────────────────────────────── */
const pillars = [
  {
    icon: <BookOpen size={30} strokeWidth={2} />,
    title: "Learn",
    sub: "Expand Knowledge",
    colorStyle: {
      color: "#F59E0B",
      backgroundColor: "rgba(245, 158, 11, 0.08)",
      borderColor: "rgba(245, 158, 11, 0.3)",
    },
  },
  {
    icon: <ChartLine size={30} strokeWidth={2} />,
    title: "Grow",
    sub: "Develop Skills",
    colorStyle: {
      color: "#10B981",
      backgroundColor: "rgba(16, 185, 129, 0.08)",
      borderColor: "rgba(16, 185, 129, 0.3)",
    },
  },
  {
    icon: <Sparkles size={30} strokeWidth={2} />,
    title: "Evolve",
    sub: "Transform Mindset",
    colorStyle: {
      color: "#EC4899",
      backgroundColor: "rgba(236, 72, 153, 0.08)",
      borderColor: "rgba(236, 72, 153, 0.3)",
    },
  },
  {
    icon: <Rocket size={30} strokeWidth={2} />,
    title: "Liberate",
    sub: "Live Your Best Life",
    colorStyle: {
      color: "#1D4BC9",
      backgroundColor: "rgba(29, 75, 201, 0.08)",
      borderColor: "rgba(29, 75, 201, 0.3)",
    },
  },
];

const courses = [
  {
    id: 1,
    num: 1,
    image: "https://s3.amazonaws.com/contents.newzenler.com/33830/library/6a27bb3605b12_1780988726_coursecards-ibrand-16.png",
    title: <>How to Read <span className="text-[#1D4BC9] font-extrabold">100 Books</span> in a Year</>,
    titlePlain: "How to Read 100 Books in a Year",
    desc: "Learn Speed Reading, Memory Techniques, Mind Maps and Creative Thinking.",
    route: "/courses/how-to-read-100-books",
    color: "#1D4BC9",
    hoverColor: "#163cb1",
    shadow: "rgba(29,75,201,0.12)",
    bgGradient: "#ffffff",
    borderColor: "#1D4BC9",
  },
  {
    id: 2,
    num: 2,
    image: "https://s3.amazonaws.com/contents.newzenler.com/33830/library/6a27b9ea2becc_1780988394_pavanbhattadcards-5.png",
    title: <span className="text-[#7C3AED] font-bold">NLP Mastery</span>,
    titlePlain: "NLP Mastery",
    desc: "Master the art of communication, influence and personal transformation with NLP.",
    route: "/courses/nlp-mastery",
    color: "#7C3AED",
    hoverColor: "#6d28d9",
    shadow: "rgba(124,58,237,0.12)",
    bgGradient: "#ffffff",
    borderColor: "#7C3AED",
  },
  {
    id: 3,
    num: 3,
    image: "https://s3.amazonaws.com/contents.newzenler.com/33830/library/6a27bab564737_1780988597_pavanbhattadcards-4.png",
    title: <span className="text-[#059669] font-bold">My 25th Hour</span>,
    titlePlain: "My 25th Hour",
    desc: "Learn the Art of Creating Time.",
    route: "/courses/my-25th-hour",
    color: "#059669",
    hoverColor: "#047857",
    shadow: "rgba(5,150,105,0.12)",
    bgGradient: "#ffffff",
    borderColor: "#059669",
  },
  {
    id: 4,
    num: 4,
    image: "https://s3.amazonaws.com/contents.newzenler.com/33830/library/6a23a5730236d_1780721011_l-3.png",
    title: <span className="text-[#B45309] font-bold">Brain Ki Baat</span>,
    titlePlain: "Brain Ki Baat",
    desc: "Understand how your brain works and reprogram it for success and growth.",
    route: "/courses/brain-ki-baat",
    color: "#B45309",
    hoverColor: "#92400E",
    shadow: "rgba(180,83,9,0.12)",
    bgGradient: "#ffffff",
    borderColor: "#B45309",
  },
];

/* ─── COMPONENT ─────────────────────────────────────── */
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full font-sans">

      {/* ══ HERO ══ */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0D1F3C 0%, rgba(13,31,60,0.95) 100%)",
          minHeight: "500px",
        }}
      >
        {/* Dot grid */}
        <div
          className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        {/* Curve accent */}
        <div
          className="absolute bottom-0 left-0 w-56 h-56 sm:w-72 sm:h-72 rounded-full opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%)",
            transform: "translate(-30%, 40%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 py-12 md:min-h-[500px]">

          {/* Hero text */}
          <div className="order-2 md:order-2 flex-1 text-white text-center md:text-left">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-6xl font-black leading-tight tracking-tight mb-2">
              Learn , Grow , Evolve & Liberate.
            </h1>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-6 text-white/90">
              Your Learning Mentor{" "}
              <span className="font-heading font-black italic text-white bg-white/10 px-3 py-1 rounded-xl ml-1 inline-block border border-white/10">
                — Pavan Bhattad
              </span>
            </h2>
            <p className="text-white/70 text-sm sm:text-base lg:text-lg mb-8 leading-relaxed max-w-xl">
              Knowledge and Karma is a Learning Philanthropy project — where genuine education meets generous access.
              Premium courses conducted before Covid are now available as free live sessions for everyone who wants to grow.
              <br className="hidden sm:block" />
              We aren't here to teach — we're here to help you transform. Come, let's do this together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-heading font-semibold text-white text-sm transition-all duration-200 bg-accent hover:bg-[#163cb1] shadow-lg shadow-accent/20"
              >
                Explore Courses <ChevronRight size={16} />
              </Link>

              <a href="https://wa.me/919552782037"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-heading font-semibold text-sm transition-all duration-200 bg-whatsapp hover:bg-[#1ebd5b] text-white shadow-lg shadow-whatsapp/20"
              >
                <FaWhatsapp size={17} /> Join WhatsApp Group <ChevronRight size={16} />
              </a>
            </div>
          </div>

          {/* Instructor photo */}
          <div className="order-1 md:order-1 flex-shrink-0 flex justify-center w-full md:w-auto">
            <img
              src="https://res.cloudinary.com/dbazx1qbu/image/upload/v1781584509/ChatGPT_Image_Jun_16_2026_10_04_54_AM_u2aavv.png"
              alt="Pavan Bhattad"
              className="object-contain drop-shadow-2xl"
              style={{
                height: "clamp(260px, 40vw, 440px)",
                maxWidth: "320px",
                width: "100%",
              }}
            />
          </div>

        </div>

        {/* ── Pillars bar ── */}
        <div
          className="relative w-full"
          style={{ backgroundColor: "rgba(13,31,60,0.97)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {pillars.map(({ icon, title, sub, colorStyle }) => (
              <div key={title} className="flex flex-col items-center gap-2 text-center group">
                <div
                  className="rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    border: "2px solid",
                    width: "clamp(56px, 10vw, 76px)",
                    height: "clamp(56px, 10vw, 76px)",
                    ...colorStyle,
                  }}
                >
                  {icon}
                </div>
                <p className="text-white font-heading font-bold text-sm sm:text-base mt-2">{title}</p>
                <p className="text-white/50 text-xs sm:text-sm leading-snug">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ COURSES ══ */}
      <section className="w-full bg-white py-14 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black mb-2"
              style={{ color: "#0D1F3C" }}
            >
              Our Courses
            </h2>
            <div
              className="mx-auto mb-4 rounded-full"
              style={{ width: "60px", height: "3px", backgroundColor: "#C0176E" }}
            />
            <p className="text-black text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Powerful courses to{" "}
              <span className="font-semibold underline" style={{ color: "#0D1F3C" }}>
                unlock
              </span>{" "}
              your brain's true potential.
              <br />
              Live sessions are{" "}
              <span className="font-semibold" style={{ color: "#0D1F3C" }}>
                free
              </span>
              . Certification and recordings are chargeable.
            </p>
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((c) => (
              <div
                key={c.id}
                onClick={() => navigate(c.route)}
                className="relative flex flex-col rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-2 h-full border bg-white"
                style={{
                  borderColor: c.borderColor,
                  boxShadow: `0 10px 30px rgba(13,31,60,0.06)`,
                }}
              >
                {/* Number badge */}
                <span
                  className="absolute top-3 left-3 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold z-10"
                  style={{ backgroundColor: c.borderColor }}
                >
                  {c.num}
                </span>

                {/* Image — contain, anchored top */}
                <div
                  className="w-full flex items-start justify-center pt-8 px-4"
                  style={{ minHeight: "150px" }}
                >
                  <img
                    src={c.image}
                    alt={c.titlePlain}
                    style={{
                      width: "100%",
                      height: "clamp(110px, 20vw, 140px)",
                      objectFit: "contain",
                      objectPosition: "top center",
                      display: "block",
                    }}
                  />
                </div>

                {/* Title */}
                <div
                  className="px-4 pt-3 text-center font-heading font-bold text-[#0D1F3C] leading-snug mb-2 flex-grow-0"
                  style={{ fontSize: "clamp(14px, 2.5vw, 17px)" }}
                >
                  {c.title}
                </div>

                {/* Desc — hidden on very small screens */}
                <p className="hidden sm:block px-4 text-center text-gray-600 text-xs leading-relaxed flex-1">
                  {c.desc}
                </p>

                {/* Enroll button */}
                <div className="px-4 pb-4 pt-3">
                  <Link
                    to={c.route}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-center gap-1 sm:gap-1.5 w-full py-2.5 rounded-xl text-white font-heading font-semibold text-xs transition-all duration-200 border-none cursor-pointer"
                    style={{
                      backgroundColor: c.color,
                      boxShadow: `0 4px 12px rgba(13,31,60,0.12)`,
                    }}
                    onMouseEnter={(e) => { e.target.style.backgroundColor = c.hoverColor; }}
                    onMouseLeave={(e) => { e.target.style.backgroundColor = c.color; }}
                  >
                    Enroll Now. Free <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INSTRUCTOR BIO ══ */}
      <section className="w-full bg-white py-10 sm:py-14 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div
            className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 rounded-2xl p-5 sm:p-8"
            style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(13,31,60,0.1)" }}
          >
            {/* Photo */}
            <div className="flex-shrink-0">
              <img
                src="https://s3.amazonaws.com/contents.newzenler.com/33830/library/6a27bbfbd74b9_1780988923_pavanbhattad1.png"
                alt="Pavan Bhattad"
                className="rounded-xl object-cover mx-auto"
                style={{
                  width: "clamp(120px, 30vw, 160px)",
                  height: "clamp(140px, 35vw, 190px)",
                  objectPosition: "top",
                  boxShadow: "0 4px 20px rgba(13,31,60,0.08)",
                }}
              />
            </div>

            {/* Bio */}
            <div className="flex-1 text-center sm:text-left">
              <h3
                className="text-xl sm:text-2xl font-extrabold mb-1"
                style={{ color: "#0D1F3C" }}
              >
                Pavan Bhattad
              </h3>
              <p
                className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 leading-relaxed"
                style={{ color: "#0D1F3C" }}
              >
                Reading Evangelist. India's only Mind Maps Master Trainer.
                <br />
                Founder of Asia's first Institute of Thinking.
              </p>
              <p className="text-black text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                He has spent 20 years teaching people how their own minds work.
                Most say they wish they had learned this sooner.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-md text-xs sm:text-sm font-semibold border transition-colors hover:bg-black/5"
                style={{ borderColor: "#0D1F3C", color: "#0D1F3C" }}
              >
                His Story <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHATSAPP BANNER ══ */}
      <section
        className="w-full py-4 px-4 sm:px-6 transition-colors duration-200 bg-whatsapp hover:bg-[#1ebd5b]"
      >
        <a href="https://wa.me/919552782037"
          target="_blank"
          rel="noopener noreferrer"
          className="max-w-6xl mx-auto flex items-center justify-center gap-2 sm:gap-3 text-white font-semibold text-xs sm:text-sm md:text-base text-center"
        >
          <FaWhatsapp size={20} />
          Join Our WhatsApp Group for Updates and Free Resources
          <ChevronRight size={16} />
        </a>
      </section>

    </div>
  );
};

export default Home;