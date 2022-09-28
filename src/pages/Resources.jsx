import LandingNavBar from "../components/landing/LandingNavBar";
import { ReadMoreButton } from "./ReadMoreButton";
import resourcesArticles from "../data/resources.json";
import Header from "../components/Header";
import { Button, Card, CardBody } from "@material-tailwind/react";
import { NavHashLink } from "react-router-hash-link";

const [plasticAndCO2, singleUsePlasticProduction, humanHealth, regions] =
  resourcesArticles;

const Resources = ({ windowWidth }) => {
  return (
    <div className="h-screen md:-ml-64">
      <LandingNavBar windowWidth={windowWidth} />

      <div className="flex justify-center flex-grow bg-slate-200">
        <div className="flex flex-col items-center justify-center w-4/5 gap-4 md:w-1/2">
          <div className="flex flex-col justify-center gap-4">
            <Header
              highlightedText={"Resources"}
              caption={
                "Here are some additional resources to research plastics and their impact on our environment, climate, and health."
              }
            />
            <div className="flex flex-col gap-4 my-4 md:flex-row">
              <NavHashLink to={"#single-use"} className="flex-grow">
                <Button className="w-full capitalize text-md md:text-base">
                  {singleUsePlasticProduction.main_title}
                </Button>
              </NavHashLink>
              <NavHashLink to={"#humanHealth"} className="flex-grow">
                <Button className="w-full capitalize text-md md:text-base">
                  {humanHealth.title}
                </Button>
              </NavHashLink>
              <NavHashLink to={"#region"} className="flex-grow">
                <Button className="w-full capitalize text-md md:text-base">
                  {regions.main_title}
                </Button>
              </NavHashLink>
            </div>
          </div>

          <div className="flex flex-col gap-8 mb-8">
            {/* 1st col */}
            <Card>
              <CardBody>
                <section>
                  <article>
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      {plasticAndCO2.main_title}
                    </h5>
                    <a
                      className="underline text-md md:text-base decoration-sky-500"
                      href={plasticAndCO2.linkPage.url}
                    >
                      {plasticAndCO2.linkPage.title}
                    </a>
                    <br />
                    <br />
                    <strong className="leading-none text-md md:text-base">{plasticAndCO2.contents[0].text_title}</strong>
                    <br />
                    <div>
                      <p className="text-sm text-gray-500 md:text-base">
                        {plasticAndCO2.contents[0].text_content[0]}
                      </p>
                      <ol className="py-3 ml-5 text-sm text-gray-500 list-decimal md:text-base ">
                        <li>{plasticAndCO2.contents[0].text_content[1][0]}</li>
                        <li>{plasticAndCO2.contents[0].text_content[1][1]}</li>
                        <li>{plasticAndCO2.contents[0].text_content[1][2]}</li>
                        <li>{plasticAndCO2.contents[0].text_content[1][3]}</li>
                      </ol>
                      <br />
                      <p className="text-sm text-gray-500 md:text-base">
                        {plasticAndCO2.contents[0].text_content[2]}
                      </p>
                      <ReadMoreButton
                        LinkPage={plasticAndCO2.contents[0].url}
                      />
                    </div>
                  </article>
                </section>
              </CardBody>
            </Card>

            {/* 2nd col */}
            <Card>
              <CardBody>
                <section>
                  <article classname="m-10">
                    <h5
                      id="single-use"
                      className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl dark:text-white"
                    >
                      {singleUsePlasticProduction.main_title}
                    </h5>
                    <br />
                    <p>
                      <strong className="text-md md:text-base">
                        {singleUsePlasticProduction.contents[0].text_title}
                      </strong>
                    </p>
                    <p className="text-sm text-gray-500 md:text-base">
                      {singleUsePlasticProduction.contents[0].text_content}
                    </p>
                    <ReadMoreButton
                      LinkPage={singleUsePlasticProduction.contents[0].url}
                    ></ReadMoreButton>
                    <br />

                    <strong className="text-md md:text-base">
                      {singleUsePlasticProduction.contents[1].text_title}
                    </strong>
                    <p className="text-sm text-gray-500 md:text-base">
                      {singleUsePlasticProduction.contents[1].text_content}
                    </p>
                    <ReadMoreButton
                      LinkPage={singleUsePlasticProduction.contents[1].url}
                    ></ReadMoreButton>
                    <br />

                    {singleUsePlasticProduction.linkPage.map((link) => {
                      return (
                        <>
                          <a
                            className="underline decoration-sky-500 text-md md:text-base"
                            href={link.url}
                          >
                            {link.title}
                          </a>
                          <br />
                        </>
                      );
                    })}
                  </article>
                </section>
              </CardBody>
            </Card>

            {/* 3rd col */}
            <Card>
              <CardBody>
                <section>
                  <article>
                    <h5
                      id="humanHealth"
                      className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl dark:text-white"
                    >
                      {humanHealth.title}
                    </h5>
                    <img
                      className="p-2"
                      src="https://imgs.search.brave.com/SICOoi6_lQxHvcoOY-Rd3MmyOfDp8za4BI96kZsppok/rs:fit:600:315:1/g:ce/aHR0cHM6Ly9zdGF0/aWMuYWR3ZWVrLmNv/bS9hZHdlZWsuY29t/LXByb2Qvd3AtY29u/dGVudC91cGxvYWRz/LzIwMTkvMDYvZWF0/LWNyZWRpdC1jYXJk/LVBBR0UtMjAxOS02/MDB4MzE1LmpwZw"
                      alt="How much plastic is consumed in one week, a credit card or bank card"
                      width="300"
                      height="600"
                    ></img>
                    <br />
                    <strong className="text-md md:text-base">{humanHealth.contents[0].text_title}</strong>
                    <p className="text-sm text-gray-500 md:text-base">
                      {humanHealth.contents[0].text_content}
                    </p>
                    <ReadMoreButton
                      LinkPage={humanHealth.contents[0].url}
                    ></ReadMoreButton>
                    <br />
                    <p>
                      <strong>{humanHealth.contents[1].text_title}</strong>
                    </p>
                    <p className="text-sm text-gray-500 md:text-base">
                      {humanHealth.contents[1].text_content}
                    </p>
                    <ReadMoreButton
                      LinkPage={humanHealth.contents[1].url}
                    ></ReadMoreButton>
                  </article>
                </section>
              </CardBody>
            </Card>

            {/* 4th col */}
            <Card>
              <CardBody>
                <section>
                  <article>
                    <div>
                      <h5
                        id="region"
                        className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl dark:text-white"
                      >
                        {regions.main_title}
                      </h5>
                      <br />

                      {regions.linkPage.map((link) => {
                        return (
                          <>
                            <a
                              className="underline text-md md:text-base decoration-sky-500"
                              href={link.url}
                            >
                              {link.title}
                            </a>
                            <br />
                          </>
                        );
                      })}
                    </div>
                  </article>
                </section>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resources;
