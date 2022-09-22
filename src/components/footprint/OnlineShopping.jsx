import { useState } from "react";
import footprintQuestions from "../../data/footprintQuestions.json";
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
    <div className="flex flex-col items-center flex-grow gap-6 bg-slate-200 md:items-center md:justify-center md:mt-0 md:gap-10 md:py-8">
      <Header
        text={""}
        highlightedText={onlineShoppingData.category}
        caption={onlineShoppingData.prompt}
        caption2={onlineShoppingData.prompt2}
      />
      <FootprintForm
        answers={onlineShoppingData.answers}
        setResult={setResult}
        useWizard={useWizard}
        result={result.onlineShopping}
        storeFunction={storeOnlineShoppingHabit}
        setFunction={setOnlineShoppingHabit}
        selectedValue={onlineShoppingHabit}
      />
    </div>
  );
};

export default OnlineShopping;
