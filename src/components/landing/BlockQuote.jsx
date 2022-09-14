import { Button } from "flowbite-react";
import { ReactComponent as Quote } from "../../assets/quotation.svg";

const BlockQuote = ({ quote, article, author, sourceLink, buttonText }) => {
  return (
    <figure className="flex flex-col items-center max-w-screen-md text-center">
      <Quote />
      <blockquote>
        <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
          "{quote}"
        </p>
      </blockquote>
      <figcaption className="flex justify-center items-center my-6 space-x-3">
        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
          <cite className="pr-3 font-medium text-gray-900 dark:text-white">
            {article}
          </cite>
          <cite className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
            {author}
          </cite>
        </div>
      </figcaption>
      <Button href={sourceLink} target="_blank">
        {buttonText}
      </Button>
    </figure>
  );
};

export default BlockQuote;
