const ProjectsText = () => {
  return (
    <div className="flex flex-col items-center mt-[160px]">
      <span className="mb-5 -rotate-2 rounded-full border-[3px] border-white bg-[#c6f432] px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-white shadow-[3px_3px_0_0_rgb(var(--color-white))]">
        ✦ Selected work
      </span>
      <h2 className="text-5xl md:text-6xl text-cyan font-special italic mb-4">
        From Idea To Deployment
      </h2>
      <p className="text-lg text-center text-lightGrey max-w-[600px]">
        Real-world projects that highlight my approach to building performant,
        scalable, and user-focused applications.
      </p>
    </div>
  );
};

export default ProjectsText;
