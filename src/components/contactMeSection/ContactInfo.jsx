import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="koustubhd184@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="7222993487 , 9893199324" Image={FiPhone} />
      <SingleInfo text="Bhopal" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
