import ProjectsText from "./ProjectsText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { BsArrowRight, BsGithub } from "react-icons/bs";
import {
  SiReact,
  SiFlutter,
  SiFirebase,
  SiTailwindcss,
  SiApple,
} from "react-icons/si";
import { FaMobileAlt, FaGlobe } from "react-icons/fa";

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

const ProjectsMain = () => {
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

      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8 mt-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", index * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="bg-brown rounded-3xl overflow-hidden border border-lightBrown hover:border-cyan/30 transition-all duration-500 group"
          >
            {/* Image area */}
            <div className="h-[280px] relative overflow-hidden bg-darkBrown">
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
            <div className="p-6">
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
              <div className="flex items-center justify-between mt-6">
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
