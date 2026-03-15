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
        className="text-4xl md:text-5xl font-special italic text-white mb-12"
      >
        Engineered To Perform. Built To Last.
      </motion.h2>

      <motion.p
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="text-lg md:text-xl text-lightGrey leading-relaxed mb-8"
      >
        I&apos;m a software developer with a strong foundation in{" "}
        <span className="text-white underline decoration-cyan underline-offset-4">
          cross-platform development
        </span>{" "}
        and hands-on experience delivering{" "}
        <span className="text-cyan font-bold">10+ live apps</span> across mobile
        and web. I specialize in turning complex requirements into{" "}
        <span className="text-white underline decoration-orange underline-offset-4">
          clean, performant
        </span>{" "}
        experiences that are ready for production.
      </motion.p>

      <motion.p
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="text-lg md:text-xl text-lightGrey leading-relaxed mb-8"
      >
        From building{" "}
        <span className="text-white">React Native apps</span> and shipping to
        the <span className="text-cyan font-bold">App Store</span>, to managing{" "}
        <span className="text-white">20+ member teams</span> and streamlining{" "}
        <span className="text-white underline decoration-cyan underline-offset-4">
          QA workflows
        </span>
        , I focus on solutions that move seamlessly from{" "}
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
