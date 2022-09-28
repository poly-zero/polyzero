import LandingNavBar from "../components/landing/LandingNavBar";
import { Button } from "flowbite-react";
import { Card } from "flowbite-react";
import { ReadMoreButton } from "./ReadMoreButton";
import resourcesArticles from "../data/resources.json";

const [plasticAndCO2, singleUsePlasticProduction, humanHealth, regions] =
  resourcesArticles;

const Resources = ({ windowWidth }) => {
  return (
    <div className="h-screen md:-ml-64">
      <LandingNavBar windowWidth={windowWidth} />

      <h1 className="mb-4 text-3xl font-extrabold text-center text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        Re
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 ">
          sources
        </span>
      </h1>
      <h2 className="text-center">
        Here are some additional resources to research plastics and their impact
        on our environment, climate, and health.
      </h2>

      <div className="flex flex-row justify-center px-3 py-3 space-x-4 text-center">
        <Button href="#single-use">
          {singleUsePlasticProduction.main_title}
        </Button>
        <Button href="#humanHealth">{humanHealth.title}</Button>
        <Button href="#region">{regions.main_title}</Button>
      </div>
      <br />

      <div className="container w-screen mx-auto">
        {/* 1st col */}
        <Card>
          <section>
            <article>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {plasticAndCO2.main_title}
              </h5>
              <a
                className="underline decoration-dashed"
                href={plasticAndCO2.linkPage.url}
              >
                {plasticAndCO2.linkPage.title}
              </a>
              <br />
              <strong>{plasticAndCO2.contents[0].text_title}</strong>
              <br />
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
                <ReadMoreButton LinkPage={plasticAndCO2.contents[0].url} />
              </div>
            </article>
          </section>
        </Card>
        <br />

        {/* 2nd col */}
        <Card>
          <section>
            <article classname="m-10">
              <h5
                id="single-use"
                className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                {singleUsePlasticProduction.main_title}
              </h5>
              <p>
                <strong>
                  {singleUsePlasticProduction.contents[0].text_title}
                </strong>
              </p>
              <p className="text-sm text-gray-500 md:text-base">
                {singleUsePlasticProduction.contents[0].text_content}
              </p>
              <ReadMoreButton
                LinkPage={singleUsePlasticProduction.contents[0].url}
              ></ReadMoreButton>
              <strong>
                {singleUsePlasticProduction.contents[1].text_title}
              </strong>
              <p className="text-sm text-gray-500 md:text-base">
                {singleUsePlasticProduction.contents[1].text_content}
              </p>
              <ReadMoreButton>
                LinkPage={singleUsePlasticProduction.contents[1].url}
              </ReadMoreButton>
              {singleUsePlasticProduction.linkPage.map((link) => {
                return (
                  <>
                    <a className="underline decoration-dashed" href={link.url}>
                      {link.title}
                    </a>
                    <br />
                  </>
                );
              })}
            </article>
          </section>
        </Card>
        <br />

        {/* 3rd col */}
        <Card>
          <section>
            <article>
              <h5
                id="humanHealth"
                className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
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
              <strong>{humanHealth.contents[0].text_title}</strong>
              <p className="text-sm text-gray-500 md:text-base">
                {humanHealth.contents[0].text_content}
              </p>
              <ReadMoreButton
                LinkPage={humanHealth.contents[0].url}
              ></ReadMoreButton>
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
        </Card>
        <br />

        {/* 4th col */}
        <Card>
          <section>
            <article>
              <div>
                <h5
                  id="region"
                  className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  {regions.main_title}
                </h5>
                {regions.linkPage.map((link) => {
                  return (
                    <>
                      <a
                        className="underline decoration-dashed"
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
        </Card>
      </div>
      <br />
    </div>
  );
};
export default Resources;
