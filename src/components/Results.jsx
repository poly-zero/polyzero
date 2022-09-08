const Results = ({ result }) => {
  const results = {
    "🐕 Small": "103.6kg",
    "🐎 Medium": "207.2kg",
    "🐘 High": "310.8kg",
  };

  return (
    <div id="results" className="flex justify-center items-center ">
      {results[result] ? (
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
          You consume approximately
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            {` ${results[result]} `}
          </span>
          of CO2e
        </h1>
      ) : (
        ""
      )}
    </div>
  );
};

export default Results;
