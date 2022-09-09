import TierCard from "./TierCard";

const Tiers = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-8 sm:flex-row">
      <div className="w-1/2 flex justify-center items-center">
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
          Want to
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            {" "}
            save the planet?
          </span>
        </h1>
      </div>
      <div className="flex  w-1/2 flex-col justify-center items-center gap-8">
        <TierCard
          title={"Supporter"}
          description={"Support for 1 year"}
          buttonText={"Select"}
        />
        <TierCard
          title={"Ally"}
          description={"Support for 5 years"}
          buttonText={"Select"}
        />
        <TierCard
          title={"Defender"}
          description={"Support for 10 years"}
          buttonText={"Select"}
        />
        <TierCard
          title={"Hero"}
          description={"Support for a lifetime"}
          buttonText={"Select"}
        />
      </div>
    </div>
  );
};

export default Tiers;
