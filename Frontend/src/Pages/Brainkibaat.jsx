import {
  ChevronRight,
  Calendar,
  Award,
  Video,
  CheckCircle,
  MessageCircle,
  Users,
  GraduationCap,
  Briefcase,
  BookOpen,
  Brain,
  Settings2,
  TrendingUp,
  Frown,
} from "lucide-react";

// ── Data ─────────────────────────────────────────────────────────────────────

const trainingPoints = [
  {
    id: 1,
    icon: <Brain size={26} strokeWidth={1.5} style={{ color: "#fff" }} />,
    title: "How your brain actually works",
    desc: "You have been using your brain every single day without knowing how it processes information, builds habits, or makes decisions. Most people find this session alone changes how they see everything.",
  },
  {
    id: 2,
    icon: <Settings2 size={26} strokeWidth={1.5} style={{ color: "#fff" }} />,
    title: "How to reprogram what is holding you back",
    desc: "The patterns that limit you were learned. Which means they can be unlearned. We'll show you the specific methods to replace them with ones that actually work for you.",
  },
  {
    id: 3,
    icon: <TrendingUp size={26} strokeWidth={1.5} style={{ color: "#fff" }} />,
    title: "How to direct it toward success and happiness",
    desc: "A brain on autopilot takes you wherever the default settings go. This session teaches you to take the wheel and use your mind with full intention.",
  },
];

const learnings = [
  "The basics of how the brain functions",
  "How habits and beliefs are formed",
  "Techniques to reprogram your mind",
  "Build a success and happiness mindset",
  "Use your brain with clarity and purpose",
];

