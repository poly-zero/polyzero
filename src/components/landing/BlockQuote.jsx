import { Button } from "flowbite-react";
import { ReactComponent as Quote } from "../../assets/quotation.svg";

const BlockQuote = ({ quote, article, author, link, buttonText }) => {
  return (
    <figure class="flex flex-col items-center max-w-screen-md text-center">
      <Quote />
      <blockquote>
        <p class="text-2xl italic font-medium text-gray-900 dark:text-white">
          "{quote}"
        </p>
      </blockquote>
      <figcaption class="flex justify-center items-center my-6 space-x-3">
        <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
          <cite class="pr-3 font-medium text-gray-900 dark:text-white">
            {article}
          </cite>
          <cite class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
            {author}
          </cite>
        </div>
      </figcaption>
      <Button href="{link}" target="_blank">
        {buttonText}
      </Button>
    </figure>
  );
};

export default BlockQuote;
