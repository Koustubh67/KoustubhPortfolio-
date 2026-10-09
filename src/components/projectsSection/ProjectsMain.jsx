import { useState, useEffect } from "react";
import ProjectsText from "./ProjectsText";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  SiReact,
  SiFlutter,
  SiFirebase,
  SiTailwindcss,
  SiApple,
  SiSupabase,
  SiPostgresql,
  SiThreedotjs,
  SiGreensock,
  SiSpringboot,
  SiLeaflet,
  SiNextdotjs,
  SiGooglegemini,
} from "react-icons/si";
import { FaMobileAlt, FaGlobe, FaJava, FaGooglePlay } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

const projects = [
  {
    name: "JobPilot AI",
    type: "web",
    date: "2026-09",
    tag: "Next.js | Supabase | Gemini",
    image: "/images/jobpilot.jpg",
    live: "https://job-ai-by-kd.vercel.app/",
    description:
      "AI job copilot that pulls openings from many job boards into one feed, scores every role against your resume, and tracks each application in real time.",
    details: [
      "One feed from Greenhouse, Lever, Ashby & more",
      "Resume-based match score for every role",
      "Chrome extension that autofills apply forms",
      "Live tracker, Gmail inbox & AI interview prep",
    ],
    techIcons: [SiNextdotjs, SiSupabase, SiGooglegemini],
  },
  {
    name: "Cyberfriction",
    type: "web",
    date: "2026-04",
    tag: "React | Three.js | GSAP",
    image: "/images/cyberfriction.jpg",
    live: "https://korieanwebpage.netlify.app/",
    description:
      "Motion-led design studio website with an interactive WebGL 3D hero, scroll-driven storytelling, and buttery smooth scrolling.",
    details: [
      "Interactive Three.js 3D hero",
      "GSAP ScrollTrigger scroll animations",
      "Lenis smooth scrolling",
      "Light & dark theme toggle",
    ],
    techIcons: [SiReact, SiThreedotjs, SiGreensock],
  },
  {
    name: "JavaBank",
    type: "web",
    date: "2025-08",
    tag: "Java | Spring Boot",
    image: "/images/javabank.jpg",
    live: "https://bank-management-system-with-java-and-9ddj.onrender.com/",
    description:
      "Full-stack banking demo built with Spring Boot: open an account online, use the ATM, pay with JavaPay UPI, and manage FDs, SIPs, loans and insurance.",
    details: [
      "Online account opening & application tracking",
      "ATM and JavaPay UPI payments",
      "FDs, SIPs, loans & insurance modules",
      "Financial calculators and charts",
    ],
    techIcons: [FaJava, SiSpringboot],
  },
  {
    name: "RaktFlow",
    type: "web",
    date: "2026-07",
    tag: "React | Tailwind",
    image: "/images/raktflow.jpg",
    live: "https://raktflow.netlify.app/",
    description:
      "Blood delivery platform for New Delhi: live blood-group stock from licensed centres, emergency ordering, and live cold-chain delivery tracking on a map.",
    details: [
      "Live stock by blood group across centres",
      "Emergency orders with 10-minute dispatch",
      "Live delivery tracking with Leaflet maps",
      "Flows for hospitals, donors & admins",
    ],
    techIcons: [SiReact, SiTailwindcss, SiLeaflet],
  },
  {
    name: "TryThat-Legacy",
    type: "mobile",
    date: "2025-03",
    tag: "React Native | Mobile",
    image: "/images/try that .webp",
    live: "https://play.google.com/store/apps/details?id=com.trythat.ai&hl=en",
    liveLabel: "Get on Google Play",
    liveIcon: FaGooglePlay,
    description:
      "Property management platform for rental and sales listings. Built complete UI architecture and API integration using React Native with cross-platform optimization.",
    details: [
      "Complete UI architecture from scratch",
      "REST API integration for property data",
      "Cross-platform optimization (iOS & Android)",
      "Search, filter, and listing management",
    ],
    techIcons: [SiReact, FaMobileAlt],
  },
  {
    name: "Hotel Management App",
    type: "mobile",
    date: "2024-09",
    tag: "Flutter | Firebase",
    image: "/images/resturant app .webp",
    link: "https://github.com/Koustubh67",
    description:
      "Restaurant management system handling staff operations, reservations, billing, parking, and menu management. Live on the Apple App Store.",
    details: [
      "Staff operations & shift management",
      "Real-time reservations with Firebase",
      "Billing & parking module",
      "Successfully deployed to Apple App Store",
    ],
    techIcons: [SiFlutter, SiFirebase, SiApple],
  },
  {
    name: "PG Management App",
    type: "mobile",
    date: "2025-01",
    tag: "Flutter | Firebase",
    image: "/images/pg .webp",
    link: "https://github.com/Koustubh67",
    description:
      "Digital platform for PG owners to manage members, staff, billing, and maintenance. Currently live on the App Store.",
    details: [
      "Member & staff management dashboard",
      "Billing and payment tracking",
      "Maintenance request system",
      "Firebase real-time sync & live on App Store",
    ],
    techIcons: [SiFlutter, SiFirebase, SiApple],
  },
  {
    name: "Hyphn",
    type: "web",
    date: "2026-01",
    tag: "React.js | Supabase | AWS",
    image: "/images/hyphn.png",
    live: "https://hyphn.tech/",
    description:
      "Scalable web platform with REST APIs using Supabase and PostgreSQL. Full API integration with React.js frontend and AWS S3 cloud storage for secure file handling.",
    details: [
      "Scalable REST APIs with Supabase & PostgreSQL",
      "Full API integration with React.js frontend",
      "AWS S3 cloud storage for file management",
      "Optimized performance & smooth data flow",
    ],
    techIcons: [SiReact, SiSupabase, SiPostgresql, FaAws],
  },
  {
    name: "Tickite",
    type: "web",
    date: "2025-06",
    tag: "React.js | Web",
    image: "/images/tickite.png",
    link: "https://github.com/Koustubh67",
    description:
      "Ticket booking website with responsive React.js UI, real-time data updates, and integrated APIs for booking and authentication.",
    details: [
      "Responsive UI with React.js",
      "Booking & authentication API integration",
      "Real-time data updates",
      "Optimized rendering across devices",
    ],
    techIcons: [SiReact, FaGlobe],
  },
  {
    name: "Juvo",
    type: "web",
    date: "2025-10",
    tag: "React.js | Enterprise",
    image: "/images/juvo.png",
    link: "https://github.com/Koustubh67",
    description:
      "HRMS & Office Management System with frontend modules for employee tracking, attendance, and workflow automation with real-time data processing.",
    details: [
      "Employee tracking & attendance modules",
      "Workflow automation system",
      "Real-time API data processing",
      "Scalable enterprise-level UI components",
    ],
    techIcons: [SiReact, FaGlobe],
  },
  {
    name: "Portfolio Website",
    type: "web",
    date: "2024-06",
    tag: "React.js | Tailwind",
    image: "/images/profile .png",
    live: "https://koustubdubey.netlify.app/",
    description:
      "React.js-based portfolio website with responsive design, Framer Motion animations, and performance optimization.",
    details: [
      "Custom React.js build with Vite",
      "Framer Motion scroll animations",
      "Fully responsive across all devices",
      "EmailJS contact form integration",
    ],
    techIcons: [SiReact, SiTailwindcss, FaGlobe],
  },
].sort(
  // Live work leads, newest first within each group
  (a, b) => Boolean(b.live) - Boolean(a.live) || b.date.localeCompare(a.date)
);

