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
    icon: <GraduationCap size={28} />,
    value: "20+",
    label: "Years of Experience",
    sub: "Two decades of helping learners grow.",
    color: "#1D4BC9",
    bgStyle: { backgroundColor: "rgba(29, 75, 201, 0.08)", borderColor: "rgba(29, 75, 201, 0.2)", color: "#1D4BC9" },
  },
  {
    icon: <Users size={28} />,
    value: "1L+",
    label: "Learners Impacted",
    sub: "Thousands transformed across the globe.",
    color: "#10B981",
    bgStyle: { backgroundColor: "rgba(16, 185, 129, 0.08)", borderColor: "rgba(16, 185, 129, 0.2)", color: "#10B981" },
  },
  {
    icon: <BookOpen size={28} />,
    value: "100+",
    label: "Courses Delivered",
    sub: "Designed to build skills, clarity & confidence.",
    color: "#7C3AED",
    bgStyle: { backgroundColor: "rgba(124, 58, 237, 0.08)", borderColor: "rgba(124, 58, 237, 0.2)", color: "#7C3AED" },
  },
  {
    icon: <Globe size={28} />,
    value: "25+",
    label: "Countries Reached",
    sub: "A global community of curious minds.",
    color: "#EC4899",
    bgStyle: { backgroundColor: "rgba(236, 72, 153, 0.08)", borderColor: "rgba(236, 72, 153, 0.2)", color: "#EC4899" },
  },
];

const credentials = [
  {
    icon: <Rocket size={22} />,
    title: "Serial Entrepreneur",
    sub: "Built multiple successful ventures focused on education, learning, and human potential.",
    bgStyle: { backgroundColor: "rgba(245, 158, 11, 0.08)", border: "1.5px solid rgba(245, 158, 11, 0.2)", color: "#F59E0B" },
  },
  {
    icon: <Building2 size={22} />,
    title: "Founder Pavan Bhattad Institute of Thinking",
    sub: "Asia's First and Only Institute of Thinking.",
    bgStyle: { backgroundColor: "rgba(16, 185, 129, 0.08)", border: "1.5px solid rgba(16, 185, 129, 0.2)", color: "#10B981" },
  },
  {
    icon: <HeartHandshake size={22} />,
    title: "Founder Knowledge & Karma",
    sub: "A movement dedicated to making transformational learning accessible to everyone.",
    bgStyle: { backgroundColor: "rgba(236, 72, 153, 0.08)", border: "1.5px solid rgba(236, 72, 153, 0.2)", color: "#EC4899" },
  },
  {
    icon: <Share2 size={22} />,
    title: "India's Only Mind Maps Master Trainer",
    sub: "Helping professionals, students, entrepreneurs, and educators think visually and learn faster.",
    bgStyle: { backgroundColor: "rgba(29, 75, 201, 0.08)", border: "1.5px solid rgba(29, 75, 201, 0.2)", color: "#1D4BC9" },
  },
  {
    icon: <Trophy size={22} />,
    title: "Ex-Chief Arbiter India's National Memory Championships",
    sub: "Evaluated and guided some of India's best memory athletes.",
    bgStyle: { backgroundColor: "rgba(139, 92, 246, 0.08)", border: "1.5px solid rgba(139, 92, 246, 0.2)", color: "#8B5CF6" },
  },
  {
    icon: <Globe size={22} />,
    title: "Ex-Referee World Memory Championships",
    sub: "Part of the international memory sports ecosystem.",
    bgStyle: { backgroundColor: "rgba(6, 182, 212, 0.08)", border: "1.5px solid rgba(6, 182, 212, 0.2)", color: "#06B6D4" },
  },
  {
    icon: <ChartLine size={22} />,
    title: "NLP Master Practitioner & Trainer",
    sub: "Certified expert in Neuro Linguistic Programming and human behavior transformation.",
    bgStyle: { backgroundColor: "rgba(99, 102, 241, 0.08)", border: "1.5px solid rgba(99, 102, 241, 0.2)", color: "#6366F1" },
  },
];

