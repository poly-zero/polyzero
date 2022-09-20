const article = ({ title, text }) => {
  return (
      <article>
        <h3 className="text-2xl">{title}</h3>
        <p className="text-base">{text}</p>
      </article>
  );
};

export default article;
