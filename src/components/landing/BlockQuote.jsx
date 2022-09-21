import { ReactComponent as Quote } from "../../assets/quotation.svg";

const BlockQuote = ({ quote, article, author, sourceLink }) => {
  return (
    <figure className="flex flex-col items-center max-w-screen-md px-2 mb-4 text-center">
      <Quote className="h-5 md:h-10 lg:h-10" />
      <blockquote>
        <p className="px-8 text-sm italic font-medium text-gray-900 md:text-2xl lg:text-2xl dark:text-white">
          "{quote}"
        </p>
      </blockquote>
      <figcaption className="flex items-center justify-center my-6 space-x-3 md:text-base">
        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
          <cite className="pr-3 text-xs font-medium text-gray-900 md:text-base dark:text-white">
            <a
              className="text-gray-600 underline dark:text-gray-500"
              href={sourceLink}
              rel="noreferrer"
              target="_blank"
            >
              {article}
            </a>
          </cite>
          <cite className="pl-3 text-xs font-light text-gray-500 md:text-sm dark:text-gray-400">
            {author}
          </cite>
        </div>
      </figcaption>
    </figure>
  );
};

export default BlockQuote;
