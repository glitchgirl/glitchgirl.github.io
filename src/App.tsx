import { useState } from "react";

const NAV_LINKS = ["About", "Courses", "Skills", "Projects", "Contact"];

const COURSES = [
  {
    code: "CS 101",
    title: "Intro to Programming",
    lang: "Python",
    color: "var(--color-mint)",
    desc: "Foundations of computational thinking, variables, loops, and functions. 200+ students taught across 6 semesters.",
  },
  {
    code: "CS 220",
    title: "Data Structures & Algorithms",
    lang: "Java",
    color: "var(--color-peach)",
    desc: "Trees, graphs, sorting, and complexity analysis. Emphasizes problem-solving and whiteboard fluency.",
  },
  {
    code: "CS 340",
    title: "Web Development",
    lang: "JS / React",
    color: "var(--color-pink)",
    desc: "Full-stack fundamentals from HTML and CSS to Node and React. Final projects ship as real deployed apps.",
  },
  {
    code: "CS 450",
    title: "Systems Programming",
    lang: "C / Rust",
    color: "var(--color-lavender)",
    desc: "Memory management, concurrency, and OS interfaces. The class that separates comfortable coders from engineers.",
  },
];

const SKILLS = [
  { name: "Python", level: 98, color: "var(--color-mint)" },
  { name: "JavaScript / TypeScript", level: 94, color: "var(--color-pink)" },
  { name: "Java", level: 90, color: "var(--color-peach)" },
  { name: "C / C++", level: 85, color: "var(--color-lavender)" },
  { name: "Rust", level: 72, color: "var(--color-magenta)" },
  { name: "SQL / Databases", level: 88, color: "var(--color-mint)" },
  { name: "Docker / DevOps", level: 80, color: "var(--color-pink)" },
  { name: "Curriculum Design", level: 96, color: "var(--color-peach)" },
];

const PROJECTS = [
  {
    title: "CodePath LMS",
    tag: "Open Source",
    color: "var(--color-lavender)",
    desc: "A lightweight learning management system built for small CS departments. 12 schools adopted it in year one.",
    stack: ["React", "Node", "PostgreSQL"],
  },
  {
    title: "AlgoViz",
    tag: "Teaching Tool",
    color: "var(--color-mint)",
    desc: "Interactive algorithm visualizer used in 4 universities. Animates sorting, graph traversal, and dynamic programming.",
    stack: ["D3.js", "Svelte", "Canvas API"],
  },
  {
    title: "Gradeflow",
    tag: "Productivity",
    color: "var(--color-pink)",
    desc: "Rubric-driven grading tool for programming assignments. Parses test output and auto-populates feedback comments.",
    stack: ["Python", "FastAPI", "React"],
  },
];

