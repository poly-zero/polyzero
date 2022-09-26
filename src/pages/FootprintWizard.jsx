import { useState, useEffect } from "react";
import Country from "../components/footprint/Country";
import OnlineShopping from "../components/footprint/OnlineShopping";
import PetBottles from "../components/footprint/PetBottles";
import TakeOut from "../components/footprint/TakeOut";
import Groceries from "../components/footprint/Groceries";
import { Wizard, useWizard } from "react-use-wizard";
import { useNavigate } from "react-router-dom";
import { saveFootprintData } from "../firebase/firebase";

const FootprintWizard = ({ result, setResult, useWindowSize }) => {
  const [width] = useWindowSize();
  const [isMobile, setIsMobile] = useState(width < 500 ? true : false);
  const navigateTo = useNavigate();
  const storedFootprint = JSON.parse(localStorage.getItem("footprint"));

  useEffect(() => {
    if (storedFootprint) {
      setResult(storedFootprint);
      navigateTo("/results");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function calculateResults(object) {
    let footprint = 0;
    for (const key in object) {
      if (key !== "country") {
        footprint += object[key];
      }
    }
    return footprint;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const final = calculateResults(result);
    const finalResult = {
      ...result,
      footprintResult: final,
    };
    localStorage.setItem("footprint", JSON.stringify(finalResult));
    saveFootprintData(finalResult);
    setResult(finalResult);
    navigateTo("/results");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
        <Wizard>
          <Country
            result={result}
            setResult={setResult}
            useWizard={useWizard}
            isMobile={isMobile}
          />
          <Groceries
            result={result}
            setResult={setResult}
            useWizard={useWizard}
            isMobile={isMobile}
          />
          <OnlineShopping
            result={result}
            setResult={setResult}
            useWizard={useWizard}
            isMobile={isMobile}
          />
          <PetBottles
            result={result}
            setResult={setResult}
            useWizard={useWizard}
            isMobile={isMobile}
          />
          <TakeOut
            result={result}
            setResult={setResult}
            useWizard={useWizard}
            isMobile={isMobile}
          />
        </Wizard>
      </form>
    </>
  );
};

export default FootprintWizard;
