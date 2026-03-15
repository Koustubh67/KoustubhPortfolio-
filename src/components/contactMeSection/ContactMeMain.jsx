import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone, FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const contactRows = [
  {
    label: "Email",
    value: "koustubhd184@gmail.com",
    href: "mailto:koustubhd184@gmail.com",
    Icon: HiOutlineMail,
  },
  {
    label: "Phone No.",
    value: "+91 7222993487 , 9893199324",
    href: "tel:+917222993487",
    Icon: FiPhone,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/koustubh-dubey",
    href: "https://www.linkedin.com/in/koustubh-dubey-9063a7221/",
    Icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    value: "github.com/Koustubh67",
    href: "https://github.com/Koustubh67",
    Icon: FiGithub,
  },
];

const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[700px] mx-auto mt-[120px] px-4 pb-20 text-center"
    >
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-5xl md:text-6xl text-cyan font-special italic mb-4">
          Ready to build something amazing?
        </h2>
        <p className="text-lightGrey text-base mb-10">
          I&apos;d love to connect with you!
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col gap-3"
      >
        {contactRows.map(({ label, value, href, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center justify-between px-6 py-5 rounded-xl border border-lightBrown/40 bg-brown hover:border-cyan/50 transition-all duration-300 group"
          >
            <span className="flex items-center gap-3 text-lightGrey group-hover:text-cyan transition-colors">
              <Icon className="text-xl" />
              {label}
            </span>
            <span className="text-white text-sm md:text-base">{value}</span>
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default ContactMeMain;
