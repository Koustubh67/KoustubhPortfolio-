import { useEffect, useRef } from "react";
import { useScroll, useSpring, useTransform } from "framer-motion";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  const sectionRef = useRef(null);
  const sceneTrackRef = useRef(null);
  const isDesktop = useRef(true);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const update = () => (isDesktop.current = query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  // Desktop pins the whole hero while the scene plays; on phones the text
  // scrolls past and only the scene pins, so each has its own scroll range
  const { scrollYProgress: desktopProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const { scrollYProgress: mobileProgress } = useScroll({
    target: sceneTrackRef,
    offset: ["start 0.25", "end end"],
  });
  const rawProgress = useTransform([desktopProgress, mobileProgress], ([d, m]) =>
    isDesktop.current ? d : m
  );
  const progress = useSpring(rawProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <section ref={sectionRef} className="relative md:h-[230vh]">
      <div className="md:sticky md:top-0 md:h-svh pt-16 pb-16 md:pt-32 md:pb-6 min-h-[80vh] md:min-h-0 flex items-center">
        <div className="max-w-[1200px] mx-auto relative px-4 w-full flex md:flex-row sm:flex-col items-center justify-between gap-8">
          <HeroText />
          <HeroPic progress={progress} trackRef={sceneTrackRef} />
        </div>
      </div>
    </section>
  );
};

export default HeroMain;
