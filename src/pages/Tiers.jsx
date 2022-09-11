import TierCard from "../components/tiers/TierCard";

const Tiers = ({ setTier }) => {
  const tierCards = [
    {
      title: "Supporter",
      description: "Support for 1 year",
      cost: "¥518",
      image: "https://picsum.photos/800",
    },
    {
      title: "Ally",
      description: "Support for 5 years",
      cost: "¥2,590",
      image: "https://picsum.photos/800",
    },
    {
      title: "Defender",
      description: "Support for 10 years",
      cost: "¥5180",
      image: "https://picsum.photos/800",
    },
    {
      title: "Hero",
      description: "Support for a lifetime",
      cost: "¥16,576",
      image: "https://picsum.photos/800",
    },
  ];

  return (
    <div className="flex flex-col flex-grow mt-8 items-center gap-6 md:items-center md:justify-center md:mt-0 md:gap-10">
      <div className="w-1/2 flex justify-center items-center">
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
          Want to
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            {" "}
            save the planet?
          </span>
        </h1>
      </div>
      <div className="flex flex-col gap-8 w-3/4 justify-center items-center md:flex-row md:gap-14 md:w-11/12">
        {tierCards.map((tier) => {
          return (
            <TierCard
              title={tier.title}
              description={tier.description}
              cost={tier.cost}
              image={tier.image}
              setTier={setTier}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tiers;
