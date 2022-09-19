import { useState } from "react";
import footprintQuestions from "../../data/footprintQuestions.json";
import { Card, CardBody } from "@material-tailwind/react";
import Header from "../Header";
import FootprintForm from "./FootprintForm";

const PetBottles = ({ useWizard, result, setResult }) => {
  const [petBottlesHabit, setPetBottlesHabit] = useState(null);
  const petBottlesData = footprintQuestions.find(
    (element) => element.category === "PET bottles"
  );

  const storePetBottlesHabit = () => {
    setResult({
      ...result,
      petBottles: petBottlesHabit,
    });
  };
  return (
    <div className="bg-slate-100 flex flex-col flex-grow items-center gap-6 md:items-center md:justify-center md:mt-0 md:gap-10 md:py-8">
      <Header
        text={""}
        highlightedText={petBottlesData.category}
        caption={petBottlesData.prompt}
      />
      <Card className="w-1/2">
        <CardBody>
          <FootprintForm
            answers={petBottlesData.answers}
            setResult={setResult}
            useWizard={useWizard}
            result={result.petBottles}
            storeFunction={storePetBottlesHabit}
            setFunction={setPetBottlesHabit}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default PetBottles;
