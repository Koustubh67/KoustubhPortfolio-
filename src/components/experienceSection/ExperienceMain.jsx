import { Fragment, useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

// Both roles were at Zapplogics: started in QA in June 2024 and was promoted
// to full stack development after a year. Listed in the order they happened.
const zapplogics = {
  company: "Zapplogics Solutions",
  period: "Jun 2024 – Present",
  logo: "/images/zapp.png",
  roles: [
    {
      title: "QA Engineer",
      period: "Jun 2024 – 2025",
      points: [
        "Tested mobile apps before every release, catching crashes and critical bugs before they reached users",
        "Streamlined QA workflows, making release cycles faster and more reliable",
        "Documented bugs and sprint summaries, giving developers clear, reproducible reports",
      ],
    },
    {
      title: "Full Stack Developer",
      period: "2025 – Present",
      current: true,
      points: [
        "Build cross-platform mobile apps with React Native and Flutter, plus native iOS features in Swift, shipped to the App Store and Google Play",
        "Develop responsive web apps in React, connected to REST APIs and third-party services",
        "Work with PostgreSQL databases and AWS services such as S3 for secure, scalable data and file storage",
        "Integrate AI tools and APIs into products, and use AI-assisted development to ship faster",
        "Own releases end to end, from builds and App Store review to production rollout, in Agile sprints with designers and product managers",
      ],
      tags: [
        "React",
        "React Native",
        "Flutter",
        "Swift",
        "PostgreSQL",
        "AWS",
        "API Integration",
        "AI Integration",
      ],
    },
  ],
};

const earlier = [
  {
    role: "IT Trainee",
    company: "Bharat Heavy Electricals Limited (BHEL)",
    year: "2024",
    logo: "/images/bhel logo .jpg",
    points: [
      "Worked with the core IT team on real-world technical implementations",
      "Helped troubleshoot and resolve technical issues across departments",
    ],
  },
  {
    role: "IT Support Trainee",
    company: "Glenmark Pharmaceuticals",
    year: "2022",
    logo: "/images/Glenmark_Pharmaceuticals_logo.png",
    points: [
      "Supported software and infrastructure troubleshooting in a corporate IT setup",
      "Assisted with day-to-day technical operations and user support",
    ],
  },
];

// Pastel cards with a slight tilt, like stickers on a wall
const CARD_STYLES = [
  { bg: "bg-[#e6defc]", tilt: "md:-rotate-1" },
  { bg: "bg-[#fff0a6]", tilt: "md:rotate-1" },
];

const HARD_SHADOW = "shadow-[6px_6px_0_0_rgb(var(--color-white))]";

// Same numbers the rest of the site uses
const stats = [
  { to: 2.5, decimals: 1, suffix: "+", label: "years in the industry", bg: "bg-[#c6f432]", tilt: "-rotate-2" },
  { to: 4, suffix: "+", label: "apps on the App Store", bg: "bg-[#ffd9e2]", tilt: "rotate-1" },
  { to: 10, suffix: "K+", label: "downloads on a real estate app", bg: "bg-[#d4f1f4]", tilt: "-rotate-1" },
];

const CountUp = ({ to, decimals = 0, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, { duration: 1.4, ease: "easeOut", onUpdate: setValue });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const Points = ({ points }) => (
  <ul className="mt-3 space-y-2">
    {points.map((point) => (
      <li
        key={point}
        className="flex items-start gap-2 text-sm md:text-base leading-relaxed text-white"
      >
        <span className="text-orange">✦</span>
        {point}
      </li>
    ))}
  </ul>
);

const ExperienceMain = () => {
  return (
    <div id="experience" className="max-w-[1200px] mx-auto px-4 mt-[160px]">
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col items-center text-center mb-14"
      >
        <span className="mb-5 -rotate-2 rounded-full border-[3px] border-white bg-[#c6f432] px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-white shadow-[3px_3px_0_0_rgb(var(--color-white))]">
          ✦ Career log
        </span>
        <h2 className="text-5xl md:text-6xl text-cyan font-special italic mb-4">
          My Journey So Far
        </h2>
        <p className="text-lightGrey text-sm md:text-base max-w-[550px]">
          From IT trainee to QA engineer to full stack developer. Testing,
          building and shipping, one release at a time.
        </p>
      </motion.div>

      {/* Stat stickers; the numbers count up when they come into view */}
      <dl className="mx-auto mb-14 grid max-w-[920px] grid-cols-3 gap-3 md:gap-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`flex flex-col-reverse rounded-[20px] border-[3px] border-white p-3 md:p-5 text-center ${stat.bg} ${stat.tilt} ${HARD_SHADOW} transition-transform duration-300 hover:rotate-0`}
          >
            <dt className="mt-1 text-xs md:text-sm font-semibold leading-snug text-white">
              {stat.label}
            </dt>
            <dd className="font-special text-3xl md:text-5xl font-black italic text-white">
              <CountUp to={stat.to} decimals={stat.decimals} suffix={stat.suffix} />
            </dd>
          </div>
        ))}
      </dl>

      {/* Zapplogics: one company, two roles */}
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="mx-auto mb-12 max-w-[920px]"
      >
        {/* Tilt and hover live here so they don't fight the fade-in transform */}
        <div className="relative rounded-[32px] border-[3px] border-white bg-[#dcf3dd] p-7 pt-10 md:p-10 shadow-[8px_8px_0_0_rgb(var(--color-white))] md:-rotate-1 transition-transform duration-300 hover:rotate-0">
          <span className="absolute -top-4 -left-3 -rotate-[8deg] rounded-xl border-[3px] border-white bg-orange px-3 py-1 text-sm font-black uppercase tracking-wide text-black shadow-[3px_3px_0_0_rgb(var(--color-white))]">
            ★ Where I work
          </span>

          <div className="flex flex-col gap-6 md:flex-row md:gap-10">
            <div className="flex items-center gap-4 md:w-[180px] md:shrink-0 md:flex-col md:self-start md:text-center">
              <div className="h-16 w-16 md:h-24 md:w-24 shrink-0 overflow-hidden rounded-full border-[3px] border-white bg-[#ffffff] p-2.5 md:p-4">
                <img
                  src={zapplogics.logo}
                  alt={zapplogics.company}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="text-lg font-bold text-white">{zapplogics.company}</p>
                <p className="text-sm text-lightGrey">{zapplogics.period}</p>
              </div>
            </div>

            <div className="flex-1">
              {zapplogics.roles.map((role, index) => (
                <Fragment key={role.title}>
                  {index > 0 && (
                    <div className="my-6 flex items-center gap-3">
                      <span className="flex-1 border-t-[3px] border-dashed border-white/25" />
                      <span className="-rotate-2 rounded-full border-[3px] border-white bg-[#c6f432] px-3 py-1 text-xs font-black uppercase tracking-wider text-white shadow-[3px_3px_0_0_rgb(var(--color-white))]">
                        ↑ Promoted after a year
                      </span>
                      <span className="flex-1 border-t-[3px] border-dashed border-white/25" />
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="font-special text-2xl md:text-3xl font-bold italic text-white">
                      {role.title}
                    </h3>
                    {role.current && (
                      <span className="flex items-center gap-1.5 rounded-full border-2 border-white bg-[#c6f432] px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-white">
                        <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                        Now
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm font-semibold text-lightGrey">{role.period}</p>

                  <Points points={role.points} />

                  {role.tags && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {role.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border-2 border-white bg-black px-3 py-1 text-xs font-semibold text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Earlier IT trainee roles */}
      <div className="mx-auto grid max-w-[920px] gap-8 md:grid-cols-2">
        {earlier.map((exp, index) => {
          const style = CARD_STYLES[index % CARD_STYLES.length];
          return (
            <motion.div
              key={exp.company}
              variants={fadeIn("up", 0.15 + index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <div
                className={`flex h-full flex-col rounded-[28px] border-[3px] border-white p-6 md:p-7 ${style.bg} ${style.tilt} ${HARD_SHADOW} transition-all duration-300 hover:rotate-0 hover:-translate-y-1 hover:shadow-[10px_10px_0_0_rgb(var(--color-white))]`}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-special text-2xl md:text-3xl font-bold italic text-white">
                    {exp.role}
                  </h3>
                  <span className="shrink-0 rounded-full border-2 border-white bg-black px-3 py-1 text-xs font-bold text-white">
                    {exp.year}
                  </span>
                </div>

                <Points points={exp.points} />

                <div className="mt-auto flex items-center gap-3 pt-6">
                  <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border-[3px] border-white bg-[#ffffff] p-1.5">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="font-bold text-white">{exp.company}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceMain;
