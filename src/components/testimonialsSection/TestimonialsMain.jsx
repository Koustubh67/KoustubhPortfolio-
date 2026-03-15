import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const testimonials = [
  {
    name: "Lokesh Patil",
    role: "Product Designer @Zapplogics",
    text: {
      before:
        "I had the opportunity to work with Koustubh at Zapplogics Solutions, and he stands out as a highly skilled developer. ",
      highlight:
        "He delivers quality work with strong technical understanding, attention to detail, and reliability.",
      after: " A dependable, proactive professional I highly recommend.",
    },
  },
  {
    name: "Rahul Sharma",
    role: "Team Lead @Zapplogics",
    text: {
      before:
        "Working with Koustubh has been a great experience. He consistently takes ownership of his tasks and ",
      highlight:
        "his debugging skills and ability to optimize app performance are impressive.",
      after: " He's a valuable asset to any development team.",
    },
  },
  {
    name: "Priya Verma",
    role: "Senior Developer @Zapplogics",
    text: {
      before:
        "Koustubh is someone who genuinely cares about code quality and user experience. ",
      highlight:
        "His cross-platform development skills and collaborative approach make him stand out.",
      after:
        " He adapts quickly to new technologies and always delivers on time.",
    },
  },
];

const TestimonialsMain = () => {
  return (
    <div id="testimonials" className="max-w-[700px] mx-auto px-4 mt-[120px]">
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl text-cyan font-special italic mb-4">
          See what others say about me
        </h2>
        <p className="text-lightGrey text-sm md:text-base max-w-[550px] mx-auto">
          Perspectives from professionals who&apos;ve experienced my development
          process, collaboration style, and problem-solving firsthand.
        </p>
      </motion.div>

      <div className="flex flex-col gap-12">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", index * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white/[0.07] backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10"
          >
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
              {testimonial.text.before}
              <span className="text-orange">{testimonial.text.highlight}</span>
              {testimonial.text.after}
            </p>

            <div className="flex items-center gap-4 mt-8">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan/30 to-orange/30 flex items-center justify-center text-white text-lg font-bold shrink-0">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <p className="text-white font-bold text-base">
                  {testimonial.name}
                </p>
                <p className="text-lightGrey text-sm">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsMain;
