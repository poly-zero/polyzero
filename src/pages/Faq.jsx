import React from "react";
import Header from "../components/Header";
import Article from "../components/Article";
import faqArticles from "../data/faq.json";
import { Card, CardBody } from "@material-tailwind/react";

const Faq = () => {
  return (
    <div className="z-0 flex flex-col items-center justify-center flex-grow gap-4 bg-slate-200">
      <div className="w-4/5 mb-8 md:w-1/2">
        <div className="flex justify-center gap-4 my-2 -mx-8 md:my-8 md:mx-0">
          <Header
            text={"Where your"}
            highlightedText={"Money Goes"}
            caption={"FAQs about our carbon credit fulfillment process."}
            className="text-center md:items-center"
          />
        </div>
        <Card>
          <section className="flex flex-col gap-8">
            <CardBody>
              {faqArticles.map((article) => {
                return <Article title={article.title} text={article.text} />;
              })}
            </CardBody>
          </section>
        </Card>
      </div>
    </div>
  );
};

export default Faq;
