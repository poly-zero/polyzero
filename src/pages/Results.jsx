import { useNavigate } from "react-router-dom";
import { Card, CardBody, Button } from "@material-tailwind/react";
import { Progress } from "@material-tailwind/react";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "next-share";
import { ReactComponent as FaceBook } from "../assets/socialMediaIcons/icons8-facebook.svg";
import { ReactComponent as LinkedIn } from "../assets/socialMediaIcons/icons8-linkedin.svg";
import { ReactComponent as Twitter } from "../assets/socialMediaIcons/icons8-twitter.svg";
import { useCountUp } from "use-count-up";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import {
  AcademicCapIcon,
  BackwardIcon,
  ForwardIcon,
} from "@heroicons/react/24/solid";

const Results = ({ result, setResult }) => {
  const navigateTo = useNavigate();

  const perCapitaAverage = result.country.avgKg;
  const country = result.country.name;

  const [footprint, setFootprint] = useState(result);

  function rounder(number) {
    return Number(number.toFixed(2));
  }

  useEffect(() => {
    const co2ePerPlasticKg = 5.6;

    if (footprint.footprintResult > 4)
      setFootprint({
        title: "🛍 Urban Consumer",
        plastic: rounder(perCapitaAverage * 2),
        carbon: rounder(perCapitaAverage * 2 * co2ePerPlasticKg),
      });
    else if (footprint.footprintResult >= 0 && footprint.footprintResult <= 4)
      setFootprint({
        title: "🛒 Conscientious Consumer",
        plastic: rounder(perCapitaAverage * 1.25),
        carbon: rounder(perCapitaAverage * 1.25 * co2ePerPlasticKg),
      });
    else if (footprint.footprintResult >= -4 && footprint.footprintResult < 0)
      setFootprint({
        title: "🥬 Plastic Reducer",
        plastic: rounder(perCapitaAverage * 0.75),
        carbon: rounder(perCapitaAverage * 0.75 * co2ePerPlasticKg),
      });
    else if (footprint.footprintResult < -4)
      setFootprint({
        title: "👩🏻‍🌾 Plastic Avoider",
        plastic: rounder(perCapitaAverage * 0.25),
        carbon: rounder(perCapitaAverage * 0.25 * co2ePerPlasticKg),
      });
    else console.log("SOMETHING WENT WRONG");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem("tiers", JSON.stringify(footprint));
  }, [footprint]);

  function resetFootprint() {
    setResult(null);
    localStorage.clear();
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
    <div className="relative flex flex-col items-center justify-center flex-grow w-full gap-4 bg-slate-700 opacity-90">
      <Progress
        value={100}
        label="Completed"
        className="absolute top-0 z-40 rounded-none"
        color="green"
      />
      <div className="container z-40 w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
        <div className="z-40 md:basis-1/4 lg:basis-1/2">
          <Header
            text="My"
            highlightedText="Plastic Footprint"
            darkBackground={true}
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <Card className="border-none bg-slate-50 rounded-xl basis-3/5 ">
              <CardBody>
                <h1 className="flex flex-col gap-2 mb-4 font-extrabold text-gray-800 dark:text-white ">
                  <small className="text-base font-normal text-gray-800 md:text-base lg:text-xl">
                    Plastic consumption
                  </small>
                  <div className="text-4xl md:text-5xl lg:text-5xl 2xl:text-8xl">
                    {useCounter(footprint.plastic)}
                    <span className="text-xl md:text-2xl lg:text-3xl">
                      kg / year
                    </span>
                  </div>
                </h1>
                <p className="text-xs font-normal leading-5 text-gray-800 md:text-md dark:text-slate-100">
                  At the <strong>{footprint.title}</strong> level, we estimate
                  you consume around{" "}
                  <strong>{useCounter(footprint.plastic)}kg</strong> of
                  disposable plastics per year.
                </p>
              </CardBody>
            </Card>
            <Card className="border-none bg-slate-50 rounded-xl basis-2/5 ">
              <CardBody>
                <h1 className="flex flex-col gap-2 mb-4 text-3xl font-extrabold text-gray-800 dark:text-white md:text-5xl">
                  <small className="text-base font-normal leading-5 text-gray-800 md:text-md lg:text-xl">
                    National average
                  </small>
                  <div className="text-4xl md:text-5xl lg:text-5xl 2xl:text-8xl">
                    {useCounter(perCapitaAverage)}
                    <span className="text-xl md:text-2xl lg:text-3xl">
                      kg / year
                    </span>
                  </div>
                </h1>
                <p className="text-xs font-normal leading-5 text-gray-800 md:text-md dark:text-slate-100">
                  per capita average annual plastic consumption in
                  <strong>&nbsp;{country}</strong>.
                </p>
              </CardBody>
            </Card>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <Card className="border-none bg-slate-50 rounded-xl basis-4/5 ">
              <CardBody>
                <div className="flex flex-col gap-2">
                  <small className="text-base font-normal text-gray-800 md:text-xl">
                    This amount of plastic will generate at least
                  </small>
                  <h1 className="mb-4 text-4xl font-extrabold text-gray-800 md:text-5xl lg:text-5xl 2xl:text-8xl dark:text-white">
                    {useCounter(footprint.carbon)}
                    <span className="text-xl md:text-2xl lg:text-3xl">
                      kg CO
                      <small className="text-xl">2</small>e
                    </span>
                  </h1>
                  <p className="text-xs font-normal leading-5 text-gray-800 md:text-md dark:text-slate-100">
                    emissions over the course of its life (production to
                    end-of-life).
                  </p>
                </div>
              </CardBody>
            </Card>
            <Card className="border-none bg-slate-50 rounded-xl basis-1/5 ">
              <CardBody className="flex flex-col items-center justify-between gap-6">
                <small className="text-base font-normal text-center text-gray-800 md:text-base">
                  Share your results and help raise awareness!
                </small>
                <div className="flex gap-4">
                  {/*  */}
                  <FacebookShareButton
                    url={"https://www.polyzero.earth"}
                    hashtag={"#polyzero"}
                  >
                    <FaceBook className="w-12 h-12" />
                  </FacebookShareButton>
                  <TwitterShareButton
                    url={"https://www.polyzero.earth"}
                    title={`I use approx. ${footprint.plastic}kg of disposable plastic/year, generating ${footprint.carbon}kg of CO2 emissions. How much plastic do you use? \nEstimated with @polyzeroapp `}
                    hashtags={["sustainability", "plasticfree"]}
                  >
                    <Twitter className="w-12 h-12" />
                  </TwitterShareButton>
                  <LinkedinShareButton url={"https://www.polyzero.earth"}>
                    <LinkedIn className="w-12 h-12" />
                  </LinkedinShareButton>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="flex flex-col flex-wrap justify-center gap-4 my-8 md:flex-row">
          <Button
            className="flex items-center gap-4 text-base capitalize transition-all duration-300 ease-in-out bg-sky-500 md:justify-center text-slate-100 basis-full lg:basis-1/3 hover:bg-red-500"
            onClick={resetFootprint}
          >
            <BackwardIcon className="w-8 h-8 text-slate-100" />
            Re-estimate footprint
          </Button>
          <Button
            className="flex items-center gap-4 text-base capitalize bg-green-500 md:justify-center hover:bg-green-400 basis-full lg:basis-1/3 text-slate-100"
            onClick={() => navigateTo("/tiers")}
          >
            Off-set your CO2 emissions
            <ForwardIcon className="w-8 h-8 text-slate-100" />
          </Button>
          <Button
            className="flex items-center gap-4 text-base capitalize md:justify-center basis-full lg:basis-1/3 bg-gradient-to-r hover:animate-pulse to-emerald-600 from-sky-500"
            onClick={() => navigateTo("/tips")}
          >
            <AcademicCapIcon className="w-8 h-8" />
            Shrink your plastic habit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;
