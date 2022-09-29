import { useState } from "react";
import footprintQuestions from "../../data/footprintQuestions.json";
import Header from "../Header";
import FootprintForm from "./FootprintForm";
import shoppingCart from "../../assets/videos/shoppingCart.mp4";

const OnlineShopping = ({ useWizard, result, setResult, windowWidth }) => {
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
    <div className="relative flex flex-col items-center flex-grow gap-6 overflow-hidden lg:flex-row bg-slate-200 md:items-center md:justify-center md:mt-0 lg:gap-0 md:py-8">
      <video
        autoPlay={windowWidth < 500 ? false : true}
        loop
        muted
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source src={shoppingCart} type="video/mp4" />
      </video>
      <div className="absolute z-20 w-full h-full bg-slate-800 opacity-90"></div>

      <div className="z-40 w-full md:w-3/4 lg:w-full lg:basis-1/2">
        <Header
          text={""}
          highlightedText={onlineShoppingData.category}
          caption={onlineShoppingData.prompt}
          caption2={onlineShoppingData.prompt2}
          darkBackground={true}
        />
      </div>
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
