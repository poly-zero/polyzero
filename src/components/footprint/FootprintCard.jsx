import { Card } from "flowbite-react";

const FootprintCard = ({
  title,
  grocery,
  takeOut,
  petBottles,
  disposables,
  setResult,
}) => {
  function assignResult() {
    setResult(title);
    localStorage.setItem("result", title);
  }

  return (
    <div className="max-w-screen-md transition ease-out duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer">
      <Card
        horizontal={true}
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="https://media.timeout.com/images/105656638/image.jpg"
        onClick={assignResult}
      >
        <h2 className="text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white md:text-2xl">
          {title}
        </h2>

        <div className="flex flex-col gap-2 h-45 md:h-85">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium md:text-base">Grocery Store</h4>
              <p className="text-xs font-normal leading-6 text-gray-700 dark:text-gray-400 md:text-md">
                {grocery}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium md:text-base">Take-out</h4>
              <p className="text-xs font-normal leading-6 text-gray-700 dark:text-gray-400 md:text-md">
                {takeOut}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium md:text-base">PET bottles</h4>
              <p className="text-xs font-normal leading-6 text-gray-700 dark:text-gray-400 md:text-md">
                {petBottles}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium md:text-base">Disposables</h4>
              <p className="text-xs font-normal leading-6 text-gray-700 dark:text-gray-400 md:text-md">
                {disposables}
              </p>
            </div>
          </div>
        </div>

        {/* <button
          className="inline-flex items-center mt-4 py-2 px-3 text-sm font-medium justify-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={setResult}
        >
          Select
        </button> */}
      </Card>
    </div>
  );
};

export default FootprintCard;
