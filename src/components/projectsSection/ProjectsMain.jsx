import { useState, useEffect, useCallback } from "react";
import ProjectsText from "./ProjectsText";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { BsArrowRight, BsGithub, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import {
  SiReact,
  SiFlutter,
  SiFirebase,
  SiTailwindcss,
  SiApple,
  SiSupabase,
  SiPostgresql,
} from "react-icons/si";
import { FaMobileAlt, FaGlobe } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

const projects = [
  {
    name: "TryThat-Legacy",
    year: "2024",
    tag: "React Native | Mobile",
    image: "/images/try that .webp",
    link: "https://github.com/Koustubh67",
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
    year: "2024",
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
    year: "2024",
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
    year: "2024",
    tag: "React.js | Supabase | AWS",
    image: "/images/hyphn.png",
    link: "https://github.com/Koustubh67",
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
    year: "2024",
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
    year: "2024",
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
    year: "2024",
    tag: "React.js | Tailwind",
    image: "/images/profile .png",
    link: "https://github.com/Koustubh67",
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
];

const ProjectCard = ({ project }) => (
  <div className="bg-brown rounded-3xl overflow-hidden border border-lightBrown hover:border-cyan/30 transition-all duration-500 group h-full flex flex-col">
    {/* Image area */}
    <div className="h-[280px] relative overflow-hidden bg-darkBrown flex-shrink-0">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Hover: details overlay */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 p-8">
        <ul className="space-y-3">
          {project.details.map((item, i) => (
            <li
              key={i}
              className="text-white text-sm flex items-start gap-2"
            >
              <span className="text-cyan mt-0.5 text-xs">&#9679;</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Year badge */}
      <div className="absolute top-4 right-4 bg-darkBrown/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full border border-white/10 z-10">
        {project.year}
      </div>
    </div>

    {/* Content area */}
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center gap-3 mb-3">
        <h3 className="text-2xl font-bold text-white">
          {project.name}
        </h3>
        <div className="flex gap-1.5">
          {project.techIcons.map((Icon, i) => (
            <Icon key={i} className="text-lightGrey/50 text-sm" />
          ))}
        </div>
      </div>
      <p className="text-lightGrey text-sm leading-relaxed">
        {project.description}
      </p>
      <div className="flex items-center justify-between mt-auto pt-6">
        <span className="text-xs bg-white/10 text-cyan px-3 py-1.5 rounded-full border border-white/10">
          {project.tag}
        </span>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white flex items-center gap-2 hover:text-cyan transition-colors duration-300 group/link"
        >
          <BsGithub className="text-lg" />
          <BsArrowRight className="text-xl group-hover/link:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </div>
  </div>
);

const ProjectsMain = () => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const perPage = 2;
  const totalPages = Math.ceil(projects.length / perPage);

  const next = useCallback(() => { setDirection(1); setPage((p) => (p === totalPages - 1 ? 0 : p + 1)); }, [totalPages]);
  const prev = () => { setDirection(-1); setPage((p) => (p === 0 ? totalPages - 1 : p - 1)); };

  // Auto-slide every 4 seconds, pause on hover
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const currentProjects = projects.slice(page * perPage, page * perPage + perPage);

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

      <div
        className="relative mt-12"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Carousel cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: direction * 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -80 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8"
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-[-20px] lg:left-[-60px] top-[40%] -translate-y-1/2 w-12 h-12 rounded-full bg-darkBrown border border-lightBrown/30 flex items-center justify-center text-white hover:bg-cyan hover:border-cyan transition-all duration-300 z-10 shadow-lg"
        >
          <BsChevronLeft className="text-lg" />
        </button>
        <button
          onClick={next}
          className="absolute right-[-20px] lg:right-[-60px] top-[40%] -translate-y-1/2 w-12 h-12 rounded-full bg-darkBrown border border-lightBrown/30 flex items-center justify-center text-white hover:bg-cyan hover:border-cyan transition-all duration-300 z-10 shadow-lg"
        >
          <BsChevronRight className="text-lg" />
        </button>

        {/* Dots with progress */}
        <div className="flex justify-center gap-3 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > page ? 1 : -1); setPage(i); }}
              className={`h-1.5 rounded-full transition-all duration-300 overflow-hidden ${
                i === page ? "w-10 bg-cyan/30" : "w-3 bg-lightBrown hover:bg-lightGrey"
              }`}
            >
              {i === page && (
                <motion.div
                  className="h-full bg-cyan rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: paused ? undefined : "100%" }}
                  transition={{ duration: 4, ease: "linear" }}
                  key={page}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsMain;
