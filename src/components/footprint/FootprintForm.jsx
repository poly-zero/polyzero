import { useState } from "react";
import { Card, CardBody } from "@material-tailwind/react";
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
  const [selected, setSelected] = useState(selectedValue ? true : false);
  const handleRadioSelect = (value) => {
    setFunction(Number(value));
    setSelected(true);
  };

  return (
    <div className="z-30 flex flex-col w-full px-4 md:w-4/5 lg:w-full md md:px-4 lg:px-0 basis-3/4 md:basis-2/3 lg:basis-1/3 xl:basis-1/3">
      <RadioGroup
        value={selectedValue}
        onChange={handleRadioSelect}
        name="footprint"
        className="flex flex-col gap-4"
      >
        {answers.map((element, i) => {
          return (
            <RadioGroup.Option value={element.value} key={i}>
              {({ active, checked }) => (
                <Card
                  className={`hover:cursor-pointer ${
                    active
                      ? "ring-4  ring-emerald-500 transition-all ease-in duration-100"
                      : ""
                  }
                transition-all ease-in duration-100`}
                >
                  <CardBody className="flex items-center gap-4">
                    <div
                      className={`${
                        checked
                          ? "text-slate-50 bg-emerald-500"
                          : "text-slate-50 bg-slate-50"
                      } border-2 border-slate-300 shrink-0 rounded-2xl lg:p-0 transition-all ease-in duration-200`}
                    >
                      <CheckIcon className={`w-6 h-6 p-1 font-bold`} />
                    </div>
                    <p className="text-sm lg:text-base xl:text-lg">
                      {element.answer}
                    </p>
                  </CardBody>
                </Card>
              )}
            </RadioGroup.Option>
          );
        })}
      </RadioGroup>
      {/* Buttons */}
      <FootprintWizardButtons
        useWizard={useWizard}
        storeFunction={storeFunction}
        footprintResult={footprintResult}
        selected={selected}
      />
    </div>
  );
};

export default FootprintForm;
