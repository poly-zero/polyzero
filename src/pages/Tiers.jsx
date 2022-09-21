import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TierCard from "../components/tiers/TierCard";
import tierCardData from "../data/tierCards.json";
import Header from "../components/Header";

const Tiers = ({ setTier }) => {
  const offsetCost = 5000;
  const [data, setData] = useState(null);

  useEffect(() => {
    const storedResult = JSON.parse(localStorage.getItem("tiers"));
    setData(storedResult);
  }, []);

  return (
    <div className="flex flex-col items-center flex-grow gap-6 mt-8 bg-slate-100 md:items-center md:justify-center md:mt-0 md:gap-6">
      <Header
        text="Offset your"
        highlightedText="CO2 emissions"
        caption={
          "The most important step you can take is to reduce your plastic footprint. For those who wish to do more, you can offset the CO2 emissions originating from the plastic you use."
        }
      />
      <Link to={"/contribution"}>
        <p className="underline underline-offset-4">Where your money goes</p>
      </Link>
      <section className="flex flex-col items-center justify-center w-3/4 gap-8 md:flex-row md:gap-8 md:w-9/12">
        {data &&
          tierCardData.map((tier) => {
            return (
              <TierCard
                key={tier.title}
                title={tier.title}
                time={tier.time}
                tonnes={data.carbon / 1000}
                cost={(data.carbon / 1000) * offsetCost}
                image={tier.image}
                setTier={setTier}
              />
            );
          })}
      </section>
    </div>
  );
};

export default Tiers;
