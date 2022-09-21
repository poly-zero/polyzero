const Header = ({ text, highlightedText, afterHighlighted, caption }) => {
  return (
    <header className="flex flex-col items-center gap-6">
      <h1 className="flex flex-wrap justify-center mt-24 -mb-20 text-3xl font-bold text-center text-gray-800 md:-mb-0 md:mt-4 dark:text-white md:text-5xl lg:text-5xl">
        {text}&nbsp;
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          {highlightedText}
        </span>
        {afterHighlighted}
      </h1>
      <p className="w-3/4 mb-4 text-gray-500 text-md md:text-center md:text-base md:mb-0">
        {caption}
      </p>
    </header>
  );
};

export default Header;
