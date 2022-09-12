import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const TierCard = ({ title, description, cost, image, setTier }) => {
  const navigateTo = useNavigate();

  function assignTier() {
    setTier({
      image: image,
      title: title,
      description: description,
      cost: cost,
    });
    navigateTo("/payment");
  }

  return (
    <div className="transition ease-out duration-300 hover:-translate-y-1 hover:scale-105">
      <Card imgSrc={image} imgAlt={""}>
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="text-lg font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {cost}
        </h3>
        <button
          class="inline-flex items-center py-2 px-3 text-sm font-medium justify-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={assignTier}
        >
          Select
        </button>
      </Card>
    </div>
  );
};

export default TierCard;
