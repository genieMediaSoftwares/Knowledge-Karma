// import { ArrowRight, BookOpen, Brain, Clock, MessageCircle, Calendar, Award, Video } from "lucide-react";

// // ── Course Data ──────────────────────────────────────────────────────────────
// const courses = [
//   {
//     id: 1,
//     number: 1,
//     title: (
//       <>
//         How to Read{" "}
//         <span style={{ color: "#F5A623" }}>100 Books</span>
//         {" "}in a Year
//       </>
//     ),
//     plainTitle: "How to Read 100 Books in a Year",
//     description:
//       "Learn Speed Reading, Memory Techniques, Mind Maps and Creative Thinking.",
//     icon: <BookOpen size={72} strokeWidth={1.2} style={{ color: "#F5A623" }} />,
//     iconBg: "radial-gradient(circle, #2a1a00 0%, #1a1000 100%)",
//     numberBg: "#2563EB",
//     cardBg: "linear-gradient(135deg, #0f1e3d 0%, #0a1628 100%)",
//     borderColor: "#1e3a6e",
//     btnBg: "linear-gradient(90deg, #2563EB, #1d4ed8)",
//     btnHover: "#1d4ed8",
//     enrollUrl: "#",
//   },
//   {
//     id: 2,
//     number: 2,
//     title: (
//       <>
//         <span style={{ color: "#A855F7" }}>NLP</span> Mastery
//       </>
//     ),
//     plainTitle: "NLP Mastery",
//     description:
//       "Master the art of communication, influence and personal transformation with NLP.",
//     icon: <Brain size={72} strokeWidth={1.2} style={{ color: "#A855F7" }} />,
//     iconBg: "radial-gradient(circle, #1e0a3c 0%, #120620 100%)",
//     numberBg: "#7C3AED",
//     cardBg: "linear-gradient(135deg, #130a2a 0%, #0d0618 100%)",
//     borderColor: "#3b1a6e",
//     btnBg: "linear-gradient(90deg, #7C3AED, #6d28d9)",
//     btnHover: "#6d28d9",
//     enrollUrl: "#",
//   },
//   {
//     id: 3,
//     number: 3,
//     title: (
//       <span style={{ color: "#22C55E" }}>My 25th Hour</span>
//     ),
//     plainTitle: "My 25th Hour",
//     description: "Learn the Art of Creating Time.",
//     icon: <Clock size={72} strokeWidth={1.2} style={{ color: "#22C55E" }} />,
//     iconBg: "radial-gradient(circle, #052e16 0%, #021a0c 100%)",
//     numberBg: "#16A34A",
//     cardBg: "linear-gradient(135deg, #062017 0%, #031309 100%)",
//     borderColor: "#14532d",
//     btnBg: "linear-gradient(90deg, #16A34A, #15803d)",
//     btnHover: "#15803d",
//     enrollUrl: "#",
//   },
//   {
//     id: 4,
//     number: 4,
//     title: (
//       <span style={{ color: "#F97316" }}>Brain Ki Baat</span>
//     ),
//     plainTitle: "Brain Ki Baat",
//     description:
//       "Understand how your brain works and reprogram it for success and happiness.",
//     icon: <MessageCircle size={72} strokeWidth={1.2} style={{ color: "#F97316" }} />,
//     iconBg: "radial-gradient(circle, #2c1000 0%, #1a0a00 100%)",
//     numberBg: "#EA580C",
//     cardBg: "linear-gradient(135deg, #1c0e00 0%, #120900 100%)",
//     borderColor: "#7c2d12",
//     btnBg: "linear-gradient(90deg, #EA580C, #c2410c)",
//     btnHover: "#c2410c",
//     enrollUrl: "#",
//   },
// ];

// // ── Icon Illustration ────────────────────────────────────────────────────────
// function CourseIcon({ icon, bg }) {
//   return (
//     <div
//       className="flex items-center justify-center rounded-xl flex-shrink-0"
//       style={{
//         background: bg,
//         width: 100,
//         height: 100,
//         minWidth: 100,
//         boxShadow: "0 0 24px rgba(255,255,255,0.04)",
//       }}
//     >
//       {icon}
//     </div>
//   );
// }

