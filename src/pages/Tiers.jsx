import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TierCard from "../components/tiers/TierCard";
import tierCardData from "../data/tierCards.json";
import Header from "../components/Header";
import Carousel from "react-elastic-carousel";

const Tiers = ({ setTier }) => {
  const offsetCost = 5000;
  const [data, setData] = useState(null);

  useEffect(() => {
    const storedResult = JSON.parse(localStorage.getItem("tiers"));
    setData(storedResult);
  }, []);

  return (
    <div className="relative flex flex-col items-center flex-grow gap-6 md:flex-row bg-slate-200 md:items-center md:justify-center md:mt-0 lg:gap-0 md:py-8">
      <div className="absolute z-0 w-full h-full bg-gray-800 opacity-90"></div>
      <div className="z-40 flex flex-col gap-4 md:mx-14 basis-1/3">
        <Header
          text="Offset your"
          highlightedText="CO2 emissions"
          caption={
            "The most important step you can take is to reduce your plastic footprint. For those who wish to do more, you can offset the CO2 emissions originating from the plastic you use."
          }
          darkBackground={true}
        />
        <Link to={"/contribution"}>
          <p className="font-bold underline underline-offset-4 text-emerald-500">
            Where your money goes
          </p>
        </Link>
      </div>
      <section className="z-40 flex flex-col items-center justify-center gap-8 basis-3/4 md:gap-4 md:basis-1/2">
        <Carousel
          itemPadding={[0, 0]}
          itemsToShow={2}
          outerSpacing={0}
          verticalMode={true}
          focusOnSelect={true}
        >
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
        </Carousel>
      </section>
    </div>
  );
};

export default Tiers;
