import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaLinkedinIn } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";

const LINKEDIN_RECOMMENDATIONS =
  "https://www.linkedin.com/in/koustubh-dubey-9063a7221/details/recommendations/";

// Stand-in text until the recommendation is posted on LinkedIn
const comingSoon = (name) => ({
  before: `Recommendation coming soon. Paste ${name}'s text from LinkedIn here.`,
});

// Quotes are copied word for word from LinkedIn. The `featured` one gets the
// big card up top. `pending` ones are placeholders: they show while developing
// locally and stay off the live site until their real text is pasted in and
// `pending` is removed.
const testimonials = [
  {
    name: "Karan Gupta",
    role: "Head of Delivery & Operations",
    badge: "★ My manager",
    photo: "/images/testimonials/karan-gupta.jpg",
    featured: true,
    text: {
      before: "Worked as reporting Manager for Koustubh. ",
      highlight:
        "Koustubh is a reliable team man, with a will to learn, adapt and grow.",
      after:
        " Koustubh familiarised him self with Flutter and Swift on top of his other responsibilities. It was a pleasure working with him at Zapplogics",
    },
  },
  {
    name: "Gurjeet Kour",
    role: "Flutter Developer · Teammate",
    photo: "/images/testimonials/gurjeet-kour.jpg",
    text: {
      before:
        "I had the pleasure of working with Koustubh Dubey as a teammate for approximately 2.5 years. During this time, ",
      highlight:
        "he demonstrated strong technical skills, a collaborative mindset, and a professional approach to his work.",
      after:
        " He was always supportive, open to sharing ideas, and committed to working together to solve problems and deliver quality results. I truly appreciated our teamwork and the experience of working with him. I would gladly recommend Koustubh for software development opportunities and wish him continued success in his career.",
    },
  },
  {
    name: "Jatin Saini",
    role: "iOS Developer · Teammate",
    photo: "/images/testimonials/jatin-saini.jpg",
    text: {
      before: "I had a great experience working with Koustubh. ",
      highlight:
        "He is a dedicated, hardworking, and reliable professional with strong problem-solving skills.",
      after:
        " He is always eager to learn new things and takes responsibility for his work. I would highly recommend him to anyone looking for a skilled and motivated professional.",
    },
  },
  {
    name: "Ritik Agrawal",
    role: "Technical Lead · TryThat",
    photo: "/images/testimonials/ritik-agrawal.jpg",
    pending: true,
    text: comingSoon("Ritik"),
  },
  {
    name: "Rishita Dubey",
    role: "Business Development & Strategy · Mentor",
    photo: "/images/testimonials/rishita-dubey.jpg",
    pending: true,
    text: comingSoon("Rishita"),
  },
  {
    name: "Harsh Yadav",
    role: "Senior Software Developer · Zapplogics",
    photo: "/images/testimonials/harsh-yadav.jpg",
    pending: true,
    text: comingSoon("Harsh"),
  },
];

const shown = testimonials.filter((t) => !t.pending || import.meta.env.DEV);
const featured = shown.find((t) => t.featured);
const others = shown.filter((t) => !t.featured);

// Repeat the cards so one pass of the loop is wider than even a big monitor
const loop = Array.from(
  { length: Math.ceil(7 / Math.max(others.length, 1)) },
  () => others
).flat();
const SECONDS_PER_CARD = 8;

// Moving cards show just the highlighted line, so every card is the same
// size and readable as it drifts past. A quote picked up mid-sentence gets
// a leading ellipsis.
const pullQuote = (text) =>
  text.highlight
    ? `${/^[a-z]/.test(text.highlight) ? "…" : ""}${text.highlight}`
    : text.before;

// Pastel cards with a slight alternating tilt, like stickers on a wall
const CARD_STYLES = [
  { bg: "bg-[#e6defc]", tilt: "-rotate-1" },
  { bg: "bg-[#fff0a6]", tilt: "rotate-1" },
  { bg: "bg-[#d4f1f4]", tilt: "-rotate-1" },
  { bg: "bg-[#dcf3dd]", tilt: "rotate-1" },
  { bg: "bg-[#ffd9e2]", tilt: "-rotate-1" },
];

const HARD_SHADOW = "shadow-[6px_6px_0_0_rgb(var(--color-white))]";

const Avatar = ({ person, className }) =>
  person.photo ? (
    <img
      src={person.photo}
      alt={person.name}
      loading="lazy"
      className={`shrink-0 rounded-full border-[3px] border-white object-cover ${className}`}
    />
  ) : (
    <div
      className={`shrink-0 rounded-full border-[3px] border-white bg-black flex items-center justify-center font-special font-black text-white ${className}`}
    >
      {person.name.charAt(0)}
    </div>
  );

const Quote = ({ text, className }) => (
  <blockquote className={`leading-relaxed text-white ${className}`}>
    {text.before}
    {text.highlight && (
      <mark className="rounded bg-[#c6f432] px-1 text-white [box-decoration-break:clone]">
        {text.highlight}
      </mark>
    )}
    {text.after}
  </blockquote>
);