// // ── Feature Badge ────────────────────────────────────────────────────────────
// function FeatureBadge({ icon, label, value }) {
//   return (
//     <div className="flex items-center gap-2">
//       <div style={{ color: "#94a3b8" }}>{icon}</div>
//       <div>
//         <p className="text-xs leading-none mb-0.5" style={{ color: "#94a3b8" }}>
//           {label}
//         </p>
//         <p className="text-sm font-bold leading-none" style={{ color: "#ffffff" }}>
//           {value}
//         </p>
//       </div>
//     </div>
//   );
// }

// // ── Course Card ──────────────────────────────────────────────────────────────
// function CourseCard({ course }) {
//   return (
//     <div
//       className="relative rounded-2xl p-5 sm:p-6 flex flex-col gap-5 h-full"
//       style={{
//         background: course.cardBg,
//         border: `1.5px solid ${course.borderColor}`,
//         boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
//       }}
//     >
//       {/* Number Badge */}
//       <div
//         className="absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm z-10"
//         style={{ background: course.numberBg }}
//       >
//         {course.number}
//       </div>

//       {/* Top: Icon + Title + Description */}
//       <div className="flex flex-row items-start gap-4 pt-2">
//         <CourseIcon icon={course.icon} bg={course.iconBg} />
//         <div className="flex flex-col gap-1 mt-1">
//           <h3
//             className="font-bold leading-snug"
//             style={{ color: "#ffffff", fontSize: "clamp(1rem, 2.5vw, 1.2rem)" }}
//           >
//             {course.title}
//           </h3>
//           <p className="text-sm leading-relaxed" style={{ color: "#cbd5e1" }}>
//             {course.description}
//           </p>
//         </div>
//       </div>

//       {/* Divider */}
//       <div style={{ borderTop: `1px solid ${course.borderColor}` }} />

//       {/* Feature Badges */}
//       <div className="flex flex-row flex-wrap gap-x-6 gap-y-3">
//         <FeatureBadge
//           icon={<Calendar size={18} />}
//           label="Live Sessions"
//           value="Free"
//         />
//         <FeatureBadge
//           icon={<Award size={18} />}
//           label="Certification"
//           value="Chargeable"
//         />
//         <FeatureBadge
//           icon={<Video size={18} />}
//           label="Recordings"
//           value="Chargeable"
//         />
//       </div>

//       {/* Enroll Button */}
//       <a
//         href={course.enrollUrl}
//         className="flex items-center justify-center gap-3 rounded-xl py-3.5 font-semibold text-white text-base transition-all duration-200 mt-auto"
//         style={{
//           background: course.btnBg,
//           boxShadow: "0 4px 14px rgba(0,0,0,0.3)",
//           textDecoration: "none",
//         }}
//         onMouseEnter={(e) => {
//           e.currentTarget.style.opacity = "0.9";
//           e.currentTarget.style.transform = "translateY(-1px)";
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.style.opacity = "1";
//           e.currentTarget.style.transform = "translateY(0)";
//         }}
//       >
//         Enroll Now. Free
//         <ArrowRight size={18} />
//       </a>
//     </div>
//   );
// }

// // ── Main Component ───────────────────────────────────────────────────────────
// export default function Courses() {
//   return (
//     <section
//       className="min-h-screen w-full py-14 px-4"
//       style={{
//         background: "radial-gradient(ellipse at top, #0d1b3e 0%, #06091a 60%, #030610 100%)",
//         backgroundAttachment: "fixed",
//       }}
//     >
//       {/* Subtle dot grid overlay */}
//       <div
//         className="fixed inset-0 pointer-events-none"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)",
//           backgroundSize: "28px 28px",
//           zIndex: 0,
//         }}
//       />

