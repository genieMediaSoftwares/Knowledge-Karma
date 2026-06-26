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
  { icon: <GraduationCap size={20} strokeWidth={1.5} style={{ color: "#C084FC" }} />, label: "Students" },
  { icon: <Users size={20} strokeWidth={1.5} style={{ color: "#C084FC" }} />, label: "Professionals" },
  { icon: <Briefcase size={20} strokeWidth={1.5} style={{ color: "#C084FC" }} />, label: "Entrepreneurs" },
  { icon: <Frown size={20} strokeWidth={1.5} style={{ color: "#C084FC" }} />, label: "Anyone feeling stuck" },
  { icon: <BookOpen size={20} strokeWidth={1.5} style={{ color: "#C084FC" }} />, label: "Anyone who wants to understand their mind better" },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function FeatureBadge({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <div style={{ color: "#C084FC" }}>{icon}</div>
      <div>
        <p className="text-xs leading-none mb-0.5" style={{ color: "#94a3b8" }}>{label}</p>
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
            background: "linear-gradient(135deg, #3b0764 0%, #4c1d95 100%)",
            border: "1.5px solid #7c3aed55",
            boxShadow: "0 4px 20px rgba(124,58,237,0.4)",
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
        <div className="mt-5" style={{ borderTop: "1px solid #3b1a6e" }} />
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
          backgroundImage: "radial-gradient(circle, rgba(192,132,252,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-6">

        {/* ── Breadcrumb ── */}
        <nav className="flex items-center gap-2 text-sm mb-6">
          <a href="/courses" style={{ color: "#C084FC", textDecoration: "none", fontWeight: 500 }}>
            Courses
          </a>
          <ChevronRight size={14} style={{ color: "#64748b" }} />
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
                background: "linear-gradient(135deg, #130a2a 0%, #0d0618 100%)",
                border: "1.5px solid #3b1a6e",
              }}
            >
              {/* Number badge */}
              <div
                className="absolute top-4 left-4 w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm z-10"
                style={{ background: "#7C3AED" }}
              >
                2
              </div>

              {/* Image + Title row */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5 mt-2">
                {/* Course image */}
                <div className="flex-shrink-0">
                  <img
                    src="https://res.cloudinary.com/dbazx1qbu/image/upload/v1781764273/a7d241a8-3a72-4341-a297-8b380ee84f5e_avvjom.jpg"
                    alt="Glowing orange brain"
                    className="rounded-xl object-contain"
                    style={{
                      width: 180,
                      height: 210,
                      background: "#0d0618",
                      border: "1px dashed #7c3aed44",
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
                      background: "linear-gradient(135deg, #3b076444, #4c1d9544)",
                      border: "1px dashed #7c3aed88",
                      color: "#C084FC",
                    }}
                  >
                    <span style={{ fontSize: 56 }}>🧠</span>
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: "#C084FC" }}>BRAIN KI BAAT</span>
                  </div>
                </div>

                {/* Title + description */}
                <div>
                  <h1
                    className="font-extrabold leading-tight"
                    style={{
                      color: "#C084FC",
                      fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                      textShadow: "0 0 30px rgba(192,132,252,0.4)",
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
                background: "linear-gradient(135deg, #130a2a 0%, #0d0618 100%)",
                border: "1.5px solid #3b1a6e",
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
                background: "linear-gradient(135deg, #130a2a 0%, #0d0618 100%)",
                border: "1.5px solid #3b1a6e",
              }}
            >
              <h2 className="font-bold text-lg mb-4" style={{ color: "#C084FC" }}>
                What You Will Learn
              </h2>
              <ul className="flex flex-col gap-3">
                {learnings.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      strokeWidth={1.8}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: "#C084FC" }}
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
                background: "linear-gradient(135deg, #130a2a 0%, #0d0618 100%)",
                border: "1.5px solid #3b1a6e",
              }}
            >
              <p className="font-semibold text-base mb-6 italic" style={{ color: "#C084FC" }}>
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
                background: "linear-gradient(135deg, #130a2a 0%, #0d0618 100%)",
                border: "1.5px solid #3b1a6e",
              }}
            >
              <h2 className="font-bold text-lg mb-4" style={{ color: "#C084FC" }}>
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
              background: "linear-gradient(90deg, #7C3AED, #6d28d9)",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(124,58,237,0.4)",
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