const QuoteMark = () => (
  <span
    aria-hidden="true"
    className="block h-9 font-special text-7xl font-black leading-none text-white"
  >
    &ldquo;
  </span>
);

const TestimonialsMain = () => {
  return (
    <div id="testimonials" className="max-w-[1200px] mx-auto px-4 mt-[120px]">
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col items-center text-center mb-14"
      >
        <span className="mb-5 rotate-2 rounded-full border-[3px] border-white bg-[#c6f432] px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-white shadow-[3px_3px_0_0_rgb(var(--color-white))]">
          ✦ Vibe check
        </span>
        <h2 className="text-5xl md:text-6xl text-cyan font-special italic mb-4">
          Don&apos;t Take My Word For It
        </h2>
        <p className="text-lightGrey text-sm md:text-base max-w-[550px]">
          Straight from the people I&apos;ve built, shipped, and debugged with.
        </p>
      </motion.div>

      {featured && (
        <motion.figure
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="mx-auto mb-10 max-w-[920px]"
        >
          {/* Tilt and hover live here so they don't fight the fade-in transform */}
          <div className="relative rounded-[32px] border-[3px] border-white bg-[#ffe2c4] p-7 pt-10 md:p-10 shadow-[8px_8px_0_0_rgb(var(--color-white))] md:-rotate-1 transition-transform duration-300 hover:rotate-0">
            <span className="absolute -top-4 -left-3 -rotate-[8deg] rounded-xl border-[3px] border-white bg-orange px-3 py-1 text-sm font-black uppercase tracking-wide text-black shadow-[3px_3px_0_0_rgb(var(--color-white))]">
              {featured.badge}
            </span>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
              <div className="flex items-center gap-4 md:w-[190px] md:shrink-0 md:flex-col md:text-center">
                <Avatar person={featured} className="h-16 w-16 md:h-24 md:w-24 text-2xl" />
                <div>
                  <p className="text-lg font-bold text-white">{featured.name}</p>
                  <p className="text-sm text-lightGrey">{featured.role}</p>
                </div>
              </div>
              <div>
                <QuoteMark />
                <Quote text={featured.text} className="mt-3 text-lg md:text-2xl" />
              </div>
            </div>
          </div>
        </motion.figure>
      )}

      {others.length > 0 && (
        // Runs the full width of the screen, fading out at its edges
        <div className="ml-[calc(50%-50vw)] w-screen overflow-hidden py-8 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-reduce:overflow-x-auto">
          {/* Two identical halves: sliding by half the width loops seamlessly.
              Runs left to right and pauses while hovered or touched. */}
          <div
            className="flex w-max items-stretch animate-marquee hover:[animation-play-state:paused] active:[animation-play-state:paused] motion-reduce:animate-none"
            style={{
              animationDuration: `${loop.length * SECONDS_PER_CARD}s`,
              animationDirection: "reverse",
            }}
          >
            {[...loop, ...loop].map((person, i) => {
              const style = CARD_STYLES[(i % others.length) % CARD_STYLES.length];
              const copy = i >= others.length;
              return (
                <div
                  key={i}
                  aria-hidden={copy || undefined}
                  className={`shrink-0 px-3 ${copy ? "motion-reduce:hidden" : ""}`}
                >
                  <figure
                    className={`flex h-full w-[280px] md:w-[360px] flex-col rounded-[28px] border-[3px] border-white p-6 md:p-7 ${style.bg} ${style.tilt} ${HARD_SHADOW} transition-all duration-300 hover:rotate-0 hover:-translate-y-1 hover:shadow-[10px_10px_0_0_rgb(var(--color-white))]`}
                  >
                    <QuoteMark />
                    <blockquote className="mt-3 text-lg md:text-xl font-medium leading-snug text-white">
                      {pullQuote(person.text)}
                    </blockquote>
                    <figcaption className="mt-auto flex items-center gap-3 pt-6">
                      <Avatar person={person} className="h-12 w-12 text-lg" />
                      <div className="min-w-0">
                        <p className="font-bold text-white">{person.name}</p>
                        <p className="text-sm text-lightGrey">{person.role}</p>
                      </div>
                      <FaLinkedinIn className="ml-auto shrink-0 text-xl text-white/40" />
                    </figcaption>
                  </figure>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="mt-8 flex justify-center">
        <a
          href={LINKEDIN_RECOMMENDATIONS}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 rounded-full border-[3px] border-white bg-white px-6 py-3 font-bold text-black ${HARD_SHADOW} transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[#c6f432] hover:text-white hover:shadow-[8px_8px_0_0_rgb(var(--color-white))]`}
        >
          <FaLinkedinIn /> Read them on LinkedIn <BsArrowUpRight />
        </a>
      </div>
    </div>
  );
};

export default TestimonialsMain;
