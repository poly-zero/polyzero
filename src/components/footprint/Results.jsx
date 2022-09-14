import { useNavigate } from "react-router-dom";
import { Card, Button } from "flowbite-react";
import tierData from "../../data/tier.json";
import messagesTwitter from "../../data/variable.json";
import { ReactComponent as FaceBook } from "../../assets/socialMediaIcons/icons8-facebook.svg";
import { ReactComponent as Instagram } from "../../assets/socialMediaIcons/icons8-instagram.svg";
import { ReactComponent as LinkedIn } from "../../assets/socialMediaIcons/icons8-linkedin.svg";
import { ReactComponent as Twitter } from "../../assets/socialMediaIcons/icons8-twitter.svg";
import { useCountUp } from "use-count-up";

const Results = ({ setResult, storedResult }) => {
  const navigateTo = useNavigate();
  const foundTier = tierData.find((tier) => tier.title === storedResult);
  const nationalAverage = 37;
  let secondMessage = foundTier.plastic;
  let forthMessage = foundTier.carbon;

  function resetResult() {
    localStorage.removeItem("result");
    setResult("");
  }

  function useCounter(data) {
    const { value } = useCountUp({
      isCounting: true,
      end: data,
      duration: 2,
    });

    return value;
  }

  return (
    <div className="flex flex-col gap-4 items-center w-full tracking-normal my-4">
      {foundTier && (
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
          My
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            {" "}
            Plastic Footprint
          </span>
        </h1>
      )}
      <div className="flex flex-col w-3/4 md:w-1/2 gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <Card>
            <h1 className="flex flex-col gap-2 mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              <small className="text-base md:text-xl font-normal text-gray-500">
                Plastic consumption
              </small>
              <div>
                {useCounter(foundTier.plastic)}
                <span className="text-4xl">kg / year</span>
              </div>
            </h1>
            <p className="text-xs md:text-base font-normal text-gray-700 dark:text-gray-400">
              At the <strong>{storedResult}</strong> level, we estimate you
              consume around <strong>{useCounter(foundTier.plastic)}kg</strong>{" "}
              of disposable plastics per year.
            </p>
          </Card>
          <Card>
            <h1 className="flex flex-col gap-2 mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl ">
              <small className="text-base md:text-xl font-normal text-gray-500">
                National average
              </small>
              <div className="text-4xl md:text-6xl">
                {useCounter(nationalAverage)}
                <span className="text-xl md:text-4xl">kg / year</span>
              </div>
            </h1>
            <p className="text-xs md:text-base font-normal text-gray-700 dark:text-gray-400">
              per capita average annual plastic consumption in
              <strong> 🇯🇵 Japan</strong>.
            </p>
          </Card>
        </div>

        <Card>
          <div className="flex flex-col gap-2">
            <small className="text-base md:text-xl font-normal text-gray-500">
              This amount of plastic will generate at least
            </small>
            <h1 className="mb-4 font-extrabold text-gray-900 dark:text-white text-4xl md:text-6xl">
              {useCounter(foundTier.carbon)}

              <span className="text-xl md:text-4xl">
                kg CO
                <span className="text-xl">2</span>e
              </span>
            </h1>
            <p className="text-xs md:text-base font-normal text-gray-700 dark:text-gray-400">
              emissions over the course of its life (production to end-of-life).
            </p>
          </div>
        </Card>
      </div>
      <div className="w-3/4 md:w-1/2">
        <Card>
          <div className="flex flex-col items-center gap-2">
            <small className="text-base md:text-xl font-normal text-gray-500">
              Share your results and help raise awareness!
            </small>
          </div>
          <div className="flex justify-center gap-4 -my-2">
            <FaceBook />
            <Instagram />
            <a
              href={
                `https://twitter.com/intent/tweet?text=${
                  messagesTwitter[0].Q1
                }+${secondMessage + "kg"}+${messagesTwitter[0].Q3}+${
                  forthMessage + "kg"
                }${messagesTwitter[0].Q5}` +
                "%0a" +
                `${messagesTwitter[0].Q6}`
              }
              data-show-count="false"
              target={"_blank"}
              rel="noreferrer"
              className=""
            >
              <Twitter />
            </a>
            <LinkedIn />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <Button size={"xl"} onClick={() => navigateTo("/resources")}>
              Shrink your plastic habit
            </Button>
            <Button size={"xl"} onClick={() => navigateTo("/tiers")}>
              Off-set your CO2 emissions
            </Button>
            <Button size={"xl"} onClick={resetResult}>
              Re-do Footprint Estimate
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Results;
