import { Progress } from "@material-tailwind/react";

const ProgressBar = ({ useWizard }) => {
  const { isLastStep, isFirstStep, activeStep } = useWizard();

  const value = isFirstStep
    ? 0
    : activeStep === 1
    ? 20
    : activeStep === 2
    ? 40
    : activeStep === 3
    ? 60
    : activeStep === 4
    ? 80
    : isLastStep
    ? 100
    : null;

  return (
    <>
      <Progress
        value={value}
        label="Completed"
        color="green"
        className="rounded-none"
      />
    </>
  );
};

export default ProgressBar;
