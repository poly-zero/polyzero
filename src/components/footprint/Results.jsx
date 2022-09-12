import { useNavigate } from "react-router-dom";
import { Card, Button } from "flowbite-react";
import tierData from "../../data/tier.json";
import { ReactComponent as FaceBook } from "../../assets/socialMediaIcons/icons8-facebook.svg";
import { ReactComponent as Instagram } from "../../assets/socialMediaIcons/icons8-instagram.svg";
import { ReactComponent as LinkedIn } from "../../assets/socialMediaIcons/icons8-linkedin.svg";
import { ReactComponent as Twitter } from "../../assets/socialMediaIcons/icons8-twitter.svg";
import { ReactComponent as Line } from "../../assets/socialMediaIcons/icons8-line.svg";

const Results = ({ setResult, storedResult }) => {
  const navigateTo = useNavigate();
  const foundTier = tierData.find((tier) => tier.title === storedResult);

  function resetResult() {
    localStorage.removeItem("result");
    setResult("");
  }

  return (
    <div className="flex flex-col gap-8 items-center w-full tracking-normal">
      {foundTier && (
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
          My
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            {" "}
            Plastic Footprint
          </span>
        </h1>
      )}
      <div className="flex flex-col w-1/2 gap-4">
        <div className="flex gap-4">
          <Card>
            <h1 className="flex flex-col gap-2 mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              <small className="text-xl font-normal text-gray-500">
                Plastic consumption
              </small>
              <div>
                {foundTier.plastic}
                <span className="text-4xl">kg / year</span>
              </div>
            </h1>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              At the <strong>{storedResult.slice(2)}</strong> level, we estimate
              you consume around <strong>{foundTier.plastic}kg</strong> of
              disposable plastics per year.
            </p>
          </Card>
          <Card>
            <h1 className="flex flex-col gap-2 mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl ">
              <small className="text-xl font-normal text-gray-500">
                National average
              </small>
              <div>
                37<span className="text-4xl">kg / year</span>
              </div>
            </h1>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              The per capita average annual plastic consumption in
              <strong> Japan</strong>.
            </p>
          </Card>
        </div>

        <Card>
          <div className="flex flex-col gap-2">
            <small className="text-xl font-normal text-gray-500">
              The amount of plastic will generate at least
            </small>
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              {foundTier.carbon}
              <span className="text-4xl">
                kg of CO
                <span className="text-xl">2</span>e
              </span>
            </h1>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              over the course of its life (production to end-of-life).
            </p>
          </div>
        </Card>
      </div>
      <div className="flex flex-wrap gap-2 justify-center w-1/3">
        <Button size={"xl"} onClick={() => navigateTo("/tiers")}>
          Learn how to shrink your plastic habit
        </Button>
        <Button size={"xl"} onClick={resetResult}>
          Estimate footprint again
        </Button>
        <Button size={"xl"} onClick={() => navigateTo("/tiers")}>
          Off-set the CO2 emissions
        </Button>
      </div>
      <div className="w-1/2">
        <Card>
          <div className="flex flex-col gap-2">
            <small className="text-xl font-normal text-gray-500">
              Share to raise awareness
            </small>
          </div>
          <div class="flex items-center justify-around">
            <Twitter />
            <FaceBook />
            <Instagram />
            <LinkedIn />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Results;
