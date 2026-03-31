import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { SiSupabase } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { SiGithubcopilot } from "react-icons/si";
import { SiClaude } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  // Row 1 (top: ~3-8%)
  { skill: "HTML", icon: FaHtml5, top: "3%", left: "5%", size: "text-6xl", delay: 0, color: "#E34F26" },
  { skill: "CSS", icon: FaCss3Alt, top: "5%", left: "25%", size: "text-7xl", delay: 0.1, color: "#1572B6" },
  { skill: "JavaScript", icon: IoLogoJavascript, top: "3%", left: "48%", size: "text-7xl", delay: 0.2, color: "#F7DF1E", lightColor: "#C5A500" },
  { skill: "Java", icon: FaJava, top: "5%", left: "70%", size: "text-6xl", delay: 0.3, color: "#ED8B00" },
  { skill: "SQL", icon: TbSql, top: "3%", left: "88%", size: "text-6xl", delay: 0.15, color: "#e38d00", lightColor: "#CC7A00" },
  // Row 2 (top: ~22-28%)
  { skill: "ReactJS", icon: FaReact, top: "22%", left: "8%", size: "text-8xl", delay: 0.15, color: "#61DAFB", lightColor: "#0097A7" },
  { skill: "React Native", icon: FaReact, top: "25%", left: "32%", size: "text-6xl", delay: 0.25, color: "#61DAFB", lightColor: "#0097A7" },
  { skill: "Flutter", icon: SiFlutter, top: "22%", left: "55%", size: "text-7xl", delay: 0.35, color: "#02569B" },
  { skill: "NextJS", icon: SiNextdotjs, top: "25%", left: "78%", size: "text-6xl", delay: 0.2, color: "#f1e1d9", lightColor: "#1a1a1a" },
  // Row 3 (top: ~42-48%)
  { skill: "Redux", icon: SiRedux, top: "42%", left: "5%", size: "text-7xl", delay: 0.3, color: "#764ABC" },
  { skill: "TailwindCSS", icon: RiTailwindCssFill, top: "44%", left: "25%", size: "text-6xl", delay: 0.1, color: "#06B6D4" },
  { skill: "Bootstrap", icon: SiBootstrap, top: "42%", left: "46%", size: "text-6xl", delay: 0.1, color: "#7952B3" },
  { skill: "Supabase", icon: SiSupabase, top: "44%", left: "66%", size: "text-6xl", delay: 0.15, color: "#3FCF8E" },
  { skill: "Firebase", icon: SiFirebase, top: "42%", left: "86%", size: "text-7xl", delay: 0.25, color: "#FFCA28", lightColor: "#E6A800" },
  // Row 4 (top: ~62-68%)
  { skill: "MySQL", icon: SiMysql, top: "62%", left: "8%", size: "text-6xl", delay: 0.15, color: "#4479A1" },
  { skill: "PostgreSQL", icon: SiPostgresql, top: "64%", left: "30%", size: "text-7xl", delay: 0.25, color: "#4169E1" },
  { skill: "AWS", icon: FaAws, top: "62%", left: "52%", size: "text-7xl", delay: 0.2, color: "#FF9900" },
  { skill: "REST APIs", icon: TbApi, top: "64%", left: "74%", size: "text-6xl", delay: 0.35, color: "#49C7A8" },
  // Row 5 (top: ~82-86%)
  { skill: "GitHub", icon: FaGithub, top: "82%", left: "10%", size: "text-7xl", delay: 0.1, color: "#f1e1d9", lightColor: "#1a1a1a" },
  { skill: "Copilot", icon: SiGithubcopilot, top: "84%", left: "38%", size: "text-6xl", delay: 0.2, color: "#f1e1d9", lightColor: "#1a1a1a" },
  { skill: "Claude", icon: SiClaude, top: "82%", left: "65%", size: "text-6xl", delay: 0.35, color: "#D97757" },
];

const AllSkills = () => {
  return (
    <div className="relative w-full h-[850px] max-w-[1100px] mx-auto">
      {skills.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, delay: item.delay, ease: "easeOut" }}
          whileHover={{ scale: 1.3, rotate: 5 }}
          className="absolute flex flex-col items-center gap-1 cursor-pointer group"
          style={{ top: item.top, left: item.left }}
        >
          <item.icon
            className={`${item.size} drop-shadow-lg transition-transform duration-300`}
            style={{ color: item.lightColor || item.color }}
          />
          <span className="text-xs text-lightGrey opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {item.skill}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkills;
