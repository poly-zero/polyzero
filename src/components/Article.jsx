const article = ({ title, text }) => {
  return (
      <article className="mb-8">
        <h3 className="text-base font-bold text-gray-700 md:text-xl">{title}</h3>
        <p className="mt-2 font-normal text-gray-700 text-md md:text-base">{text}</p>
      </article>
  );
};

export default article;
