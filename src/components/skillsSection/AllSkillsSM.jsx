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
import { fadeIn } from "../../framerMotion/variants";
import { useTheme } from "../../context/ThemeContext";

const skills = [
  { skill: "HTML", icon: FaHtml5, color: "#E34F26" },
  { skill: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { skill: "JavaScript", icon: IoLogoJavascript, color: "#F7DF1E", lightColor: "#C5A500" },
  { skill: "Java", icon: FaJava, color: "#ED8B00" },
  { skill: "ReactJS", icon: FaReact, color: "#61DAFB", lightColor: "#0097A7" },
  { skill: "React Native", icon: FaReact, color: "#61DAFB", lightColor: "#0097A7" },
  { skill: "Flutter", icon: SiFlutter, color: "#02569B" },
  { skill: "NextJS", icon: SiNextdotjs, color: "#f1e1d9", lightColor: "#1a1a1a" },
  { skill: "Redux", icon: SiRedux, color: "#764ABC" },
  { skill: "TailwindCSS", icon: RiTailwindCssFill, color: "#06B6D4" },
  { skill: "Firebase", icon: SiFirebase, color: "#FFCA28", lightColor: "#E6A800" },
  { skill: "MySQL", icon: SiMysql, color: "#4479A1" },
  { skill: "AWS", icon: FaAws, color: "#FF9900" },
  { skill: "REST APIs", icon: TbApi, color: "#49C7A8" },
  { skill: "GitHub", icon: FaGithub, color: "#f1e1d9", lightColor: "#1a1a1a" },
];

const AllSkillsSM = () => {
  const { isDark } = useTheme();
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 gap-10 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon
              className="text-6xl"
              style={{ color: !isDark && item.lightColor ? item.lightColor : item.color }}
            />
            <p className="text-center mt-3 text-sm text-lightGrey">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
