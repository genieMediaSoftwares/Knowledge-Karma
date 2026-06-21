import { Link } from "react-router-dom";
import {
  ChevronRight,
  GraduationCap,
  Users,
  BookOpen,
  Globe,
  Rocket,
  Building2,
  HeartHandshake,
  Share2,
  Trophy,
  Repeat2,
   ChartLine,
  CheckCircle2,
  User,
  Briefcase,
  BookMarked,
  Lightbulb,
  GraduationCap as GradCap,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

/* ─────────────── DATA ─────────────── */
const stats = [
  {
    icon: <GraduationCap size={28} color="#fff" />,
    bg: "#2563eb",
    value: "20+",
    label: "Years of Experience",
    sub: "Two decades of helping learners grow.",
  },
  {
    icon: <Users size={28} color="#fff" />,
    bg: "#15803d",
    value: "1L+",
    label: "Learners Impacted",
    sub: "Thousands transformed across the globe.",
  },
  {
    icon: <BookOpen size={28} color="#fff" />,
    bg: "#7c3aed",
    value: "100+",
    label: "Courses Delivered",
    sub: "Designed to build skills, clarity & confidence.",
  },
  {
    icon: <Globe size={28} color="#fff" />,
    bg: "#e91e8c",
    value: "25+",
    label: "Countries Reached",
    sub: "A global community of curious minds.",
  },
];

const credentials = [
  {
    icon: <Rocket size={22} color="#fff" />,
    bg: "#2563eb",
    title: "Serial Entrepreneur",
    sub: "Built multiple successful ventures focused on education, learning, and human potential.",
  },
  {
    icon: <Building2 size={22} color="#fff" />,
    bg: "#7c3aed",
    title: "Founder Pavan Bhattad Institute of Thinking",
    sub: "Asia's First and Only Institute of Thinking.",
  },
  {
    icon: <HeartHandshake size={22} color="#fff" />,
    bg: "#e91e8c",
    title: "Founder Knowledge & Karma",
    sub: "A movement dedicated to making transformational learning accessible to everyone.",
  },
  {
    icon: <Share2 size={22} color="#fff" />,
    bg: "#ea580c",
    title: "India's Only Mind Maps Master Trainer",
    sub: "Helping professionals, students, entrepreneurs, and educators think visually and learn faster.",
  },
  {
    icon: <Trophy size={22} color="#fff" />,
    bg: "#15803d",
    title: "Ex-Chief Arbiter India's National Memory Championships",
    sub: "Evaluated and guided some of India's best memory athletes.",
  },
  {
    icon: <Globe size={22} color="#fff" />,
    bg: "#0891b2",
    title: "Ex-Referee World Memory Championships",
    sub: "Part of the international memory sports ecosystem.",
  },
  {
    icon: < ChartLine size={22} color="#fff" />,
    bg: "#7c3aed",
    title: "NLP Master Practitioner & Trainer",
    sub: "Certified expert in Neuro Linguistic Programming and human behavior transformation.",
  },
];

const audiences = [
  { icon: <GradCap size={28} strokeWidth={1.5} color="#2563eb" />, label: "Students" },
  { icon: <Briefcase size={28} strokeWidth={1.5} color="#2563eb" />, label: "Entrepreneurs" },
  { icon: <Users size={28} strokeWidth={1.5} color="#2563eb" />, label: "Corporate Leaders" },
  { icon: <BookMarked size={28} strokeWidth={1.5} color="#2563eb" />, label: "Educators" },
  { icon: <User size={28} strokeWidth={1.5} color="#2563eb" />, label: "Professionals" },
  { icon: <Lightbulb size={28} strokeWidth={1.5} color="#2563eb" />, label: "Lifelong Learners" },
];

const improvements = [
  "Reading Speed",
  "Memory",
  "Focus",
  "Learning Ability",
  "Communication",
  "Productivity",
  "Personal Growth",
];

const pillars = [
  {
    icon: <BookOpen size={30} strokeWidth={1.5} color="#2563eb" />,
    title: "Learn",
    sub: "Expand Knowledge",
    desc: "Learn faster and deeper.",
    border: "#2563eb",
  },
  {
    icon: < ChartLine size={30} strokeWidth={1.5} color="#7c3aed" />,
    title: "Grow",
    sub: "Develop Skills",
    desc: "Build capabilities that create results.",
    border: "#7c3aed",
  },
  {
    icon: <Repeat2 size={30} strokeWidth={1.5} color="#e91e8c" />,
    title: "Evolve",
    sub: "Transform Mindset",
    desc: "Upgrade the way you think.",
    border: "#e91e8c",
  },
  {
    icon: <Rocket size={30} strokeWidth={1.5} color="#ea580c" />,
    title: "Liberate",
    sub: "Live Your Best Life",
    desc: "Create freedom through awareness.",
    border: "#ea580c",
  },
];

/* ─────────────── COMPONENT ─────────────── */
const About = () => {
      const navigate = useNavigate();

  return (
    <div className="w-full font-sans">

      {/* ══ HERO ══ */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #06061a 0%, #0d1040 40%, #1a0050 75%, #2a0060 100%)",
          minHeight: "380px",
        }}
      >
        {/* dot grid */}
        <div
          className="absolute top-0 right-0 w-72 h-72 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #e91e8c 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center gap-10">
          {/* text */}
          <div className="flex-1 text-white order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug mb-4">
              You have been using your{" "}
              <span style={{ color: "#4d9fff" }}>mind</span> every day.
              <br />
              Without a manual.
            </h1>
            <p
              className="text-2xl sm:text-3xl font-bold italic mb-5"
              style={{ color: "#e91e8c" }}
            >
              Pavan Bhattad wrote one.
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3 max-w-xl">
              Knowledge and Karma is a Learning Philanthropy project by Pavan Bhattad - Your Learning Partner. Many courses conducted by Pavan before Covid at premium prices are now available as Live sessions for free. We aren't here to teach, but to help you Learn, Grow, Evolve and Liberate.  Come, let's do this together...
            </p>
          
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/919552782037"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-white text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#15803d" }}
              >
                <FaWhatsapp size={17} /> Join WhatsApp Group{" "}
                <ChevronRight size={15} />
              </a>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-white text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#2563eb" }}
              >
                Explore Courses <ChevronRight size={15} />
              </Link>
            </div>
          </div>

          {/* brain illustration (glowing circle placeholder) */}
          <div
            className="flex-shrink-0 order-1 md:order-2 flex items-center justify-center"
            style={{ width: "280px", height: "280px" }}
          >
            <div
              className="relative flex items-center justify-center"
              style={{ width: "240px", height: "240px" }}
            >
              {/* glow */}
              <div
                className="absolute inset-0 rounded-full opacity-30"
                style={{
                  background:
                    "radial-gradient(circle, #a855f7 0%, transparent 70%)",
                  filter: "blur(30px)",
                }}
              />
              < ChartLine
                size={130}
                strokeWidth={0.8}
                style={{ color: "#c084fc", filter: "drop-shadow(0 0 18px #a855f7)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ ABOUT + STATS ══ */}
      <section className="w-full bg-white py-14 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
          {/* left — about text */}
          <div className="flex-shrink-0 lg:w-64">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 leading-snug">
              About
              <br />
              <span style={{ color: "#2563eb" }}>Knowledge</span>{" "}
              <span className="text-gray-800">&</span>{" "}
              <span style={{ color: "#e91e8c" }}>Karma</span>
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              We are on a mission to unlock human potential through the power of
              knowledge, mindfulness, and focused learning. Our programs help
              learners think clearly, learn deeply, and live meaningfully.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#2563eb" }}
            >
              Know More About Us <ChevronRight size={14} />
            </Link>
          </div>

          {/* right — stats grid */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-5">
            {stats.map(({ icon, bg, value, label, sub }) => (
              <div key={label} className="flex flex-col items-center text-center gap-2">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-1"
                  style={{ backgroundColor: bg }}
                >
                  {icon}
                </div>
                <p
                  className="text-2xl font-extrabold"
                  style={{ color: "#0d1b5e" }}
                >
                  {value}
                </p>
                <p className="text-sm font-semibold text-gray-800">{label}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ COURSES ══ */}
      <section className="w-full py-14 px-6" style={{ backgroundColor: "#f5f6fa" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-2"
              style={{ color: "#0d1b5e" }}
            >
              Our Courses
            </h2>
            <div
              className="mx-auto rounded-full mb-2"
              style={{ width: 60, height: 3, backgroundColor: "#e91e8c" }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1 */}
           {[
  {
    num: 1,
    numBg: "#2563eb",
    bg: "linear-gradient(160deg,#0f1f5c,#1a2f7a)",
    btnBg: "#2563eb",
    route: "/courses/how-to-read-100-books",
    image: "https://s3.amazonaws.com/contents.newzenler.com/33830/library/6a27bb3605b12_1780988726_coursecards-ibrand-16.png", // your image URL here
    title: (
      <>
        How to Read{" "}
        <span style={{ color: "#facc15" }} className="font-extrabold">
          100 Books
        </span>{" "}
        in a Year
      </>
    ),
    titlePlain: "How to Read 100 Books in a Year",
    desc: "Learn Speed Reading, Memory Techniques, Mind Maps and Creative Thinking.",
  },
  {
    num: 2,
    numBg: "#7c3aed",
    bg: "linear-gradient(160deg,#1a0a3c,#2d0e6b)",
    btnBg: "#7c3aed",
    route: "/courses/nlp-mastery",
    image: "https://s3.amazonaws.com/contents.newzenler.com/33830/library/6a27b9ea2becc_1780988394_pavanbhattadcards-5.png", // your image URL here
    title: (
      <>
        <span style={{ color: "#c084fc" }}>NLP</span>
        <br />
        <span style={{ color: "#c084fc" }}>Mastery</span>
      </>
    ),
    titlePlain: "NLP Mastery",
    desc: "Master the art of communication, influence and personal transformation with NLP.",
  },
  {
    num: 3,
    numBg: "#15803d",
    bg: "linear-gradient(160deg,#052e16,#14532d)",
    btnBg: "#15803d",
    route: "/courses/my-25th-hour",
    image: "https://s3.amazonaws.com/contents.newzenler.com/33830/library/6a27bab564737_1780988597_pavanbhattadcards-4.png", // your image URL here
    title: (
      <>
        <span style={{ color: "#4ade80" }}>My</span>
        <br />
        <span style={{ color: "#4ade80" }}>25th Hour</span>
      </>
    ),
    titlePlain: "My 25th Hour",
    desc: "Learn the Art of Creating Time.",
  },
  {
    num: 4,
    numBg: "#b45309",
    bg: "linear-gradient(160deg,#2c1003,#431d07)",
    btnBg: "#b45309",
    route: "/courses/brain-ki-baat",
    image: "https://s3.amazonaws.com/contents.newzenler.com/33830/library/6a23a5730236d_1780721011_l-3.png", // your image URL here
    title: (
      <>
        <span style={{ color: "#fb923c" }}>Brain</span>
        <br />
        <span style={{ color: "#fb923c" }}>Ki Baat</span>
      </>
    ),
    titlePlain: "Brain Ki Baat",
    desc: "Understand how your brain works and reprogram it for success and happiness.",
  },
].map((c) => (
  <div
    key={c.num}
    onClick={() => navigate(c.route)}
    className="relative flex flex-col rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-transform hover:-translate-y-1"
    style={{ background: c.bg }}
  >
    {/* Number badge */}
    <span
      className="absolute top-3 left-3 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold z-10"
      style={{ backgroundColor: c.numBg }}
    >
      {c.num}
    </span>

    {/* Image area — contain, anchored top */}
    <div
      className="w-full flex items-start justify-center pt-8 px-4"
      style={{ minHeight: "160px", backgroundColor: "transparent" }}
    >
      {c.image ? (
        <img
          src={c.image}
          alt={c.titlePlain}
          style={{
            width: "100%",
            height: "140px",
            objectFit: "contain",
            objectPosition: "top center",
            display: "block",
          }}
        />
      ) : (
        /* Fallback placeholder when no image yet */
        <div
          className="flex items-center justify-center rounded-xl"
          style={{
            width: "100%",
            height: "140px",
            backgroundColor: `${c.numBg}22`,
            border: `1.5px dashed ${c.numBg}88`,
          }}
        >
          <span
            className="text-xs font-semibold"
            style={{ color: `${c.numBg}cc` }}
          >
            Image coming soon
          </span>
        </div>
      )}
    </div>

    {/* Title */}
    <div className="px-4 pt-3 text-center text-base font-bold text-white leading-snug mb-2">
      {c.title}
    </div>

    {/* Desc */}
    <p className="px-4 text-center text-gray-300 text-xs leading-relaxed flex-1">
      {c.desc}
    </p>

    {/* Enroll button */}
    <div className="px-4 pb-4 pt-4">
      <Link
        to={c.route}
        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-white text-sm font-semibold transition-opacity hover:opacity-90"
        style={{ backgroundColor: c.btnBg }}
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
      <section className="w-full bg-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <div
            className="flex flex-col sm:flex-row items-center sm:items-start gap-8 rounded-2xl p-8"
            style={{ backgroundColor: "#f5f6fa" }}
          >
            <div className="flex-shrink-0">
              <img
                src="https://s3.amazonaws.com/contents.newzenler.com/33830/library/6a27bbfbd74b9_1780988923_pavanbhattad1.png"
                alt="Pavan Bhattad"
                className="rounded-xl object-cover shadow-md"
                style={{ width: 160, height: 190, objectPosition: "top" }}
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-2xl font-extrabold mb-1" style={{ color: "#0d1b5e" }}>
                Pavan Bhattad
              </h3>
              <p className="text-sm font-semibold mb-4 leading-relaxed" style={{ color: "#7c3aed" }}>
                Reading Evangelist. India's only Mind Maps Master Trainer.
                <br />
                Founder of Asia's first Institute of Thinking.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                He has spent 20 years teaching people how their own minds work.
                Most say they wish they had learned this sooner.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold border transition-colors hover:bg-gray-100"
                style={{ borderColor: "#0d1b5e", color: "#0d1b5e" }}
              >
                His Story <ChevronRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROFESSIONAL CREDENTIALS ══ */}
      <section className="w-full py-14 px-6" style={{ backgroundColor: "#f5f6fa" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: "#0d1b5e" }}>
              Professional Credentials
            </h2>
            <div
              className="mx-auto rounded-full"
              style={{ width: 60, height: 3, backgroundColor: "#e91e8c" }}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map(({ icon, bg, title, sub }) => (
              <div key={title} className="flex flex-col items-start gap-3 bg-white rounded-xl p-5 shadow-sm">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: bg }}
                >
                  {icon}
                </div>
                <p className="text-sm font-bold text-gray-800 leading-snug">{title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 20 YEARS SECTION ══ */}
      <section className="w-full bg-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: "#0d1b5e" }}>
              20 Years of Understanding the Human Mind
            </h2>
            <div
              className="mx-auto rounded-full"
              style={{ width: 60, height: 3, backgroundColor: "#e91e8c" }}
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* left */}
            <div className="flex-1">
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Over the years, Pavan has worked with thousands of people from all walks of life.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-2">
                {audiences.map(({ icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-2 text-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#eff6ff" }}
                    >
                      {icon}
                    </div>
                    <p className="text-xs font-semibold text-gray-700">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* middle — improvements */}
            <div className="flex-1">
              <p className="text-gray-700 font-semibold text-sm mb-4">Helping them improve:</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-6">
                {improvements.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 size={16} style={{ color: "#15803d", flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* right — brain visual */}
            <div className="hidden lg:flex flex-shrink-0 items-center justify-center" style={{ width: 200 }}>
              <div className="relative flex items-center justify-center" style={{ width: 180, height: 180 }}>
                <div
                  className="absolute inset-0 rounded-full opacity-30"
                  style={{
                    background: "radial-gradient(circle, #a855f7 0%, transparent 70%)",
                    filter: "blur(20px)",
                  }}
                />
                < ChartLine size={100} strokeWidth={0.8} style={{ color: "#c084fc", filter: "drop-shadow(0 0 14px #a855f7)" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHY FREE ══ */}
      <section
        className="w-full py-14 px-6"
        style={{ backgroundColor: "#0d1040" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
          {/* gift icon glow */}
          <div className="flex-shrink-0 flex items-center justify-center" style={{ width: 160, height: 160 }}>
            <div className="relative flex items-center justify-center" style={{ width: 140, height: 140 }}>
              <div
                className="absolute inset-0 rounded-full opacity-40"
                style={{ background: "radial-gradient(circle,#7c3aed,transparent 70%)", filter: "blur(20px)" }}
              />
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center"
                style={{ border: "2px solid #c084fc", backgroundColor: "rgba(124,58,237,0.15)" }}
              >
                <span className="text-4xl">🎁</span>
              </div>
            </div>
          </div>

          {/* why free text */}
          <div className="flex-1 text-white">
            <p className="text-xs font-semibold tracking-widest mb-1" style={{ color: "#c084fc" }}>
              KNOWLEDGE &amp; KARMA
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Why Free?</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-2">
              Because Pavan has seen what happens when the right person gets the right knowledge at the right time.
            </p>
            <p className="text-gray-300 text-sm mb-1">These courses were paid.</p>
            <p className="text-gray-300 text-sm mb-1">And now they are free.</p>
            <p className="text-gray-300 text-sm mb-6">That is the whole story.</p>
            <a
              href="https://wa.me/919552782037"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-white text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#15803d" }}
            >
              <FaWhatsapp size={17} /> Join WhatsApp Group <ChevronRight size={15} />
            </a>
          </div>

          {/* quote */}
          <div
            className="flex-shrink-0 lg:w-72 rounded-xl p-6 relative"
            style={{ backgroundColor: "#1a1060" }}
          >
            <span className="text-5xl font-serif leading-none" style={{ color: "#7c3aed", lineHeight: 1 }}>
              ❝
            </span>
            <p className="text-white text-base sm:text-lg font-semibold italic leading-relaxed mt-2 mb-4">
              The greatest investment is not in a stock, a business, or a degree.
              It is in understanding your own mind.
            </p>
            <p className="text-sm font-semibold" style={{ color: "#c084fc" }}>
              — Pavan Bhattad
            </p>
            <span
              className="absolute bottom-4 right-5 text-5xl font-serif"
              style={{ color: "#7c3aed", lineHeight: 1 }}
            >
              ❞
            </span>
          </div>
        </div>
      </section>

      {/* ══ PILLARS ══ */}
      <section className="w-full bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {pillars.map(({ icon, title, sub, desc, border }) => (
            <div key={title} className="flex flex-col items-center text-center gap-2">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-1"
                style={{ border: `2px solid ${border}`, backgroundColor: "#f5f6fa" }}
              >
                {icon}
              </div>
              <p className="font-bold text-gray-800 text-base">{title}</p>
              <p className="text-xs font-semibold" style={{ color: border }}>{sub}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ BOTTOM CTA BANNER ══ */}
      <section
        className="w-full py-5 px-6"
        style={{ backgroundColor: "#0d1040" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="text-white text-xl font-extrabold mb-1">
              Ready to Unlock Your Potential?
            </h3>
            <p className="text-gray-400 text-sm">
              Join thousands of learners discovering how their minds really work.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center sm:justify-end">
            <a
              href="https://wa.me/919552782037"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-white text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#15803d" }}
            >
              <FaWhatsapp size={17} /> Join WhatsApp Group <ChevronRight size={15} />
            </a>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-white text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#2563eb" }}
            >
              Explore Free Courses <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;