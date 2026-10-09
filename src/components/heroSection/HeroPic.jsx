import { motion, useReducedMotion, useTransform } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

// Everything in the scene is drawn in the sticker image's own pixel space
// (385 × 503) so the props line up with him at any rendered size
const W = 385;
const H = 503;
const SIT_Y = 110; // how far he drops into the chair
const OUTLINE = "#2c2523";
const CYAN = "#0097a7";
const ORANGE = "#e67e00";

// Draws shapes twice: a thick white pass for the sticker border, then the
// filled, dark-outlined pass on top, so the props match the illustration
const Outlined = ({ children }) => (
  <>
    <g stroke="#fff" strokeWidth={12} strokeLinejoin="round">
      {children}
    </g>
    <g stroke={OUTLINE} strokeWidth={3} strokeLinejoin="round">
      {children}
    </g>
  </>
);

const Chair = () => (
  <>
    <Outlined>
      <rect x={82} y={232} width={216} height={236} rx={52} fill={CYAN} />
      <rect x={182} y={480} width={16} height={84} fill="#55606b" />
      <rect x={98} y={560} width={184} height={12} rx={6} fill="#3d4650" />
      <circle cx={106} cy={580} r={8} fill={OUTLINE} />
      <circle cx={190} cy={580} r={8} fill={OUTLINE} />
      <circle cx={274} cy={580} r={8} fill={OUTLINE} />
      <rect x={92} y={455} width={196} height={30} rx={12} fill="#00838f" />
    </Outlined>
    <rect x={102} y={252} width={176} height={190} rx={40} fill="#26b0bf" opacity={0.45} />
  </>
);

const Desk = () => (
  <>
    <Outlined>
      <rect x={-44} y={508} width={20} height={120} rx={3} fill="#9a6640" />
      <rect x={409} y={508} width={20} height={120} rx={3} fill="#9a6640" />
      <rect x={-26} y={508} width={437} height={112} fill="#b57c51" />
      <path d="M-36 478 H421 L438 496 H-53 Z" fill="#e7bd8f" />
      <rect x={-53} y={496} width={491} height={16} rx={3} fill="#c98f5e" />
    </Outlined>
    {/* Drawer pulls */}
    <rect x={60} y={548} width={60} height={8} rx={4} fill="#8a5a37" />
    <rect x={265} y={548} width={60} height={8} rx={4} fill="#8a5a37" />
  </>
);

const Mug = ({ reduce }) => (
  <>
    {[0, 1].map((i) => (
      <motion.path
        key={i}
        d={`M${328 + i * 12} 444 q-6 -9 0 -18 q6 -9 0 -18`}
        fill="none"
        stroke="#a09a97"
        strokeWidth={3}
        strokeLinecap="round"
        animate={reduce ? { opacity: 0.6 } : { opacity: [0, 0.8, 0], y: [4, -8] }}
        transition={{ duration: 2.2, repeat: reduce ? 0 : Infinity, delay: i * 0.7, ease: "easeOut" }}
      />
    ))}
    <Outlined>
      <path d="M348 462 h8 a9 9 0 0 1 0 18 h-8" fill="none" strokeWidth={5} />
      <rect x={318} y={452} width={32} height={36} rx={6} fill={ORANGE} />
    </Outlined>
  </>
);

const Laptop = ({ lidOpen, glow }) => (
  <>
    <Outlined>
      <rect x={110} y={484} width={164} height={9} rx={3} fill="#9aa1ab" />
    </Outlined>
    {/* We see the back of the lid; it opens from the hinge */}
    <motion.g style={{ scaleY: lidOpen, originY: 1 }}>
      <Outlined>
        <rect x={120} y={390} width={144} height={96} rx={10} fill="#d5d9df" />
      </Outlined>
      <rect x={128} y={398} width={128} height={6} rx={3} fill="#fff" opacity={0.6} />
      <motion.g style={{ opacity: glow }}>
        <circle cx={192} cy={437} r={18} fill={CYAN} opacity={0.3} />
      </motion.g>
      <text
        x={192}
        y={443}
        textAnchor="middle"
        fontFamily="ui-monospace, Menlo, monospace"
        fontSize={16}
        fontWeight={700}
        fill={CYAN}
      >
        &lt;/&gt;
      </text>
    </motion.g>
  </>
);

