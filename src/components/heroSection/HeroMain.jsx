import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <div className="pt-16 pb-16 min-h-[80vh] flex items-center">
      <div className="max-w-[1200px] mx-auto relative px-4 w-full flex md:flex-row sm:flex-col items-center justify-between gap-8">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
