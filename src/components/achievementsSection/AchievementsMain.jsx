import { useRef } from "react";
import { motion, useAnimationFrame, useInView, useMotionValue } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const images = [
  { src: "/images/jobpilot.jpg", alt: "JobPilot AI - AI Job Copilot" },
  { src: "/images/cyberfriction.jpg", alt: "Cyberfriction - Motion-led Studio Website" },
  { src: "/images/javabank.jpg", alt: "JavaBank - Spring Boot Banking App" },
  { src: "/images/raktflow.jpg", alt: "RaktFlow - Blood Delivery Platform" },
  { src: "/images/try that .webp", alt: "TryThat Legacy - Property Management App" },
  { src: "/images/resturant app .webp", alt: "Hotel Management App" },
  { src: "/images/pg .webp", alt: "PG Management App" },
  { src: "/images/hyphn.png", alt: "Hyphn - Web Platform" },
  { src: "/images/tickite.png", alt: "Tickite - Ticket Booking" },
  { src: "/images/juvo.png", alt: "Juvo - HRMS & Office Management" },
  { src: "/images/profile .png", alt: "Portfolio Website" },
  { src: "/images/netflix img .jpg", alt: "Netflix Clone" },
  { src: "/images/bank managment.avif", alt: "Bank Management" },
  { src: "/images/blood.jpg", alt: "Blood Donation App" },
];

const SPEED = 0.06; // px per ms
const HOVER_SPEED = 0.015; // px per ms while the pointer is over the strip

const AchievementsMain = () => {
  const stripRef = useRef(null);
  const trackRef = useRef(null);
  const x = useMotionValue(0);
  const speed = useRef(SPEED);
  const hovered = useRef(false);
  const inView = useInView(stripRef);

  useAnimationFrame((_, delta) => {
    if (!inView) return;
    const dt = Math.min(delta, 50);
    // Ease toward the target speed so hovering glides down instead of snapping
    const target = hovered.current ? HOVER_SPEED : SPEED;
    speed.current += (target - speed.current) * Math.min(dt * 0.004, 1);
    // The track holds the images twice, so wrap after one full set
    const loop = trackRef.current.offsetWidth / 2;
    x.set((x.get() - speed.current * dt) % loop);
  });

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
      <div
        ref={stripRef}
        className="overflow-hidden"
        onMouseEnter={() => (hovered.current = true)}
        onMouseLeave={() => (hovered.current = false)}
      >
        <motion.div ref={trackRef} className="flex w-max py-4" style={{ x }}>
          {[...images, ...images].map((img, i) => (
            <div
              key={i}
              className="shrink-0 mr-6 w-[300px] md:w-[380px] h-[220px] md:h-[280px] rounded-2xl overflow-hidden border border-lightBrown/50 hover:border-cyan/30 transition-all duration-500 group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AchievementsMain;
