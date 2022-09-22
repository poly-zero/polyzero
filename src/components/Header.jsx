const Header = ({ text, highlightedText, afterHighlighted, caption }) => {
  return (
    <header className="flex flex-col items-center gap-6">
      <h1 className="flex flex-wrap justify-center my-12 text-4xl font-bold text-center text-gray-800 dark:text-white md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-8xl">
        {text}&nbsp;
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-500">
          {highlightedText}
        </span>
        {afterHighlighted}
      </h1>
      {caption && (
        <p className="w-3/4 mb-4 text-gray-600 text-md md:text-center md:text-base md:mb-0 xl:text-xl 2xl:text-2xl ">
          {caption}
        </p>
      )}
    </header>
  );
};

export default Header;
