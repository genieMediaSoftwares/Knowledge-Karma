import {
  ChevronRight,
  Calendar,
  Award,
  Video,
  CheckCircle,
  MessageCircle,
  Users,
  GraduationCap,
  Target,
  Clock,
  Heart,
  ClipboardList,
  Focus,
  Hourglass,
} from "lucide-react";

// ── Data ─────────────────────────────────────────────────────────────────────

const trainingPoints = [
  {
    id: 1,
    icon: <ClipboardList size={26} strokeWidth={1.5} style={{ color: "#4ADE80" }} />,
    title: "Why you are always busy but rarely done",
    desc: "Busy and productive are two very different things. Learn to tell the difference between activity and accomplishment and redesign your day around what actually moves the needle.",
  },
  {
    id: 2,
    icon: <Target size={26} strokeWidth={1.5} style={{ color: "#4ADE80" }} />,
    title: "How to build focus that lasts",
    desc: "Your attention is your most valuable resource. Learn how to protect it, direct it, and use it to finish what matters at your absolute best.",
  },
  {
    id: 3,
    icon: <Clock size={26} strokeWidth={1.5} style={{ color: "#4ADE80" }} />,
    title: "How to create time for the life you actually want",
    desc: "Family, Travel, Hobbies, Rest. These are part of a well-designed life. This system shows you how to build that, starting with the 24 hours you already have.",
  },
];

const learnings = [
  "Time management that actually works",
  "How to prioritize what truly matters",
  "Build deep focus in a distracted world",
  "Design your ideal day and week",
  "Create more time without working more",
];

const audience = [
  { icon: <Users size={20} strokeWidth={1.5} style={{ color: "#4ADE80" }} />, label: "Busy Professionals" },
  { icon: <Users size={20} strokeWidth={1.5} style={{ color: "#4ADE80" }} />, label: "Entrepreneurs" },
  { icon: <GraduationCap size={20} strokeWidth={1.5} style={{ color: "#4ADE80" }} />, label: "Students" },
  { icon: <Heart size={20} strokeWidth={1.5} style={{ color: "#4ADE80" }} />, label: "Parents" },
  { icon: <Users size={20} strokeWidth={1.5} style={{ color: "#4ADE80" }} />, label: "Anyone who feels there's never enough time" },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function FeatureBadge({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <div style={{ color: "#4ADE80" }}>{icon}</div>
      <div>
        <p className="text-xs leading-none mb-0.5" style={{ color: "#86efac" }}>{label}</p>
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
            background: "linear-gradient(135deg, #14532d 0%, #166534 100%)",
            border: "1.5px solid #16a34a55",
          }}
        >
          {point.icon}
        </div>
        <div>
          <p className="font-bold text-sm leading-snug mb-1.5" style={{ color: "#fff" }}>
            {point.title}
          </p>
          <p className="text-xs leading-relaxed" style={{ color: "#86efac" }}>
            {point.desc}
          </p>
        </div>
      </div>
      {showDivider && (
        <div className="mt-5" style={{ borderTop: "1px solid #14532d" }} />
      )}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function My25thHour() {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: "radial-gradient(ellipse at top, #052e16 0%, #021a0d 50%, #010f07 100%)",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
      }}
    >
      {/* Subtle dot grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(74,222,128,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-6">

        {/* ── Breadcrumb ── */}
        <nav className="flex items-center gap-2 text-sm mb-6">
          <a href="/courses" style={{ color: "#4ADE80", textDecoration: "none", fontWeight: 500 }}>
            Courses
          </a>
          <ChevronRight size={14} style={{ color: "#166534" }} />
          <span style={{ color: "#86efac" }}>My 25th Hour</span>
        </nav>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* ══ LEFT COLUMN ══ */}
          <div className="flex flex-col gap-5">

            {/* Hero card */}
            <div
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #062017 0%, #031309 100%)",
                border: "1.5px solid #14532d",
              }}
            >
              {/* Number badge */}
              <div
                className="absolute top-4 left-4 w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm z-10"
                style={{ background: "#16A34A" }}
              >
                3
              </div>

              {/* Image + Title row */}
             <div className="flex flex-col sm:flex-row items-center gap-5 mt-2">
  {/* Course image */}
  <div className="flex-shrink-0">
    {/* Fixed-size container that clips the image */}
    <div
      className="rounded-xl overflow-hidden relative"
      style={{
        width: 180,
        height: 210,
        background: "#031309",
        border: "1px dashed #16a34a44",
      }}
    >
      <img
        src="https://s3.amazonaws.com/contents.newzenler.com/33830/library/6a27bab564737_1780988597_pavanbhattadcards-4.png"
        alt="Golden clock and hourglass"
        loading="lazy"
        decoding="async"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",       // fills container, crops edges if needed
          objectPosition: "center", // centers the crop focus
          display: "block",         // removes inline baseline gap
        }}
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.nextElementSibling.style.display = "flex";
        }}
      />

      {/* Fallback — same container size, hidden by default */}
      <div
        className="absolute inset-0 rounded-xl flex flex-col items-center justify-center gap-1"
        style={{
          display: "none",
          background: "linear-gradient(135deg, #14532d44, #16653444)",
          border: "1px dashed #16a34a88",
        }}
      >
        <img
          src="https://s3.amazonaws.com/contents.newzenler.com/33830/library/6a27bab564737_1780988597_pavanbhattadcards-4.png"
          alt="25th Hour"
          style={{
            width: 80,
            height: 80,
            objectFit: "contain",
          }}
        />
        <span
          style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 1,
            color: "#4ADE80",
          }}
        >
          25th Hour
        </span>
      </div>
    </div>
  </div>

  {/* Title block */}
  <div>
    <h1
      className="font-extrabold leading-tight"
      style={{
        color: "#4ADE80",
        fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
        textShadow: "0 0 30px rgba(74,222,128,0.3)",
      }}
    >
      My 25th Hour
    </h1>
    <p
      className="mt-3 text-base leading-relaxed"
      style={{ color: "#e2e8f0", maxWidth: 280 }}
    >
      Learn the Art of Creating Time.
    </p>
  </div>
