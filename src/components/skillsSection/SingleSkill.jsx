const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="hover:-translate-y-4 transition-all duration-500">
      <div className="flex flex-col items-center gap-2 relative">
        <div className="bg-white text-cyan h-[80px] w-[80px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-5xl border-4 border-orange">
          {imgSvg}
        </div>
        <p className="text-white font-bold text-sm">{text}</p>
      </div>
    </div>
  );
};

export default SingleSkill;
