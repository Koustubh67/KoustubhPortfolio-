import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const photos = [
  "/images/about-me-photos/20240929_090431.jpg",
  "/images/about-me-photos/IMG_20221217_210245.jpg",
  "/images/about-me-photos/IMG_20230602_191652487_HDR.jpg",
  "/images/about-me-photos/IMG_20231023_231555_811.jpg",
  "/images/about-me-photos/IMG_20231023_231555_950.jpg",
  "/images/about-me-photos/IMG_20240529_172544925.jpg",
  "/images/about-me-photos/IMG-20250103-WA0176.jpg",
  "/images/about-me-photos/IMG-20250304-WA0081.jpg",
  "/images/about-me-photos/IMG20240929161051.jpg",
  "/images/about-me-photos/Screenshot_20220821-145359.png",
];

const BeyondMain = () => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? photos.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === photos.length - 1 ? 0 : c + 1));

  return (
    <div className="mt-[120px]">
      <div className="max-w-[1200px] mx-auto bg-brown rounded-3xl py-16 px-4 overflow-hidden">
        {/* Heading */}
        <motion.div
          variants={fadeIn("down", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-5xl md:text-6xl text-cyan font-special italic mb-4">
            Beyond The Code
          </h2>
          <p className="text-lightGrey text-sm md:text-base max-w-[700px] mx-auto leading-relaxed">
            When I&apos;m not building apps, I&apos;m usually exploring new
            technologies, mentoring juniors, or recharging outdoors. These
            moments keep my problem-solving sharp and quietly shape how I
            approach development.
          </p>
        </motion.div>

        {/* Photo carousel */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="relative max-w-[500px] mx-auto"
        >
          {/* Background blurred images */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute -left-[40%] w-[60%] h-[85%] rounded-2xl overflow-hidden opacity-30 blur-sm scale-90">
              <img
                src={photos[(current - 1 + photos.length) % photos.length]}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -right-[40%] w-[60%] h-[85%] rounded-2xl overflow-hidden opacity-30 blur-sm scale-90">
              <img
                src={photos[(current + 1) % photos.length]}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main image */}
          <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-lightBrown/50">
            <img
              src={photos[current]}
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
            />

            {/* Navigation arrows */}
            <button
              onClick={prev}
              className="absolute left-2 lg:left-[-50px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-darkBrown/80 border border-lightBrown/30 flex items-center justify-center text-white hover:bg-brown transition-colors z-10"
            >
              <BsChevronLeft />
            </button>
            <button
              onClick={next}
              className="absolute right-2 lg:right-[-50px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-darkBrown/80 border border-lightBrown/30 flex items-center justify-center text-white hover:bg-brown transition-colors z-10"
            >
              <BsChevronRight />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-cyan w-6"
                    : "bg-lightBrown hover:bg-lightGrey"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BeyondMain;
