import { useAuthState } from "react-firebase-hooks/auth";
import { auth, savePaymentData } from "../firebase/firebase";
import { Card } from "flowbite-react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  LineShareButton,
} from "next-share";
import { ReactComponent as FaceBook } from "../assets/socialMediaIcons/icons8-facebook.svg";
import { ReactComponent as Instagram } from "../assets/socialMediaIcons/icons8-instagram.svg";
import { ReactComponent as LinkedIn } from "../assets/socialMediaIcons/icons8-linkedin.svg";
import { ReactComponent as Twitter } from "../assets/socialMediaIcons/icons8-twitter.svg";
import { ReactComponent as Line } from "../assets/socialMediaIcons/icons8-line.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OrderConfirmation = ({ tier }) => {
  const storedTitle = localStorage.title;
  const storedPayment = localStorage.payment;
  const storedTime = localStorage.time;
  const storedTonnes = localStorage.tonnes;
  const storedImage = localStorage.image;
  // eslint-disable-next-line no-unused-vars
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (!user || (!localStorage.fromPayment && !localStorage.fromConfirmation))
      navigate("/wizard");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);

  if (localStorage.fromPayment && user) {
    savePaymentData({
      title: storedTitle,
      amount: storedPayment * storedTime,
      time: storedTime,
      tonnes: storedTonnes,
      created_at: new Date(),
      uid: user.uid,
    });
    localStorage.removeItem("fromPayment");
    localStorage.setItem("fromConfirmation", "yes");
  }

  return (
    <div className="flex items-center justify-center flex-grow">
      <div className="flex flex-col items-center justify-center py-16 rounded-lg shadow-xl md:flex-row bg-slate-200 gap-14">
        <div className="flex flex-col w-3/4 md:w-1/2">
          <div className="flex flex-col">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              Well done,&nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                {user && user.displayName}
              </span>
              !
            </h1>
            <div className="w-3/4">
              <p className="my-8 font-normal text-gray-500 md:text-xl dark:text-gray-400">
                You took the time to learn about your plastic footprint and its
                effect on the environment.
                <br />
                <br />
                Then you took it one step further and offset the CO2 emissions
                from the plastic you consume.
              </p>
            </div>
          </div>
          <div className="flex flex-col ">
            <h2 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white">
              Now help us raise awareness by sharing your good deed with the
              world.
            </h2>
            <div className="flex gap-4">
              <FacebookShareButton
                url={"https://www.polyzero.earth"}
                hashtag={"#polyzero"}
              >
                <FaceBook />
              </FacebookShareButton>
              <Instagram />
              <TwitterShareButton
                url={"https://www.polyzero.earth"}
                title={`I just became a @PolyZeroApp Climate ${storedTitle} by off-setting the CO2e footprint of ${
                  storedTime <= 10
                    ? `${storedTime} years of my plastic consumption!`
                    : "a life time of my annual plastic consumption!"
                } `}
                hashtags={["PolyZeroApp"]}
              >
                <Twitter />
              </TwitterShareButton>
              <LinkedinShareButton url={"https://www.polyzero.earth"}>
                <LinkedIn />
              </LinkedinShareButton>
              <LineShareButton
                title={
                  "I just became a PolyZeroApp Climate Champion by off-setting the CO2e footprint of my annual plastic consumption! https://www.polyzero.earth"
                }
              >
                <Line />
              </LineShareButton>
            </div>
          </div>
        </div>
        <div className="max-w-xs">
          <Card imgSrc={storedImage}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {storedTitle}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              You offset <b>{storedTonnes} tonnes</b> of CO2e
              <br />
              or <b>{storedTime} year(s)</b> worth of plastic
            </p>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              ￥{(storedTime * storedPayment).toLocaleString("ja-JP")}
            </h5>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
