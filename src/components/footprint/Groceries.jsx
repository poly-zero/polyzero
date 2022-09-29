import { useState } from "react";
import footprintQuestions from "../../data/footprintQuestions.json";
import Header from "../Header";
import FootprintForm from "./FootprintForm";
import supermarket from "../../assets/videos/supermarket2.mp4";

const Groceries = ({ useWizard, result, setResult, windowWidth }) => {
  const [groceryHabit, setGroceryHabit] = useState(
    result && result.grocery ? result.grocery : null
  );
  const groceryData = footprintQuestions.find(
    (element) => element.category === "Groceries"
  );

  const storeGroceryHabit = () => {
    setResult({
      ...result,
      grocery: groceryHabit,
    });
  };
  return (
    <div className="relative flex flex-col items-center flex-grow gap-6 overflow-hidden lg:flex-row bg-slate-200 md:items-center md:justify-center md:mt-0 lg:gap-0 md:py-8">
      <video
        autoPlay={windowWidth < 500 ? false : true}
        loop
        muted
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src={supermarket} type="video/mp4" />
      </video>
      <div className="absolute z-0 w-full h-full opacity-90 bg-slate-800"></div>

      <div className="z-40 w-full md:w-3/4 lg:w-full lg:basis-1/2">
        <Header
          text={""}
          highlightedText={groceryData.category}
          caption={groceryData.prompt}
          caption2={groceryData.prompt2}
          darkBackground={true}
        />
      </div>
      <FootprintForm
        answers={groceryData.answers}
        setResult={setResult}
        useWizard={useWizard}
        result={result.grocery}
        storeFunction={storeGroceryHabit}
        setFunction={setGroceryHabit}
        selectedValue={groceryHabit}
      />
    </div>
  );
};

export default Groceries;
