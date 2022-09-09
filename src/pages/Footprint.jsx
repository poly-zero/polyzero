import FootprintCard from "../components/FootprintCard";
import { useState, useEffect } from "react";
import Results from "../components/Results";
import { Button } from "flowbite-react";

const Footprint = () => {
  const [result, setResult] = useState("");
  const [change, setChange] = useState(false);

  // const results = document.querySelector("#results");

  const plasticFootprintEstimation = [
    {
      title: "🐕 Small",
      grocery:
        "I grow most of my own vegetables, or primarily buy packaging-free fruits & vegetables",
      takeOut: "I cook at home most meals, and rarely order take-out",
      petBottles: "I very rarely use drink vending machines",
      disposables:
        "I make an effort to avoid plastic packaging on the items I choose from the supermarket",
    },
    {
      title: "🐎 Medium",
      grocery:
        "I try to avoid single-serving sizes and buy bulk-size and minimally packaged products whenever possible.",
      takeOut: "I order takeout or delivery 1-2 times per month or less. ",
      petBottles: "I buy no more than 1-2 drinks in PET bottles per month.",
      disposables:
        "I carry reusable bags, water bottle/cup, cutlery, straw, etc. to avoid disposables.",
    },
    {
      title: "🐘 High",
      grocery:
        "I appreciate that my supermarket thoroughly packages foods in plastic for freshness and sanitation",
      takeOut:
        "I order delivery (such as Uber Eats) 1-2 times per week or more",
      petBottles:
        "I drink 1-2 (or more) PET bottle drinks per week from vending machines, convenience stores, etc.",
      disposables:
        "I often receive a plastic bag and/or disposable utensils at the cash register",
    },
  ];

  useEffect(() => {}, [change]);

  return (
    <div className="flex flex-col flex-grow mt-8 items-center gap-6 md:items-center md:justify-center md:mt-0 md:gap-10">
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
        <div className="flex flex-col gap-8 w-3/4 justify-center items-center md:flex-row md:gap-14 md:w-full">
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
                change={setChange}
              />
            );
          })}
        </div>
      ) : (
        <Button size={"xl"}>Start offsetting</Button>
      )}
    </div>
  );
};

export default Footprint;
