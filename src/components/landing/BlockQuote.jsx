import { Button } from "flowbite-react";
import { ReactComponent as Quote } from "../../assets/quotation.svg";

const BlockQuote = ({ quote, article, author, sourceLink, buttonText }) => {
  return (
    <figure className="flex flex-col items-center max-w-screen-md text-center px-2">
      <Quote className="h-7 md:h-14"/>
      <blockquote>
        <p className="text-base md:text-3xl italic font-medium text-gray-900 dark:text-white">
          "{quote}"
        </p>
      </blockquote>
      <figcaption className="flex justify-center items-center my-6 space-x-3 text-xs md:text-base">
        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
          <cite className="pr-3 font-medium text-xs md:text-base text-gray-900 dark:text-white">
            {article}
          </cite>
          <cite className="pl-3 font-light text-xs md:text-sm text-gray-500 dark:text-gray-400">
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
