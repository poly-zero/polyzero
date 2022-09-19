import Country from "../components/footprint/Country";
import OnlineShopping from "../components/footprint/OnlineShopping";
import PetBottles from "../components/footprint/PetBottles";
import TakeOut from "../components/footprint/TakeOut";
import Groceries from "../components/footprint/Groceries";
import { Wizard, useWizard } from "react-use-wizard";
import { useNavigate } from "react-router-dom";

const FootprintWizard = ({ result, setResult }) => {
  const navigateTo = useNavigate();

  async function calculateResults(object) {
    let footprint = 0;
    for (const key in object) {
      if (key !== "country") {
        footprint += object[key];
        console.log("FOOTPRINT ITERATION", footprint);
      }
    }
    console.log("BEFORE RETURNING", footprint);
    return footprint;
  }

  async function handleSubmit() {
    const final = await calculateResults(result);
    await setResult({
      ...result,
      footprintResult: final,
    });
    await localStorage.setItem("footprint", JSON.stringify(result));
    console.log(
      "RESULT",
      result,
      "LOCAL",
      JSON.parse(localStorage.getItem("footprint"))
    );
    await navigateTo("/results");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-grow">
      <Wizard>
        <Country result={result} setResult={setResult} useWizard={useWizard} />
        <Groceries
          result={result}
          setResult={setResult}
          useWizard={useWizard}
        />
        <OnlineShopping
          result={result}
          setResult={setResult}
          useWizard={useWizard}
        />
        <PetBottles
          result={result}
          setResult={setResult}
          useWizard={useWizard}
        />
        <TakeOut result={result} setResult={setResult} useWizard={useWizard} />
      </Wizard>
    </form>
  );
};

export default FootprintWizard;
