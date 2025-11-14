import React, { useEffect } from "react";
import "./App.css";
import {
  SiNestjs,
  SiExpress,
  SiNextdotjs,
  SiReact,
  SiPostgresql,
  SiMongodb,
  SiRedux,
  SiRabbitmq,
} from "react-icons/si";
import { GiBearHead } from "react-icons/gi";
import { TbApi } from "react-icons/tb";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "more", label: "More" },
  { id: "contact", label: "Contact" },
];

const EXPERIENCES = [
  {
    company: "PROMAN – AI-powered listing assistant",
    role: "Front-end Developer",
    time: "4/2025 – Present",
    tech: "Next.js, TypeScript, TailwindCSS, Redux, RESTful API, Jira, Scrum",
    logo: "/logos/proman-logo.png",
    bullets: [
      "Connected frontend components with RESTful APIs for efficient data fetching and submission.",
      "Built reusable UI components with standardized APIs and responsive design for consistent UX.",
      "Implemented landing page, onboarding and in-app notification UI across desktop & mobile.",
      "Optimized performance with code splitting, lazy loading and image optimization.",
      "Collaborated with designers & developers in Scrum to refine requirements and ship on time.",
    ],
  },
  {
    company: "AI POWER (Odoo team)",
    role: "Intern Developer",
    time: "6/2025 – 9/2025",
    tech: "Python, Odoo, XML, PostgreSQL, Agile",
    logo: "/logos/aipower-logo.png",
    bullets: [
      "Learned Odoo fundamentals: module scaffolding, ORM, XML views, actions and QWeb reports.",
      "Implemented small features and enhancements in custom Odoo modules.",
      "Fixed bugs related to Python ORM, XML views and permissions with regression checks.",
      "Practiced working with Japanese partners: clarifying requirements and reporting progress.",
    ],
  },
];

const PROJECTS = [
  {
    name: "TOEIC Training Web",
    role: "Full-stack Developer (Solo)",
    time: "10/2025 – Present",
    tech: "Next.js, NestJS, TypeScript, TailwindCSS, RabbitMQ, gRPC, PostgreSQL, Supabase, Docker",
    link: "https://github.com/julynguyen247/zooly",
    description:
      "A microservices-based TOEIC practice platform with timed exams, auto-saving, scoring and progress analytics.",
    bullets: [
      "Designed scalable microservices architecture using RabbitMQ (async) and gRPC (low-latency).",
      "Implemented auto-save & session recovery so users can safely resume after disconnects.",
      "Built user-friendly UI with clear navigation (sections, questions, timer, progress).",
      "Containerized services with Docker: API gateway, microservices, PostgreSQL and RabbitMQ.",
      "Enabled course marketplace with secure checkout, review and moderated comments.",
    ],
  },
  {
    name: "KARAOKE APP – MANOKE",
    role: "Front-end Developer",
    time: "3/2025 – 5/2025",
    tech: "React Native, TypeScript, NestJS, PostgreSQL, NativeWind, Supabase, Firebase FCM",
    link: "https://github.com/manoke-uit/manoke-mobile",
    description:
      "A social karaoke mobile app where users can sing, upload performances and interact through comments like a small community.",
    bullets: [
      "Developed the mobile front-end for singing, uploading and displaying performances.",
      "Built an admin web interface for content moderation and user management.",
      "Integrated Firebase Cloud Messaging (FCM) for real-time user notifications.",
    ],
  },
  {
    name: "Voucher Exchange Website",
    role: "Full-stack Developer",
    time: "3/2025 – 5/2025",
    tech: "React, Express.js, MongoDB, TailwindCSS",
    link: "https://github.com/julynguyen247/voucher-exchange-web-reactjs-expressjs",
    description:
      "A web platform for managing digital voucher distribution and redemption with a supporting chat bot.",
    bullets: [
      "Designed RESTful API for voucher lifecycle management with Express.js.",
      "Developed responsive UI/UX for both desktop and mobile users.",
      "Improved SEO and reduced page load time to enhance user experience.",
    ],
  },
];

const SKILLS = {
  languages: [
    "TypeScript",
    "JavaScript",
    "Python",
    "React",
    "Next.js",
    "NestJS",
    "Express.js",
    "React Native",
  ],
  backendInfra: ["NestJS", "Express.js", "RabbitMQ", "gRPC", "Docker"],
  frontendUi: ["React", "Next.js", "TailwindCSS", "Zustand", "Redux"],
  database: ["PostgreSQL", "MongoDB", "Supabase"],
  tools: ["Git & GitHub", "Postman", "Figma", "Jira", "Agile/Scrum"],
};

