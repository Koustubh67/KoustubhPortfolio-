import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { Link } from "react-scroll";

const AboutMeMain = () => {
  return (
    <div
      id="about"
      className="px-4 max-w-[900px] mx-auto mt-[120px] text-center"
    >
      <motion.h2
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-5xl md:text-6xl font-special italic text-cyan text-balance mb-12"
      >
        Engineered To Perform.{" "}
        <br className="hidden md:inline" />
        Built To Last.
      </motion.h2>

      <motion.p
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="text-lg md:text-xl text-lightGrey leading-relaxed mb-8"
      >
        I&apos;m a full stack developer with 2.5+ years of experience, working
        with{" "}
        <span className="text-white underline decoration-orange underline-offset-4">
          React &amp; TypeScript
        </span>{" "}
        on the frontend and{" "}
        <span className="text-white underline decoration-cyan underline-offset-4">
          Node.js &amp; Express
        </span>{" "}
        on the backend. The <span className="text-white">Flutter apps</span>{" "}
        I&apos;ve worked on are live on the{" "}
        <span className="text-cyan font-bold">App Store</span> and{" "}
        <span className="text-cyan font-bold">Google Play</span>, including a
        real estate app with{" "}
        <span className="text-white font-bold">10K+ downloads</span>.
      </motion.p>

      <motion.p
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="text-lg md:text-xl text-lightGrey leading-relaxed mb-8"
      >
        I started at Zapplogics in <span className="text-white">QA</span>, and
        after a year I was promoted to{" "}
        <span className="text-white">full stack development</span>, where
        I&apos;ve spent the last 1.5+ years. Starting in QA taught me how
        software breaks, so I test what I ship and own it end to end, from{" "}
        <span className="text-orange font-bold">idea</span> to{" "}
        <span className="text-orange font-bold">deployment</span>.
      </motion.p>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="text-lg md:text-xl text-lightGrey leading-relaxed mb-10"
      >
        I build products that{" "}
        <span className="text-white font-bold">scale</span>,{" "}
        <span className="text-white font-bold">perform</span>, and quietly work
        the way they should.
      </motion.p>

      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="flex gap-4 justify-center sm:flex-col md:flex-row sm:items-center"
      >
        <button className="border border-orange rounded-full py-2 px-6 text-lg hover:bg-orange transition-all duration-500 cursor-pointer">
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-120}
            to="projects"
            className="cursor-pointer text-white"
          >
            My Projects
          </Link>
        </button>
        <a
          href="/resume.pdf"
          download="Koustubh_Dubey_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-cyan rounded-full py-2 px-6 text-lg hover:bg-cyan transition-all duration-500 cursor-pointer text-white"
        >
          Download Resume
        </a>
      </motion.div>
    </div>
  );
};

export default AboutMeMain;
