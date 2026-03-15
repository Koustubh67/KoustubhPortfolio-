import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { IoSchoolOutline } from "react-icons/io5";

const education = [
  {
    degree: "B.Tech - Computer Science Engineering",
    institution: "Oriental College of Technology (OCT), Bhopal",
    year: "2020 - 2024",
  },
  {
    degree: "12th - MP Board",
    institution: "Silver Bells Convent School, Bhopal",
    year: "",
  },
  {
    degree: "10th - CBSE",
    institution: "International Public School, Bhopal",
    year: "",
  },
];

const EducationMain = () => {
  return (
    <div id="education" className="max-w-[1200px] mx-auto px-4 mt-[100px]">
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-6xl text-cyan mb-10">Education</h2>
      </motion.div>
      <div className="flex flex-col gap-6 max-w-[800px] mx-auto">
        {education.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", index * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="flex items-start gap-4 bg-brown p-6 rounded-2xl border border-lightBrown hover:border-cyan transition-all duration-500"
          >
            <IoSchoolOutline className="text-4xl text-orange flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl text-white font-bold">{item.degree}</h3>
              <p className="text-lightGrey">{item.institution}</p>
              {item.year && <p className="text-cyan text-sm mt-1">{item.year}</p>}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EducationMain;
