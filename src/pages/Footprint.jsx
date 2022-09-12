import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FootprintCard from "../components/footprint/FootprintCard";
import Results from "../components/footprint/Results";
import { Button } from "flowbite-react";

const Footprint = () => {
  const [result, setResult] = useState("");

  const navigateTo = useNavigate();

  const plasticFootprintEstimation = [
    {
      title: "🐕 Plastic Avoider",
      grocery:
        "I grow most of my own vegetables, or buy packaging-free fruits & vegetables.",
      takeOut: "I cook most meals at home.",
      petBottles:
        "I very rarely consume bottled drinks from the store or vending machines.",
      disposables:
        "I make an effort to avoid plastic packaging on the items I choose from the supermarket.",
    },
    {
      title: "🐄 Plastic Reducer",
      grocery:
        "I try to avoid single-serving sizes and buy bulk-size and minimally packaged products whenever possible.",
      takeOut:
        "I rarely eat take-out or delivery meals (1-2 times per month or less).",
      petBottles: "I buy no more than 1-2 drinks in PET bottles per month.",
      disposables:
        "I carry reusable bags, water bottle/cup, cutlery, straw, etc. to avoid disposables.",
    },
    {
      title: "🐘 Conscientious Consumer",
      grocery:
        "I try to choose items with less plastic packaging but it's difficult.",
      takeOut:
        "I order delivery (such as Uber Eats) or take-out meals no more than 1-2 times per week.",
      petBottles:
        "I drink 1-2 PET bottle drinks per week from vending machines, convenience stores, etc.",
      disposables:
        "I occasionally recieve plastic bags and/or disposable utensils at stores/restaurants, when I've forgotten to bring my own.",
    },
    {
      title: "🦖 Urban Consumer",
      grocery:
        "I buy what's available at the supermarket, regardless of whether it's packaged in plastic.",
      takeOut:
        "I order delivery (such as Uber Eats) or take-out meals 3 or more times per week.",
      petBottles:
        "I drink 3+ PET bottle drinks per week from vending machines, convenience stores, etc.",
      disposables:
        "I often receive a plastic bag and/or disposable utensils at the cash register.",
    },
  ];

  return (
    <div className="flex flex-col flex-grow mt-8 items-center gap-6 md:items-center md:justify-center md:mt-0 md:gap-10 md:py-8">
      {!result ? (
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
          What is your <span> </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            plastic footprint
          </span>
          ?
        </h1>
      ) : (
        <Results result={result} />
      )}

      {/* Footprint cards container */}
      {!result ? (
        <div className="flex flex-wrap gap-8 w-10/12 justify-center items-center md:flex-row md:gap-14 md:w-10/12">
          {plasticFootprintEstimation.map((card) => {
            return (
              <FootprintCard
                title={card.title}
                grocery={card.grocery}
                takeOut={card.takeOut}
                petBottles={card.petBottles}
                disposables={card.disposables}
                buttonText={"Select"}
                setResult={setResult}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex gap-8">
          <Button size={"xl"} onClick={() => navigateTo("/tiers")}>
            Learn more
          </Button>
          <Button size={"xl"} onClick={() => navigateTo("/tiers")}>
            Start offsetting
          </Button>
        </div>
      )}
    </div>
  );
};

export default Footprint;
