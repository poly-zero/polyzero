import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TierCard from "../components/tiers/TierCard";
import tierCardData from "../data/tierCards.json";
import Header from "../components/Header";
import supporter from "../assets/images/supporter.jpg";
import ally from "../assets/images/ally.jpg";
import defender from "../assets/images/defender.jpg";
import champion from "../assets/images/champion.jpg";

const Tiers = ({ setTier }) => {
  const offsetCost = 5000;
  const [data, setData] = useState(null);
  const tiers = [
    {
      title: "Supporter",
      time: 1,
      image: supporter,
    },
    {
      title: "Ally",
      time: 5,
      image: ally,
    },
    {
      title: "Defender",
      time: 10,
      image: defender,
    },
    {
      title: "Champion",
      time: 15,
      image: champion,
    },
  ];

  useEffect(() => {
    const storedResult = JSON.parse(localStorage.getItem("tiers"));
    setData(storedResult);
  }, []);

  return (
    <div className="relative flex flex-col flex-grow gap-6 overflow-hidden lg:flex-row bg-slate-700 opacity-90 lg:items-center md:justify-center md:mt-0 lg:gap-0">
      <div className="z-40 flex flex-col gap-4 my-8 md:text-start md:my-16 lg:my-0 lg:ml-24 lg:-mr-24 basis-1/2">
        <div>
          <Header
            text="Offset your"
            highlightedText="CO2 emissions"
            caption={
              "The most important step you can take is to reduce your plastic footprint. For those who wish to do more, you can offset the CO2 emissions originating from the plastic you use."
            }
            darkBackground={true}
          />
        </div>
        <Link to={"/faq"}>
          <p className="font-bold underline underline-offset-4 md:text-center md:mt-8 lg:mt-0 lg:text-start text-emerald-500">
            Where your money goes
          </p>
        </Link>
      </div>
      <section className="z-40 flex flex-col items-center h-screen gap-8 overflow-y-scroll snap-y md:px-16 lg:p-14 xl:p-32 basis-full md:gap-8 md:basis-full lg:basis-1/2">
        {data &&
          tierCardData.map((tier, index) => {
            return (
              <TierCard
                key={tier.title}
                title={tier.title}
                time={tier.time}
                tonnes={data.carbon / 1000}
                cost={(data.carbon / 1000) * offsetCost}
                image={tiers[index].image}
                setTier={setTier}
              />
            );
          })}
      </section>
    </div>
  );
};

export default Tiers;
