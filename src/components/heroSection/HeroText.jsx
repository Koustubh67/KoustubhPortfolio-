import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      {/* Line 1: Hello, I'm Koustubh */}
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-[min(2.25rem,8.5vw)] md:text-[min(4.5rem,5.5vw,6.1svh)] leading-tight text-lightGrey font-light tracking-wide"
      >
        <span className="text-orange text-[1.25em] mr-[0.15em]">&#10038;</span>
        Hello, I&apos;m Koustubh
      </motion.h2>

      {/* Line 2: Full Stack */}
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-[min(3.5rem,14vw)] md:text-[min(7rem,8.5vw,9.6svh)] font-bold italic font-special text-cyan leading-tight mt-2"
      >
        Full Stack
      </motion.h1>

      {/* Line 3: Developer */}
      <motion.h1
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-[min(3.5rem,14vw)] md:text-[min(7rem,8.5vw,9.6svh)] font-bold italic font-special text-cyan leading-tight"
      >
        Developer
      </motion.h1>

      {/* Line 4: Code That Works */}
      <motion.h2
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-[min(1.875rem,8vw)] md:text-[min(4.5rem,5.5vw,6.1svh)] leading-tight text-lightGrey font-light tracking-wide mt-2 md:mt-4"
      >
        Code That Works
      </motion.h2>

      {/* Description text - positioned left */}
      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:max-w-[320px] lg:max-w-[440px] md:text-left sm:text-center sm:mt-8 md:mt-[min(2rem,3.5svh)] sm:max-w-[400px] mt-6"
      >
        <p className="text-white text-lg leading-relaxed">
          Full stack developer with 2.5+ years of experience shipping web
          &amp; mobile apps with React, TypeScript, Node.js &amp; Flutter,
          live on the App Store and Google Play.
        </p>
      </motion.div>

      {/* Resume button */}
      <motion.div
        variants={fadeIn("up", 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="mt-10 md:mt-[min(2.5rem,4.5svh)]"
      >
        {/* In-app browsers (LinkedIn, WhatsApp, Instagram) ignore `download`,
            so the new tab lets them open the PDF instead of doing nothing */}
        <a
          href="/resume.pdf"
          download="Koustubh_Dubey_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="force-light px-8 py-3 rounded-full text-lg font-bold text-white bg-gradient-to-r from-darkCyan to-orange hover:scale-105 transition-all duration-500 inline-flex items-center gap-2 cursor-pointer"
        >
          Resume
          <span className="text-xl">&#8599;</span>
        </a>
      </motion.div>
    </div>
  );
};

export default HeroText;
