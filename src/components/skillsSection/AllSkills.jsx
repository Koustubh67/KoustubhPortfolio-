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
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const skills = [
  { skill: "HTML", icon: FaHtml5, top: "5%", left: "10%", size: "text-6xl", delay: 0, color: "#E34F26" },
  { skill: "CSS", icon: FaCss3Alt, top: "10%", left: "35%", size: "text-7xl", delay: 0.1, color: "#1572B6" },
  { skill: "JavaScript", icon: IoLogoJavascript, top: "3%", left: "60%", size: "text-8xl", delay: 0.2, color: "#F7DF1E", lightColor: "#C5A500" },
  { skill: "Java", icon: FaJava, top: "8%", left: "85%", size: "text-6xl", delay: 0.3, color: "#ED8B00" },
  { skill: "ReactJS", icon: FaReact, top: "30%", left: "6%", size: "text-8xl", delay: 0.15, color: "#61DAFB", lightColor: "#0097A7" },
  { skill: "React Native", icon: FaReact, top: "33%", left: "32%", size: "text-6xl", delay: 0.25, color: "#61DAFB", lightColor: "#0097A7" },
  { skill: "Flutter", icon: SiFlutter, top: "28%", left: "52%", size: "text-7xl", delay: 0.35, color: "#02569B" },
  { skill: "NextJS", icon: SiNextdotjs, top: "35%", left: "78%", size: "text-6xl", delay: 0.2, color: "#f1e1d9", lightColor: "#1a1a1a" },
  { skill: "Redux", icon: SiRedux, top: "55%", left: "12%", size: "text-7xl", delay: 0.3, color: "#764ABC" },
  { skill: "TailwindCSS", icon: RiTailwindCssFill, top: "58%", left: "36%", size: "text-6xl", delay: 0.1, color: "#06B6D4" },
  { skill: "Firebase", icon: SiFirebase, top: "53%", left: "58%", size: "text-8xl", delay: 0.25, color: "#FFCA28", lightColor: "#E6A800" },
  { skill: "MySQL", icon: SiMysql, top: "60%", left: "82%", size: "text-6xl", delay: 0.15, color: "#4479A1" },
  { skill: "AWS", icon: FaAws, top: "78%", left: "18%", size: "text-7xl", delay: 0.2, color: "#FF9900" },
  { skill: "REST APIs", icon: TbApi, top: "76%", left: "48%", size: "text-6xl", delay: 0.35, color: "#49C7A8" },
  { skill: "GitHub", icon: FaGithub, top: "80%", left: "75%", size: "text-7xl", delay: 0.1, color: "#f1e1d9", lightColor: "#1a1a1a" },
];

const AllSkills = () => {
  const { isDark } = useTheme();
  return (
    <div className="relative w-full h-[750px] max-w-[1100px] mx-auto">
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
            style={{ color: !isDark && item.lightColor ? item.lightColor : item.color }}
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
