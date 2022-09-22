import { useState } from "react";
import footprintQuestions from "../../data/footprintQuestions.json";
import Header from "../Header";
import FootprintForm from "./FootprintForm";

const TakeOut = ({ useWizard, result, setResult }) => {
  const [takeOutHabit, setTakeOutHabit] = useState(
    result && result.takeOut ? result.takeOut : null
  );
  const takeOutData = footprintQuestions.find(
    (element) => element.category === "Take-out"
  );

  const storeTakeOutHabit = () => {
    setResult({
      ...result,
      takeOut: takeOutHabit,
    });
  };
  return (
    <div className="flex flex-col items-center flex-grow gap-6 bg-slate-200 md:items-center md:justify-center md:mt-0 md:gap-10 md:py-8">
      <Header
        text={""}
        highlightedText={takeOutData.category}
        caption={takeOutData.prompt}
        caption2={takeOutData.prompt2}
      />
      <FootprintForm
        answers={takeOutData.answers}
        useWizard={useWizard}
        result={result.takeOut}
        setResult={setResult}
        footprintResult={result}
        storeFunction={storeTakeOutHabit}
        setFunction={setTakeOutHabit}
        selectedValue={takeOutHabit}
      />
    </div>
  );
};

export default TakeOut;
