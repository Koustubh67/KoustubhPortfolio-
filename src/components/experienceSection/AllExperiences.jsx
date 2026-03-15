import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "QA & Front-End Developer",
    company: "Zapplogics Solution",
    date: "Feb 2024 - Present",
    responsibilities: [
      "Tested and validated 50+ mobile applications, improving crash stability by 35% and reducing production bugs by 40%.",
      "Developed and deployed 4+ production-ready mobile apps with optimized UI and 40% faster load times.",
      "Managed coordination of a 20+ member team, ensuring task alignment and smooth project delivery.",
      "Oversaw deployment and release processes including build verification and production rollout.",
    ],
  },
  {
    job: "Trainee",
    company: "Bharat Heavy Electricals Limited (BHEL)",
    date: "2024",
    responsibilities: [
      "Gained hands-on experience in a professional IT environment.",
      "Collaborated with the core IT team on real-world technical implementations.",
      "Assisted in troubleshooting and resolving technical issues.",
    ],
  },
  {
    job: "Trainee",
    company: "Glenmark Pharmaceuticals",
    date: "2022",
    responsibilities: [
      "Gained hands-on experience in a corporate IT environment.",
      "Contributed to software and infrastructure troubleshooting.",
      "Assisted the core IT team with technical operations.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <div key={index} className="flex items-center">
            <SingleExperience experience={experience} />
            {index < 2 && (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AllExperiences;
