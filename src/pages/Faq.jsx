import React from "react";
import Header from "../components/Header";
import Article from "../components/Article";
import faqArticles from "../data/faq.json";

const Faq = () => {
  return (
    <div className="flex flex-col z-0 items-center flex-grow gap-4 bg-slate-200">
      <Header
        text={"Where your"}
        highlightedText={"money goes"}
        caption={"FAQs about our carbon credit fullfillment process"}
      />
      <section className="flex flex-col w-1/2 gap-8">
        {faqArticles.map((article) => {
          return <Article title={article.title} text={article.text} />;
        })}
      </section>
    </div>
  );
};

export default Faq;
