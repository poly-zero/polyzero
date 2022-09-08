import { Card } from "flowbite-react";

const TierCard = ({title, description, buttonText}) => {
  return (
    <div className="">
      <Card
        horizontal={true}
        imgSrc="https://media.timeout.com/images/105656638/image.jpg"
      >
        <h5 className="text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
          {title}
        </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>

        <a
          href="#"
          class="inline-flex items-center py-2 px-3 text-sm font-medium justify-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {buttonText}
        </a>
      </Card>
    </div>
  );
};

export default TierCard;