//       <div className="relative z-10 max-w-6xl mx-auto">
//         {/* ── Header ── */}
//         <div className="text-center mb-12">
//           <h1
//             className="font-extrabold mb-3"
//             style={{
//               color: "#ffffff",
//               fontSize: "clamp(2rem, 5vw, 3rem)",
//               fontFamily: "'Segoe UI', system-ui, sans-serif",
//               letterSpacing: "-0.5px",
//             }}
//           >
//             Our Courses
//             {/* Underline accent */}
//             <div className="flex justify-center mt-2">
//               <div
//                 style={{
//                   width: 60,
//                   height: 3,
//                   borderRadius: 99,
//                   background: "linear-gradient(90deg, #7C3AED, #A855F7)",
//                 }}
//               />
//             </div>
//           </h1>
//           <p className="text-base sm:text-lg mt-4" style={{ color: "#94a3b8" }}>
//             Powerful courses to{" "}
//             <span
//               style={{
//                 color: "#A855F7",
//                 fontWeight: 600,
//                 textDecoration: "underline",
//                 textUnderlineOffset: 3,
//               }}
//             >
//               unlock
//             </span>{" "}
//             your brain's true potential.
//           </p>
//           <p className="text-base sm:text-lg mt-1" style={{ color: "#94a3b8" }}>
//             Live sessions are{" "}
//             <span style={{ color: "#22C55E", fontWeight: 600 }}>free</span>
//             . Certification and recordings are chargeable.
//           </p>
//         </div>

//         {/* ── Grid ── */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {courses.map((course) => (
//             <CourseCard key={course.id} course={course} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



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
        <span style={{ color: "#F5A623" }}>100 Books</span>
        {" "}in a Year
      </>
    ),
    plainTitle: "How to Read 100 Books in a Year",
    description:
      "Learn Speed Reading, Memory Techniques, Mind Maps and Creative Thinking.",
    tag: "Most Popular",
    duration: "6 Weeks",
    level: "Beginner",
    image: "https://s3.amazonaws.com/contents.newzenler.com/33830/library/6a27bb3605b12_1780988726_coursecards-ibrand-16.png",
    numberBg: "#2563EB",
    cardBg: "linear-gradient(135deg, #0f1e3d 0%, #0a1628 100%)",
    borderColor: "#1e3a6e",
    tagColor: "#2563EB",
    tagBg: "#1e3a6e44",
    btnBg: "linear-gradient(90deg, #2563EB, #1d4ed8)",
    enrollUrl: "/courses/how-to-read-100-books",
  },
  {
    id: 2,
    number: 2,
    path: "/courses/nlp-mastery",
    title: (
      <>
        <span style={{ color: "#A855F7" }}>NLP</span> Mastery
      </>
    ),
    plainTitle: "NLP Mastery",
    description:
      "Master the art of communication, influence and personal transformation with NLP.",
    tag: "Trending",
    duration: "8 Weeks",
    level: "Intermediate",
    image: "https://s3.amazonaws.com/contents.newzenler.com/33830/library/6a27b9ea2becc_1780988394_pavanbhattadcards-5.png",
    numberBg: "#7C3AED",
    cardBg: "linear-gradient(135deg, #130a2a 0%, #0d0618 100%)",
    borderColor: "#3b1a6e",
    tagColor: "#A855F7",
    tagBg: "#3b1a6e44",
    btnBg: "linear-gradient(90deg, #7C3AED, #6d28d9)",
    enrollUrl: "/courses/nlp-mastery",
  },
  {
    id: 3,
    number: 3,
    path: "/courses/my-25th-hour",
    title: (
      <span style={{ color: "#22C55E" }}>My 25th Hour</span>
    ),
    plainTitle: "My 25th Hour",
    description: "Learn the Art of Creating Time.",
    tag: "New",
    duration: "4 Weeks",
    level: "All Levels",
    image: "https://s3.amazonaws.com/contents.newzenler.com/33830/library/6a27bab564737_1780988597_pavanbhattadcards-4.png",
    numberBg: "#16A34A",
    cardBg: "linear-gradient(135deg, #062017 0%, #031309 100%)",
    borderColor: "#14532d",
    tagColor: "#22C55E",
    tagBg: "#14532d44",
    btnBg: "linear-gradient(90deg, #16A34A, #15803d)",
    enrollUrl: "/courses/my-25th-hour",
  },
  {
    id: 4,
    number: 4,
    path: "/courses/brain-ki-baat",
    title: (
      <span style={{ color: "#F97316" }}>Brain Ki Baat</span>
    ),
    plainTitle: "Brain Ki Baat",
    description:
      "Understand how your brain works and reprogram it for success and happiness.",
    tag: "Featured",
    duration: "5 Weeks",
    level: "All Levels",
    image: "https://s3.amazonaws.com/contents.newzenler.com/33830/library/6a23a5730236d_1780721011_l-3.png",
    numberBg: "#EA580C",
    cardBg: "linear-gradient(135deg, #1c0e00 0%, #120900 100%)",
    borderColor: "#7c2d12",
    tagColor: "#F97316",
    tagBg: "#7c2d1244",
    btnBg: "linear-gradient(90deg, #EA580C, #c2410c)",
    enrollUrl: "/courses/brain-ki-baat",
  },
];

