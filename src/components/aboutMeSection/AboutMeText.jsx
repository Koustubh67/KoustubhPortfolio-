import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-8xl text-cyan mb-10">About Me</h2>
      <p>
        Software Developer with experience in frontend development, QA
        engineering, and cross-platform mobile application development. I have a
        proven track record of building and deploying 10+ mobile and web
        applications with improved performance, stability, and user experience.
        Experienced in managing a team of 20+ members and overseeing the full
        deployment lifecycle from development to production release.
      </p>
      <div className="flex gap-4 mt-10 sm:flex-col md:flex-row sm:items-center md:items-start">
        <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center hover:bg-orange transition-all duration-500 cursor-pointer">
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-120}
            to="projects"
            className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
          >
            My Projects
          </Link>
        </button>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-cyan rounded-full py-2 px-4 text-lg flex gap-2 items-center hover:bg-cyan transition-all duration-500 cursor-pointer text-white"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default AboutMeText;
