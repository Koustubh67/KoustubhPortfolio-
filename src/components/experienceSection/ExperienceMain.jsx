import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "QA & Front-End Developer",
    company: "Zapplogics Solution",
    period: "Feb 2024 - Present",
    logo: "/images/zapp.png",
    gradient: "from-[#0f2027] via-[#203a43] to-[#2c5364]",
    highlights: [
      "Tested & validated 50+ mobile apps",
      "Deployed 4+ production-ready apps",
      "Managed 20+ member team",
      "Reduced production bugs by 40%",
    ],
    details: [
      "Performed testing and quality validation for 50+ mobile applications, improving crash stability by 35% and reducing production bugs by 40%.",
      "Developed and deployed 4+ production-ready mobile applications with optimized UI performance and improved load time by 40%.",
      "Collaborated with cross-functional teams including designers, backend developers, and product managers in Agile development cycles.",
      "Managed coordination of a 20+ member team, ensuring task alignment, QA validation, and smooth project delivery.",
      "Oversaw deployment and release processes, including build verification, testing cycles, and production rollout.",
      "Introduced improved QA workflows and testing documentation, reducing release delays by 20%.",
    ],
  },
  {
    role: "Trainee",
    company: "Bharat Heavy Electricals Limited (BHEL)",
    period: "2024",
    logo: "/images/bhel logo .jpg",
    gradient: "from-[#1a0533] via-[#2d1b69] to-[#5b2c8e]",
    highlights: [
      "Professional IT environment exposure",
      "Collaborated with core IT team",
      "Real-world technical implementations",
    ],
    details: [
      "Worked as a trainee at BHEL, gaining hands-on experience in a professional IT environment.",
      "Collaborated with the core IT team to understand real-world technical implementations.",
      "Assisted in troubleshooting and resolving technical issues across departments.",
    ],
  },
  {
    role: "Trainee",
    company: "Glenmark Pharmaceuticals",
    period: "2022",
    logo: "/images/Glenmark_Pharmaceuticals_logo.png",
    gradient: "from-[#1c1c3a] via-[#2a3a6e] to-[#3b6cb5]",
    highlights: [
      "Corporate IT environment exposure",
      "Software & infrastructure support",
      "Technical operations assistance",
    ],
    details: [
      "Worked as a trainee at Glenmark Pharmaceuticals, gaining hands-on experience in a corporate IT environment.",
      "Contributed to software and infrastructure troubleshooting.",
      "Assisted the core IT team with technical operations and support.",
    ],
  },
];

const ExperienceMain = () => {
  return (
    <div id="experience" className="max-w-[1200px] mx-auto px-4 mt-[160px]">
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-center mb-6"
      >
        <h2 className="text-5xl md:text-6xl text-cyan font-special italic mb-4">
          My Journey So Far
        </h2>
        <p className="text-lightGrey text-lg max-w-[700px] mx-auto">
          From corporate trainee to leading teams and shipping production apps
          — building experience one deployment at a time.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", index * 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className={`bg-gradient-to-br ${exp.gradient} rounded-3xl p-8 flex flex-col justify-between min-h-[420px] transition-all duration-500 border border-white/10 hover:border-white/20 group relative overflow-hidden force-light`}
          >
            {/* Company logo */}
            <div className="absolute top-6 left-6 h-12 w-12 rounded-xl bg-white flex items-center justify-center overflow-hidden border border-white/20">
              <img
                src={exp.logo}
                alt={exp.company}
                className="h-10 w-10 object-contain"
              />
            </div>

            {/* Period badge */}
            <div className="absolute top-6 right-6">
              <span className="text-xs text-white/60 bg-white/10 px-3 py-1 rounded-full">
                {exp.period}
              </span>
            </div>

            {/* Default: highlights */}
            <div className="mt-20 group-hover:hidden">
              <ul className="space-y-2">
                {exp.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="text-white/70 text-sm flex items-start gap-2"
                  >
                    <span className="text-cyan mt-1 text-xs">&#9679;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hover: full details */}
            <div className="mt-20 hidden group-hover:block">
              <ul className="space-y-2">
                {exp.details.map((item, i) => (
                  <li
                    key={i}
                    className="text-white/80 text-xs flex items-start gap-2 leading-relaxed"
                  >
                    <span className="text-orange mt-0.5 text-[8px]">
                      &#9679;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom: Role + Company */}
            <div className="mt-auto pt-6">
              <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
              <p className="text-white/50 text-sm mt-1 flex items-center gap-2">
                <FaBriefcase className="text-xs" />
                {exp.company}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceMain;
