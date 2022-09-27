import { useState } from "react";
import footprintQuestions from "../../data/footprintQuestions.json";
import Header from "../Header";
import FootprintForm from "./FootprintForm";
import petBottles from "../../assets/petBottles2.mp4"

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
    <div className="relative flex flex-col items-center flex-grow gap-6 overflow-hidden lg:flex-row bg-slate-200 md:items-center md:justify-center md:mt-0 lg:gap-0 md:py-8">
      <video
        autoPlay
        loop
        muted
        class="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source
          src={petBottles}
          type="video/mp4"
        />
      </video>
      <div className="absolute z-0 w-full h-full bg-gray-800 opacity-90"></div>
      
      <div className="relative z-30 basis-1/2">
        <Header
          text={""}
          highlightedText={petBottlesData.category}
          caption={petBottlesData.prompt}
          caption2={petBottlesData.prompt2}
          darkBackground={true}
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