// Only the most recent project wears the NEW badge
const NEWEST = projects.reduce((a, b) => (b.date > a.date ? b : a)).name;

// "2026-09" -> "Sep 2026"
const formatDate = (date) => {
  const [year, month] = date.split("-");
  return new Date(year, month - 1).toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });
};

// The nearest data-cursor attribute decides: cards ask for the "view"
// cursor and the buttons inside them opt back out
const wantsViewCursor = (el) =>
  el?.closest("[data-cursor]")?.dataset.cursor === "view";

const ViewCursor = ({ x, y, visible }) => {
  // Pupils glance in the direction the cursor is moving
  const look = (v) => Math.max(-1, Math.min(1, v / 800)) * 3;
  const pupilX = useSpring(useTransform(useVelocity(x), look), { stiffness: 300, damping: 20 });
  const pupilY = useSpring(useTransform(useVelocity(y), look), { stiffness: 300, damping: 20 });

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-50"
      style={{ x, y }}
    >
      <motion.div
        initial={false}
        animate={{ scale: visible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        style={{ x: "-50%", y: "-50%" }}
        className="flex items-center gap-2.5 bg-orange text-darkBrown font-special font-bold text-lg leading-none pl-5 pr-3.5 py-2.5 rounded-full shadow-lg"
      >
        View
        <span className="flex gap-0.5">
          {[0, 1].map((i) => (
            <span
              key={i}
              className="w-4 h-5 rounded-full bg-darkBrown flex items-center justify-center"
            >
              <motion.span
                className="w-2 h-2.5 rounded-full bg-white"
                style={{ x: pupilX, y: pupilY }}
              />
            </span>
          ))}
        </span>
      </motion.div>
    </motion.div>
  );
};

const PASTELS = [
  "bg-[#d4f1f4]",
  "bg-[#ffe2c4]",
  "bg-[#e6defc]",
  "bg-[#dcf3dd]",
  "bg-[#fff0a6]",
  "bg-[#ffd9e2]",
];

const FILTERS = [
  { key: "all", label: "All", emoji: "✦", match: () => true },
  { key: "live", label: "Live", emoji: "🟢", match: (p) => Boolean(p.live) },
  { key: "web", label: "Web", emoji: "💻", match: (p) => p.type === "web" },
  { key: "mobile", label: "Mobile", emoji: "📱", match: (p) => p.type === "mobile" },
];

const HARD_SHADOW = "shadow-[6px_6px_0_0_rgb(var(--color-white))]";

const ProjectCard = ({ project, pastel }) => {
  const href = project.live ?? project.link;
  const liveLabel = project.liveLabel ?? "Visit site";
  const LiveIcon = project.liveIcon ?? BsArrowUpRight;
  const isNew = project.name === NEWEST;

  return (
    <div
      data-cursor="view"
      className={`group relative h-full flex flex-col gap-4 rounded-[28px] border-[3px] border-white p-3 ${pastel} ${HARD_SHADOW} transition-[transform,box-shadow] duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_0_rgb(var(--color-white))]`}
    >
      {/* Makes the whole card clickable. The button below leads to the same
          place, so this stays out of the tab order and screen readers. */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className="absolute inset-0 z-20 cursor-none rounded-[28px]"
      />

      {isNew && (
        <span className="pointer-events-none absolute -top-4 -left-3 z-30 -rotate-[8deg] rounded-xl border-[3px] border-white bg-orange px-3 py-1 text-sm font-black tracking-wide text-black shadow-[3px_3px_0_0_rgb(var(--color-white))]">
          NEW ✦
        </span>
      )}

      {/* Image */}
      <div className="relative h-[200px] lg:h-[210px] shrink-0 overflow-hidden rounded-[20px] border-[3px] border-white bg-darkBrown">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover: what's inside */}
        <div className="absolute inset-0 flex items-center bg-white/90 p-6 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <ul className="space-y-2.5">
            {project.details.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-black">
                <span className="text-[#c6f432]">✦</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {project.live && (
          <span className="absolute top-3 right-3 z-10 flex items-center gap-1.5 rounded-full border-2 border-white bg-[#c6f432] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
            Live
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-2 pb-1">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-2xl font-bold leading-tight text-white">
            {project.name}
          </h3>
          <span className="shrink-0 font-special text-sm italic text-lightGrey">
            {formatDate(project.date)}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-lightGrey">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tag.split(" | ").map((tech) => (
            <span
              key={tech}
              className="rounded-full border-2 border-white bg-black px-3 py-1 text-xs font-semibold text-white"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <div className="flex gap-2 text-lg text-white/60">
            {project.techIcons.map((Icon, i) => (
              <Icon key={i} />
            ))}
          </div>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="default"
            aria-label={project.live ? undefined : `${project.name} on GitHub`}
            className="relative z-30 flex items-center gap-2 rounded-full border-[3px] border-white bg-white px-4 py-2 text-sm font-bold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#c6f432] hover:text-white"
          >
            {project.live ? (
              <>
                {liveLabel} <LiveIcon />
              </>
            ) : (
              <>
                <BsGithub /> Code <BsArrowUpRight />
              </>
            )}
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsMain = () => {
  const [filter, setFilter] = useState("all");
  const [cursorVisible, setCursorVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursorX = useSpring(mouseX, { stiffness: 600, damping: 40, mass: 0.4 });
  const cursorY = useSpring(mouseY, { stiffness: 600, damping: 40, mass: 0.4 });

  const shown = projects.filter(FILTERS.find((f) => f.key === filter).match);

  const trackCursor = (e) => {
    if (e.pointerType === "touch") return;
    const show = wantsViewCursor(e.target);
    // Appear right under the pointer instead of gliding in from the last spot
    if (show && !cursorVisible) {
      cursorX.jump(e.clientX);
      cursorY.jump(e.clientY);
    }
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
    setCursorVisible(show);
  };

  // The page can scroll a card out from under a still pointer
  useEffect(() => {
    if (!cursorVisible) return;
    const onScroll = () =>
      setCursorVisible(
        wantsViewCursor(document.elementFromPoint(mouseX.get(), mouseY.get()))
      );
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [cursorVisible, mouseX, mouseY]);

  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>

      {/* Filter chips */}
      <div role="group" aria-label="Filter projects" className="mt-10 flex flex-wrap justify-center gap-3">
        {FILTERS.map((f) => {
          const isActive = f.key === filter;
          return (
            <button
              key={f.key}
              type="button"
              aria-pressed={isActive}
              onClick={() => setFilter(f.key)}
              className={`relative rounded-full border-[3px] border-white px-5 py-2 text-sm font-bold transition-transform duration-200 ${
                isActive ? "text-black" : "bg-black text-white hover:-translate-y-0.5"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 rounded-full bg-white"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">
                {f.emoji} {f.label}
                <sup className="ml-1 text-[10px] opacity-60">
                  {projects.filter(f.match).length}
                </sup>
              </span>
            </button>
          );
        })}
      </div>

      {/* Every project at once, three to a row. Flex-wrap rather than grid
          so a half-full last row sits centred. */}
      <div
        className="mt-12"
        onPointerMove={trackCursor}
        onPointerLeave={() => setCursorVisible(false)}
      >
        <div className="relative flex flex-wrap justify-center gap-6">
          <AnimatePresence mode="popLayout">
            {shown.map((project, i) => (
              <motion.div
                key={project.name}
                layout="position"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08, ease: "easeOut" }}
                className="w-full md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
              >
                <ProjectCard
                  project={project}
                  pastel={PASTELS[projects.indexOf(project) % PASTELS.length]}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      <ViewCursor x={cursorX} y={cursorY} visible={cursorVisible} />
    </div>
  );
};

export default ProjectsMain;
