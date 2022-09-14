import { useEffect, useState } from "react";
import TierCard from "../components/tiers/TierCard";
import tierData from "../data/tier.json";

const offsetCost = 5000;

const Tiers = ({ setTier }) => {
  const storedResult = localStorage.getItem("result");

  const [data, setData] = useState(null);

  useEffect(() => {
    setData(tierData.find((element) => element.title === storedResult));
  }, [storedResult]);

  const tierCards = [
    {
      title: "Supporter",
      time: 1,
      image: "https://picsum.photos/800",
    },
    {
      title: "Ally",
      time: 5,
      image: "https://picsum.photos/800",
    },
    {
      title: "Defender",
      time: 10,
      image: "https://picsum.photos/800",
    },
    {
      title: "Champion",
      time: 15,
      image: "https://picsum.photos/800",
    },
  ];

  return (
    <div className="flex flex-col flex-grow mt-8 items-center gap-6 md:items-center md:justify-center md:mt-0 md:gap-6">
      <div className="w-1/2 flex justify-center items-center">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
          Offset your {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            CO2 emissions 
          </span>
        </h1>
      </div>
      <div className="flex text-center text-gray-500" >
        The most important step you can take is to reduce your plastic footprint.<br /> 
        For those who wish to do more, you can offset the CO2 emissions originating from the plastic you use.
      </div>
      <div className="flex flex-col gap-8 w-3/4 justify-center items-center md:flex-row md:gap-14 md:w-11/12">
        {data &&
          tierCards.map((tier) => {
            return (
              <TierCard
                key={tier.title}
                title={tier.title}
                time={tier.time}
                tonnes={(data.carbon / 1000)}
                cost={(data.carbon / 1000) * offsetCost}
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