// Snippets that float up out of the laptop while he works. Each drifts out
// to the side so it never crosses his face.
const chips = [
  { text: "</>", x: 150, dx: -105 },
  { text: "git push", x: 236, dx: 120 },
  { text: "{ }", x: 140, dx: -130 },
  { text: "npm run dev", x: 244, dx: 105 },
  { text: "✓ build passed", x: 150, dx: -95 },
];

const CodeChip = ({ chip, index, reduce }) => {
  const width = chip.text.length * 7.8 + 20;
  const loop = { duration: 3, repeat: Infinity, delay: index * 0.6, ease: "easeOut" };

  return (
    <motion.g
      initial={{ x: chip.x, y: 400, opacity: 0 }}
      animate={
        reduce
          ? { x: chip.x + chip.dx * 0.7, y: 300 - index * 28, opacity: 1 }
          : { x: [chip.x, chip.x + chip.dx], y: [400, 250], opacity: [0, 1, 1, 0] }
      }
      transition={
        reduce
          ? { duration: 0 }
          : { ...loop, opacity: { ...loop, ease: "linear", times: [0, 0.15, 0.7, 1] } }
      }
    >
      <rect x={-width / 2} y={-13} width={width} height={26} rx={13} fill={OUTLINE} stroke="#fff" strokeWidth={3} />
      <text
        y={5}
        textAnchor="middle"
        fontFamily="ui-monospace, Menlo, monospace"
        fontSize={13}
        fill="#4dd0e1"
      >
        {chip.text}
      </text>
    </motion.g>
  );
};

const cloudCircles = [
  [305, 84, 28],
  [338, 64, 32],
  [372, 80, 27],
  [356, 104, 24],
  [318, 108, 22],
];

const ThoughtBubble = ({ progress, reduce }) => {
  const dot1 = useTransform(progress, [0.8, 0.83], [0, 1]);
  const dot2 = useTransform(progress, [0.83, 0.86], [0, 1]);
  const cloud = useTransform(progress, [0.86, 0.9], [0, 1]);
  const pondering = useTransform(progress, [0.89, 0.91, 0.94, 0.96], [0, 1, 1, 0]);
  const idea = useTransform(progress, [0.95, 0.99], [0, 1]);

  return (
    <>
      <motion.g style={{ scale: dot1 }}>
        <Outlined>
          <circle cx={252} cy={176} r={7} fill="#fff" />
        </Outlined>
      </motion.g>
      <motion.g style={{ scale: dot2 }}>
        <Outlined>
          <circle cx={272} cy={146} r={11} fill="#fff" />
        </Outlined>
      </motion.g>
      <motion.g style={{ scale: cloud }}>
        {/* Outlines first, then the fills on top, so the circles merge into one cloud */}
        <g fill="#fff" stroke="#fff" strokeWidth={14}>
          {cloudCircles.map(([cx, cy, r], i) => <circle key={i} cx={cx} cy={cy} r={r} />)}
        </g>
        <g fill="#fff" stroke={OUTLINE} strokeWidth={6}>
          {cloudCircles.map(([cx, cy, r], i) => <circle key={i} cx={cx} cy={cy} r={r} />)}
        </g>
        <g fill="#fff">
          {cloudCircles.map(([cx, cy, r], i) => <circle key={i} cx={cx} cy={cy} r={r - 1.5} />)}
        </g>

        {/* "Hmm…" dots, then the idea lands */}
        <motion.g style={{ opacity: pondering }}>
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={i}
              cx={322 + i * 16}
              cy={86}
              r={5}
              fill="#a09a97"
              animate={reduce ? undefined : { y: [0, -5, 0] }}
              transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </motion.g>
        <motion.g style={{ scale: idea, opacity: idea }}>
          <circle cx={338} cy={80} r={26} fill="#ffd54a" opacity={0.35} />
          <path
            d="M338 60 a16 16 0 0 1 9 29 v6 h-18 v-6 a16 16 0 0 1 9 -29 Z"
            fill="#ffd54a"
            stroke={OUTLINE}
            strokeWidth={3}
            strokeLinejoin="round"
          />
          <rect x={330} y={97} width={16} height={8} rx={2} fill="#a09a97" stroke={OUTLINE} strokeWidth={2.5} />
          <g stroke={ORANGE} strokeWidth={3} strokeLinecap="round">
            <path d="M338 50 v-8" />
            <path d="M317 60 l-6 -5" />
            <path d="M359 60 l6 -5" />
          </g>
        </motion.g>
      </motion.g>
    </>
  );
};