function Pill({ children, color }: { children: string; color: string }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        background: color + "20",
        color,
        border: `1px solid ${color}50`,
      }}
      className="text-xs px-3 py-1 rounded-full"
    >
      {children}
    </span>
  );
}

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span style={{ fontFamily: "var(--font-mono)", color: "var(--color-text)" }} className="text-sm">
          {name}
        </span>
        <span style={{ fontFamily: "var(--font-mono)", color }} className="text-xs">
          {level}%
        </span>
      </div>
      <div
        className="h-2 rounded-full overflow-hidden"
        style={{ background: "var(--color-border)" }}
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name} proficiency: ${level}%`}
      >
        <div
          className="h-full rounded-full"
          style={{
            width: `${level}%`,
            background: `linear-gradient(to right, ${color}bb, ${color})`,
          }}
        />
      </div>
    </div>
  );
}

export default function App() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div style={{ background: "var(--color-bg)", color: "var(--color-text)", fontFamily: "var(--font-body)" }}>
      {/* Decorative blobs */}
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--color-magenta)" }}
        />
        <div
          className="absolute top-1/2 -right-40 w-[400px] h-[400px] rounded-full opacity-8 blur-3xl"
          style={{ background: "var(--color-pink)" }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-[350px] h-[350px] rounded-full opacity-8 blur-3xl"
          style={{ background: "var(--color-lavender)" }}
        />
      </div>

      {/* Skip nav */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-xl focus:text-sm focus:font-semibold"
        style={{ background: "var(--color-magenta)", color: "#fff" }}
      >
        Skip to main content
      </a>

      {/* ── Nav ──────────────────────────────────────────── */}
      <header
        style={{ borderBottom: "1px solid var(--color-border)", background: "#120d1acc" }}
        className="sticky top-0 z-40 backdrop-blur-md"
      >
        <nav
          className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between"
          aria-label="Main navigation"
        >
          <a
            href="#main"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-pink)" }}
            className="text-xl font-black italic hover:opacity-80 transition-opacity"
          >
            morgan.dev
          </a>
          <ul className="hidden md:flex gap-6 list-none m-0 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-muted)" }}
                  className="text-xs hover:text-[var(--color-text)] transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            style={{
              background: "linear-gradient(135deg, var(--color-pink), var(--color-magenta))",
              fontFamily: "var(--font-mono)",
            }}
            className="hidden md:inline-flex text-xs font-medium text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Say hello ✦
          </a>
        </nav>
      </header>

      <main id="main" className="relative z-10">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section
          id="about"
          className="max-w-6xl mx-auto px-6 pt-24 pb-28"
          aria-labelledby="hero-heading"
        >
          <div className="max-w-4xl">
            <div
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--color-peach)",
                background: "var(--color-peach)" + "18",
                border: "1px solid var(--color-peach)" + "40",
              }}
              className="inline-flex items-center gap-2 text-xs px-4 py-2 rounded-full mb-8"
            >
              <span>✦</span>
              <span>CS Instructor · 8 years · 1,400+ students</span>
            </div>

            <h1
              id="hero-heading"
              style={{ fontFamily: "var(--font-display)", lineHeight: 1.05 }}
              className="text-6xl md:text-8xl font-black mb-4"
            >
              <span style={{ color: "var(--color-text)" }}>Hi, I'm</span>{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--color-pink) 0%, var(--color-magenta) 60%, var(--color-lavender) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Morgan.
              </span>
            </h1>
            <h2
              style={{ fontFamily: "var(--font-display)", lineHeight: 1.1, color: "var(--color-muted)" }}
              className="text-4xl md:text-6xl font-light italic mb-8"
            >
              I teach people to{" "}
              <span style={{ color: "var(--color-mint)", fontStyle: "normal", fontWeight: 700 }}>
                code.
              </span>
            </h2>

            <p
              style={{ color: "var(--color-muted)", lineHeight: 1.75 }}
              className="text-base max-w-lg mb-10"
            >
              Associate Professor of Computer Science at Westlake University. I believe every student
              can become a programmer — they just need the right mental models, good problems, and someone
              who gets genuinely excited about{" "}
              <span style={{ fontFamily: "var(--font-mono)", color: "var(--color-pink)" }}>Big-O</span>{" "}
              at 8 AM.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <a
                href="#courses"
                style={{
                  background: "linear-gradient(135deg, var(--color-pink), var(--color-magenta))",
                }}
                className="inline-flex items-center gap-2 text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
              >
                View my courses
              </a>
              <a
                href="#contact"
                style={{ border: "1px solid var(--color-border)", color: "var(--color-muted)" }}
                className="inline-flex items-center gap-2 text-sm px-7 py-3.5 rounded-full hover:border-[var(--color-pink)] hover:text-[var(--color-text)] transition-all"
              >
                Get in touch
              </a>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { n: "1,400+", label: "Students taught", color: "var(--color-pink)" },
                { n: "8 yrs", label: "Teaching experience", color: "var(--color-magenta)" },
                { n: "4", label: "Courses authored", color: "var(--color-lavender)" },
                { n: "12", label: "Schools use CodePath", color: "var(--color-mint)" },
              ].map(({ n, label, color }) => (
                <div
                  key={label}
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                  }}
                  className="px-5 py-4 rounded-2xl"
                >
                  <div
                    style={{ fontFamily: "var(--font-display)", color }}
                    className="text-3xl font-black mb-1"
                  >
                    {n}
                  </div>
                  <div style={{ color: "var(--color-muted)" }} className="text-xs leading-snug">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Courses ──────────────────────────────────────── */}
        <section
          id="courses"
          style={{ borderTop: "1px solid var(--color-border)" }}
          className="py-20"
          aria-labelledby="courses-heading"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-peach)" }}
                  className="text-xs uppercase tracking-widest"
                >
                  ✦ Curriculum
                </span>
                <h2
                  id="courses-heading"
                  style={{ fontFamily: "var(--font-display)" }}
                  className="text-4xl md:text-5xl font-black mt-2"
                >
                  Courses I Teach
                </h2>
              </div>
              <p style={{ color: "var(--color-muted)" }} className="text-sm max-w-xs">
                Each course is built from scratch — no canned slides, no textbook-reading sessions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {COURSES.map((c) => (
                <article
                  key={c.code}
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                  }}
                  className="p-7 rounded-3xl hover:border-[var(--color-pink)] transition-colors"
                >
                  <div className="flex items-start justify-between mb-5">
                    <Pill color={c.color}>{c.lang}</Pill>
                    <span
                      style={{ fontFamily: "var(--font-mono)", color: "var(--color-muted)" }}
                      className="text-xs"
                    >
                      {c.code}
                    </span>
                  </div>
                  <h3
                    style={{ fontFamily: "var(--font-display)", color: c.color }}
                    className="text-2xl font-bold mb-3"
                  >
                    {c.title}
                  </h3>
                  <p style={{ color: "var(--color-muted)", lineHeight: 1.7 }} className="text-sm">
                    {c.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Skills ───────────────────────────────────────── */}
        <section
          id="skills"
          style={{ borderTop: "1px solid var(--color-border)" }}
          className="py-20"
          aria-labelledby="skills-heading"
        >
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_1.4fr] gap-16 items-start">
            <div>
              <span
                style={{ fontFamily: "var(--font-mono)", color: "var(--color-lavender)" }}
                className="text-xs uppercase tracking-widest"
              >
                ✦ Toolkit
              </span>
              <h2
                id="skills-heading"
                style={{ fontFamily: "var(--font-display)" }}
                className="text-4xl md:text-5xl font-black mt-2 mb-6"
              >
                Languages &amp; Skills
              </h2>
              <p style={{ color: "var(--color-muted)", lineHeight: 1.75 }} className="text-sm mb-8">
                I teach from first principles, not slides. Knowing a language deeply means I can explain
                the <em>why</em> behind every gotcha — and there are a lot of gotchas in C.
              </p>

              <div
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                }}
                className="p-5 rounded-2xl"
              >
                <p
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-pink)" }}
                  className="text-xs mb-1"
                >
                  // teaching philosophy
                </p>
                <p style={{ color: "var(--color-muted)" }} className="text-sm leading-relaxed">
                  "The best way to learn programming is to build something you actually care about
                  — then hit a wall and debug your way through it."
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              {SKILLS.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Projects ─────────────────────────────────────── */}
        <section
          id="projects"
          style={{ borderTop: "1px solid var(--color-border)" }}
          className="py-20"
          aria-labelledby="projects-heading"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <span
                style={{ fontFamily: "var(--font-mono)", color: "var(--color-mint)" }}
                className="text-xs uppercase tracking-widest"
              >
                ✦ Side projects
              </span>
              <h2
                id="projects-heading"
                style={{ fontFamily: "var(--font-display)" }}
                className="text-4xl md:text-5xl font-black mt-2"
              >
                Things I've Built
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {PROJECTS.map((p) => (
                <article
                  key={p.title}
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                  }}
                  className="p-6 rounded-3xl flex flex-col gap-4 hover:border-[var(--color-magenta)] transition-colors"
                >
                  <Pill color={p.color}>{p.tag}</Pill>
                  <h3
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
                    className="text-xl font-bold"
                  >
                    {p.title}
                  </h3>
                  <p style={{ color: "var(--color-muted)", lineHeight: 1.7 }} className="text-sm flex-1">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1 border-t" style={{ borderColor: "var(--color-border)" }}>
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: "var(--font-mono)",
                          background: "var(--color-surface2)",
                          color: "var(--color-muted)",
                        }}
                        className="text-xs px-2.5 py-1 rounded-lg mt-2"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ──────────────────────────────────────── */}
        <section
          id="contact"
          style={{ borderTop: "1px solid var(--color-border)" }}
          className="py-20"
          aria-labelledby="contact-heading"
        >
          <div className="max-w-xl mx-auto px-6">
            <div className="text-center mb-10">
              <span
                style={{ fontFamily: "var(--font-mono)", color: "var(--color-pink)" }}
                className="text-xs uppercase tracking-widest"
              >
                ✦ Let's connect
              </span>
              <h2
                id="contact-heading"
                style={{ fontFamily: "var(--font-display)" }}
                className="text-4xl md:text-5xl font-black mt-2 mb-3"
              >
                Say Hello
              </h2>
              <p style={{ color: "var(--color-muted)" }} className="text-sm leading-relaxed">
                Student, colleague, or prospective collaborator — my inbox is always open.
              </p>
            </div>

            {submitted ? (
              <div
                style={{
                  background: "var(--color-mint)" + "15",
                  border: "1px solid var(--color-mint)" + "40",
                  color: "var(--color-mint)",
                  fontFamily: "var(--font-mono)",
                }}
                className="text-center py-10 px-6 rounded-3xl text-sm"
                role="status"
                aria-live="polite"
              >
                ✦ Message sent — I'll reply within 48 hours.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4" aria-label="Contact form">
                <div className="grid md:grid-cols-2 gap-4">
                  {(["name", "email"] as const).map((field) => (
                    <div key={field} className="flex flex-col gap-1.5">
                      <label
                        htmlFor={field}
                        style={{ fontFamily: "var(--font-mono)", color: "var(--color-muted)" }}
                        className="text-xs capitalize"
                      >
                        {field}
                      </label>
                      <input
                        id={field}
                        type={field === "email" ? "email" : "text"}
                        required
                        placeholder={field === "name" ? "Your name" : "your@email.com"}
                        value={formData[field]}
                        onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                        style={{
                          background: "var(--color-surface)",
                          border: "1px solid var(--color-border)",
                          color: "var(--color-text)",
                        }}
                        className="px-4 py-3 rounded-xl text-sm placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-magenta)]"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--color-muted)" }}
                    className="text-xs"
                  >
                    message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Hey Morgan, I wanted to ask about..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      background: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-text)",
                      resize: "vertical",
                    }}
                    className="px-4 py-3 rounded-xl text-sm placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-magenta)]"
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    background: "linear-gradient(135deg, var(--color-pink), var(--color-magenta))",
                    fontFamily: "var(--font-display)",
                  }}
                  className="w-full py-4 rounded-full text-white font-bold text-sm hover:opacity-90 active:scale-[0.99] transition-all"
                >
                  Send message ✦
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer
        style={{ borderTop: "1px solid var(--color-border)", color: "var(--color-muted)" }}
        className="py-8"
        role="contentinfo"
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <span style={{ fontFamily: "var(--font-mono)" }}>
            © 2026 Morgan Smith · Westlake University
          </span>
          <div className="flex gap-6">
            {["GitHub", "LinkedIn", "Email"].map((l) => (
              <a
                key={l}
                href="#"
                style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}
                className="hover:text-[var(--color-pink)] transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
