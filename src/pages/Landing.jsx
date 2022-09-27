import LandingNavBar from "../components/landing/LandingNavBar";
import BlockQuote from "../components/landing/BlockQuote";
import { ReactComponent as Twitter } from "../assets/socialMediaIcons/icons8-twitter.svg";
import { ReactComponent as LinkedIn } from "../assets/socialMediaIcons/icons8-linkedin.svg";
import { ReactComponent as Mail } from "../assets/images/mail.svg";
import { ReactComponent as Coffee } from "../assets/images/coffee.svg";
import { Carousel } from "flowbite-react";
import {
  Card,
  Avatar,
  Button,
  CardBody,
  // CardHeader,
  CardFooter,
} from "@material-tailwind/react";
import quotes from "../data/quotes.json";
import teamMembers from "../data/team.json";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
// import {
//   ArrowTrendingUpIcon,
//   GlobeAsiaAustraliaIcon,
//   UserGroupIcon,
// } from "@heroicons/react/24/solid";

const Landing = ({ windowWidth }) => {
  return (
    <div className="relative h-screen md:-ml-64 snap-y snap-mandatory">
      <LandingNavBar windowWidth={windowWidth} />
      <div className="w-full h-full">
        <main className="relative bg-[url('https://images.unsplash.com/photo-1615723093586-1ad38d59056b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] flex flex-col justify-center items-center p-6 md:p-20 md:px-32 h-5/6 md:h-4/5 snap-end">
          <Card className="z-10 flex flex-col items-center justify-center w-full gap-4 p-0 border-none bg-slate-300 md:p-4 md:w-full lg:w-3/4 h-5/6 md:h-full lg:h-full bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-70">
            <div className="-mb-8">
              <Header
                text={"Facts about"}
                highlightedText="Disposable Plastics"
              />
            </div>
            <section className="w-full h-full">
              <Carousel slideInterval={5000}>
                {quotes.map((element, index) => {
                  return (
                    <article className="flex justify-center" key={index}>
                      <BlockQuote
                        quote={element.quote}
                        article={element.article}
                        author={element.author}
                        sourceLink={element.sourceLink}
                        buttonText={element.buttonText}
                      />
                    </article>
                  );
                })}
              </Carousel>
            </section>
          </Card>
          <div className="absolute bottom-0 left-0 z-10 p-1 mb-2 ml-2 text-xs text-slate-200 md:text-base rounded-xl">
            Photo by{" "}
            <a
              className="underline"
              target="_blank"
              rel="noreferrer"
              href="https://unsplash.com/@flyd2069?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >
              FLY:D
            </a>{" "}
            on{" "}
            <a
              className="underline"
              href="https://unsplash.com/s/photos/plastic-straws?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noreferrer"
            >
              Unsplash
            </a>
          </div>
          <div className="absolute z-0 w-full h-full bg-black opacity-40"></div>
        </main>

        <section
          id="about"
          className="flex flex-col items-center justify-center px-10 my-20 bg-white snap-center"
        >
          <div className="flex flex-col w-full max-h-full gap-4 md:w-4/5">
            <h1 className="mb-8 text-3xl font-extrabold text-center text-gray-800 md:mb-14 dark:text-white md:text-5xl lg:text-6xl text">
              About
            </h1>
            <div className="flex flex-col w-full h-full gap-8 md:flex-row">
              <article className="basis-1/3">
                <Card className="h-full border-none bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-70 bg-slate-200">
                  {/* <CardHeader
                    className="flex items-center justify-center w-12 h-12 mx-auto -mt-4 bg-red-500 rounded-full"
                    floated={true}
                  >
                    <ArrowTrendingUpIcon className="w-6 h-6 text-slate-50" />
                  </CardHeader> */}
                  <CardBody className="h-2/3">
                    <p className="text-sm text-gray-600 md:text-base">
                      The statistics on humanity's rapidly increasing
                      production, use, and disposal of single use plastics are
                      shocking and depressing. Beyond the global ecological
                      disaster posed by plastics in our oceans, plastics emit
                      greenhouse gasses at each stage of their lifecycle,
                      exacerbating climate change.
                    </p>
                  </CardBody>
                  <CardFooter className="my-auto">
                    <NavLink to={"/resources"} exact={"true"}>
                      <Button className="w-full mt-4 text-base capitalize bg-red-500">
                        Learn More
                      </Button>
                    </NavLink>
                  </CardFooter>
                </Card>
              </article>
              <article className="basis-1/3">
                <Card className="h-full border-none bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-70 bg-slate-200">
                  {/* <CardHeader
                    className="flex items-center justify-center w-12 h-12 mx-auto -mt-4 rounded-full bg-emerald-500"
                    floated={true}
                  >
                    <UserGroupIcon className="w-6 h-6 text-slate-50" />
                  </CardHeader> */}
                  <CardBody className="h-2/3">
                    <p className="text-sm text-gray-600 md:text-base">
                      PolyZero was created to raise awareness about the impact
                      of the single-use plastics we consume every day. The
                      Plastic Footprint Estimator approximates the volume of
                      disposable plastics you use per year, based on country of
                      residence and lifestyle.
                    </p>
                  </CardBody>
                  <CardFooter className="my-auto">
                    <NavLink to={"/tips"} exact={"true"}>
                      <Button className="w-full mt-4 text-base capitalize bg-emerald-500">
                        Reduce Plastic
                      </Button>
                    </NavLink>
                  </CardFooter>
                </Card>
              </article>
              <article className="basis-1/3">
                <Card className="h-full border-none bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-70 bg-slate-200">
                  {/* <CardHeader
                    className="flex items-center justify-center w-12 h-12 mx-auto -mt-4 bg-yellow-300 rounded-full"
                    floated={true}
                  >
                    <GlobeAsiaAustraliaIcon className="w-6 h-6 text-slate-50" />
                  </CardHeader> */}
                  <CardBody className="h-2/3">
                    <p className="text-sm text-gray-600 md:text-base">
                      Further, the estimator shows the CO2 emissions that result
                      from the plastic you use. Reducing plastic consumption is
                      the most important step we can take, but for those who
                      wish to do more, PolyZero also allows you to purchase CO2
                      off-sets, in order to reduce your net impact to the
                      climate.
                    </p>
                  </CardBody>
                  <CardFooter className="my-auto">
                    <NavLink to={"/wizard"} exact={"true"}>
                      <Button className="w-full mt-4 text-base capitalize">
                        What's my footprint?
                      </Button>
                    </NavLink>
                  </CardFooter>
                </Card>
              </article>
            </div>
          </div>
        </section>
        <section
          id="team"
          className="flex flex-col lg:items-center bg-slate-200 p-14 snap-center"
        >
          <article className="flex flex-col w-full gap-8 my-8 md:w-3/4 xl:w-2/3">
            <h1 className="mb-4 text-3xl font-extrabold text-gray-800 lg:text-center dark:text-white md:text-5xl lg:text-6xl">
              Meet the Team
            </h1>
            <div className="flex flex-wrap gap-4 lg:gap-14 lg:place-content-evenly">
              {teamMembers.map((member, index) => {
                return (
                  <div key={index} className="flex items-center gap-4">
                    <Avatar
                      src={member.avatar}
                      variant="circular"
                      className="w-20 h-20 shadow-xl lg:w-32 lg:h-32"
                    ></Avatar>
                    <div className="flex flex-col gap-1 lg:gap-3">
                      <div className="space-y-1 text-xs font-medium lg:text-sm dark:text-white">
                        <h3>{member.name}</h3>
                        <h3 className="text-gray-500 dark:text-gray-400">
                          {member.email}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            className="w-5"
                            src="https://cdn.onlinewebfonts.com/svg/img_44605.png"
                            alt="Github logo link"
                          />
                        </a>
                        {member.linkedIn && (
                          <a
                            href={member.linkedIn}
                            rel="noreferrer"
                            target="_blank"
                          >
                            <LinkedIn className="w-7 h-7" />
                          </a>
                        )}
                        {member.twitter && (
                          <a
                            href={member.twitter}
                            rel="noreferrer"
                            target="_blank"
                          >
                            <Twitter className="w-7 h-7" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-center gap-4 mt-12 -mb-8 ml-7">
              <a
                href="https://www.buymeacoffee.com/polyzeroteam"
                target="_blank"
                rel="noreferrer"
              >
                <Coffee />
              </a>
              <p className="text-center">Buy us a coffee (in a reusable mug)</p>
            </div>
          </article>
        </section>
        <section
          id="contact"
          className="flex flex-col items-center justify-center bg-white p-14 snap-center"
        >
          <article className="flex flex-col justify-center w-full gap-4 md:w-1/3">
            <h1 className="mb-4 text-3xl font-extrabold text-gray-800 dark:text-white md:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="text-sm text-gray-500 md:text-base">
              This site is maintained and run by a small group of volunteers. If
              you're interested in saying hello, or would like to collaborate to
              make this site better, please reach out!
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://twitter.com/PolyZeroApp"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter />
              </a>
              <a
                href="https://github.com/poly-zero/polyzero"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-12"
                  src="https://cdn.onlinewebfonts.com/svg/img_44605.png"
                  alt="Github logo link"
                />
              </a>
              <div className="flex gap-4 lg:m-auto">
                <Mail />
                contact@polyzero.org
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Landing;
