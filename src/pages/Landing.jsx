import LandingNavBar from "../components/landing/LandingNavBar";
import BlockQuote from "../components/landing/BlockQuote";
import { ReactComponent as Twitter } from "../assets/socialMediaIcons/icons8-twitter.svg";
import { ReactComponent as Mail } from "../assets/images/mail.svg";
import { ReactComponent as Coffee } from "../assets/images/coffee.svg";
import { Avatar, Carousel } from "flowbite-react";
import { Card } from "@material-tailwind/react";
import quotes from "../data/quotes.json";

const Landing = () => {
  return (
    <div className="relative h-screen md:-ml-64 snap-y snap-mandatory overflow-x-hidden ">
      <LandingNavBar />
      <div className="bg-[url('https://images.unsplash.com/photo-1615723093586-1ad38d59056b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] flex flex-col justify-center items-center p-6 md:p-14 h-4/6 md:h-4/5 snap-end">
        <Card className="flex flex-col justify-center items-center md:w-3/4 h-full bg-slate-50">
          <h1 className="mt-8 text-2xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
            Facts about&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Disposable Plastics
            </span>
          </h1>
          <div className="w-full md:w-3/4 md: p-4 h-full">
            <Carousel slideInterval={5000}>
              {quotes.map((element) => {
                return (
                  <div className="flex justify-center">
                    <BlockQuote
                      quote={element.quote}
                      article={element.article}
                      author={element.author}
                      sourceLink={element.sourceLink}
                      buttonText={element.buttonText}
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </Card>
        <div className="bg-slate-100 text-xs md:text-base opacity-90 rounded-xl p-1 absolute bottom-32 md:bottom-20 left-0 mb-2 ml-2">
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
      </div>

      <div
        id="about"
        className="flex flex-col justify-center items-center p-14 h-3/4 snap-center"
      >
        <div className="flex flex-col gap-4 w-full md:w-2/5">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text">
            About
          </h1>
          <div className="flex flex-col gap-14">
            <p className="text-gray-500">
              PolyZero was created to raise awareness about the impact of the
              single-use plastics we consume every day. Our Plastic Footprint
              Estimator approximates the volume of disposable plastics you use
              per year, based on country of residence and lifestyle.
            </p>
            <p className="text-gray-500">
              Reducing our plastic consumption is the most important step we can
              take, but for those who wish to do more, the app also estimates
              the CO2 emissions associated with your plastic footprint and
              allows you to purchase CO2 off-sets to reduce your impact.
            </p>
          </div>
        </div>
      </div>
      <div
        id="team"
        className="bg-slate-50 flex flex-col justify-center items-center p-14 h-3/4 snap-center"
      >
        <div className="flex flex-col justify-center gap-4 w-full md:w-2/5">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            The Team
          </h1>
          <div className="flex flex-wrap place-content-evenly gap-2">
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
        </div>
      </div>
      <div
        id="contact"
        className="flex flex-col justify-center items-center p-14 h-3/4 snap-center"
      >
        <div className="flex flex-col justify-center  gap-4 w-full md:w-1/3">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p className="text-gray-500">
            We are volunteer-run and are actively looking for sponsors,
            collaborators, and open-source contributors. Please reach out!
          </p>
          <div className="flex place-content-center gap-4">
            <a
              href="https://www.buymeacoffee.com/polyzeroteam"
              target="_blank"
              rel="noreferrer"
            >
              <Coffee />
            </a>
            <p className="text-center">Buy us a coffee</p>
          </div>
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
            <div className="m-auto flex gap-4">
              <Mail />
              contact@polyzero.org
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
