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
    <div className="flex flex-col items-center flex-grow gap-6 lg:flex-row bg-slate-200 md:items-center md:justify-center md:mt-0 lg:gap-0 md:py-8">
      <div className="basis-1/2">
        <Header
          text={""}
          highlightedText={takeOutData.category}
          caption={takeOutData.prompt}
          caption2={takeOutData.prompt2}
        />
      </div>
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
