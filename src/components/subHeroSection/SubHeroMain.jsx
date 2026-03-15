import { FaReact, FaGitAlt, FaMobileAlt, FaCode } from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { MdOutlineSpeed, MdGroups, MdBugReport } from "react-icons/md";

const tags = [
  { label: "React.js", icon: FaReact },
  { label: "Next.js", icon: SiNextdotjs },
  { label: "React Native", icon: FaMobileAlt },
  { label: "JavaScript", icon: SiJavascript },
  { label: "Redux", icon: SiRedux },
  { label: "Tailwind CSS", icon: SiTailwindcss },
  { label: "HTML5", icon: SiHtml5 },
  { label: "CSS3", icon: SiCss3 },
  { label: "Git & GitHub", icon: FaGitAlt },
  { label: "Cross-Platform Dev", icon: FaCode },
  { label: "Performance Optimization", icon: MdOutlineSpeed },
  { label: "QA Engineering", icon: MdBugReport },
  { label: "Team Coordination", icon: MdGroups },
];

const SubHeroMain = () => {
  return (
    <div className="w-full border-y bg-brown border-lightGrey overflow-hidden py-5">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...tags, ...tags].map((tag, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 mx-4 px-5 py-2 rounded-full border border-lightGrey text-lightGrey text-sm md:text-base uppercase tracking-wider shrink-0"
          >
            <tag.icon className="text-cyan text-lg" />
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SubHeroMain;
