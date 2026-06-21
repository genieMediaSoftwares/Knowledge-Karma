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
    icon: <ClipboardList size={26} strokeWidth={1.5} style={{ color: "#C084FC" }} />,
    title: "Why you are always busy but rarely done",
    desc: "Busy and productive are two very different things. Learn to tell the difference between activity and accomplishment and redesign your day around what actually moves the needle.",
  },
  {
    id: 2,
    icon: <Target size={26} strokeWidth={1.5} style={{ color: "#C084FC" }} />,
    title: "How to build focus that lasts",
    desc: "Your attention is your most valuable resource. Learn how to protect it, direct it, and use it to finish what matters at your absolute best.",
  },
  {
    id: 3,
    icon: <Clock size={26} strokeWidth={1.5} style={{ color: "#C084FC" }} />,
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
  { icon: <Users size={20} strokeWidth={1.5} style={{ color: "#C084FC" }} />, label: "Busy Professionals" },
  { icon: <Users size={20} strokeWidth={1.5} style={{ color: "#C084FC" }} />, label: "Entrepreneurs" },
  { icon: <GraduationCap size={20} strokeWidth={1.5} style={{ color: "#C084FC" }} />, label: "Students" },
  { icon: <Heart size={20} strokeWidth={1.5} style={{ color: "#C084FC" }} />, label: "Parents" },
  { icon: <Users size={20} strokeWidth={1.5} style={{ color: "#C084FC" }} />, label: "Anyone who feels there's never enough time" },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function FeatureBadge({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <div style={{ color: "#C084FC" }}>{icon}</div>
      <div>
        <p className="text-xs leading-none mb-0.5" style={{ color: "#d1d5db" }}>{label}</p>
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

export default function My25thHour() {
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
          <span style={{ color: "#d1d5db" }}>My 25th Hour</span>
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
                     background: "linear-gradient(135deg, #3b076444, #4c1d9544)",
                      border: "1px dashed #7c3aed88",
                      color: "#C084FC",
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
                         background: "linear-gradient(135deg, #3b076444, #4c1d9544)",
                      border: "1px dashed #7c3aed88",
                      color: "#C084FC",
                      }}
                    >
                      <img
                        src="https://res.cloudinary.com/dbazx1qbu/image/upload/v1781764334/b0f0a21c-3c74-44b5-b76e-4759d3ff92fb_c0y8rc.jpg"
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
                          color: "#C084FC",
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
                       color: "#C084FC",
                      fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                      textShadow: "0 0 30px rgba(192,132,252,0.4)",
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
          {/* Enroll Now */}
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