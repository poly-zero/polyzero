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
    <div className="flex flex-col items-center flex-grow gap-6 bg-slate-200 md:items-center md:justify-center md:mt-0 md:gap-10 md:py-8">
      <Header
        text={""}
        highlightedText={petBottlesData.category}
        caption={petBottlesData.prompt}
        caption2={petBottlesData.prompt2}
      />
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
