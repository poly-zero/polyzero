import { useState } from "react";
import footprintQuestions from "../../data/footprintQuestions.json";
import { Card, CardBody } from "@material-tailwind/react";
import Header from "../Header";
import FootprintForm from "./FootprintForm";

const OnlineShopping = ({ useWizard, result, setResult }) => {
  const [onlineShoppingHabit, setOnlineShoppingHabit] = useState(
    result && result.onlineShopping ? result.grocery : null
  );
  const onlineShoppingData = footprintQuestions.find(
    (element) => element.category === "Online shopping"
  );

  const storeOnlineShoppingHabit = () => {
    setResult({
      ...result,
      onlineShopping: onlineShoppingHabit,
    });
  };
  return (
    <div className="bg-slate-100 flex flex-col flex-grow items-center gap-6 md:items-center md:justify-center md:mt-0 md:gap-10 md:py-8">
      <Header
        text={""}
        highlightedText={onlineShoppingData.category}
        caption={onlineShoppingData.prompt}
      />
      <Card className="w-1/2">
        <CardBody>
          <FootprintForm
            answers={onlineShoppingData.answers}
            setResult={setResult}
            useWizard={useWizard}
            result={result.onlineShopping}
            storeFunction={storeOnlineShoppingHabit}
            setFunction={setOnlineShoppingHabit}
            selectedValue={
              result && result.onlineShopping ? result.onlineShopping : null
            }
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default OnlineShopping;
