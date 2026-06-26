import { ArrowRight, Calendar, Award, Video } from "lucide-react";
import { useNavigate } from "react-router-dom";

// ── Course Data ──────────────────────────────────────────────────────────────
const courses = [
  {
    id: 1,
    number: 1,
    path: "/courses/how-to-read-100-books",
    title: (
      <>
        How to Read{" "}
        <span style={{ color: "#1D4BC9" }}>100 Books</span>
        {" "}in a Year
      </>
    ),
    plainTitle: "How to Read 100 Books in a Year",
    description:
      "Learn Speed Reading, Memory Techniques, Mind Maps and Creative Thinking.",

    duration: "6 Weeks",
    level: "Beginner",
    image: "https://s3.amazonaws.com/contents.newzenler.com/33830/library/6a27bb3605b12_1780988726_coursecards-ibrand-16.png",
    numberBg: "#1D4BC9",
    cardBg: "#ffffff",
    borderColor: "#1D4BC9",
    tagColor: "#1D4BC9",
    tagBg: "rgba(29,75,201,0.08)",
    btnBg: "linear-gradient(90deg, #1D4BC9, #163cb1)",
    enrollUrl: "/courses/how-to-read-100-books",
  },
  {
    id: 2,
    number: 2,
    path: "/courses/nlp-mastery",
    title: (
      <span style={{ color: "#7C3AED" }}>NLP Mastery</span>
    ),
    plainTitle: "NLP Mastery",
    description:
      "Master the art of communication, influence and personal transformation with NLP.",

    duration: "8 Weeks",
    level: "Intermediate",
    image: "https://s3.amazonaws.com/contents.newzenler.com/33830/library/6a27b9ea2becc_1780988394_pavanbhattadcards-5.png",
    numberBg: "#7C3AED",
    cardBg: "#ffffff",
    borderColor: "#7C3AED",
    tagColor: "#7C3AED",
    tagBg: "rgba(124,58,237,0.08)",
    btnBg: "linear-gradient(90deg, #7C3AED, #6d28d9)",
    enrollUrl: "/courses/nlp-mastery",
  },
  {
    id: 3,
    number: 3,
    path: "/courses/my-25th-hour",
    title: (
      <span style={{ color: "#059669" }}>My 25th Hour</span>
    ),
    plainTitle: "My 25th Hour",
    description: "Learn the Art of Creating Time.",

    duration: "4 Weeks",
    level: "All Levels",
    image: "https://s3.amazonaws.com/contents.newzenler.com/33830/library/6a27bab564737_1780988597_pavanbhattadcards-4.png",
    numberBg: "#059669",
    cardBg: "#ffffff",
    borderColor: "#059669",
    tagColor: "#059669",
    tagBg: "rgba(5,150,105,0.08)",
    btnBg: "linear-gradient(90deg, #059669, #047857)",
    enrollUrl: "/courses/my-25th-hour",
  },
  {
    id: 4,
    number: 4,
    path: "/courses/brain-ki-baat",
    title: (
      <span style={{ color: "#B45309" }}>Brain Ki Baat</span>
    ),
    plainTitle: "Brain Ki Baat",
    description:
      "Understand how your brain works and reprogram it for success and growth.",

    duration: "5 Weeks",
    level: "All Levels",
    image: "https://s3.amazonaws.com/contents.newzenler.com/33830/library/6a23a5730236d_1780721011_l-3.png",
    numberBg: "#B45309",
    cardBg: "#ffffff",
    borderColor: "#B45309",
    tagColor: "#B45309",
    tagBg: "rgba(180,83,9,0.08)",
    btnBg: "linear-gradient(90deg, #B45309, #92400E)",
    enrollUrl: "/courses/brain-ki-baat",
  }
];

// ── Course Image ─────────────────────────────────────────────────────────────
function CourseImage({ image, alt, borderColor }) {
  return (
    <div
      className="w-full overflow-hidden rounded-xl bg-transparent pt-4 px-2"
      style={{
        height: "170px",
      }}
    >
      <img
        src={image}
        alt={alt}
        className="w-full h-full"
        style={{ objectFit: "contain", objectPosition: "center" }}
        loading="lazy"
      />
    </div>
  );
}

