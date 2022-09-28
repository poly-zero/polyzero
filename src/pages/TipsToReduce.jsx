import { Card } from "flowbite-react";
import tipsData from "../data/sustainabletips.json";
import LandingNavBar from "../components/landing/LandingNavBar";
import brandsData from "../data/sustainableBrands.json";

const TipsToReduce = ({ windowWidth }) => {
  return (
    <div className="h-screen md:-ml-64 ">
      <LandingNavBar windowWidth={windowWidth} />

      <h1 className="mb-4 text-3xl font-extrabold text-center text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        Reducing your <span> </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          footprint
        </span>
      </h1>
      <h2 className="justify-center mb-5 text-center">
        Here are some concrete actions you can take (starting today) to reduce
        your single-use plastic and CO2 footprint.
      </h2>
      <section className="p-12 text-sm text-gray-500 list-decimal bg-slate-200 md:text-base bg ">
        <article className="flex flex-col gap-7 ">
          {tipsData.map((reduceTip, i) => {
            return (
              <Card key={i} title={reduceTip.tip} text={reduceTip.source}>
                <strong>{reduceTip.title}</strong>
                {reduceTip.tip}

                <a
                  className="font-light text-blue-600 underline hover:text-blue-800 "
                  href={reduceTip.source}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  {reduceTip.source}
                </a>
              </Card>
            );
          })}
          <h1 className="mb-4 text-3xl font-extrabold text-center text-white md:text-5xl lg:text-6xl">
            Sustainable Brands and Products
          </h1>
          <div className="flex flex-col items-center gap-8">
            {brandsData.map((brands) => {
              return (
                <div className key={brands.brandName}>
                  <a href={brands.url} target="_blank" rel="noreferrer">
                    <img width="300" src={brands.logo} alt="brand logo"></img>
                  </a>
                </div>
              );
            })}
          </div>
        </article>
      </section>
    </div>
  );
};

export default TipsToReduce;