// ── Course Image ─────────────────────────────────────────────────────────────
function CourseImage({ image, alt, borderColor }) {
  return (
    <div
      className="w-full overflow-hidden rounded-xl"
      style={{
        height: "200px",
        border: `1px solid ${borderColor}`,
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
        <p className="text-xs leading-none mb-0.5" style={{ color: "#94a3b8" }}>
          {label}
        </p>
        <p className="text-sm font-bold leading-none" style={{ color: "#ffffff" }}>
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
      className="relative rounded-2xl p-5 sm:p-6 flex flex-col gap-5 h-full cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-white/30 transition-transform duration-200 hover:-translate-y-1"
      style={{
        background: course.cardBg,
        border: `1.5px solid ${course.borderColor}`,
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
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

      {/* Tag pill — top right */}
      <div className="absolute top-4 right-4 z-10">
        <MetaPill label={course.tag} color={course.tagColor} bg={course.tagBg} />
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
              color: "#ffffff",
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            }}
          >
            {course.title}
          </h3>

          <p
            className="text-sm leading-relaxed mt-2"
            style={{ color: "#cbd5e1" }}
          >
            {course.description}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: `1px solid ${course.borderColor}` }} />

     
      {/* Enroll Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          navigate(course.path);
        }}
        className="flex items-center justify-center gap-3 rounded-xl py-3.5 font-semibold text-white text-base transition-all duration-200 mt-auto w-full border-0"
        style={{
          background: course.btnBg,
          boxShadow: "0 4px 14px rgba(0,0,0,0.3)",
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
      className="min-h-screen w-full py-14 px-4"
      style={{
        background: "radial-gradient(ellipse at top, #0d1b3e 0%, #06091a 60%, #030610 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Subtle dot grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)",
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
              color: "#ffffff",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontFamily: "'Segoe UI', system-ui, sans-serif",
              letterSpacing: "-0.5px",
            }}
          >
            Our Courses
          </h1>

          {/* Underline accent */}
          <div className="flex justify-center mt-2 mb-4" aria-hidden="true">
            <div
              style={{
                width: 60,
                height: 3,
                borderRadius: 99,
                background: "linear-gradient(90deg, #7C3AED, #A855F7)",
              }}
            />
          </div>

          <p className="text-base sm:text-lg mt-2" style={{ color: "#94a3b8" }}>
            Powerful courses to{" "}
            <span style={{ color: "#A855F7", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: 3 }}>
              unlock
            </span>{" "}
            your brain's true potential.
          </p>
          <p className="text-base sm:text-lg mt-1" style={{ color: "#94a3b8" }}>
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
                <p className="font-extrabold text-xl sm:text-2xl" style={{ color: "#ffffff" }}>
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
        <p className="text-center text-xs mt-10" style={{ color: "#475569" }}>
          All live sessions are completely free to attend. Certification and recorded sessions are available as paid add-ons.
        </p>
      </div>
    </main>
  );
}