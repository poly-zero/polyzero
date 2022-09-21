import { Label, TextInput } from "flowbite-react";
import { Button, Card, CardBody, Input } from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveTierData } from "../../firebase/firebase";

const TierCard = ({ title, time, tonnes, cost, image, setTier }) => {
  const navigateTo = useNavigate();
  const [age, setAge] = useState(title === "Champion" ? 15 : time);

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

    localStorage.setItem("payment", cost);
    localStorage.setItem("title", title);
    localStorage.setItem("tonnes", (tonnes * age).toFixed(2));
    localStorage.setItem("time", age);

    navigateTo("/payment");
  }

  return (
    <article>
      <Card className="transition ease-out duration-300 hover:-translate-y-1 hover:scale-105">
        <img className="w-full rounded-t-xl" src={image} alt="" />
        <CardBody className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 dark:text-white">
            {title}
          </h2>
          <p className="text-base font-normal text-gray-700 dark:text-gray-400 whitespace-pre-wrap">
            {title === "Champion" ? (
              <span>
                Offset for a <strong>lifetime</strong>
              </span>
            ) : (
              <span>
                Off set for <strong>{time} year(s)</strong>
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
                min={15}
                max={100}
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required={true}
              />
            </div>
          )}
          {age >= time ? (
            <>
              <p className="text-base text-gray-700 dark:text-gray-400">
                Total CO2:{" "}
                <span className="font-bold">{` ${(tonnes * age).toFixed(
                  2
                )} tonnes`}</span>
              </p>
              <h3 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
                {`￥${(cost * age).toLocaleString("ja-JP")}`}
              </h3>
              <Button
                className="capitalize text-base hover:bg-blue-600 focus:ring-4 dark:bg-blue-600 dark:hover:bg-blue-700"
                onClick={assignTier}
              >
                Select
              </Button>
            </>
          ) : (
            <>
              <p className="text-base font-bold text-red-500 dark:text-gray-400">
                Please enter a number of year equal or above 15.
              </p>
            </>
          )}
        </CardBody>
      </Card>
    </article>
  );
};

export default TierCard;
