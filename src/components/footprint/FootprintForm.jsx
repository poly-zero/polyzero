import { useState } from "react";
import { Card, CardBody, Radio } from "@material-tailwind/react";
import FootprintWizardButtons from "./FootprintWizardButtons";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/solid";

const FootprintForm = ({
  answers,
  useWizard,
  storeFunction,
  setFunction,
  footprintResult,
  selectedValue,
}) => {
  const [selected, setSelected] = useState(false);
  const handleRadioSelect = (value) => {
    setFunction(Number(value));
    setSelected(true);
  };

  return (
    <div className="flex flex-col w-2/3">
      <RadioGroup
        value={selectedValue}
        onChange={handleRadioSelect}
        name="footprint"
        className="flex flex-col gap-4"
      >
        {answers.map((element) => {
          return (
            <RadioGroup.Option value={element.value}>
              {({ active, checked }) => (
                <Card
                  className={`hover:cursor-pointer ${
                    active
                      ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300 transition-all ease-in duration-100"
                      : ""
                  }
                ${
                  checked ? "bg-blue-500 text-slate-50" : "bg-slate-50 text-slate-700"
                } transition-all ease-in duration-100`}
                >
                  <CardBody className="flex items-center gap-2">
                    <div
                      className={`${
                        checked ? "text-blue-500" : "text-slate-50"
                      } bg-slate-50 opacity-40 shrink-0 rounded-2xl lg:p-1`}
                    >
                      <CheckIcon className={`w-6 h-6 p-1`} />
                    </div>
                    <p className="text-md lg:text-base xl:text-lg">{element.answer}</p>
                  </CardBody>
                </Card>
              )}
            </RadioGroup.Option>
          );
        })}
      </RadioGroup>
      
      {/* Buttons */}
      <div className="flex justify-center">
        <FootprintWizardButtons
          useWizard={useWizard}
          storeFunction={storeFunction}
          footprintResult={footprintResult}
          selected={selected}
        />
      </div>
    </div>
  );
};

export default FootprintForm;
