import {
  ChevronRight,
  Calendar,
  Award,
  Video,
  CheckSquare,
  BookOpen,
  Star,
  UserCheck,
  GraduationCap,
  Users,
  Lightbulb,
  BookMarked,
  MessageCircle,
} from "lucide-react";

// ── Data ─────────────────────────────────────────────────────────────────────

const secrets = [
  {
    id: 1,
    icon: <BookOpen size={26} strokeWidth={1.5} style={{ color: "#60A5FA" }} />,
    label: "SECRET #1",
    title: "How to complete the book you started, in one sitting",
    desc: "You have a plan full of half-read books. You are not lazy. You just learned to read slowly. This secret flow is what turns the inside out.",
  },
  {
    id: 2,
    icon: <Star size={26} strokeWidth={1.5} style={{ color: "#60A5FA" }} />,
    label: "SECRET #2",
    title: "Read faster with better understanding and recall",
    desc: "The faster you read the right way, the better you understand. Learn the method that doubles your reading speed while your memory of it actually improves.",
  },
  {
    id: 3,
    icon: <UserCheck size={26} strokeWidth={1.5} style={{ color: "#60A5FA" }} />,
    label: "SECRET #3",
    title: "How to use your reading and put it to implementation",
    desc: "Information seen in your head is just weight. You will leave with a system to take what you read and put it to real use in your work and life.",
  },
];

const learnings = [
  "Speed reading techniques that actually work",
  "How to remember more of what you read",
  "Use Mind Maps to understand and organize better",
  "Creative thinking to apply ideas in real life",
  "A simple system to read 100 books every year",
];

const audience = [
  { icon: <GraduationCap size={20} strokeWidth={1.5} style={{ color: "#60A5FA" }} />, label: "Students" },
  { icon: <Users size={20} strokeWidth={1.5} style={{ color: "#60A5FA" }} />, label: "Professionals" },
  { icon: <Lightbulb size={20} strokeWidth={1.5} style={{ color: "#60A5FA" }} />, label: "Entrepreneurs" },
  { icon: <BookMarked size={20} strokeWidth={1.5} style={{ color: "#60A5FA" }} />, label: "Lifelong Learners" },
  { icon: <BookOpen size={20} strokeWidth={1.5} style={{ color: "#60A5FA" }} />, label: "Anyone who wants to read more and grow faster" },
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

function SecretCard({ secret }) {
  return (
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
        {secret.icon}
      </div>
      <div>
        <p className="text-xs font-semibold mb-1" style={{ color: "#94a3b8", letterSpacing: "0.05em" }}>
          {secret.label}
        </p>
        <p className="font-bold text-sm leading-snug mb-1.5" style={{ color: "#fff" }}>
          {secret.title}
        </p>
        <p className="text-xs leading-relaxed" style={{ color: "#94a3b8" }}>
          {secret.desc}
        </p>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function Hundredbooks() {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: "radial-gradient(ellipse at top, #0d1b3e 0%, #06091a 60%, #030610 100%)",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
      }}
    >
      {/* Dot grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-6">

        {/* ── Breadcrumb ── */}
        <nav className="flex items-center gap-2 text-sm mb-6" aria-label="Breadcrumb">
          <a href="/courses" style={{ color: "#60A5FA", textDecoration: "none", fontWeight: 500 }}>
            Courses
          </a>
          <ChevronRight size={14} style={{ color: "#64748b" }} />
          <span style={{ color: "#cbd5e1" }}>How to Read 100 Books in a Year</span>
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
                1
              </div>

              {/* Image + Title row */}
              <div className="flex flex-col sm:flex-row items-center sm:items-end gap-5 mt-2">
                {/* Course image */}
                <div className="flex-shrink-0">
                  <img
                    src="https://res.cloudinary.com/dbazx1qbu/image/upload/v1781764265/bd73ab8f-c519-49b1-bc9d-2cad86170a99_tsxjpv.jpg"
                    alt="Stack of glowing books"
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
                  {/* Fallback placeholder */}
                  <div
                    className="rounded-xl items-center justify-center"
                    style={{
                      width: 180,
                      height: 200,
                      display: "none",
                      background: "linear-gradient(135deg, #1e3a8a22, #1e40af44)",
                      border: "1px dashed #2563eb88",
                      color: "#60A5FA",
                      fontSize: 64,
                    }}
                  >
                    📚
                  </div>
                </div>

                {/* Title block */}
                <div>
                  <h1
                    className="font-extrabold leading-tight"
                    style={{ color: "#ffffff", fontSize: "clamp(1.6rem, 4vw, 2.2rem)" }}
                  >
                    How to Read{" "}<br />
                    <span style={{ color: "#F5A623" }}>100 Books</span>
                    <br />in a Year
                  </h1>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "#cbd5e1", maxWidth: 320 }}>
                    Learn Speed Reading, Memory Techniques, Mind Maps and Creative Thinking.
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
                <FeatureBadge
                  icon={<Calendar size={22} />}
                  label="Live Sessions"
                  value="Free"
                />
                <FeatureBadge
                  icon={<Award size={22} />}
                  label="Certification"
                  value="Chargeable"
                />
                <FeatureBadge
                  icon={<Video size={22} />}
                  label="Recordings"
                  value="Chargeable"
                />
              </div>
            </div>

            {/* What You Will Learn card */}
            <div
              className="rounded-2xl px-6 py-5 flex-1"
              style={{
                background: "linear-gradient(135deg, #0f1e3d 0%, #0a1628 100%)",
                border: "1.5px solid #1e3a6e",
              }}
            >
              <h2
                className="font-bold text-lg mb-4"
                style={{ color: "#60A5FA" }}
              >
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

            {/* About This Course card */}
            <div
              className="rounded-2xl px-6 py-5 flex-1"
              style={{
                background: "linear-gradient(135deg, #0f1e3d 0%, #0a1628 100%)",
                border: "1.5px solid #1e3a6e",
              }}
            >
              <h2
                className="font-bold text-lg mb-1"
                style={{ color: "#60A5FA" }}
              >
                About This Course
              </h2>
              <p className="text-sm mb-5 italic" style={{ color: "#F5A623" }}>
                In this free training, I'll reveal...
              </p>

              <div className="flex flex-col gap-6">
                {secrets.map((s, i) => (
                  <div key={s.id}>
                    <SecretCard secret={s} />
                    {i < secrets.length - 1 && (
                      <div
                        className="mt-5"
                        style={{ borderTop: "1px solid #1e3a6e" }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Who Should Join card */}
            <div
              className="rounded-2xl px-6 py-5"
              style={{
                background: "linear-gradient(135deg, #0f1e3d 0%, #0a1628 100%)",
                border: "1.5px solid #1e3a6e",
              }}
            >
              <h2
                className="font-bold text-lg mb-4"
                style={{ color: "#60A5FA" }}
              >
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