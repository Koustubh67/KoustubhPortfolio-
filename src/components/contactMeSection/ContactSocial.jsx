import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/koustubh-dubey-9063a7221/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Koustubh67" Icon={FiGithub} />
      {/* <SingleContactSocial link="#" Icon={FaInstagram} /> */}
    </div>
  );
};

export default ContactSocial;
