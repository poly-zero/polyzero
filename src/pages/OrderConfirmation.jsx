import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { Card } from "flowbite-react";
import messagesTwitter from "../data/variable.json";
import { ReactComponent as FaceBook } from "../assets/socialMediaIcons/icons8-facebook.svg";
import { ReactComponent as Instagram } from "../assets/socialMediaIcons/icons8-instagram.svg";
import { ReactComponent as LinkedIn } from "../assets/socialMediaIcons/icons8-linkedin.svg";
import { ReactComponent as Twitter } from "../assets/socialMediaIcons/icons8-twitter.svg";
import { ReactComponent as Line } from "../assets/socialMediaIcons/icons8-line.svg";

const OrderConfirmation = ({ tier }) => {
  const storedPayment = localStorage.getItem("payment");
  const storedTonnes = localStorage.getItem("tonnes");
  const storedTitle = localStorage.getItem("title");
  const storedTime = localStorage.getItem("time");
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (!user) navigate("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);

  let secondMessage = storedTitle;

  return (
    <div className="flex flex-col flex-grow items-center justify-center">
      <div className="flex flex-col items-center w-1/2">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
          Well done,&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            {user && user.displayName}
          </span>
          !
        </h1>
        <p className=" my-8 text-xl font-normal text-center text-gray-500 dark:text-gray-400">
          You took the time to learn about your plastic footprint and its effect
          on the environment.
          <br />
          Then you took it one step further and offset the CO2 emissions from
          the plastic you consume.
          <br />
          Now help us raise awareness by sharing your good deed with the world.
        </p>
      </div>

      <div className="flex rounded-lg bg-slate-200 items-center px-20 py-8 gap-24">
        <div className="max-w-xs">
          <Card imgSrc={tier.image}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {storedTitle}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              You offset <b>{storedTonnes} tonnes</b> of CO2e
              <br />
              or <b>{storedTime} year(s)</b> worth of plastic
            </p>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              ￥{storedPayment * storedTime}
            </h5>
          </Card>
        </div>
        <div className="flex flex-col items-center w-1/2">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">
            Share what you've done
          </h2>
          <div className="flex gap-4">
            <FaceBook />
            <Instagram />
            <a
              href={`https://twitter.com/intent/tweet?text=${messagesTwitter[0].Q7} ${secondMessage} ${messagesTwitter[0].Q8}`}
              rel="noreferrer"
              target="_blank"
            >
              <Twitter />
            </a>
            <LinkedIn />
            <Line />
          </div>

          <div className="flex gap-4"></div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