const audiences = [
  { icon: <GradCap size={28} strokeWidth={1.5} />, label: "Students", color: "#1D4BC9", bgColor: "rgba(29, 75, 201, 0.06)" },
  { icon: <Briefcase size={28} strokeWidth={1.5} />, label: "Entrepreneurs", color: "#10B981", bgColor: "rgba(16, 185, 129, 0.06)" },
  { icon: <Users size={28} strokeWidth={1.5} />, label: "Corporate Leaders", color: "#7C3AED", bgColor: "rgba(124, 58, 237, 0.06)" },
  { icon: <BookMarked size={28} strokeWidth={1.5} />, label: "Educators", color: "#EC4899", bgColor: "rgba(236, 72, 153, 0.06)" },
  { icon: <User size={28} strokeWidth={1.5} />, label: "Professionals", color: "#06B6D4", bgColor: "rgba(6, 182, 212, 0.06)" },
  { icon: <Lightbulb size={28} strokeWidth={1.5} />, label: "Lifelong Learners", color: "#E6683C", bgColor: "rgba(230, 104, 60, 0.06)" },
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
    icon: <BookOpen size={30} strokeWidth={1.5} />,
    title: "Learn",
    sub: "Expand Knowledge",
    desc: "Learn faster and deeper.",
    color: "#1D4BC9",
    bgColor: "rgba(29, 75, 201, 0.04)"
  },
  {
    icon: <ChartLine size={30} strokeWidth={1.5} />,
    title: "Grow",
    sub: "Develop Skills",
    desc: "Build capabilities that create results.",
    color: "#7C3AED",
    bgColor: "rgba(124, 58, 237, 0.04)"
  },
  {
    icon: <Repeat2 size={30} strokeWidth={1.5} />,
    title: "Evolve",
    sub: "Transform Mindset",
    desc: "Upgrade the way you think.",
    color: "#EC4899",
    bgColor: "rgba(236, 72, 153, 0.04)"
  },
  {
    icon: <Rocket size={30} strokeWidth={1.5} />,
    title: "Liberate",
    sub: "Live Your Best Life",
    desc: "Create freedom through awareness.",
    color: "#E6683C",
    bgColor: "rgba(230, 104, 60, 0.04)"
  }
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
          background: "linear-gradient(135deg, #0D1F3C 0%, rgba(13,31,60,0.9) 100%)",
          minHeight: "380px",
        }}
      >
        {/* dot grid */}
        <div
          className="absolute top-0 right-0 w-72 h-72 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center gap-10">
          {/* text */}
          <div className="flex-1 text-white order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold leading-tight mb-4">
              You have been using your{" "}
              <span className="text-white/80">mind</span> every day.
              <br />
              Without a manual.
            </h1>
            <p className="text-2xl sm:text-3xl font-heading font-bold italic mb-5 text-white/90">
              Pavan Bhattad wrote one.
            </p>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-3 max-w-xl">
              Knowledge and Karma is a Learning Philanthropy project by Pavan Bhattad - Your Learning Partner. Many courses conducted by Pavan before Covid at premium prices are now available as Live sessions for free. We aren't here to teach, but to help you Learn, Grow, Evolve and Liberate.  Come, let's do this together...
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/919552782037"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-white text-sm transition-all duration-200 bg-whatsapp hover:bg-[#1ebd5b]"
              >
                <FaWhatsapp size={17} /> Join WhatsApp Group{" "}
                <ChevronRight size={15} />
              </a>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-white text-sm transition-all duration-200 bg-accent hover:bg-[#163cb1]"
              >
                Explore Courses <ChevronRight size={15} />
              </Link>
            </div>
          </div>

          {/* brain illustration */}
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
                className="absolute inset-0 rounded-full opacity-20"
                style={{
                  background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
                  filter: "blur(30px)",
                }}
              />
              <ChartLine
                size={130}
                strokeWidth={0.8}
                style={{ color: "rgba(255,255,255,0.6)", filter: "drop-shadow(0 0 18px rgba(255,255,255,0.2))" }}
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
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold mb-3 leading-snug">
              About
              <br />
              <span style={{ color: "#0D1F3C" }}>Knowledge</span>{" "}
              <span className="text-black">&</span>{" "}
              <span style={{ color: "#0D1F3C" }}>Karma</span>
            </h2>
            <p className="text-black text-sm leading-relaxed mb-5">
              We are on a mission to unlock human potential through the power of
              knowledge, mindfulness, and focused learning. Our programs help
              learners think clearly, learn deeply, and live meaningfully.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-heading font-semibold text-white transition-all duration-200 bg-accent hover:bg-[#163cb1] shadow-lg shadow-accent/20"
            >
              Know More About Us <ChevronRight size={14} />
            </Link>
          </div>

          {/* right — stats grid */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-5">
            {stats.map(({ icon, value, label, sub, color, bgStyle }) => (
              <div key={label} className="flex flex-col items-center text-center gap-2 group">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-2 border transition-transform duration-300 group-hover:scale-110"
                  style={bgStyle}
                >
                  {icon}
                </div>
                <p
                  className="font-heading font-black text-2xl"
                  style={{ color }}
                >
                  {value}
                </p>
                <p className="text-sm font-heading font-bold text-black">{label}</p>
                <p className="text-xs text-black/60 leading-relaxed">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ COURSES ══ */}
      <section className="w-full py-14 px-6 bg-white" style={{ borderTop: "1px solid rgba(13,31,60,0.08)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2
              className="text-3xl sm:text-4xl font-heading font-extrabold mb-2"
              style={{ color: "#0D1F3C" }}
            >
              Our Courses
            </h2>
            <div
              className="mx-auto rounded-full mb-2"
              style={{ width: 60, height: 3, backgroundColor: "#C0176E" }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                num: 1,
                route: "/courses/how-to-read-100-books",
                image: "https://s3.amazonaws.com/contents.newzenler.com/33830/library/6a27bb3605b12_1780988726_coursecards-ibrand-16.png",
                title: <>How to Read <span className="text-[#1D4BC9] font-extrabold">100 Books</span> in a Year</>,
                titlePlain: "How to Read 100 Books in a Year",
                desc: "Learn Speed Reading, Memory Techniques, Mind Maps and Creative Thinking.",
                color: "#1D4BC9",
                hoverColor: "#163cb1",
                shadow: "rgba(29,75,201,0.12)",
                bgGradient: "#ffffff",
                borderColor: "#1D4BC9",
              },
              {
                num: 2,
                route: "/courses/nlp-mastery",
                image: "https://s3.amazonaws.com/contents.newzenler.com/33830/library/6a27b9ea2becc_1780988394_pavanbhattadcards-5.png",
                title: <span className="text-[#7C3AED] font-bold">NLP Mastery</span>,
                titlePlain: "NLP Mastery",
                desc: "Master the art of communication, influence and personal transformation with NLP.",
                color: "#7C3AED",
                hoverColor: "#6d28d9",
                shadow: "rgba(124,58,237,0.12)",
                bgGradient: "#ffffff",
                borderColor: "#7C3AED",
              },
              {
                num: 3,
                route: "/courses/my-25th-hour",
                image: "https://s3.amazonaws.com/contents.newzenler.com/33830/library/6a27bab564737_1780988597_pavanbhattadcards-4.png",
                title: <span className="text-[#059669] font-bold">My 25th Hour</span>,
                titlePlain: "My 25th Hour",
                desc: "Learn the Art of Creating Time.",
                color: "#059669",
                hoverColor: "#047857",
                shadow: "rgba(5,150,105,0.12)",
                bgGradient: "#ffffff",
                borderColor: "#059669",
              },
              {
                num: 4,
                route: "/courses/brain-ki-baat",
                image: "https://s3.amazonaws.com/contents.newzenler.com/33830/library/6a23a5730236d_1780721011_l-3.png",
                title: <span className="text-[#B45309] font-bold">Brain Ki Baat</span>,
                titlePlain: "Brain Ki Baat",
                desc: "Understand how your brain works and reprogram it for success and growth.",
                color: "#B45309",
                hoverColor: "#92400E",
                shadow: "rgba(180,83,9,0.12)",
                bgGradient: "#ffffff",
                borderColor: "#B45309",
              },
            ].map((c) => (
              <div
                key={c.num}
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

                {/* Image area */}
                <div
                  className="w-full flex items-start justify-center pt-8 px-4"
                  style={{ minHeight: "160px", backgroundColor: "transparent" }}
                >
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
                </div>

                {/* Title */}
                <div className="px-4 pt-3 text-center text-base font-heading font-bold text-[#0D1F3C] leading-snug mb-2">
                  {c.title}
                </div>

                {/* Desc */}
                <p className="px-4 text-center text-gray-600 text-xs leading-relaxed flex-1 font-sans">
                  {c.desc}
                </p>

                {/* Enroll button */}
                <div className="px-4 pb-4 pt-3">
                  <Link
                    to={c.route}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-white text-sm font-heading font-semibold transition-all duration-200 border-none cursor-pointer"
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
      <section className="w-full bg-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <div
            className="flex flex-col sm:flex-row items-center sm:items-start gap-8 rounded-2xl p-8"
            style={{ border: "1px solid rgba(13,31,60,0.1)" }}
          >
            <div className="flex-shrink-0">
              <img
                src="https://s3.amazonaws.com/contents.newzenler.com/33830/library/6a27bbfbd74b9_1780988923_pavanbhattad1.png"
                alt="Pavan Bhattad"
                className="rounded-xl object-cover"
                style={{ width: 160, height: 190, objectPosition: "top", boxShadow: "0 4px 20px rgba(13,31,60,0.08)" }}
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-2xl font-heading font-extrabold mb-1" style={{ color: "#0D1F3C" }}>
                Pavan Bhattad
              </h3>
              <p className="text-sm font-semibold mb-4 leading-relaxed" style={{ color: "#0D1F3C" }}>
                Reading Evangelist. India's only Mind Maps Master Trainer.
                <br />
                Founder of Asia's first Institute of Thinking.
              </p>
              <p className="text-black text-sm sm:text-base leading-relaxed mb-6">
                He has spent 20 years teaching people how their own minds work.
                Most say they wish they had learned this sooner.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold border transition-colors hover:bg-black/5"
                style={{ borderColor: "#0D1F3C", color: "#0D1F3C" }}
              >
                His Story <ChevronRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROFESSIONAL CREDENTIALS ══ */}
      <section className="w-full py-14 px-6 bg-white" style={{ borderTop: "1px solid rgba(13,31,60,0.08)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold mb-2" style={{ color: "#0D1F3C" }}>
              Professional Credentials
            </h2>
            <div
              className="mx-auto rounded-full"
              style={{ width: 60, height: 3, backgroundColor: "#C0176E" }}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map(({ icon, title, sub, bgStyle }) => (
              <div
                key={title}
                className="flex flex-col items-start gap-4 bg-white rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 h-full"
                style={{ boxShadow: "0 4px 20px rgba(13,31,60,0.05)", border: "1px solid rgba(13,31,60,0.06)" }}
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={bgStyle}
                >
                  {icon}
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <p className="text-sm font-heading font-bold text-black leading-snug">{title}</p>
                  <p className="text-xs text-black/60 leading-relaxed">{sub}</p>
                </div>
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
          {pillars.map(({ icon, title, sub, desc, color, bgColor }) => (
            <div key={title} className="flex flex-col items-center text-center gap-2 group">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-1 transition-all duration-300 group-hover:scale-105 border-2"
                style={{ borderColor: color, backgroundColor: bgColor, color }}
              >
                {icon}
              </div>
              <p className="font-bold text-black text-base font-heading">{title}</p>
              <p className="text-xs font-semibold font-heading" style={{ color }}>{sub}</p>
              <p className="text-xs text-black/60 leading-relaxed font-sans">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ BOTTOM CTA BANNER ══ */}
      <section
        className="w-full py-5 px-6"
        style={{ backgroundColor: "#0D1F3C" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="text-white text-xl font-heading font-extrabold mb-1">
              Ready to Unlock Your Potential?
            </h3>
            <p className="text-white/50 text-sm">
              Join thousands of learners discovering how their minds really work.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center sm:justify-end">
            <a
              href="https://wa.me/919552782037"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-white text-sm transition-all duration-200 bg-whatsapp hover:bg-[#1ebd5b]"
            >
              <FaWhatsapp size={17} /> Join WhatsApp Group <ChevronRight size={15} />
            </a>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-white text-sm transition-all duration-200 bg-accent hover:bg-[#163cb1]"
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