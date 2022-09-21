import LandingNavBar from "../components/landing/LandingNavBar";
import BlockQuote from "../components/landing/BlockQuote";
import { ReactComponent as Twitter } from "../assets/socialMediaIcons/icons8-twitter.svg";
import { ReactComponent as Mail } from "../assets/images/mail.svg";
import { ReactComponent as Coffee } from "../assets/images/coffee.svg";
import { Avatar, Carousel } from "flowbite-react";
import { Card } from "@material-tailwind/react";
import quotes from "../data/quotes.json";
import Header from "../components/Header";

const Landing = () => {
  return (
    <div className="relative h-screen md:-ml-64 snap-y snap-mandatory">
      <LandingNavBar />
      <main className="relative bg-[url('https://images.unsplash.com/photo-1615723093586-1ad38d59056b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] flex flex-col justify-center items-center p-6 md:p-20 md:px-32 h-5/6 md:h-4/5 snap-end">
        <Card className="z-10 flex flex-col items-center justify-center w-full gap-4 p-0 border border-gray-200 md:p-4 md:w-full lg:w-3/4 h-5/6 md:h-full lg:h-full bg-clip-padding bg-opacity-70">
          <Header text={"Facts about"} highlightedText="Disposable Plastics" />
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
            href="https://unsplash.com/@flyd2069?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >
            FLY:D
          </a>{" "}
          on{" "}
          <a
            className="underline"
            href="https://unsplash.com/s/photos/plastic-straws?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >
            Unsplash
          </a>
        </div>
        <div className="absolute z-0 w-full h-full bg-black opacity-40"></div>
      </main>

      <section
        id="about"
        className="flex flex-col items-center justify-center bg-white p-14 h-3/4 snap-center"
      >
        <article className="flex flex-col w-full gap-4 md:w-2/5">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-800 dark:text-white md:text-5xl lg:text-6xl text">
            About
          </h1>
          <div className="flex flex-col gap-8">
            <p className="text-sm text-gray-500 md:text-base">
              PolyZero was created to raise awareness about the impact of the
              single-use plastics we consume every day. Our Plastic Footprint
              Estimator approximates the volume of disposable plastics you use
              per year, based on country of residence and lifestyle.
            </p>
            <p className="text-sm text-gray-500 md:text-base">
              Reducing our plastic consumption is the most important step we can
              take, but for those who wish to do more, the app also estimates
              the CO2 emissions associated with your plastic footprint and
              allows you to purchase CO2 off-sets to reduce your impact.
            </p>
          </div>
        </article>
      </section>
      <section
        id="team"
        className="flex flex-col items-center justify-center bg-slate-200 p-14 h-3/4 snap-center"
      >
        <article className="flex flex-col justify-center w-full gap-4 md:w-2/5">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-800 dark:text-white md:text-5xl lg:text-6xl">
            The Team
          </h1>
          <div className="flex flex-wrap gap-2 place-content-evenly">
            <Avatar
              img="https://avatars.githubusercontent.com/u/62789620?v=4"
              rounded={true}
              size="lg"
            >
              <div className="space-y-1 font-medium dark:text-white">
                <div>Kim Ly</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  kim@polyzero.org
                </div>
              </div>
            </Avatar>
            <Avatar
              img="https://avatars.githubusercontent.com/u/101638795?v=4"
              rounded={true}
              size="lg"
            >
              <div className="space-y-1 font-medium dark:text-white">
                <div>Daiki Uema</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  daiki@polyzero.org
                </div>
              </div>
            </Avatar>
            <Avatar
              img="https://avatars.githubusercontent.com/u/73273137?v=4"
              rounded={true}
              size="lg"
            >
              <div className="space-y-1 font-medium dark:text-white">
                <div>Joshua Haley</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  josh@polyzero.org
                </div>
              </div>
            </Avatar>
            <Avatar
              img="https://avatars.githubusercontent.com/u/73625660?v=4"
              rounded={true}
              size="lg"
            >
              <div className="space-y-1 font-medium dark:text-white">
                <div>Felipe Machado</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  felipe@polyzero.org
                </div>
              </div>
            </Avatar>
            <Avatar
              img="https://avatars.githubusercontent.com/u/4993321?v=4"
              rounded={true}
              size="lg"
            >
              <div className="space-y-1 font-medium dark:text-white">
                <div>Zach Brown</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  zach@polyzero.org
                </div>
              </div>
            </Avatar>
          </div>
          <div className="flex gap-4 p-5 m-5 place-content-center">
            <a
              href="https://www.buymeacoffee.com/polyzeroteam"
              target="_blank"
              rel="noreferrer"
            >
              <Coffee />
            </a>
            <p className="text-center">
              Buy us a coffee
              <p>(in a reusable mug)</p>
            </p>
          </div>
        </article>
      </section>
      <section
        id="contact"
        className="flex flex-col items-center justify-center bg-white p-14 h-3/4 snap-center"
      >
        <article className="flex flex-col justify-center w-full gap-4 md:w-1/3">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-800 dark:text-white md:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p className="text-gray-500">
            We are volunteer-run and are actively looking for sponsors,
            collaborators, and open-source contributors. Please reach out!
          </p>
          <div className="flex items-center gap-4">
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
            <div className="flex gap-4 m-auto">
              <Mail />
              contact@polyzero.org
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Landing;
