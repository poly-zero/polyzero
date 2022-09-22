import { useState } from "react";
import footprintQuestions from "../../data/footprintQuestions.json";
import Header from "../Header";
import FootprintForm from "./FootprintForm";

const Groceries = ({ useWizard, result, setResult }) => {
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
    <div className="flex flex-col items-center flex-grow gap-6 bg-slate-200 md:items-center md:justify-center md:mt-0 md:gap-10 md:py-8">
      <Header
        text={""}
        highlightedText={groceryData.category}
        caption={groceryData.prompt}
        caption2={groceryData.prompt2}
      />
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
