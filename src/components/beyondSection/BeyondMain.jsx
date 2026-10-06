import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { BsChevronLeft, BsChevronRight, BsX } from "react-icons/bs";

const photos = [
  { full: "/images/about-me-photos/20240929_090431.jpg", thumb: "20240929_090431.jpg" },
  { full: "/images/about-me-photos/IMG_20221217_210245.jpg", thumb: "IMG_20221217_210245.jpg" },
  { full: "/images/about-me-photos/IMG_20230602_191652487_HDR.jpg", thumb: "IMG_20230602_191652487_HDR.jpg" },
  { full: "/images/about-me-photos/IMG_20231023_231555_811.jpg", thumb: "IMG_20231023_231555_811.jpg" },
  { full: "/images/about-me-photos/IMG_20231023_231555_950.jpg", thumb: "IMG_20231023_231555_950.jpg" },
  { full: "/images/about-me-photos/IMG_20240529_172544925.jpg", thumb: "IMG_20240529_172544925.jpg" },
  { full: "/images/about-me-photos/IMG-20250103-WA0176.jpg", thumb: "IMG-20250103-WA0176.jpg" },
  { full: "/images/about-me-photos/IMG-20250304-WA0081.jpg", thumb: "IMG-20250304-WA0081.jpg" },
  { full: "/images/about-me-photos/IMG20240929161051.jpg", thumb: "IMG20240929161051.jpg" },
  { full: "/images/about-me-photos/Screenshot_20220821-145359.png", thumb: "Screenshot_20220821-145359.jpg" },
];

// Cards sit on three rings of a sphere. Each ring lists the photo for each
// slot; repeated photos are placed on roughly opposite sides of the sphere.
const rings = [
  { lat: 0, scale: 1, startLon: 0, photos: [0, 1, 2, 3, 4, 5] },
  { lat: 34, scale: 0.8, startLon: 30, photos: [6, 7, 8, 9, 1] },
  { lat: -34, scale: 0.8, startLon: 66, photos: [4, 5, 0, 2, 3] },
];

const cards = rings
  .flatMap((ring) =>
    ring.photos.map((photo, i) => ({
      photo,
      lat: ring.lat,
      lon: ring.startLon + (360 / ring.photos.length) * i,
      scale: ring.scale,
    }))
  )
  // Shuffled order in which cards fly out as the section scrolls in
  .map((card, i, all) => ({ ...card, order: (i * 7) % all.length }));

const IDLE_SPEED = 0.006; // degrees per ms while the page is still
const SCROLL_SPIN = 420; // degrees turned across the section's full scroll
const DRAG_SENSITIVITY = 0.3; // degrees per px dragged

const SphereCard = ({ card, radius, width, height, reveal, onOpen }) => {
  const start = (card.order / cards.length) * 0.6;
  const shown = useTransform(reveal, [start, start + 0.4], [0, 1]);
  const transform = useTransform(
    shown,
    (p) =>
      `rotateY(${card.lon}deg) rotateX(${card.lat}deg) translateZ(${radius * (0.15 + 0.85 * p)}px) scale(${0.5 + 0.5 * p})`
  );
  const pointerEvents = useTransform(shown, (p) => (p > 0.95 ? "auto" : "none"));

  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{
        width,
        height,
        marginLeft: -width / 2,
        marginTop: -height / 2,
        transformStyle: "preserve-3d",
        transform,
      }}
    >
      <motion.button
        type="button"
        onClick={() => onOpen(card.photo)}
        aria-label={`View photo ${card.photo + 1}`}
        style={{ opacity: shown, pointerEvents }}
        className="absolute inset-0 rounded-xl overflow-hidden border border-lightBrown/60 bg-brown shadow-[0_18px_40px_rgba(44,37,35,0.25)] cursor-pointer transition-colors duration-300 hover:border-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan"
      >
        <img
          src={`/images/about-me-photos/thumbs/${photos[card.photo].thumb}`}
          alt=""
          draggable={false}
          loading="lazy"
          className="w-full h-full object-cover pointer-events-none"
        />
      </motion.button>
      {/* Fades the mirrored back side into the page as the card swings behind */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-darkBrown/75"
        style={{
          opacity: shown,
          transform: "rotateY(180deg) translateZ(1px)",
          backfaceVisibility: "hidden",
        }}
      />
    </motion.div>
  );
};

