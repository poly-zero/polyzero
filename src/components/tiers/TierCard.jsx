import { Label, TextInput } from "flowbite-react";
import { Button, Card, CardBody } from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveTierData } from "../../firebase/firebase";
import { Link } from "react-router-dom";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

const TierCard = ({ title, time, tonnes, cost, image, setTier, stripe }) => {
  const navigateTo = useNavigate();
  const [age, setAge] = useState(title === "Champion" ? 15 : time);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState(15);

  function assignTier() {
    setTier({
      image,
      title,
      tonnes,
      time,
      cost,
    });
    const storedTier = localStorage.getItem("tiers");
    saveTierData(JSON.parse(storedTier));

    localStorage.setItem("payment", Math.floor(cost));
    localStorage.setItem("title", title);
    localStorage.setItem("tonnes", (tonnes * age).toFixed(2));
    localStorage.setItem("time", age);
    localStorage.setItem("image", image);

    navigateTo("/payment");
  }

  function handleAge(event) {
    setInputValue(event.target.value);
    if (inputValue >= 15 && inputValue <= 100) setAge(Math.floor(inputValue));
  }

  function handleStripe() {
    stripe();
    setIsLoading(true);
  }

  return (
    <article className="w-4/5 md:basis-full snap-center">
      <Card
        className={`transition duration-300 ease-out ${
          !stripe && "hover:-translate-y-1 hover:scale-105"
        }`}
      >
        <div className="flex">
          <img className="object-cover w-2/4 rounded-l-xl" src={image} alt="" />
          <CardBody className="flex flex-col w-3/4 gap-4">
            <h2 className="text-xl font-bold tracking-tight text-gray-800 lg:text-2xl dark:text-white">
              {title}
            </h2>
            <p className="font-normal text-gray-700 whitespace-pre-wrap text-md dark:text-gray-400">
              {title === "Champion" ? (
                <span>
                  Offset for a <strong>lifetime</strong>
                </span>
              ) : (
                <span>
                  Offset for <strong>{time} year(s)</strong>
                </span>
              )}
            </p>
            {title === "Champion" && (
              <div>
                <Label htmlFor="age1" value="Enter number of years" />
                <TextInput
                  id="age1"
                  type="number"
                  placeholder="Number of years to offset"
                  value={inputValue}
                  onChange={(e) => handleAge(e)}
                  required={true}
                />
              </div>
            )}
            <p className="text-gray-700 text-md dark:text-gray-400">
              Total CO2:{" "}
              <span className="font-bold">{` ${(tonnes * age).toFixed(
                2
              )} tonnes`}</span>
            </p>
            <h3 className="font-bold tracking-tight text-gray-800 lg:text-2xl dark:text-white">
              {`￥${(cost * age).toLocaleString("ja-JP")}`}
            </h3>

            {!stripe ? (
              inputValue >= 15 && inputValue <= 100 ? (
                <>
                  <Button
                    className="my-auto capitalize text-md hover:bg-blue-600 focus:ring-4 dark:bg-blue-600 dark:hover:bg-blue-700"
                    onClick={assignTier}
                  >
                    Select
                  </Button>
                </>
              ) : (
                <>
                  <p className="font-bold text-red-500 text-md dark:text-gray-400">
                    Please enter a number of year count between 15 and 100.
                  </p>
                </>
              )
            ) : (
              <>
                <Button
                  className="flex items-center justify-center normal-case"
                  onClick={handleStripe}
                >
                  {!isLoading ? (
                    "Pay via Stripe"
                  ) : (
                    <ArrowPathIcon
                      className={`w-4 h-4 ${isLoading && "animate-spin"}`}
                    />
                  )}
                </Button>
                <Link to="/tiers">
                  <Button className="w-full capitalize">Go Back</Button>
                </Link>
              </>
            )}
          </CardBody>
        </div>
      </Card>
    </article>
  );
};

export default TierCard;
