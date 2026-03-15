import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const images = [
  { src: "/images/try that .webp", alt: "TryThat Legacy - Property Management App" },
  { src: "/images/resturant app .webp", alt: "Hotel Management App" },
  { src: "/images/pg .webp", alt: "PG Management App" },
  { src: "/images/profile .png", alt: "Portfolio Website" },
  { src: "/images/netflix img .jpg", alt: "Netflix Clone" },
  { src: "/images/bank managment.avif", alt: "Bank Management" },
  { src: "/images/blood.jpg", alt: "Blood Donation App" },
];

const AchievementsMain = () => {
  return (
    <div className="mt-[120px]">
      {/* Heading */}
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-center mb-12 px-4"
      >
        <h2 className="text-5xl md:text-6xl text-cyan font-special italic mb-4">
          A Glimpse Into My Work
        </h2>
        <p className="text-lightGrey text-sm md:text-base max-w-[700px] mx-auto leading-relaxed">
          A curated mix of professional product work and experimental
          explorations across mobile apps, web platforms, and real-time systems.
        </p>
      </motion.div>

      {/* Scrolling carousel */}
      <div className="overflow-hidden">
        <div className="flex animate-marquee-slow gap-6 py-4">
          {[...images, ...images].map((img, i) => (
            <div
              key={i}
              className="shrink-0 w-[300px] md:w-[380px] h-[220px] md:h-[280px] rounded-2xl overflow-hidden border border-lightBrown/50 hover:border-cyan/30 transition-all duration-500 group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsMain;
