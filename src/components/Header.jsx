const Header = ({
  text,
  highlightedText,
  afterHighlighted,
  caption,
  caption2,
  darkBackground,
  className
}) => {
  return (
    <header className={`z-50 flex flex-col items-center md:items-start md:gap-6 ${className}`}>
      <h1
        className={`flex flex-wrap items-center justify-center md:items-center md:justify-start my-6 text-3xl font-bold ${
          darkBackground ? "text-slate-50" : "text-gray-800"
        } md:my-6 lg:my-4 dark:text-white md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-8xl`}
      >
        {text && text} {highlightedText && text ? <span>&nbsp;</span> : ""}
        <span className="py-2 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-500">
          {highlightedText && highlightedText}
        </span>
        {afterHighlighted && afterHighlighted}
      </h1>
      {caption && (
        <p
          className={`w-3/4 mb-4 select-none ${
            darkBackground ? "text-slate-50" : "text-gray-600"
          } text-md md:text-base md:mb-0 xl:text-xl 2xl:text-2xl`}
        >
          {caption}
        </p>
      )}
      {caption2 && (
        <p
          className={`w-3/4 mb-4 select-none ${
            darkBackground ? "text-slate-50" : "text-gray-600"
          } text-md md:text-base md:mb-0 xl:text-xl 2xl:text-2xl`}
        >
          {caption2}
        </p>
      )}
    </header>
  );
};

export default Header;
