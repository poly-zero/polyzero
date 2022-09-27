import LandingNavBar from "../components/landing/LandingNavBar";
import { Button } from "flowbite-react";
import { Card } from "flowbite-react";
import { Fragment } from "react";

const Resources = () => {
  return (
    <Fragment>
      <div className="h-screen md:-ml-64 ">
        <LandingNavBar />
        <h1 className="mb-4 text-3xl font-extrabold text-center text-gray-900 bg-white dark:text-white md:text-5xl lg:text-6xl">
          Re
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            sources
          </span>
        </h1>

        <h2 className="text-center bg-white">
          Here are some additional resources to research plastics and their
          impact on our environment, climate, and health.
        </h2>

        <div className="flex flex-row justify-center px-3 space-x-4 text-center bg-white">
          <Button
            onClick={() => window.scrollTo({ top: 700, behavior: "smooth" })}
          >
            Single-Use Plastic Production
          </Button>
          <Button
            onClick={() => window.scrollTo({ top: 2000, behavior: "smooth" })}
          >
            Impacts of Plastic on Human Health
          </Button>
          <Button
            onClick={() => window.scrollTo({ top: 2100, behavior: "smooth" })}
          >
            Region-specific Data
          </Button>
        </div>
        <br />
        <div className="bg-slate-200">
          <Card>
            <section>
              <article>
                <h4 className="text-center underline underline-offset-1">
                  Plastic and CO2
                </h4>
                <strong>
                  Center for International Environmental Law (CIEL){" "}
                </strong>
                <a
                  className="font-light text-center text-blue-600 underline hover:text-blue-800 "
                  href="https://www.ciel.org/"
                >
                  https://www.ciel.org/
                </a>{" "}
                <br />
                <strong>
                  The below is excerpted from the CIEL report entitled “Plastic
                  & Climate: The Hidden Costs of a Plastic Planet”{" "}
                </strong>
                <a
                  className="font-light text-blue-600 underline hover:text-blue-800 "
                  href="https://www.ciel.org/project-update/plastic-climate-the-hidden-costs-of-a-plastic-planet/"
                >
                  https://www.ciel.org/project-update/plastic-climate-the-hidden-costs-of-a-plastic-planet/
                </a>
                <div>
                  <p className="text-sm text-gray-500 md:text-base">
                    The plastic pollution crisis overwhelming our oceans is also
                    a significant and growing threat to the Earth’s climate.
                    Nearly every piece of plastic begins as a fossil fuel, and
                    greenhouse gasses are emitted at each stage of the plastic
                    lifecycle:
                  </p>{" "}
                  <ol className="ml-5 text-sm text-gray-500 list-decimal md:text-base ">
                    <li>fossil fuel extraction and transport.</li>
                    <li>plastic refining and manufacture.</li>
                    <li>managing plastic waste.</li>
                    <li>
                      its ongoing impact in our oceans, waterways, and
                      landscape.
                    </li>
                  </ol>
                  <br />
                  <p className="text-sm text-gray-500 md:text-base">
                    At current levels, greenhouse gas emissions from the plastic
                    lifecycle threaten the ability of the global community to
                    keep global temperature rise below 1.5°C degrees. By 2050,
                    the greenhouse gas emissions from plastic could reach over
                    56 gigatons—10-13 percent of the entire remaining carbon
                    budget. If plastic production and use grow as currently
                    planned, by 2030, these emissions could reach 1.34 gigatons
                    per year—equivalent to the emissions released by more than
                    295 new 500-megawatt coal-fired power plants. By 2050, the
                    cumulation of these greenhouse gas emissions from plastic
                    could reach over 56 gigatons—10–13 percent of the entire
                    remaining carbon budget. In 2019, the production and
                    incineration of plastic will produce more than 850 million
                    metric tons of greenhouse gasses—equal to the emissions from
                    189 five-hundred-megawatt coal power plants. On average, the
                    production of one ton of plastic resin will emit 1.89 Mt
                    CO2e. When the differing emission profiles in the US and
                    Europe are taken into account, producing a ton of PE will
                    release 1.675 Mt CO2e; PP, 1.55 Mt; PET, 2.275 Mt; PVC.
                  </p>
                </div>
              </article>
            </section>
          </Card>
          <br />
          {/* 2nd col */}
          <Card>
            <section>
              <article className="m-10">
                <h4 className="text-center underline underline-offset-1">
                  Single-Use Plastic Production
                </h4>
                <p>
                  <strong>
                    Inside Climate News - Plastics: The New Coal in Appalachia?
                  </strong>
                  <a
                    className="font-light text-blue-600 underline hover:text-blue-800 "
                    href="https://insideclimatenews.org/news/25022019/plastics-hub-appalachian-fracking-ethane-cracker-climate-change-health-ohio-river/"
                  >
                    {" "}
                    https://insideclimatenews.org/news/25022019/plastics-hub-appalachian-fracking-ethane-cracker-climate-change-health-ohio-river/
                  </a>{" "}
                </p>
                <p className="text-sm text-gray-500 md:text-base">
                  “With little notice nationally, a new petrochemical and
                  plastics manufacturing hub may be taking shape along 300 miles
                  of the upper reaches of the Ohio River, from outside
                  Pittsburgh southwest to Ohio, West Virginia and Kentucky. It
                  would be fueled by a natural gas boom brought on by more than
                  a decade of hydraulic fracturing, or fracking, a drilling
                  process that has already dramatically altered the nation’s
                  energy landscape—and helped cripple coal. But there’s a
                  climate price to be paid. Planet-warming greenhouse gas
                  emissions from the Shell plant alone would more or less wipe
                  out all the reductions in carbon dioxide that Pittsburgh, just
                  25 miles away, is planning to achieve by 2030. Drilling for
                  natural gas leaks methane, a potent climate pollutant; and oil
                  consumption for petrochemicals and plastics may account for
                  half the global growth in petroleum demand between now and
                  2050.”
                </p>
                <br />
                <strong>The Source of Plastic Waste</strong>{" "}
                <a
                  className="font-light text-center text-blue-600 underline hover:text-blue-800 "
                  href="https://sourceofplasticwaste.org/
                "
                >
                  {" "}
                  https://sourceofplasticwaste.org/
                </a>{" "}
                <br />
                <p className="text-sm text-gray-500 md:text-base">
                  “A small number of institutional asset managers and global
                  banks are providing billions of dollars to companies that
                  produce polymers from fossil fuels, and only a fraction to
                  companies trying to shift to a circular plastic economy. This
                  asymmetry urgently needs to be reversed.”
                </p>
                <strong>Minderoo - Plastic Waste Makers Index</strong>
                <a
                  className="font-light text-center text-blue-600 underline hover:text-blue-800 "
                  href="https://www.minderoo.org/plastic-waste-makers-index/findings/executive-summary/
                    "
                >
                  {" "}
                  https://www.minderoo.org/plastic-waste-makers-index/findings/executive-summary/
                </a>{" "}
                <br />
                <strong>
                  New York Times - Here Is Who’s Behind the Global Surge in
                  Single-Use Plastic
                </strong>
                <a
                  className="mb-4 font-light text-center text-blue-600 underline hover:text-blue-800 "
                  href="https://www.nytimes.com/2021/05/18/climate/single-use-plastic.html
                "
                >
                  {" "}
                  https://www.nytimes.com/2021/05/18/climate/single-use-plastic.html
                </a>{" "}
              </article>
            </section>
          </Card>
          <br />
          {/* 3rd col */}
          <Card>
            <section>
              <article>
                <h4 className="text-center underline underline-offset-1">
                  Impacts of Plastic on Human Health
                </h4>
                <img
                  className="p-2 mx-auto"
                  src="https://imgs.search.brave.com/SICOoi6_lQxHvcoOY-Rd3MmyOfDp8za4BI96kZsppok/rs:fit:600:315:1/g:ce/aHR0cHM6Ly9zdGF0/aWMuYWR3ZWVrLmNv/bS9hZHdlZWsuY29t/LXByb2Qvd3AtY29u/dGVudC91cGxvYWRz/LzIwMTkvMDYvZWF0/LWNyZWRpdC1jYXJk/LVBBR0UtMjAxOS02/MDB4MzE1LmpwZw"
                  alt="How much plastic is consumed in one week, a credit card or bank card"
                  width="300"
                  height="600"
                ></img>
                <strong>
                  World Wildlife Federation - No Plastic in Nature: Assessing
                  Plastic Ingestion from Nature to People
                </strong>
                <a
                  className="font-light text-center text-blue-600 underline hover:text-blue-800 "
                  href="https://wwfint.awsassets.panda.org/downloads/plastic_ingestion_web_spreads.pdf

                    "
                >
                  {" "}
                  https://wwfint.awsassets.panda.org/downloads/plastic_ingestion_web_spreads.pdf
                </a>{" "}
                <p className="text-sm text-gray-500 md:text-base">
                  A new study finds on average people could be ingesting
                  approximately 5 grams of plastic every week, which is the
                  equivalent weight of a credit card. The analysis No Plastic in
                  Nature: Assessing Plastic Ingestion from Nature to People
                  prepared by Dalberg, based on a study commissioned by WWF and
                  carried out by University of Newcastle, Australia, suggests
                  people are consuming about 2000 tiny pieces of plastic every
                  week. That’s approximately 21 grams a month, just over 250
                  grams a year.
                </p>
                <br />
                <p>
                  <strong>Minderoo.org - Plastics and Human Health </strong>{" "}
                  <a
                    className="font-light text-center text-blue-600 underline hover:text-blue-800 "
                    href="https://www.minderoo.org/plastics-and-human-health/
              "
                  >
                    {" "}
                    https://www.minderoo.org/plastics-and-human-health/
                  </a>{" "}
                </p>
                <p className="text-sm text-gray-500 md:text-base">
                  There’s mounting evidence and growing concern about the impact
                  of some plastic chemicals and plastic particles on human
                  health. Scientists have established links between everyday
                  exposure to chemical additives that leach from plastics and
                  reproductive health issues, brain health, obesity, diabetes
                  and some types of cancer. The effects are evident in babies,
                  children, and adults – young and old. Microplastics – tiny
                  particles of plastic under 5mm in length – are known to be in
                  our air, soil, rivers, oceans, plants and animals. They are
                  from degraded plastic products, textiles, tyre abrasion,
                  industry, agriculture and general waste. Microplastics are
                  also intentionally added to products, for example cosmetics.
                  We know that microplastics get into our gut and lungs, but we
                  don’t yet know how far they penetrate our blood and organs nor
                  what impacts they have on human health. Concerningly, neither
                  do we know how far the smaller virus-sized nanoparticles
                  penetrate our bodies because we do not have suitable
                  techniques to measure them. What we do know is that plastic is
                  devastating our oceans, freshwater and land ecosystems that
                  are essential for all life.
                </p>
              </article>
            </section>
          </Card>
          <br />
          <Card>
            <section>
              <article>
                <div>
                  <h4 className="underline underline-offset-1">
                    Region-specific
                  </h4>
                  <strong>
                    Plastic Atlas Asia: Facts and figures about the world of
                    synthetic polymers 2021
                  </strong>{" "}
                  <a
                    className="font-light text-center text-blue-600 underline hover:text-blue-800 "
                    href="https://hk.boell.org/sites/default/files/2021-04/042921-Plastic%20Atlas%20Asia%202021%20-%20web.pdf

                    "
                  >
                    https://hk.boell.org/sites/default/files/2021-04/042921-Plastic%20Atlas%20Asia%202021%20-%20web.pdf{" "}
                  </a>{" "}
                  <p>
                    <strong>
                      Plastic Atlas Japan Special Edition: A Closer Look at
                      Japan's Plastic Waste Management
                    </strong>{" "}
                    <a
                      className="font-light text-center text-blue-600 underline hover:text-blue-800 "
                      href="https://hk.boell.org/en/2022/05/30/plastic-atlas-japan-special-edition-closer-look-japans-plastic-waste-management
                    "
                    >
                      https://hk.boell.org/en/2022/05/30/plastic-atlas-japan-special-edition-closer-look-japans-plastic-waste-management{" "}
                    </a>{" "}
                  </p>
                  <strong>
                    What You (Probably) Didn’t Know About Plastic in Japan
                  </strong>{" "}
                  <a
                    className="font-light text-center text-blue-600 underline hover:text-blue-800 "
                    href="https://www.tsunagulocal.com/en/47587/

                    "
                  >
                    https://www.tsunagulocal.com/en/47587{" "}
                  </a>{" "}
                  <p>
                    <strong>WWF: Single-Use Plastics in Singapore</strong>{" "}
                    <a
                      className="font-light text-center text-blue-600 underline hover:text-blue-800 "
                      href="https://www.wwf.sg/plastics/

                    "
                    >
                      https://www.wwf.sg/plastics/{" "}
                    </a>{" "}
                  </p>
                </div>
              </article>
            </section>
          </Card>
        </div>
      </div>
    </Fragment>
  );
};
export default Resources;
