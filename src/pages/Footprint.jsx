import { useEffect } from "react";
import FootprintCard from "../components/footprint/FootprintCard";
import Results from "../components/footprint/Results";
import { ReactComponent as FaceBook } from "../assets/socialMediaIcons/icons8-facebook.svg";
import { ReactComponent as Instagram } from "../assets/socialMediaIcons/icons8-instagram.svg";
import { ReactComponent as LinkedIn } from "../assets/socialMediaIcons/icons8-linkedin.svg";
import { ReactComponent as Twitter } from "../assets/socialMediaIcons/icons8-twitter.svg";
import { ReactComponent as Line } from "../assets/socialMediaIcons/icons8-line.svg";
import tier from "../data/tier.json";

const Footprint = ({ result, setResult }) => {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   setData(tierData.find((element) => element.title === storedResult));
  // }, [storedResult]);
  const hashTag = "aveTheEarth";
  const storedResult = localStorage.getItem("result");
  console.log(storedResult);
  const firstMessage = "I use approx.";
  let secondMessage;
  const thirdMessage = "of disposable plastic/year, corresponding to";
  let forthMessage;
  const fithMessage =
    " of CO2e. %0aHow much plastic do you use? %0aEstimated with @PolyZeroApp ";
  const sixthMessage = "https://polyzero.earth";

  tier.map((val) => {
    if (val.title === storedResult) {
      (secondMessage = val.plastic) && (forthMessage = val.carbon);
    } else if (val.title === storedResult) {
      (secondMessage = val.plastic) && (forthMessage = val.carbon);
    } else if (val.title === storedResult) {
      (secondMessage = val.plastic) && (forthMessage = val.carbon);
    } else if (val.title === storedResult) {
      (secondMessage = val.plastic) && (forthMessage = val.carbon);
    }
  });

  const plasticFootprintEstimation = [
    {
      title: "🐕 Plastic Avoider",
      grocery:
        "I grow most of my own vegetables, or buy packaging-free fruits & vegetables.",
      takeOut: "I cook most meals at home.",
      petBottles:
        "I very rarely consume bottled drinks from the store or vending machines.",
      disposables:
        "I make an effort to avoid plastic packaging on the items I choose from the supermarket."
    },
    {
      title: "🐄 Plastic Reducer",
      grocery:
        "I try to avoid single-serving sizes and buy bulk-size and minimally packaged products whenever possible.",
      takeOut:
        "I rarely eat take-out or delivery meals (1-2 times per month or less).",
      petBottles: "I buy no more than 1-2 drinks in PET bottles per month.",
      disposables:
        "I carry reusable bags, water bottle/cup, cutlery, straw, etc. to avoid disposables."
    },
    {
      title: "🐘 Conscientious Consumer",
      grocery:
        "I try to choose items with less plastic packaging but it's difficult.",
      takeOut:
        "I order delivery (such as Uber Eats) or take-out meals no more than 1-2 times per week.",
      petBottles:
        "I drink 1-2 PET bottle drinks per week from vending machines, convenience stores, etc.",
      disposables:
        "I occasionally recieve plastic bags and/or disposable utensils at stores/restaurants, when I've forgotten to bring my own."
    },
    {
      title: "🦖 Urban Consumer",
      grocery:
        "I buy what's available at the supermarket, regardless of whether it's packaged in plastic.",
      takeOut:
        "I order delivery (such as Uber Eats) or take-out meals 3 or more times per week.",
      petBottles:
        "I drink 3+ PET bottle drinks per week from vending machines, convenience stores, etc.",
      disposables:
        "I often receive a plastic bag and/or disposable utensils at the cash register."
    }
  ];

  useEffect(() => {
    if (storedResult) {
      setResult(storedResult);
    }
  }, []);

  return (
    <>
      {!result ? (
        <div className="flex flex-col items-center gap-6 md:items-center md:justify-center md:mt-0 md:gap-10 md:py-8">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
            What is your <span> </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              plastic footprint
            </span>
            ?
          </h1>
          <div className="flex flex-wrap gap-8 w-10/12 justify-center items-center md:flex-row md:gap-14 md:w-10/12">
            {plasticFootprintEstimation.map((card) => {
              return (
                <FootprintCard
                  title={card.title}
                  grocery={card.grocery}
                  takeOut={card.takeOut}
                  petBottles={card.petBottles}
                  disposables={card.disposables}
                  buttonText={"Select"}
                  setResult={setResult}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex flex-grow bg-slate-100 gap-6 justify-center items-center md:justify-center md:mt-0 md:gap-10 md:py-8">
          <Results setResult={setResult} storedResult={storedResult} />
        </div>
      )}
      <div className="flex gap-4">
        <FaceBook />
        <Instagram />
        <a
          href={
            `https://twitter.com/intent/tweet?text=${firstMessage}+${
              secondMessage + "kg"
            }+${thirdMessage}+${forthMessage + "kg"}${fithMessage}` +
            "%0a" +
            `${sixthMessage}` +
            "%0a" +
            `&hashtags=${hashTag}`
          }
          data-show-count="false"
          target={"_blank"}
          rel="noreferrer"
        >
          <Twitter />
        </a>
        <LinkedIn />
        <Line />
      </div>
    </>
  );
};

export default Footprint;
