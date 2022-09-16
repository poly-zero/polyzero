import Header from "../components/Header";
import Country from "../components/footprint/Country";
import OnlineShopping from "../components/footprint/OnlineShopping";
import PetBottles from "../components/footprint/PetBottles";
import TakeOut from "../components/footprint/TakeOut";
import Groceries from "../components/footprint/Groceries";
import { Wizard, useWizard } from "react-use-wizard";

const FootprintWizard = ({ setResult }) => {
  return (
    <>
      <Wizard>
          <Country setResult={setResult} useWizard={useWizard} />
          <Groceries setResult={setResult} useWizard={useWizard} />
          <OnlineShopping setResult={setResult} useWizard={useWizard} />
          <PetBottles setResult={setResult} useWizard={useWizard} />
          <TakeOut setResult={setResult} useWizard={useWizard} />
      </Wizard>
    </>
  );
};

export default FootprintWizard;
