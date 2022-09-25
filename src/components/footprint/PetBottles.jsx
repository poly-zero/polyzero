import { useState } from "react";
import footprintQuestions from "../../data/footprintQuestions.json";
import Header from "../Header";
import FootprintForm from "./FootprintForm";

const PetBottles = ({ useWizard, result, setResult }) => {
  const [petBottlesHabit, setPetBottlesHabit] = useState(
    result && result.petBottles ? result.petBottles : null
  );
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
    <div className="flex flex-col items-center flex-grow gap-6 lg:flex-row bg-slate-200 md:items-center md:justify-center md:mt-0 lg:gap-0 md:py-8">
      <div className="basis-1/2">
        <Header
          text={""}
          highlightedText={petBottlesData.category}
          caption={petBottlesData.prompt}
          caption2={petBottlesData.prompt2}
        />
      </div>
      <FootprintForm
        answers={petBottlesData.answers}
        setResult={setResult}
        useWizard={useWizard}
        result={result.petBottles}
        storeFunction={storePetBottlesHabit}
        setFunction={setPetBottlesHabit}
        selectedValue={petBottlesHabit}
      />
    </div>
  );
};

export default PetBottles;
