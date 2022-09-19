import { useNavigate } from "react-router-dom";
import { Card, Button } from "flowbite-react";
import tierData from "../data/tier.json";
// import messagesTwitter from "../data/variable.json";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "next-share";
import { ReactComponent as FaceBook } from "../assets/socialMediaIcons/icons8-facebook.svg";
import { ReactComponent as Instagram } from "../assets/socialMediaIcons/icons8-instagram.svg";
import { ReactComponent as LinkedIn } from "../assets/socialMediaIcons/icons8-linkedin.svg";
import { ReactComponent as Twitter } from "../assets/socialMediaIcons/icons8-twitter.svg";
import { useCountUp } from "use-count-up";
import { useEffect, useState } from "react";

const Results = ({ result, setResult }) => {
  const [footprint, setFootprint] = useState({});
  const storedFootprint = JSON.parse(localStorage.getItem("footprint"));
  const navigateTo = useNavigate();
  // const foundTier = tierData.find((tier) => tier.title === storedResult);
  // const nationalAverage = 37;
  // let secondMessage = footprint.plastic;
  // let forthMessage = footprint.carbon;
  const perCapitaAverage = storedFootprint.country.avgKg;
  // let secondMessage = foundTier.plastic;
  // let forthMessage = foundTier.carbon;

  useEffect(() => {
    const co2ePerPlasticKg = 5.6;
    // if (storedFootprint) {
    //   setResult(storedFootprint);
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (storedFootprint.footprintResult > 4)
      setFootprint({
        title: "🛍 Urban Consumer",
        plastic: perCapitaAverage * 2,
        carbon: perCapitaAverage * 2 * co2ePerPlasticKg,
      });
    else if (
      storedFootprint.footprintResult > 0 &&
      storedFootprint.footprintResult <= 4
    )
      setFootprint({
        title: "🛒 Conscientious Consumer",
        plastic: perCapitaAverage * 1.25,
        carbon: perCapitaAverage * 1.25 * co2ePerPlasticKg,
      });
    else if (
      storedFootprint.footprintResult > -4 &&
      storedFootprint.footprintResult <= 0
    )
      setFootprint({
        title: "🥬 Plastic Reducer",
        plastic: perCapitaAverage * 0.75,
        carbon: perCapitaAverage * 0.75 * co2ePerPlasticKg,
      });
    else if (storedFootprint.footprintResult < -4)
      setFootprint({
        title: "👩🏻‍🌾 Plastic Avoider",
        plastic: perCapitaAverage * 0.25,
        carbon: perCapitaAverage * 0.25 * co2ePerPlasticKg,
      });
    else console.log("SOMETHING WENT WRONG");
  }, []);

  function resetFootprint() {
    localStorage.removeItem("footprint");
    setResult(null)
    setFootprint(null);
    navigateTo("/wizard");
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
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
        My
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          {" "}
          Plastic Footprint
        </span>
      </h1>
      <div className="flex flex-col w-3/4 md:w-1/2 gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <Card>
            <h1 className="flex flex-col gap-2 mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              <small className="text-base md:text-xl font-normal text-gray-500">
                Plastic consumption
              </small>
              <div>
                {useCounter(footprint.plastic)}
                <span className="text-4xl">kg / year</span>
              </div>
            </h1>
            <p className="text-xs md:text-base font-normal text-gray-700 dark:text-gray-400">
              At the <strong>{footprint.title}</strong> level, we estimate you
              consume around <strong>{useCounter(footprint.plastic)}kg</strong>{" "}
              of disposable plastics per year.
            </p>
          </Card>
          <Card>
            <h1 className="flex flex-col gap-2 mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl ">
              <small className="text-base md:text-xl font-normal text-gray-500">
                National average
              </small>
              <div className="text-4xl md:text-6xl">
                {useCounter(perCapitaAverage)}
                <span className="text-xl md:text-4xl">kg / year</span>
              </div>
            </h1>
            <p className="text-xs md:text-base font-normal text-gray-700 dark:text-gray-400">
              per capita average annual plastic consumption in
              <strong>{storedFootprint.country.name}</strong>.
            </p>
          </Card>
        </div>

        <Card>
          <div className="flex flex-col gap-2">
            <small className="text-base md:text-xl font-normal text-gray-500">
              This amount of plastic will generate at least
            </small>
            <h1 className="mb-4 font-extrabold text-gray-900 dark:text-white text-4xl md:text-6xl">
              {useCounter(footprint.carbon)}

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
            {/*  */}
            <FacebookShareButton
              url={"https://www.polyzero.earth"}
              hashtag={"#polyzero"}
            >
              <FaceBook />
            </FacebookShareButton>
            <Instagram />
            {/* <a
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
             </a> */}
            <TwitterShareButton
              url={"https://www.polyzero.earth"}
              title={`I use approx ${footprint.plastic}kg of disposable plastic/year, corresponding to ${footprint.carbon}kg of CO2e. %0aHow much plastic do you use? Estimated with`}
              hashtags={["PolyZeroApp"]}
            >
              <Twitter />
            </TwitterShareButton>
            <LinkedinShareButton url={"https://www.polyzero.earth"}>
              <LinkedIn />
            </LinkedinShareButton>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <Button size={"xl"} onClick={() => navigateTo("/resources")}>
              Shrink your plastic habit
            </Button>
            <Button size={"xl"} onClick={() => navigateTo("/tiers")}>
              Off-set your CO2 emissions
            </Button>
            <Button size={"xl"} onClick={resetFootprint}>
              Re-do Footprint Estimate
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Results;
