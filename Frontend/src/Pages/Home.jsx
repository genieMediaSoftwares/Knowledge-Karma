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
  { icon: <BookOpen size={36} strokeWidth={1.5} />, title: "Learn", sub: "Expand Knowledge", color: "#4d9fff" },
  { icon: < ChartLine size={36} strokeWidth={1.5} />, title: "Grow", sub: "Develop Skills", color: "#4d9fff" },
  { icon: <Sparkles size={36} strokeWidth={1.5} />, title: "Evolve", sub: "Transform Mindset", color: "#e91e8c" },
  { icon: <Rocket size={36} strokeWidth={1.5} />, title: "Liberate", sub: "Live Your Best Life", color: "#e91e8c" },
];

const courses = [
  {
    id: 1,
    num: 1,
    numBg: "#2563eb",
    bg: "linear-gradient(160deg, #0f1f5c 0%, #1a2f7a 100%)",
    btnBg: "#2563eb",
    image: "https://s3.amazonaws.com/contents.newzenler.com/33830/library/6a27bb3605b12_1780988726_coursecards-ibrand-16.png",
    title: <>How to Read <span style={{ color: "#facc15" }}>100 Books</span> in a Year</>,
    titlePlain: "How to Read 100 Books in a Year",
    desc: "Learn Speed Reading, Memory Techniques, Mind Maps and Creative Thinking.",
    route: "/courses/how-to-read-100-books",
  },
  {
    id: 2,
    num: 2,
    numBg: "#7c3aed",
    bg: "linear-gradient(160deg, #1a0a3c 0%, #2d0e6b 100%)",
    btnBg: "#7c3aed",
    image: "https://s3.amazonaws.com/contents.newzenler.com/33830/library/6a27b9ea2becc_1780988394_pavanbhattadcards-5.png",
    title: <>NLP Mastery</>,
    titlePlain: "NLP Mastery",
    desc: "Master the art of communication, influence and personal transformation with NLP.",
    route: "/courses/nlp-mastery",
  },
  {
    id: 3,
    num: 3,
    numBg: "#15803d",
    bg: "linear-gradient(160deg, #052e16 0%, #14532d 100%)",
    btnBg: "#15803d",
    image: "https://s3.amazonaws.com/contents.newzenler.com/33830/library/6a27bab564737_1780988597_pavanbhattadcards-4.png",
    title: <>My 25th Hour</>,
    titlePlain: "My 25th Hour",
    desc: "Learn the Art of Creating Time.",
    route: "/courses/my-25th-hour",
  },
  {
    id: 4,
    num: 4,
    numBg: "#b45309",
    bg: "linear-gradient(160deg, #2c1003 0%, #431d07 100%)",
    btnBg: "#b45309",
    image: "https://s3.amazonaws.com/contents.newzenler.com/33830/library/6a23a5730236d_1780721011_l-3.png",
    title: <>Brain Ki Baat</>,
    titlePlain: "Brain Ki Baat",
    desc: "Understand how your brain works and reprogram it for success and happiness.",
    route: "/courses/brain-ki-baat",
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
          background: "linear-gradient(135deg, #060d2e 0%, #0d1b5e 35%, #1a0a3c 65%, #2d0050 100%)",
          minHeight: "480px",
        }}
      >
        {/* Dot grid */}
        <div
          className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #e91e8c 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        {/* Curve accent */}
        <div
          className="absolute bottom-0 left-0 w-56 h-56 sm:w-72 sm:h-72 rounded-full opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, #4d7cfe 0%, transparent 70%)",
            transform: "translate(-30%, 40%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-6 py-10 md:min-h-[480px]">

          {/* Instructor photo */}
          <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
            <img
              src="https://res.cloudinary.com/dbazx1qbu/image/upload/v1781584509/ChatGPT_Image_Jun_16_2026_10_04_54_AM_u2aavv.png"
              alt="Pavan Bhattad"
              className="object-contain drop-shadow-2xl"
              style={{
                height: "clamp(220px, 38vw, 420px)",
                maxWidth: "300px",
                width: "100%",
              }}
            />
          </div>

          {/* Hero text */}
          <div className="flex-1 text-white text-center md:text-left pb-6 md:pb-0">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight mb-2">
              School gives you{" "}
              <span className="font-extrabold italic" style={{ color: "#4d9fff" }}>
                knowledge.
              </span>
            </h1>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight mb-4">
              Pavan teaches you{" "}
              <span className="font-extrabold italic" style={{ color: "#e91e8c" }}>
                what to do with it.
              </span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">
              Speed reading. Memory. Focus. Influence.
              <br className="hidden sm:block" />
              Brain science. All free.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md font-semibold text-white text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#2563eb" }}
              >
                Explore Courses <ChevronRight size={16} />
              </Link>
              
           <a     href="https://wa.me/your-number"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md font-semibold text-white text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#15803d" }}
              >
                <FaWhatsapp size={17} /> Join WhatsApp Group <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* ── Pillars bar ── */}
        <div
          className="relative w-full"
          style={{ backgroundColor: "#060d2e", borderTop: "1px solid #1e2f6a" }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {pillars.map(({ icon, title, sub, color }) => (
              <div key={title} className="flex flex-col items-center gap-2 text-center">
                <div
                  className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full flex items-center justify-center"
                  style={{
                    border: `2px solid ${color}`,
                    color,
                    backgroundColor: "rgba(255,255,255,0.04)",
                    width: "clamp(52px, 10vw, 80px)",
                    height: "clamp(52px, 10vw, 80px)",
                  }}
                >
                  {icon}
                </div>
                <p className="text-white font-semibold text-sm sm:text-base mt-1">{title}</p>
                <p className="text-gray-400 text-xs sm:text-sm leading-snug">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ COURSES ══ */}
      <section className="w-full bg-gray-50 py-10 sm:py-14 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-8 sm:mb-10">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-1"
              style={{ color: "#0d1b5e" }}
            >
              Our Courses
            </h2>
            <div
              className="mx-auto mb-3 rounded-full"
              style={{ width: "60px", height: "3px", backgroundColor: "#e91e8c" }}
            />
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed px-2">
              Powerful courses to{" "}
              <span className="font-semibold underline" style={{ color: "#e91e8c" }}>
                unlock
              </span>{" "}
              your brain's true potential.
              <br />
              Live sessions are{" "}
              <span className="font-semibold" style={{ color: "#15803d" }}>
                free
              </span>
              . Certification and recordings are chargeable.
            </p>
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {courses.map((c) => (
              <div
                key={c.id}
                onClick={() => navigate(c.route)}
                className="relative flex flex-col rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-transform hover:-translate-y-1"
                style={{ background: c.bg }}
              >
                {/* Number badge */}
                <span
                  className="absolute top-2 left-2 sm:top-3 sm:left-3 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-white text-xs font-bold z-10"
                  style={{ backgroundColor: c.numBg }}
                >
                  {c.num}
                </span>

                {/* Image — contain, anchored top */}
                <div
                  className="w-full flex items-start justify-center pt-7 sm:pt-8 px-2 sm:px-3"
                  style={{ minHeight: "120px" }}
                >
                  <img
                    src={c.image}
                    alt={c.titlePlain}
                    style={{
                      width: "100%",
                      height: "clamp(100px, 22vw, 150px)",
                      objectFit: "contain",
                      objectPosition: "top center",
                      display: "block",
                    }}
                  />
                </div>

                {/* Title */}
                <div
                  className="px-3 sm:px-4 pt-2 text-center font-bold text-white leading-snug mb-1 sm:mb-2"
                  style={{ fontSize: "clamp(12px, 2.5vw, 15px)" }}
                >
                  {c.title}
                </div>

                {/* Desc — hidden on very small screens */}
                <p className="hidden sm:block px-3 sm:px-4 text-center text-gray-300 text-xs leading-relaxed flex-1">
                  {c.desc}
                </p>

                {/* Enroll button */}
                <div className="px-3 sm:px-4 pb-3 sm:pb-4 pt-2 sm:pt-3">
                  <Link
                    to={c.route}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-center gap-1 sm:gap-1.5 w-full py-2 sm:py-2.5 rounded-xl text-white font-semibold transition-opacity hover:opacity-90"
                    style={{
                      backgroundColor: c.btnBg,
                      fontSize: "clamp(10px, 2vw, 12px)",
                    }}
                  >
                    Enroll Now. Free <ChevronRight size={12} />
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
            style={{ backgroundColor: "#f5f6fa" }}
          >
            {/* Photo */}
            <div className="flex-shrink-0">
              <img
                src="https://s3.amazonaws.com/contents.newzenler.com/33830/library/6a27bbfbd74b9_1780988923_pavanbhattad1.png"
                alt="Pavan Bhattad"
                className="rounded-xl object-cover shadow-md mx-auto"
                style={{
                  width: "clamp(120px, 30vw, 160px)",
                  height: "clamp(140px, 35vw, 190px)",
                  objectPosition: "top",
                }}
              />
            </div>

            {/* Bio */}
            <div className="flex-1 text-center sm:text-left">
              <h3
                className="text-xl sm:text-2xl font-extrabold mb-1"
                style={{ color: "#0d1b5e" }}
              >
                Pavan Bhattad
              </h3>
              <p
                className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 leading-relaxed"
                style={{ color: "#7c3aed" }}
              >
                Reading Evangelist. India's only Mind Maps Master Trainer.
                <br />
                Founder of Asia's first Institute of Thinking.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                He has spent 20 years teaching people how their own minds work.
                Most say they wish they had learned this sooner.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-md text-xs sm:text-sm font-semibold border transition-colors hover:bg-gray-100"
                style={{ borderColor: "#0d1b5e", color: "#0d1b5e" }}
              >
                His Story <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHATSAPP BANNER ══ */}
      <section
        className="w-full py-4 px-4 sm:px-6"
        style={{ backgroundColor: "#15803d" }}
      >
        
      <a    href="https://wa.me/your-number"
          target="_blank"
          rel="noopener noreferrer"
          className="max-w-6xl mx-auto flex items-center justify-center gap-2 sm:gap-3 text-white font-semibold text-xs sm:text-sm md:text-base hover:opacity-90 transition-opacity text-center"
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