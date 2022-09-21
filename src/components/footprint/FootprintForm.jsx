import { Radio } from "@material-tailwind/react";
import FootprintWizardButtons from "./FootprintWizardButtons";

const FootprintForm = ({
  answers,
  useWizard,
  storeFunction,
  setFunction,
  footprintResult,
  selectedValue,
}) => {
  console.log(selectedValue);
  return (
    <div className="flex flex-col">
      {answers.map((element) => {
        return (
          <Radio
            key={element.value}
            id={element.value}
            name={"value"}
            label={element.answer}
            value={element.value}
            onChange={(event) => setFunction(Number(event.target.value))}
            defaultChecked={selectedValue === element.value ? true : false}
          />
        );
      })}
      <div className="flex justify-center">
        <FootprintWizardButtons
          useWizard={useWizard}
          storeFunction={storeFunction}
          footprintResult={footprintResult}
        />
      </div>
    </div>
  );
};

export default FootprintForm;
