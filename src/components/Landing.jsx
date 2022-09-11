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
    " In Japan 1 Kilogram of plastic equals to 5.6kg- 6kg CO2 over its lifetime.",
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
      <div className="flex-col items-center mt-11 align-items ">
        <div>
          <img
            className="flex-col items-center mx-auto  "
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
          className=" flex mx-auto mt-5  items-center py-2 px-3 text-sm font-medium justify-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          type="button"
        >
          Get started{" "}
        </button>
      </div>
      <div className="flex-col ">
        {" "}
        <div class=" flex flex-col justify-center items-center">
          <h1 className="text-2xl mb-7 mt-7 underline font-light">
            Did you know
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center text-center font-bold mt-2 ">
          <div className="max-w-xs">{randomFact}</div>
        </div>
      </div>
      <button
        onClick={() => navigateTo("/resources")}
        className=" flex mx-auto items-center mb-3 mt-9 py-2 px-3 text-sm font-medium justify-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Learn more{" "}
      </button>
    </div>
  );
};

export default Landing;