const BeyondMain = () => {
  const trackRef = useRef(null);
  const sphereRef = useRef(null);
  const spin = useMotionValue(0);
  const velocity = useRef(IDLE_SPEED);
  const drag = useRef({ active: false, startX: 0, lastX: 0, lastT: 0, moved: false });
  const [radius, setRadius] = useState(260);
  const [active, setActive] = useState(null);
  const inView = useInView(trackRef);
  const idleSpeed = useReducedMotion() ? 0 : IDLE_SPEED;
  const isOpen = active !== null;

  // Scroll drives the sphere: cards fly out while the section scrolls in,
  // then it keeps turning while pinned
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start end", "end start"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const reveal = useTransform(progress, [0.08, 0.32], [0, 1]);
  const rotateY = useTransform([spin, progress], ([s, p]) => s + p * SCROLL_SPIN);
  const tilt = useTransform(progress, [0, 1], [-18, 4]);
  const headlineOpacity = useTransform(progress, [0.12, 0.28], [0, 1]);
  const headlineScale = useTransform(progress, [0.12, 0.3], [0.85, 1]);

  // Size the sphere to the space left between the headline and the copy
  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setRadius(Math.round(Math.max(120, Math.min(width * 0.42, height / 2.1, 340))));
    });
    observer.observe(sphereRef.current);
    return () => observer.disconnect();
  }, []);

  useAnimationFrame((_, delta) => {
    if (!inView || drag.current.active || isOpen) return;
    const dt = Math.min(delta, 50);
    // Ease leftover drag momentum back to the idle spin
    velocity.current += (idleSpeed - velocity.current) * Math.min(dt * 0.003, 1);
    spin.set(spin.get() + velocity.current * dt);
  });

  // Lightbox keyboard controls
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowLeft")
        setActive((i) => (i - 1 + photos.length) % photos.length);
      if (e.key === "ArrowRight") setActive((i) => (i + 1) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const onPointerDown = (e) => {
    if (e.button !== 0) return;
    drag.current = {
      active: true,
      startX: e.clientX,
      lastX: e.clientX,
      lastT: e.timeStamp,
      moved: false,
    };

    const onMove = (ev) => {
      const d = drag.current;
      const step = (ev.clientX - d.lastX) * DRAG_SENSITIVITY;
      spin.set(spin.get() + step);
      velocity.current = step / Math.max(ev.timeStamp - d.lastT, 1);
      d.moved ||= Math.abs(ev.clientX - d.startX) > 6;
      d.lastX = ev.clientX;
      d.lastT = ev.timeStamp;
    };
    const onUp = (ev) => {
      drag.current.active = false;
      // Released after holding still: don't fling
      if (ev.timeStamp - drag.current.lastT > 80) velocity.current = 0;
      velocity.current = Math.max(-1.5, Math.min(1.5, velocity.current));
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
  };

  const openPhoto = (photo) => {
    if (drag.current.moved) {
      drag.current.moved = false;
      return;
    }
    setActive(photo);
  };

  const cardWidth = radius * 0.52;
  const cardHeight = cardWidth * 1.25;

  return (
    <section ref={trackRef} className="relative mt-20 h-[220vh]">
      <div className="sticky top-0 h-svh flex flex-col items-center justify-center px-4 py-6 overflow-hidden">
        {/* Headline sits above the sphere so the photos never cover it */}
        <motion.h2
          className="shrink-0 flex flex-wrap items-baseline justify-center gap-x-[0.25em] leading-none text-center text-[clamp(2.5rem,6vw,4rem)]"
          style={{ opacity: headlineOpacity, scale: headlineScale }}
        >
          <span className="font-body font-bold tracking-tight text-white">Beyond</span>
          <span className="font-special italic text-cyan">The Code</span>
        </motion.h2>

        {/* 3D photo sphere. Its height is capped at what the width allows (the
            radius is at most 0.42 × width) so narrow screens don't leave a gap. */}
        <div
          ref={sphereRef}
          onPointerDown={onPointerDown}
          className="relative w-full max-w-[1200px] flex-1 min-h-0 max-h-[min(calc((100vw_-_2rem)_*_0.9),740px)] my-3 select-none touch-pan-y cursor-grab active:cursor-grabbing"
          style={{ perspective: radius * 5 }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ transformStyle: "preserve-3d", rotate: -7, rotateX: tilt }}
          >
            <motion.div
              className="absolute inset-0"
              style={{ transformStyle: "preserve-3d", rotateY }}
            >
              {cards.map((card, i) => (
                <SphereCard
                  key={i}
                  card={card}
                  radius={radius}
                  width={cardWidth * card.scale}
                  height={cardHeight * card.scale}
                  reveal={reveal}
                  onOpen={openPhoto}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="relative shrink-0 text-center"
        >
          <p className="text-lightGrey text-sm md:text-base max-w-[640px] mx-auto leading-relaxed">
            When I&apos;m not building apps, I&apos;m usually exploring new
            technologies, mentoring juniors, or recharging outdoors. These
            moments keep my problem-solving sharp and quietly shape how I
            approach development.
          </p>
          <p className="text-grey text-xs uppercase tracking-[0.25em] mt-4">
            Scroll or drag to spin &middot; Tap a photo to open
          </p>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="force-light fixed inset-0 z-[60] flex items-center justify-center bg-[#03050c]/90 backdrop-blur-sm p-4"
          >
            <motion.img
              key={active}
              src={photos[active].full}
              alt=""
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <button
              type="button"
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-cyan hover:border-cyan transition-all duration-300"
            >
              <BsX className="text-2xl" />
            </button>
            <button
              type="button"
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation();
                setActive((i) => (i - 1 + photos.length) % photos.length);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-cyan hover:border-cyan transition-all duration-300"
            >
              <BsChevronLeft className="text-lg" />
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation();
                setActive((i) => (i + 1) % photos.length);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-cyan hover:border-cyan transition-all duration-300"
            >
              <BsChevronRight className="text-lg" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BeyondMain;
