import { Button } from "flowbite-react";
import { ReactComponent as Quote } from "../../assets/quotation.svg";

const BlockQuote = ({ quote, article, author, sourceLink }) => {
  return (
    <figure className="flex flex-col items-center max-w-screen-md text-center px-2 mb-4">
      <Quote className="h-5 md:h-14" />
      <blockquote>
        <p className="text-sm md:text-2xl italic font-medium text-gray-900 dark:text-white">
          "{quote}"
        </p>
      </blockquote>
      <figcaption className="flex justify-center items-center my-6 space-x-3 md:text-base">
        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
          <cite className="pr-3 font-medium text-xs md:text-base text-gray-900 dark:text-white">
            <a className="underline text-gray-600 dark:text-gray-500" href={sourceLink} rel="noreferrer" target="_blank">
              {article}
            </a>
          </cite>
          <cite className="pl-3 font-light text-xs md:text-sm text-gray-500 dark:text-gray-400">
            {author}
          </cite>
        </div>
      </figcaption>
    </figure>
  );
};

export default BlockQuote;
