import tipsData from "../data/sustainabletips.json";
import LandingNavBar from "../components/landing/LandingNavBar";
import brandsData from "../data/sustainableBrands.json";
import Header from "../components/Header";
import { Card, CardBody } from "@material-tailwind/react";

const TipsToReduce = ({ windowWidth }) => {
  return (
    <div className="h-screen md:-ml-64 ">
      <LandingNavBar windowWidth={windowWidth} />

      <div className="flex justify-center flex-grow bg-slate-200">
        <div className="flex flex-col items-center justify-center w-4/5 gap-4 md:w-1/2">
          <div className="flex justify-center gap-4 my-0 -mx-8 md:my-8 md:mx-0">
            <Header
              text={"Reducing your"}
              highlightedText={"Footprint"}
              caption={
                "Here are some concrete actions you can take (starting today) to reduce your single-use plastic and CO2 footprint."
              }
              className="md:items-center"
            />
          </div>

          <section className="text-sm text-gray-500 list-decimal bg-slate-200 md:text-base">
            <article className="flex flex-col gap-7 ">
              <Card>
                <CardBody>
                  {tipsData.map((reduceTip, index) => {
                    return (
                      <article className="flex flex-col mb-6" key={index}>
                        <div className="flex flex-col">
                          <strong>{reduceTip.title}</strong>
                          {reduceTip.tip}
                          <a
                            className="text-blue-600 underline hover:text-blue-800"
                            href={reduceTip.source}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {" "}
                            {reduceTip.source}
                          </a>
                        </div>
                      </article>
                    );
                  })}
                </CardBody>
              </Card>
              <h1 className="mb-4 text-3xl font-extrabold text-center text-white md:text-5xl lg:text-6xl">
                Sustainable Brands and Products
              </h1>
              <div className="flex flex-col items-center gap-8">
                {brandsData.map((brands) => {
                  return (
                    <div className key={brands.brandName}>
                      <a href={brands.url} target="_blank" rel="noreferrer">
                        <img
                          width="300"
                          src={brands.logo}
                          alt="brand logo"
                        ></img>
                      </a>
                    </div>
                  );
                })}
              </div>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TipsToReduce;
