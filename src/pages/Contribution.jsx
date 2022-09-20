import React from "react";
import Header from "../components/Header";
import Article from "../components/Article";
import contributionArticles from "../data/contribution.json";

const Contribution = () => {
  return (
    <div className="flex flex-col flex-grow items-center bg-slate-200 gap-4">
      <Header
        text={"Where your"}
        highlightedText={"money goes"}
        caption={"Some description here"}
      />
      <section className="flex flex-col gap-8 w-1/2">
        {contributionArticles.map((article) => {
          return <Article title={article.title} text={article.text} />;
        })}
      </section>
    </div>
  );
};

export default Contribution;
