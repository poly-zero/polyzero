import { Card } from "flowbite-react";
import { ReactComponent as FaceBook } from "../assets/socialMediaIcons/icons8-facebook.svg";
import { ReactComponent as Instagram } from "../assets/socialMediaIcons/icons8-instagram.svg";
import { ReactComponent as LinkedIn } from "../assets/socialMediaIcons/icons8-linkedin.svg";
import { ReactComponent as Twitter } from "../assets/socialMediaIcons/icons8-twitter.svg";
import { ReactComponent as Line } from "../assets/socialMediaIcons/icons8-line.svg";

const OrderConfirmation = ({ tier }) => {
  const firstMessage = "I just became a @PolyZeroApp Climate";
  let secondMessage;
  if (tier.title === "Supporter") {
    secondMessage = "Supporter";
  } else if (tier.title === "Ally") {
    secondMessage = "Ally";
  } else if (tier.title === "Defender") {
    secondMessage = "Defender";
  } else {
    secondMessage = "Champion";
  }
  const thirdMessage =
    "by off-setting the CO2e footprint of my annual plastic consumption! %0aEstimate and off-set your plastic usage at https://polyzero.earth ";

  console.log(tier);
  return (
    <div className="flex flex-col flex-grow items-center justify-center">
      <div className="flex flex-col items-center w-1/2">
        <h1 class="text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
          Thank you for supporting,
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            {" "}
            Zach
          </span>
          !
        </h1>
        <p className="w-1/2 my-8 text-xl font-normal text-center text-gray-500 dark:text-gray-400">
          Here at PolyZero we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
      </div>

      <div className="flex rounded-lg bg-slate-200 items-center px-20 py-8 gap-24">
        <div className="max-w-xs">
          <Card imgSrc={tier.image}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {tier.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {tier.description}
            </p>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {tier.cost}
            </h5>
          </Card>
        </div>
        <div className="flex flex-col items-center w-1/2">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">
            Share what you did:
          </h2>
          <div className="flex gap-4">
            <FaceBook />
            <Instagram />
            <a
              href={`https://twitter.com/intent/tweet?text=${firstMessage} ${secondMessage} ${thirdMessage}`}
              target="_blank"
            >
              <Twitter />
            </a>
            <LinkedIn />
            <Line />
          </div>

          <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">
            Learn more
          </h2>
          <div className="flex gap-4"></div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
