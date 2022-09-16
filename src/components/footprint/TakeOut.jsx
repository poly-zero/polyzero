import { Button } from "@material-tailwind/react";
import { Card } from "flowbite-react";
import FootprintWizardButtons from "./FootprintWizardButtons";
import Header from "../Header";

const TakeOut = ({ setResult, useWizard }) => {
  return (
    <div className="bg-slate-100 flex flex-col flex-grow items-center gap-6 md:items-center md:justify-center md:mt-0 md:gap-10 md:py-8">
      <Header
        text={""}
        highlightedText={"Take-out"}
        caption={"Select which applies most to you"}
      />
      <Card>Hello</Card>
      <FootprintWizardButtons useWizard={useWizard} />
    </div>
  );
};

export default TakeOut;
