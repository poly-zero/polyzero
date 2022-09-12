import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";

const Results = ({ setResult, storedResult }) => {
  const navigateTo = useNavigate();
  const results = {
    "🐕 Plastic Avoider": {
      plastic: 9.25,
      co2e: 51.8,
    },
    "🐄 Plastic Reducer": {
      plastic: 27.75,
      co2e: 155.4,
    },
    "🐘 Conscientious Consumer": {
      plastic: 46.25,
      co2e: 259,
    },
    "🦖 Urban Consumer": {
      plastic: 9.25,
      co2e: 414.4,
    },
  };

  function resetResult() {
    localStorage.removeItem("result");
    setResult("");
  }

  return (
    <div className="flex flex-col justify-center items-center w-1/2 tracking-normal">
      {results[storedResult] && (
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
          You consume approximately
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            {` ${results[storedResult].plastic} kg `}
          </span>
          per year, which amounts to
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            {` ${results[storedResult].co2e} kg of CO2e.`}
          </span>
        </h1>
      )}
      <div className="flex gap-8">
        <Button size={"xl"} onClick={resetResult}>
          Estimate footprint again
        </Button>
        <Button size={"xl"} onClick={() => navigateTo("/tiers")}>
          Start offsetting
        </Button>
      </div>
    </div>
  );
};

export default Results;
