const Header = ({ text, highlightedText, caption }) => {
  return (
    <header className="flex flex-col items-center gap-6">
      <h1 className="mt-16 mb-4 text-5xl font-extrabold text-gray-700 dark:text-white md:mt-0 md:text-5xl lg:text-6xl text-center">
        {text}&nbsp;
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          {highlightedText}
        </span>
      </h1>
      <p className="w-3/4 text-md mb-4 md:text-center md:text-base md:mb-0 text-gray-600">
        {caption}
      </p>
    </header>
  );
};

export default Header;