const audience = [
  { icon: <GraduationCap size={20} strokeWidth={1.5} style={{ color: "#F97316" }} />, label: "Students" },
  { icon: <Users size={20} strokeWidth={1.5} style={{ color: "#F97316" }} />, label: "Professionals" },
  { icon: <Briefcase size={20} strokeWidth={1.5} style={{ color: "#F97316" }} />, label: "Entrepreneurs" },
  { icon: <Frown size={20} strokeWidth={1.5} style={{ color: "#F97316" }} />, label: "Anyone feeling stuck" },
  { icon: <BookOpen size={20} strokeWidth={1.5} style={{ color: "#F97316" }} />, label: "Anyone who wants to understand their mind better" },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function FeatureBadge({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <div style={{ color: "#F97316" }}>{icon}</div>
      <div>
        <p className="text-xs leading-none mb-0.5" style={{ color: "#a16207" }}>{label}</p>
        <p className="text-sm font-bold leading-none" style={{ color: "#fff" }}>{value}</p>
      </div>
    </div>
  );
}

function TrainingCard({ point, showDivider }) {
  return (
    <div>
      <div className="flex gap-4 items-start">
        {/* Icon circle */}
        <div
          className="flex-shrink-0 flex items-center justify-center rounded-full"
          style={{
            width: 52,
            height: 52,
            minWidth: 52,
            background: "linear-gradient(135deg, #c2410c 0%, #ea580c 100%)",
            border: "1.5px solid #f9731655",
            boxShadow: "0 0 12px rgba(249,115,22,0.3)",
          }}
        >
          {point.icon}
        </div>
        <div>
          <p className="font-bold text-sm leading-snug mb-1.5" style={{ color: "#fff" }}>
            {point.title}
          </p>
          <p className="text-xs leading-relaxed" style={{ color: "#d1d5db" }}>
            {point.desc}
          </p>
        </div>
      </div>
      {showDivider && (
        <div className="mt-5" style={{ borderTop: "1px solid #431407" }} />
      )}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function Brainkibaat() {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: "radial-gradient(ellipse at top, #1c0a00 0%, #110600 50%, #080300 100%)",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
      }}
    >
      {/* Subtle dot grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(249,115,22,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-6">

        {/* ── Breadcrumb ── */}
        <nav className="flex items-center gap-2 text-sm mb-6">
          <a href="/courses" style={{ color: "#F97316", textDecoration: "none", fontWeight: 500 }}>
            Courses
          </a>
          <ChevronRight size={14} style={{ color: "#7c2d12" }} />
          <span style={{ color: "#d1d5db" }}>Brain Ki Baat</span>
        </nav>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* ══ LEFT COLUMN ══ */}
          <div className="flex flex-col gap-5">

            {/* Hero card */}
            <div
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1c0e00 0%, #120900 100%)",
                border: "1.5px solid #431407",
              }}
            >
              {/* Number badge */}
              <div
                className="absolute top-4 left-4 w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm z-10"
                style={{ background: "#EA580C" }}
              >
                4
              </div>

              {/* Image + Title row */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5 mt-2">
                {/* Course image */}
                <div className="flex-shrink-0">
                  <img
                    src="https://s3.amazonaws.com/contents.newzenler.com/33830/library/6a23a5730236d_1780721011_l-3.png"
                    alt="Glowing orange brain"
                    className="rounded-xl object-contain"
                    style={{
                      width: 180,
                      height: 210,
                      background: "#120900",
                      border: "1px dashed #ea580c44",
                    }}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div
                    className="rounded-xl items-center justify-center flex-col gap-1"
                    style={{
                      width: 180,
                      height: 210,
                      display: "none",
                      background: "linear-gradient(135deg, #7c2d1244, #c2410c44)",
                      border: "1px dashed #ea580c88",
                      color: "#F97316",
                    }}
                  >
                    <span style={{ fontSize: 56 }}>🧠</span>
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: "#F97316" }}>BRAIN KI BAAT</span>
                  </div>
                </div>

                {/* Title + description */}
                <div>
                  <h1
                    className="font-extrabold leading-tight"
                    style={{
                      color: "#F97316",
                      fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                      textShadow: "0 0 30px rgba(249,115,22,0.35)",
                    }}
                  >
                    Brain Ki Baat
                  </h1>
                  <p
                    className="mt-3 text-base leading-relaxed"
                    style={{ color: "#e2e8f0", maxWidth: 300 }}
                  >
                    Understand how your brain works and reprogram it for success and happiness.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature badges card */}
            <div
              className="rounded-2xl px-6 py-5"
              style={{
                background: "linear-gradient(135deg, #1c0e00 0%, #120900 100%)",
                border: "1.5px solid #431407",
              }}
            >
              <div className="flex flex-row flex-wrap gap-x-8 gap-y-4">
                <FeatureBadge icon={<Calendar size={22} />} label="Live Sessions" value="Free" />
                <FeatureBadge icon={<Award size={22} />} label="Certification" value="Chargeable" />
                <FeatureBadge icon={<Video size={22} />} label="Recordings" value="Chargeable" />
              </div>
            </div>

            {/* What You Will Learn */}
            <div
              className="rounded-2xl px-6 py-5 flex-1"
              style={{
                background: "linear-gradient(135deg, #1c0e00 0%, #120900 100%)",
                border: "1.5px solid #431407",
              }}
            >
              <h2 className="font-bold text-lg mb-4" style={{ color: "#F97316" }}>
                What You Will Learn
              </h2>
              <ul className="flex flex-col gap-3">
                {learnings.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      strokeWidth={1.8}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: "#F97316" }}
                    />
                    <span className="text-sm leading-relaxed" style={{ color: "#e2e8f0" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ══ RIGHT COLUMN ══ */}
          <div className="flex flex-col gap-5">

            {/* In this free training card */}
            <div
              className="rounded-2xl px-6 py-5 flex-1"
              style={{
                background: "linear-gradient(135deg, #1c0e00 0%, #120900 100%)",
                border: "1.5px solid #431407",
              }}
            >
              <p className="font-semibold text-base mb-6 italic" style={{ color: "#F97316" }}>
                In this free training, you will learn...
              </p>
              <div className="flex flex-col gap-5">
                {trainingPoints.map((point, i) => (
                  <TrainingCard
                    key={point.id}
                    point={point}
                    showDivider={i < trainingPoints.length - 1}
                  />
                ))}
              </div>
            </div>

            {/* Who Should Join */}
            <div
              className="rounded-2xl px-6 py-5"
              style={{
                background: "linear-gradient(135deg, #1c0e00 0%, #120900 100%)",
                border: "1.5px solid #431407",
              }}
            >
              <h2 className="font-bold text-lg mb-4" style={{ color: "#F97316" }}>
                Who Should Join?
              </h2>
              <ul className="flex flex-col gap-3">
                {audience.map((a, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex-shrink-0">{a.icon}</span>
                    <span className="text-sm" style={{ color: "#e2e8f0" }}>{a.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Bottom CTA Buttons ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {/* Enroll Now — orange */}
          <a
            href="#"
            className="flex items-center justify-center gap-3 rounded-xl py-4 font-bold text-white text-base transition-all duration-200"
            style={{
              background: "linear-gradient(90deg, #EA580C, #c2410c)",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(234,88,12,0.4)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Enroll Now. Free
            <ChevronRight size={20} />
          </a>

          {/* WhatsApp — green */}
          <a
           href="https://wa.me/919552782037"
            className="flex items-center justify-center gap-3 rounded-xl py-4 font-bold text-white text-base transition-all duration-200"
            style={{
              background: "linear-gradient(90deg, #16A34A, #15803d)",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(22,163,74,0.35)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <MessageCircle size={20} />
            Join Our WhatsApp Group
          </a>
        </div>

      </div>
    </div>
  );
}