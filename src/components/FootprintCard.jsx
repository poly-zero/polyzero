import { Card } from "flowbite-react";

const FootprintCard = ({
  title,
  grocery,
  takeOut,
  petBottles,
  disposables,
  setResult,
}) => {
  function getResult() {
    setResult(title);
  }

  return (
    <div className="transition ease-out duration-300 hover:-translate-y-1 hover:scale-105">
      <Card
        horizontal={true}
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="https://media.timeout.com/images/105656638/image.jpg"
      >
        <h2 className="text-4xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
          {title}
        </h2>

        <div className="flex flex-col gap-2 h-96">
          <h4 className="font-medium">Grocery Store</h4>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {grocery}
          </p>
          <h4 className="font-medium">Take-out</h4>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {takeOut}
          </p>
          <h4 className="font-medium">PET bottles</h4>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {petBottles}
          </p>
          <h4 className="font-medium">Disposables</h4>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {disposables}
          </p>
        </div>

        <button
          className="inline-flex items-center mt-4 py-2 px-3 text-sm font-medium justify-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Select
        </button>
      </Card>
    </div>
  );
};

export default FootprintCard;