// ── Feature Badge ────────────────────────────────────────────────────────────
function FeatureBadge({ label, value }) {
  return (
    <div className="flex items-center gap-2">
      <div>
        <p className="text-xs leading-none mb-0.5" style={{ color: "#64748b" }}>
          {label}
        </p>
        <p className="text-sm font-bold leading-none" style={{ color: "#0D1F3C" }}>
          {value}
        </p>
      </div>
    </div>
  );
}

// ── Meta Pill ────────────────────────────────────────────────────────────────
function MetaPill({ label, color, bg }) {
  return (
    <span
      className="text-xs font-semibold px-2.5 py-1 rounded-full"
      style={{ color, background: bg, border: `1px solid ${color}44` }}
    >
      {label}
    </span>
  );
}

// ── Course Card ──────────────────────────────────────────────────────────────
function CourseCard({ course }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(course.path);
  };

  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={`View ${course.plainTitle} course`}
      onClick={handleCardClick}
      onKeyDown={(e) => e.key === "Enter" && handleCardClick()}
      className="relative rounded-2xl p-5 sm:p-6 flex flex-col gap-5 h-full cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-accent/30 transition-transform duration-200 hover:-translate-y-1"
      style={{
        background: course.cardBg,
        border: `1.5px solid ${course.borderColor}`,
        boxShadow: "0 10px 30px rgba(13, 31, 60, 0.06)",
      }}
    >
      {/* Number Badge */}
      <div
        className="absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm z-10"
        style={{ background: course.numberBg }}
        aria-hidden="true"
      >
        {course.number}
      </div>

      {/* Top: Image + Title + Description */}
      <div className="flex flex-col gap-4">
        <CourseImage
          image={course.image}
          alt={course.plainTitle}
          borderColor={course.borderColor}
        />

        <div>
          <h3
            className="font-bold leading-snug"
            style={{
              color: "#0D1F3C",
              fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
            }}
          >
            {course.title}
          </h3>

          <p
            className="text-sm leading-relaxed mt-2"
            style={{ color: "#475569" }}
          >
            {course.description}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: `1px solid rgba(13,31,60,0.08)` }} />

      {/* Enroll Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          navigate(course.path);
        }}
        className="flex items-center justify-center gap-3 rounded-xl py-3.5 font-semibold text-white text-base transition-all duration-200 mt-auto w-full border-0"
        style={{
          background: course.btnBg,
          boxShadow: "0 4px 14px rgba(13,31,60,0.12)",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "0.9";
          e.currentTarget.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "1";
          e.currentTarget.style.transform = "translateY(0)";
        }}
        aria-label={`Enroll in ${course.plainTitle}`}
      >
        Enroll Now. Free
        <ArrowRight size={18} />
      </button>
    </article>
  );
}

// ── Main Component ───────────────────────────────────────────────────────────
export default function Courses() {
  return (
    <main
      className="min-h-screen w-full py-14 px-4 bg-white"
    >
      {/* Subtle dot grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(13,31,60,0.03) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Header ── */}
        <header className="text-center mb-12">
          <h1
            className="font-extrabold mb-3"
            style={{
              color: "#0D1F3C",
              fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
              fontFamily: "'Segoe UI', system-ui, sans-serif",
              letterSpacing: "-0.5px",
            }}
          >
            Our Courses
          </h1>



          <p className="text-base sm:text-lg mt-2" style={{ color: "#475569" }}>
            Powerful courses to{" "}
            <span style={{ color: "#7C3AED", fontWeight: 600, }}>
              unlock
            </span>{" "}
            your brain's true potential.
          </p>
          <p className="text-base sm:text-lg mt-1" style={{ color: "#475569" }}>
            Live sessions are{" "}
            <span style={{ color: "#22C55E", fontWeight: 600 }}>free</span>
            . Certification and recordings are chargeable.
          </p>

          {/* Stats row */}
          <div className="flex items-center justify-center gap-6 sm:gap-10 mt-8 flex-wrap">
            {[
              { value: "4", label: "Courses" },
              { value: "5000+", label: "Students" },
              { value: "100%", label: "Free Live Sessions" },
              { value: "4.9★", label: "Avg. Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-extrabold text-xl sm:text-2xl" style={{ color: "#0D1F3C" }}>
                  {stat.value}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#64748b" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </header>

        {/* ── Grid ── */}
        <section aria-label="Course list">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* ── Footer note ── */}
        <p className="text-center text-xs mt-10" style={{ color: "#64748b" }}>
          All live sessions are completely free to attend. Certification and recorded sessions are available as paid add-ons.
        </p>
      </div>
    </main>
  );
}