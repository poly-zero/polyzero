import { Card, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    localStorage.setItem("payment", cost);
    localStorage.setItem("title", title);
    localStorage.setItem("tonnes", (tonnes * age).toFixed(2));
    localStorage.setItem("time", age);

    navigateTo("/payment");
  }

  return (
    <div className="transition ease-out duration-300 hover:-translate-y-1 hover:scale-105">
      <Card imgSrc={image} imgAlt={""}>
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="text-lg font-normal text-gray-700 dark:text-gray-400">
          {title === "Champion"
            ? "Offset for a lifetime"
            : `Offset for ${time} year(s)`}
        </p>
        {title === "Champion" && (
          <div>
            <div className="mb-2 block">
              <Label htmlFor="age1" value="Enter number of years" />
            </div>
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
            <p className="text-lg font-bold text-gray-700 dark:text-gray-400">
              {`Total CO2: ${(tonnes * age).toFixed(2)} tonnes`}
            </p>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {`￥${cost * age}`}
            </h3>
            <button
              className="inline-flex items-center py-2 px-3 text-sm font-medium justify-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={assignTier}
            >
              Select
            </button>
          </>
        ) : (
          <>
            <p className="text-lg font-bold text-gray-700 dark:text-gray-400">
              Please enter a number of year equal or above 15.
            </p>
          </>
        )}
      </Card>
    </div>
  );
};

export default TierCard;