const HOBBIES = [
  "Coding & side projects",
  "Learning English",
  "Playing sports: basketball, badminton, soccer",
  "Playing guitar & composing songs",
  "Traveling & exploring new places",
];

type OrbitTech = {
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const ORBIT_TECHS: OrbitTech[] = [
  { label: "React", Icon: SiReact },
  { label: "Next.js", Icon: SiNextdotjs },
  { label: "NestJS", Icon: SiNestjs },
  { label: "Express.js", Icon: SiExpress },
  { label: "PostgreSQL", Icon: SiPostgresql },
  { label: "MongoDB", Icon: SiMongodb },
  { label: "Redux", Icon: SiRedux },
  { label: "RabbitMQ", Icon: SiRabbitmq },
  { label: "Zustand", Icon: GiBearHead },
  { label: "gRPC", Icon: TbApi },
];

const App: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Animation khi scroll
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".section-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-50 overflow-x-hidden app-root">
      {/* Background gradient full-screen */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="fixed inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_top,_#22c55e22,_transparent_60%)]" />

      {/* Navbar */}
      <header className="sticky top-0 z-20 border-b border-white/5 nav-blur">
        <nav className="w-full">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-4 lg:px-2 py-3">
            <button
              className="text-base font-semibold tracking-wide text-emerald-400 hover:text-emerald-300 transition-colors"
              onClick={() => scrollTo("hero")}
            >
              NGUYEN BA TRONG KHOI
            </button>
            <div className="hidden md:flex items-center gap-5 text-sm font-medium text-slate-200">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="px-2 py-1 rounded-full hover:bg-white/5 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main className="w-full">
        <div className="max-w-6xl mx-auto w-full px-4 lg:px-2 pb-20 pt-12 space-y-20 lg:space-y-28">
          <section
            id="hero"
            className="grid gap-10 lg:gap-16 md:grid-cols-2 items-center section-animate"
          >
            <div className="space-y-7">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-50 leading-tight">
                Designing & building{" "}
                <span className="text-emerald-400">modern web apps</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                I&apos;m a third-year Software Engineering student at{" "}
                <span className="font-semibold text-slate-100">
                  VNU-HCM University of Information Technology
                </span>
                , passionate about React / Next.js, microservices and building
                products that feel fast & polished.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => scrollTo("projects")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-emerald-400 text-slate-950 hover:bg-emerald-300 transition-transform hover:-translate-y-0.5 shadow-soft"
                >
                  View projects
                  <span aria-hidden>↗</span>
                </button>
                <button
                  onClick={() => scrollTo("experience")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-white/10 text-slate-100 hover:bg-white/5 transition-transform hover:-translate-y-0.5"
                >
                  Experience
                </button>
              </div>
            </div>

            {/* RIGHT – avatar */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-emerald-400/30 via-slate-900 to-slate-900 border border-white/10 shadow-[0_0_80px_rgba(16,185,129,0.4)] overflow-hidden float-card">
                {/* Ảnh của bạn */}
                <img
                  src="/profile.jpg" // đặt file ảnh vào public/profile.jpg
                  alt="Nguyen Ba Trong Khoi"
                  className="w-full h-full object-cover"
                />
                {/* overlay nhẹ cho cảm giác portfolio hơn */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-900/20" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1">
                  <p className="text-xs text-emerald-300 font-medium uppercase tracking-[0.18em]">
                    july2407
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="space-y-6 section-animate">
            <SectionTitle
              title="About"
              subtitle="A quick snapshot of who I am and how I work."
            />
            <div className="grid gap-6 md:grid-cols-[1.3fr,1fr]">
              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                <p>
                  I enjoy working at the intersection of clean UI, solid
                  architecture and real user needs . My recent experience
                  includes building an AI-powered listing tool for Amazon
                  sellers and a TOEIC training platform with microservices.
                </p>
                <p>
                  I learn new technologies quickly, use AI to speed up
                  workflows, and love turning brainstorming ideas into working
                  products that deliver value.
                </p>
                <p>
                  Right now I&apos;m focused on{" "}
                  <span className="font-semibold text-slate-100">
                    React / Next.js on the frontend
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-slate-100">
                    NestJS microservices
                  </span>{" "}
                  on the backend, while continuously improving code quality,
                  testing and developer experience.
                </p>
              </div>
              <div className="space-y-4 text-sm">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 card-hover">
                  <h3 className="text-sm font-semibold text-slate-200 mb-2">
                    Education
                  </h3>
                  <p className="text-base text-slate-100 font-semibold">
                    VNU-HCM University of Information Technology
                  </p>
                  <p className="text-sm text-slate-300">
                    BSc in Software Engineering • 2023 – Present
                  </p>
                  <p className="mt-1 text-sm text-emerald-300 font-medium">
                    GPA: 8.65 / 10.0
                  </p>
                </div>
                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-4 card-hover">
                  <h3 className="text-sm font-semibold text-slate-200 mb-1">
                    Certification
                  </h3>
                  <p className="text-sm text-slate-100">
                    IELTS 7.0 — confident working and communicating in English.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="experience" className="space-y-8 section-animate">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
                Professional Experience
              </h2>
              <div className="w-24 h-0.5 bg-emerald-400 mx-auto rounded-full" />
            </div>

            <div className="space-y-6">
              {EXPERIENCES.map((exp) => {
                const summary = exp.bullets[0];
                const restBullets = exp.bullets.slice(1);

                return (
                  <article
                    key={exp.company}
                    className="rounded-2xl bg-slate-900 border border-emerald-500/60 shadow-soft overflow-hidden experience-card"
                  >
                    {/* top line */}
                    <div className="h-1 bg-emerald-500" />

                    <div className="p-5 sm:p-6 md:p-7 flex flex-col gap-4">
                      <div className="flex flex-col-reverse md:flex-row md:items-start md:justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold text-emerald-300 uppercase tracking-wide">
                            {exp.time}
                          </p>
                          <p className="mt-1 text-lg sm:text-xl font-semibold text-slate-50">
                            {exp.company}
                          </p>
                          <p className="text-sm text-slate-300">{exp.role}</p>
                        </div>

                        {exp.logo && (
                          <div className="flex md:justify-end">
                            <img
                              src={exp.logo}
                              alt={exp.company}
                              className="h-10 w-auto object-contain"
                            />
                          </div>
                        )}
                      </div>

                      <p className="text-sm text-slate-300">{summary}</p>

                      {restBullets.length > 0 && (
                        <div className="mt-2 experience-details">
                          <p className="text-xs font-semibold text-slate-400 uppercase mb-1.5">
                            Key contributions:
                          </p>
                          <ul className="space-y-1.5 text-sm text-slate-300 leading-relaxed">
                            {restBullets.map((b, i) => (
                              <li key={i} className="flex gap-2">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 " />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <p className="text-xs text-emerald-300 mt-2">
                        Tech: {exp.tech}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section id="projects" className="space-y-6 section-animate">
            <SectionTitle
              title="Projects"
              subtitle="Side projects where I experiment, learn and ship."
            />
            <div className="grid gap-6 md:grid-cols-2">
              {PROJECTS.map((p) => (
                <article
                  key={p.name}
                  className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-slate-900 to-slate-950 p-5 flex flex-col card-hover"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-base font-semibold text-slate-50">
                        {p.name}
                      </h3>
                      <p className="text-sm text-slate-400">{p.role}</p>
                    </div>
                    <span className="text-xs text-slate-400">{p.time}</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-3">
                    {p.description}
                  </p>
                  <p className="text-xs text-emerald-300 mb-3">{p.tech}</p>
                  <ul className="space-y-1.5 text-xs text-slate-300 flex-1">
                    {p.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1 h-1 w-1 rounded-full bg-emerald-400 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-300 hover:text-emerald-200"
                    >
                      View on GitHub
                      <span aria-hidden>↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="space-y-6 section-animate">
            <SectionTitle
              title="Skills"
              subtitle="Technologies I work with regularly."
            />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <SkillGroup
                title="Languages & Frameworks"
                items={SKILLS.languages}
              />
              <SkillGroup title="Frontend & UI" items={SKILLS.frontendUi} />
              <SkillGroup title="Backend & Infra" items={SKILLS.backendInfra} />
              <SkillGroup
                title="Database & Tools"
                items={[...SKILLS.database, ...SKILLS.tools]}
              />
            </div>
          </section>

          {/* More */}
          <section id="more" className="space-y-6 section-animate">
            <SectionTitle
              title="More about me"
              subtitle="A bit of personality beyond the code."
            />
            <div className="grid gap-4 md:grid-cols-[1.4fr,1fr]">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 card-hover">
                <h3 className="text-sm font-semibold text-slate-200 mb-2">
                  Hobbies
                </h3>
                <ul className="space-y-1.5 text-sm text-slate-300">
                  {HOBBIES.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-4 space-y-2 card-hover">
                <h3 className="text-sm font-semibold text-slate-200 mb-2">
                  Quick facts
                </h3>
                <p className="text-sm text-slate-100">
                  • Comfortable communicating in English.
                </p>
                <p className="text-sm text-slate-100">
                  • Enjoy working in Agile/Scrum teams and pairing with mentors.
                </p>
                <p className="text-sm text-slate-100">
                  • Open to front-end, full-stack or microservices-related
                  roles.
                </p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="space-y-6 section-animate">
            <SectionTitle
              title="Contact"
              subtitle="Feel free to reach out for internships, collaborations or side projects."
            />
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 card-hover">
              <div className="space-y-1 text-sm">
                <p className="font-semibold text-slate-50">
                  Nguyen Ba Trong Khoi
                </p>
                <p className="text-sm text-slate-300">
                  Linh Trung Ward, Thu Duc City, Ho Chi Minh City, Viet Nam
                </p>
                <p className="text-sm text-slate-300">
                  Phone:{" "}
                  <span className="text-slate-100">(+84) 392 794 327</span>
                </p>
                <p className="text-sm text-slate-300">
                  Email:{" "}
                  <a
                    href="mailto:nbtrkhoi2407@gmail.com"
                    className="text-emerald-300 hover:text-emerald-200"
                  >
                    nbtrkhoi2407@gmail.com
                  </a>
                </p>
              </div>
              <div className="space-y-2 text-sm">
                <a
                  href="https://github.com/julynguyen247"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-slate-200 hover:text-emerald-300"
                >
                  GitHub: julynguyen247
                </a>
                <a
                  href="https://www.linkedin.com/in/trongkhoi2407"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-slate-200 hover:text-emerald-300"
                >
                  LinkedIn: /in/trongkhoi2407
                </a>
                <button
                  onClick={() => scrollTo("hero")}
                  className="mt-2 inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-100 hover:bg-white/5 transition-colors"
                >
                  Back to top ↑
                </button>
              </div>
            </div>
          </section>

          {/* Tech marquee ở cuối */}
          <section className="space-y-4 section-animate">
            <TechMarquee />
          </section>
        </div>
      </main>
    </div>
  );
};

const SectionTitle: React.FC<{ title: string; subtitle?: string }> = ({
  title,
}) => (
  <div className="space-y-1">
    <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
      {title}
    </h2>
  </div>
);

const SkillGroup: React.FC<{ title: string; items: string[] }> = ({
  title,
  items,
}) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 card-hover">
    <h3 className="text-sm font-semibold text-slate-200 mb-2">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="text-xs px-3 py-1 rounded-full bg-slate-950/50 border border-white/10 text-slate-100"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

const TechMarquee: React.FC = () => {
  const items = [...ORBIT_TECHS, ...ORBIT_TECHS];

  return (
    <div className="mt-4 rounded-3xl border border-white/10 bg-gradient-to-r from-emerald-400/10 via-slate-950 to-emerald-400/10 px-4 sm:px-6 py-6 sm:py-8 card-hover">
      <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-emerald-300 uppercase text-center">
          Tech stack highlight
        </p>
        <h3 className="text-lg sm:text-2xl font-semibold text-slate-50 text-center">
          Frameworks & tools I use every day
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 text-center max-w-2xl mx-auto">
          Modern frontend with React / Next.js and Tailwind, backend with
          NestJS, Express, PostgreSQL, MongoDB, plus state management &
          messaging like Redux, Zustand, RabbitMQ and gRPC.
        </p>
      </div>

      <div className="tech-marquee-wrapper">
        <div className="tech-marquee">
          {items.map((tech, idx) => {
            const Icon = tech.Icon;
            return (
              <div key={idx} className="tech-pill">
                <Icon className="tech-pill-icon" />
                <span className="tech-pill-label">{tech.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
