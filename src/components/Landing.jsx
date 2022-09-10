import "./Landing.css";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LinkedIn } from "../assets/socialMediaIcons/icons8-linkedin.svg";
import { ReactComponent as FaceBook } from "../assets/socialMediaIcons/icons8-facebook.svg";
import { ReactComponent as Instagram } from "../assets/socialMediaIcons/icons8-instagram.svg";
import { ReactComponent as Twitter } from "../assets/socialMediaIcons/icons8-twitter.svg";
import { ReactComponent as Line } from "../assets/socialMediaIcons/icons8-line.svg";

const Landing = () => {
  const plasticConsumption = [
    " In Japan, 37 Kilograms Per capita annual single plastic consumption in Japan.",
    " In Japan 1 Kilogram of plastic equals to 5.6kg- 6kg CO2 over its lifetime. \n https://siwi.org/wp-content/uploads/2021/07/why-water_topics-present-at-launch_rivers2.jpg",
    " Japan is the 2nd biggest consumer of disposable plastic.",
    " In Japan, the average CO2 from plastic per capita is 207-222kg per annum.",
    " Single-use plastics, which account for half of the plastic we use each year, have an average useful life of 12 to 15 minutes and yet can take up to 500 years to break down."
  ];

  const randomFact =
    plasticConsumption[Math.floor(Math.random() * plasticConsumption.length)];

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(randomFact);
  };
  const navigateTo = useNavigate();

  return (
    <div className="mt-11">
      <div className="flex-col   items-center mt-11 align-items ">
        <div>
          <img
            className="flex-col items-center mx-auto  p-4"
            alt="Pictue of river running through jungle"
            src="https://siwi.org/wp-content/uploads/2021/07/why-water_topics-present-at-launch_rivers2.jpg"
            width="500"
            height="400"
          />
        </div>
        <h1 className="  mx-auto  flex justify-center  text-7xl gap-8 mt-11 ">
          PolyZero
        </h1>
        <p className=" mx-auto  flex justify-center  text-1xl gap-8 mt-11">
          A better way to help the planet.
        </p>
        <button
          onClick={() => navigateTo("/footprint")}
          className=" flex mx-auto bg-orange-400 mb-4 mt-5  rounded p-2  ring-1 ring-black shadow-10xl"
          type="button"
        >
          Get started{" "}
        </button>
      </div>
      <div className="flex-col shadow-xl">
        {" "}
        <div class=" flex flex-col justify-center items-center">
          <h1 className="text-2xl mb-11 underline font-light">Did you know</h1>
        </div>
        <div className="flex flex-col justify-center items-center text-center font-bold  ">
          <div className="max-w-xs">
            Single-use plastics, which account for half of the plastic we use
            each year, have an average useful life of 12 to 15 minutes and yet
            can take up to 500 years to break down.
          </div>
          <a
            href="https://www.iberdrola.com/sustainability/how-to-reduce-plastic-use"
            className="text-blue-600 hover:text-blue-800 text-center justify-center items-center font-light"
          >
            Click here for the full report by LOOP (Life Out Of Plastic)
          </a>
        </div>
        <div className="flex flex-col justify-left justify-center items-center  text-center mt-5 font-bold">
          <div class=" max-w-xs">
            The carbon footprint of just five plastic bags is the equvialant of
            1kg of CO2e.
            <p className="text-center">Source:</p>
            <a
              href="https://timeforchange.org/plastic-bags-and-plastic-bottles-co2-emissions-during-their-lifetime/"
              className="text-blue-600 hover:text-blue-800 text-center font-light"
            >
              Click here for the full report
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-left items-center text-center mt-5 font-bold ">
          <div class=" max-w-xs">
            Japan is the world's second largest per capita consumer of plastic
            packaging.
            <p className="text-center">
              Source: United Nations Environment Programme, 2018
            </p>
            <a
              href="https://www.unep.org/ietc/ja/node/53"
              className="text-blue-600 hover:text-blue-800 text-center font-light "
            >
              Click here for the full report
            </a>
          </div>
        </div>
        <div class=" flex flex-col  items-end">
          <div class="">4</div>
        </div>
        <div class=" flex flex-col  items-center">
          <div class="">5</div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Landing;
