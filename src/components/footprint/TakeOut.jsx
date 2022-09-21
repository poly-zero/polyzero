import { useState } from "react";
import footprintQuestions from "../../data/footprintQuestions.json";
import { Card, CardBody } from "@material-tailwind/react";
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
    <div className="bg-slate-100 flex flex-col flex-grow items-center gap-6 md:items-center md:justify-center md:mt-0 md:gap-10 md:py-8">
      <Header
        text={""}
        highlightedText={takeOutData.category}
        caption={takeOutData.prompt}
      />
      <Card className="w-1/2">
        <CardBody>
          <FootprintForm
            answers={takeOutData.answers}
            useWizard={useWizard}
            result={result.takeOut}
            setResult={setResult}
            footprintResult={result}
            storeFunction={storeTakeOutHabit}
            setFunction={setTakeOutHabit}
            selectedValue={result && result.takeOut ? result.takeOut : null}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default TakeOut;
