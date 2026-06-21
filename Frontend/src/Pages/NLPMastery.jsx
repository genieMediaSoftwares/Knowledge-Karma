import {
  ChevronRight,
  Calendar,
  Award,
  Video,
  CheckSquare,
  MessageCircle,
  Users,
  UserCheck,
  GraduationCap,
  Heart,
  MessageSquare,
  Zap,
  RefreshCw,
} from "lucide-react";

// ── Data ─────────────────────────────────────────────────────────────────────

const trainingPoints = [
  {
    id: 1,
    icon: <Users size={26} strokeWidth={1.5} style={{ color: "#60A5FA" }} />,
    title: "Communication",
    desc: "Every word you use is shaping how you think and how others respond to you. Learn how language actually works in the brain and use it with far more precision and impact.",
  },
  {
    id: 2,
    icon: <UserCheck size={26} strokeWidth={1.5} style={{ color: "#60A5FA" }} />,
    title: "Influence",
    desc: "Influence is the ability to connect, lead, and move people toward better outcomes. Learn how it works so you can use it with integrity and spot when it is being used on you.",
  },
  {
    id: 3,
    icon: <RefreshCw size={26} strokeWidth={1.5} style={{ color: "#60A5FA" }} />,
    title: "Personal Transformation",
    desc: "The patterns running your life right now were formed without your permission. NLP gives you the tools to find them, understand them, and replace the ones that hold you back.",
  },
];

const learnings = [
  "The science behind communication and behavior",
  "How to build influence with authenticity",
  "Techniques to break limiting patterns",
  "Tools for personal transformation",
  "Practical NLP skills for everyday life",
];

const audience = [
  { icon: <Users size={20} strokeWidth={1.5} style={{ color: "#60A5FA" }} />, label: "Professionals and Leaders" },
  { icon: <MessageSquare size={20} strokeWidth={1.5} style={{ color: "#60A5FA" }} />, label: "Sales and Marketing Teams" },
  { icon: <GraduationCap size={20} strokeWidth={1.5} style={{ color: "#60A5FA" }} />, label: "Students and Graduates" },
  { icon: <Heart size={20} strokeWidth={1.5} style={{ color: "#60A5FA" }} />, label: "Anyone who wants to communicate better and lead better" },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function FeatureBadge({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <div style={{ color: "#60A5FA" }}>{icon}</div>
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
            background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)",
            border: "1.5px solid #2563eb55",
          }}
        >
          {point.icon}
        </div>
        <div>
          <p className="font-bold text-base leading-snug mb-1.5" style={{ color: "#fff" }}>
            {point.title}
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
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

export default function NLPMastery() {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: "radial-gradient(ellipse at top, #1a0533 0%, #0d0118 50%, #06000f 100%)",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
      }}
    >
      {/* Dot grid overlay */}
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
          <a href="/courses" style={{ color: "#60A5FA", textDecoration: "none", fontWeight: 500 }}>
            Courses
          </a>
          <ChevronRight size={14} style={{ color: "#64748b" }} />
          <span style={{ color: "#cbd5e1" }}>NLP Mastery</span>
        </nav>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* ══ LEFT COLUMN ══ */}
          <div className="flex flex-col gap-5">

            {/* Hero card */}
            <div
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0f1e3d 0%, #0a1628 100%)",
                border: "1.5px solid #1e3a6e",
              }}
            >
              {/* Number badge */}
              <div
                className="absolute top-4 left-4 w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
                style={{ background: "#2563EB" }}
              >
                4
              </div>

              {/* Image + Title row */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5 mt-2">
                {/* Course image */}
                <div className="flex-shrink-0">
                  <img
                    src="https://res.cloudinary.com/dbazx1qbu/image/upload/v1781764321/c91421f9-9b93-44ba-92b2-7717821224e8_outh5b.jpg"
                    alt="NLP glowing brain"
                    className="rounded-xl object-contain"
                    style={{
                      width: 180,
                      height: 200,
                      background: "#0a1628",
                      /* Remove below border once real image is added */
                      border: "1px dashed #2563eb44",
                    }}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  {/* Fallback */}
                  <div
                    className="rounded-xl items-center justify-center flex-col gap-1"
                    style={{
                      width: 180,
                      height: 200,
                      display: "none",
                      background: "linear-gradient(135deg, #0f1e3d 0%, #0a1628 100%)",
                      border: "1.5px solid #1e3a6e",
                      color: "#60A5FA",
                    }}
                  >
                    <span style={{ fontSize: 56 }}>🧠</span>
                    <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2 }}>NLP</span>
                  </div>
                </div>

                {/* Title block */}
                <div>
                  <h1
                    className="font-extrabold leading-tight"
                    style={{
                      color: "#60A5FA",
                      fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                      textShadow: "0 0 30px rgba(192,132,252,0.4)",
                    }}
                  >
                    NLP Mastery
                  </h1>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "#cbd5e1", maxWidth: 300 }}>
                    Master the art of communication, influence and personal transformation with NLP.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature badges card */}
            <div
              className="rounded-2xl px-6 py-5"
              style={{
                background: "linear-gradient(135deg, #0f1e3d 0%, #0a1628 100%)",
                border: "1.5px solid #1e3a6e",
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
                background: "linear-gradient(135deg, #0f1e3d 0%, #0a1628 100%)",
                border: "1.5px solid #1e3a6e",
              }}
            >
              <h2 className="font-bold text-lg mb-4" style={{ color: "#60A5FA" }}>
                What You Will Learn
              </h2>
              <ul className="flex flex-col gap-3">
                {learnings.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckSquare
                      size={20}
                      strokeWidth={1.8}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: "#60A5FA" }}
                    />
                    <span className="text-sm leading-relaxed" style={{ color: "#cbd5e1" }}>
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
                background: "linear-gradient(135deg, #0f1e3d 0%, #0a1628 100%)",
                border: "1.5px solid #1e3a6e",
              }}
            >
              <p className="font-semibold text-base mb-5 italic" style={{ color: "#60A5FA" }}>
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
                background: "linear-gradient(135deg, #0f1e3d 0%, #0a1628 100%)",
                border: "1.5px solid #1e3a6e",
              }}
            >
              <h2 className="font-bold text-lg mb-4" style={{ color: "#60A5FA" }}>
                Who Should Join?
              </h2>
              <ul className="flex flex-col gap-3">
                {audience.map((a, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex-shrink-0">{a.icon}</span>
                    <span className="text-sm" style={{ color: "#cbd5e1" }}>{a.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Bottom CTA Buttons ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {/* Enroll Now */}
          <a
            href="#"
            className="flex items-center justify-center gap-3 rounded-xl py-4 font-bold text-white text-base transition-all duration-200"
            style={{
              background: "linear-gradient(90deg, #2563EB, #1d4ed8)",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(37,99,235,0.35)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Enroll Now. Free
            <ChevronRight size={20} />
          </a>

          {/* WhatsApp */}
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