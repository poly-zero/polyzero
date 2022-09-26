import { useState } from "react";
import footprintQuestions from "../../data/footprintQuestions.json";
import Header from "../Header";
import FootprintForm from "./FootprintForm";
import foodDelivery from "../../assets/takeOut.mp4"

const TakeOut = ({ useWizard, result, setResult, windowWidth }) => {
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
    <div className="relative flex flex-col items-center flex-grow gap-6 overflow-hidden lg:flex-row bg-slate-200 md:items-center md:justify-center md:mt-0 lg:gap-0 md:py-8">
      <video
        autoPlay={windowWidth < 500 ? false : true}
        loop
        muted
        class="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source
          src={foodDelivery}
          type="video/mp4"
        />
      </video>
      <div className="absolute z-0 w-full h-full bg-gray-800 opacity-90"></div>
      
      <div className="z-40 basis-1/2">
        <Header
          text={""}
          highlightedText={takeOutData.category}
          caption={takeOutData.prompt}
          caption2={takeOutData.prompt2}
          darkBackground={true}
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