</div>
            </div>

            {/* Feature badges card */}
            <div
              className="rounded-2xl px-6 py-5"
              style={{
                background: "linear-gradient(135deg, #062017 0%, #031309 100%)",
                border: "1.5px solid #14532d",
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
                background: "linear-gradient(135deg, #062017 0%, #031309 100%)",
                border: "1.5px solid #14532d",
              }}
            >
              <h2 className="font-bold text-lg mb-4" style={{ color: "#4ADE80" }}>
                What You Will Learn
              </h2>
              <ul className="flex flex-col gap-3">
                {learnings.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      strokeWidth={1.8}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: "#4ADE80" }}
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
                background: "linear-gradient(135deg, #062017 0%, #031309 100%)",
                border: "1.5px solid #14532d",
              }}
            >
              <p className="font-semibold text-base mb-6 italic" style={{ color: "#4ADE80" }}>
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
                background: "linear-gradient(135deg, #062017 0%, #031309 100%)",
                border: "1.5px solid #14532d",
              }}
            >
              <h2 className="font-bold text-lg mb-4" style={{ color: "#4ADE80" }}>
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
          {/* Enroll Now */}
          <a
            href="#"
            className="flex items-center justify-center gap-3 rounded-xl py-4 font-bold text-white text-base transition-all duration-200"
            style={{
              background: "linear-gradient(90deg, #16A34A, #15803d)",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(22,163,74,0.4)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Enroll Now. Free
            <ChevronRight size={20} />
          </a>

          {/* WhatsApp */}
          <a
            href="#"
            className="flex items-center justify-center gap-3 rounded-xl py-4 font-bold text-white text-base transition-all duration-200"
            style={{
              background: "linear-gradient(90deg, #15803d, #166534)",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(21,128,61,0.4)",
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