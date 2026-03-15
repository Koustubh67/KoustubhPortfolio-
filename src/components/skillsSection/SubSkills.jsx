import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaRocket } from "react-icons/fa";

const tags = [
  { label: "Cross-Platform Apps", top: "8%", left: "12%", rotate: "-5deg" },
  { label: "API Integration", top: "5%", left: "45%", rotate: "3deg" },
  { label: "Mobile Development", top: "10%", left: "72%", rotate: "-2deg" },
  { label: "QA Testing", top: "28%", left: "5%", rotate: "4deg" },
  { label: "Performance Optimization", top: "32%", left: "68%", rotate: "-4deg" },
  { label: "CI/CD Workflow", top: "65%", left: "3%", rotate: "-3deg" },
  { label: "Agile Methodology", top: "68%", left: "70%", rotate: "5deg" },
  { label: "App Store Deployment", top: "82%", left: "18%", rotate: "2deg" },
  { label: "UI Development", top: "80%", left: "48%", rotate: "-6deg" },
  { label: "Team Coordination", top: "85%", left: "75%", rotate: "3deg" },
];

const SubSkills = () => {
  return (
    <div className="relative lg:min-h-[700px] max-w-[1200px] mx-auto px-4 mt-[120px]">
      {/* Floating tags */}
      {tags.map((tag, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          whileHover={{ scale: 1.1 }}
          className="absolute sm:hidden lg:block"
          style={{ top: tag.top, left: tag.left, rotate: tag.rotate }}
        >
          <span className="bg-brown border border-lightBrown text-white px-5 py-2.5 rounded-full text-sm font-medium hover:border-cyan hover:bg-brown/80 transition-all duration-300 cursor-default whitespace-nowrap">
            {tag.label}
          </span>
        </motion.div>
      ))}

      {/* Center content */}
      <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 text-center z-10 pt-10 lg:pt-0">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
        >
          <FaRocket className="text-5xl text-orange mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-special italic text-white mb-4">
            How I Build Products
          </h2>
          <p className="text-lightGrey text-lg max-w-[500px] mx-auto">
            Building scalable mobile and web products through agile practices,
            rigorous testing, and a focus on real-world performance.
          </p>
        </motion.div>
      </div>

      {/* Mobile: show as grid */}
      <div className="lg:hidden sm:flex flex-wrap gap-3 justify-center pt-10">
        {tags.map((tag, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-brown border border-lightBrown text-white px-4 py-2 rounded-full text-sm"
          >
            {tag.label}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default SubSkills;
