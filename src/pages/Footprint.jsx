import { useEffect } from "react";
import FootprintCard from "../components/footprint/FootprintCard";
import Results from "../components/footprint/Results";
import footprintData from "../data/tier.json";
import { ReactComponent as FaceBook } from "../assets/socialMediaIcons/icons8-facebook.svg";
import { ReactComponent as Instagram } from "../assets/socialMediaIcons/icons8-instagram.svg";
import { ReactComponent as LinkedIn } from "../assets/socialMediaIcons/icons8-linkedin.svg";
import { ReactComponent as Twitter } from "../assets/socialMediaIcons/icons8-twitter.svg";
import { ReactComponent as Line } from "../assets/socialMediaIcons/icons8-line.svg";

const Footprint = ({ result, setResult }) => {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   setData(tierData.find((element) => element.title === storedResult));
  // }, [storedResult]);
  const storedResult = localStorage.getItem("result");

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
          <div className="flex flex-wrap gap-8 w-10/12 justify-center items-center md:flex-row md:gap-9 md:w-10/12">
            {footprintData.map((card) => {
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
    </>
  );
};

export default Footprint;
