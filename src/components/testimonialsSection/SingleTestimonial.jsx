import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleTestimonial = ({ testimonial, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", index * 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="bg-brown rounded-2xl p-8 border border-lightBrown hover:border-orange transition-all duration-500"
    >
      <p className="text-white text-lg leading-relaxed">
        &ldquo;{testimonial.text.before}
        <span className="text-cyan">{testimonial.text.highlight}</span>
        {testimonial.text.after}&rdquo;
      </p>
      <div className="flex items-center gap-4 mt-6">
        <div className="h-14 w-14 rounded-full bg-lightBrown flex items-center justify-center text-orange text-xl font-bold">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-white font-bold">{testimonial.name}</p>
          <p className="text-lightGrey text-sm">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleTestimonial;
