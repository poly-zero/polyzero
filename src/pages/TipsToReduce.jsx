import tipsData from "../data/sustainabletips.json";
import LandingNavBar from "../components/landing/LandingNavBar";
import brandsData from "../data/sustainableBrands.json";
import Header from "../components/Header";
import { Button, Card, CardBody } from "@material-tailwind/react";
import { NavHashLink } from "react-router-hash-link";

const TipsToReduce = ({ windowWidth }) => {
  return (
    <div className="h-screen md:-ml-64 ">
      <LandingNavBar windowWidth={windowWidth} />

      <div className="flex justify-center flex-grow bg-slate-200">
        <div className="flex flex-col items-center justify-center w-4/5 gap-4 md:w-1/2">
          <div className="flex flex-col items-center justify-center gap-4 my-0 -mx-8 md:mt-8 md:mx-0">
            <Header
              text={"Reducing your"}
              highlightedText={"Footprint"}
              caption={
                "Here are some concrete actions you can take (starting today) to reduce your single-use plastic and CO2 footprint."
              }
              className="md:items-center"
            />
          </div>
          <div className="flex flex-col w-full gap-4 my-4 md:flex-row">
            <NavHashLink to={"#tips"} className="flex-grow basis-1/2">
              <Button className="w-full h-full normal-case text-md md:text-base">
                Tips to Reduce Plastic
              </Button>
            </NavHashLink>
            <NavHashLink to={"#brands"} className="flex-grow basis-1/2">
              <Button className="w-full normal-case text-md md:text-base">
                Sustainable Brands and Products
              </Button>
            </NavHashLink>
          </div>

          <section
            id="tips"
            className="text-sm text-gray-500 list-decimal bg-slate-200 md:text-base"
          >
            <div className="flex flex-col mb-8 gap-7">
              <Card>
                <CardBody>
                  {tipsData.map((reduceTip, index) => {
                    return (
                      <article className="flex flex-col mb-6" key={index}>
                        <div className="flex flex-col">
                          <strong>{reduceTip.title}</strong>
                          <p className="mt-2 ml-4 text-xs md:text-base">
                            {reduceTip.tip}
                          </p>
                          <a
                            className="mt-2 ml-4 text-xs text-blue-600 underline md:text-md hover:text-blue-800"
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
              <Header
                id="brands"
                highlightedText={"Sustainable Brands and Products"}
                caption={
                  "Below are a few of the team’s favorite sustainable brands and B-corps"
                }
                className={"md:items-center text-center"}
              />
              <Card>
                <CardBody className="flex flex-wrap items-center justify-center gap-10 bg-white rounded-xl">
                  {brandsData.map((brands) => {
                    return (
                      <div className key={brands.brandName}>
                        <a href={brands.url} target="_blank" rel="noreferrer">
                          <img
                            width="150"
                            src={brands.logo}
                            alt="brand logo"
                          ></img>
                        </a>
                      </div>
                    );
                  })}
                </CardBody>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TipsToReduce;
