import { useEffect } from "react";
import FootprintCard from "../components/footprint/FootprintCard";
import Results from "./Results";
import footprintData from "../data/tier.json";

const Footprint = ({ result, setResult, useWizard }) => {
  const storedResult = localStorage.getItem("result");

  useEffect(() => {
    if (storedResult) {
      setResult(storedResult);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!result ? (
        <div className="flex flex-col items-center gap-6 md:items-center md:justify-center md:mt-0 md:gap-10 md:py-8">
          <h1 className="mb-4 text-3xl font-extrabold text-center text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            Estimate your <span> </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              plastic footprint
            </span>
          </h1>
          Select the lifestyle below that comes closest to describing your
          consumption habits.
          <div className="flex flex-wrap items-center justify-center w-10/12 gap-8 md:flex-row md:gap-9 md:w-10/12">
            {footprintData.map((card) => {
              return (
                <FootprintCard
                  key={card.title}
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
        </div>
      ) : (
        <div className="flex items-center justify-center flex-grow gap-6 bg-slate-100 md:justify-center md:mt-0 md:gap-10 md:py-8">
          <Results setResult={setResult} storedResult={storedResult} />
        </div>
      )}
    </>
  );
};

export default Footprint;
