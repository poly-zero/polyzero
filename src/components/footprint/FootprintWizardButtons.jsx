import {
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";

const FootprintWizardButtons = ({
  useWizard,
  storeFunction,
  footprintResult,
  selected,
}) => {
  const { isLastStep, isFirstStep, previousStep, nextStep } = useWizard();

  return (
    <div className="flex justify-center w-full gap-8 my-8">
      {isFirstStep && (
        <>
          <Button
            className="flex justify-center basis-1/2"
            onClick={() => {
              nextStep();
              storeFunction();
            }}
          >
            <ArrowRightIcon className="w-5 h-5 text-white" />
          </Button>
        </>
      )}

      {!isFirstStep && !isLastStep && (
        <>
          <Button
            className="flex justify-center basis-1/2 md:basis:1/4 rounded-xl"
            onClick={() => previousStep()}
          >
            <ArrowLeftIcon className="w-5 h-5 text-white" />
          </Button>
          <Button
            className="flex justify-center basis-1/2 md:basis:1/4 rounded-xl"
            onClick={() => {
              nextStep();
              storeFunction();
            }}
            disabled={!selected}
          >
            <ArrowRightIcon className="w-5 h-5 text-white" />
          </Button>
        </>
      )}

      {isLastStep && (
        <>
          <Button
            className="flex justify-center w-1/2"
            onClick={() => previousStep()}
          >
            <ArrowLeftIcon className="flex items-center justify-center w-5 h-5 text-white" />
          </Button>
          <Button
            className="flex items-center justify-center p-0 text-sm capitalize basis-1/2 lg:text-base xl:text-lg bg-emerald-500"
            type="submit"
            value={footprintResult}
            onClick={() => {
              storeFunction();
            }}
            disabled={!selected}
          >
            Submit
          </Button>
        </>
      )}
    </div>
  );
};

export default FootprintWizardButtons;