const HeroPic = ({ progress, trackRef }) => {
  const reduce = useReducedMotion();

  // Scroll story: desk and chair roll in → laptop opens → he sits down →
  // codes for a bit → stops to think until the idea lands
  const deskY = useTransform(progress, [0.06, 0.2], [160, 0]);
  const deskOpacity = useTransform(progress, [0.06, 0.12], [0, 1]);
  const chairX = useTransform(progress, [0.14, 0.3], [400, 0]);
  const chairOpacity = useTransform(progress, [0.14, 0.18], [0, 1]);
  const laptopY = useTransform(progress, [0.3, 0.38], [-70, 0]);
  const laptopOpacity = useTransform(progress, [0.3, 0.34], [0, 1]);
  const lidOpen = useTransform(progress, [0.37, 0.45], [0.06, 1]);
  const mugScale = useTransform(progress, [0.34, 0.4], [0, 1]);
  const glow = useTransform(progress, [0.43, 0.5], [0, 1]);
  const sitY = useTransform(progress, [0.44, 0.58], [0, SIT_Y]);
  const working = useTransform(progress, [0.56, 0.6, 0.76, 0.8], [0, 1, 1, 0]);
  // Pull the whole scene up and in a little so the desk below stays on screen
  const sceneY = useTransform(progress, [0.06, 0.58], ["0%", "-9%"]);
  const sceneScale = useTransform(progress, [0.06, 0.58], [1, 0.88]);

  return (
    // On phones the text sits above, so only the scene pins while the story
    // plays and this wrapper is the scroll room for it. Desktop pins the
    // whole hero instead (see HeroMain).
    <div ref={trackRef} className="relative w-full h-[170vh] md:h-auto md:w-auto">
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="sticky top-[calc(50svh-12.5rem)] md:relative md:top-auto flex items-center justify-center"
      >
        {/* Background Hexagon Animation */}
        <div className="absolute -z-10 flex justify-center items-center animate-pulse">
          <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[min(600px,125vw)] md:min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
        </div>

        {/* Side by side it shares the row with the text and must fit the
            pinned screen height, desk included */}
        <motion.div
          className="relative w-[min(420px,78vw)] md:w-[min(420px,38vw,52svh)] aspect-[385/503]"
          style={{ y: sceneY, scale: sceneScale }}
        >
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="absolute inset-0 w-full h-full overflow-visible"
            role="img"
            aria-label="Koustubh Dubey"
          >
            <defs>
              <radialGradient id="hero-screen-glow">
                <stop offset="0%" stopColor={CYAN} stopOpacity={0.45} />
                <stop offset="100%" stopColor={CYAN} stopOpacity={0} />
              </radialGradient>
            </defs>

            <motion.g style={{ x: chairX, opacity: chairOpacity }}>
              <Chair />
            </motion.g>

            <motion.g style={{ y: sitY }}>
              <image href="/images/kd-sticker.png" width={W} height={H} />
            </motion.g>

            {/* Screen light falling on him once the laptop is on */}
            <motion.ellipse
              cx={192}
              cy={372}
              rx={150}
              ry={70}
              fill="url(#hero-screen-glow)"
              style={{ opacity: glow }}
            />

            <motion.g style={{ y: deskY, opacity: deskOpacity }}>
              <Desk />
            </motion.g>

            <motion.g style={{ scale: mugScale, originY: 1 }}>
              <Mug reduce={reduce} />
            </motion.g>

            <motion.g style={{ y: laptopY, opacity: laptopOpacity }}>
              <Laptop lidOpen={lidOpen} glow={glow} />
            </motion.g>

            <motion.g style={{ opacity: working }}>
              {chips.map((chip, i) => (
                <CodeChip key={chip.text} chip={chip} index={i} reduce={reduce} />
              ))}
            </motion.g>

            <ThoughtBubble progress={progress} reduce={reduce} />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroPic;
