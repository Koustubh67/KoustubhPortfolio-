import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaRocket, FaUsers, FaStar, FaMobileAlt } from "react-icons/fa";

const stats = [
  {
    icon: FaMobileAlt,
    value: "10+",
    label: "Apps Built",
    span: "col-span-1 row-span-1",
  },
  {
    icon: FaUsers,
    value: "20+",
    label: "Team Managed",
    span: "col-span-1 row-span-1",
  },
  {
    icon: FaStar,
    value: "4.8+",
    label: "App Rating",
    span: "col-span-1 row-span-1",
  },
  {
    icon: FaRocket,
    value: "50+",
    label: "Apps Tested",
    span: "col-span-1 row-span-1",
  },
];

const AboutMeImage = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:w-[350px] sm:w-full">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={fadeIn("up", index * 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className={`${stat.span} bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 hover:border-cyan/50 hover:bg-white/10 transition-all duration-500 hover:shadow-cyanShadow group`}
        >
          <stat.icon className="text-3xl text-orange group-hover:text-cyan transition-all duration-500" />
          <p className="text-4xl font-bold text-cyan">{stat.value}</p>
          <p className="text-sm text-lightGrey text-center">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default AboutMeImage;
