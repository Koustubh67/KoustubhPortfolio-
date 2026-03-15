import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { Link } from "react-scroll";

const HeroText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      {/* Line 1: Hello, I'm Koustubh */}
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-7xl md:text-5xl sm:text-4xl text-lightGrey font-light tracking-wide"
      >
        <span className="text-orange text-8xl md:text-6xl sm:text-5xl mr-3">&#10038;</span>
        Hello, I&apos;m Koustubh
      </motion.h2>

      {/* Line 2: Software */}
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-[7rem] md:text-[5rem] sm:text-[3.5rem] font-bold italic font-special text-cyan leading-tight mt-2"
      >
        Software
      </motion.h1>

      {/* Line 3: & Developer */}
      <motion.h1
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-[7rem] md:text-[5rem] sm:text-[3.5rem] font-bold italic font-special text-cyan leading-tight"
      >
        &amp; Developer
      </motion.h1>

      {/* Line 4: Code That Works */}
      <motion.h2
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-7xl md:text-5xl sm:text-3xl text-lightGrey font-light tracking-wide mt-4"
      >
        Code That Works
      </motion.h2>

      {/* Description text - positioned left */}
      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:max-w-[320px] md:text-left sm:text-center sm:mt-8 sm:max-w-[400px] mt-6"
      >
        <p className="text-white text-lg leading-relaxed">
          A software developer turned product builder with 1+ years of
          experience, building and deploying 10+ mobile &amp; web apps with
          React Native, Flutter &amp; React.js.
        </p>
      </motion.div>

      {/* Resume button */}
      <motion.div
        variants={fadeIn("up", 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="mt-10"
      >
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="contact"
          className="cursor-pointer"
        >
          <button className="force-light px-8 py-3 rounded-full text-lg font-bold text-white bg-gradient-to-r from-darkCyan to-orange hover:scale-105 transition-all duration-500 flex items-center gap-2 cursor-pointer">
            Resume
            <span className="text-xl">&#8599;</span>
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default HeroText;
