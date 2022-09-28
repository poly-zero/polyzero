import { useAuthState } from "react-firebase-hooks/auth";
import { auth, savePaymentData } from "../firebase/firebase";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  LineShareButton,
} from "next-share";
import { ReactComponent as FaceBook } from "../assets/socialMediaIcons/icons8-facebook.svg";
// import { ReactComponent as Instagram } from "../assets/socialMediaIcons/icons8-instagram.svg";
import { ReactComponent as LinkedIn } from "../assets/socialMediaIcons/icons8-linkedin.svg";
import { ReactComponent as Twitter } from "../assets/socialMediaIcons/icons8-twitter.svg";
import { ReactComponent as Line } from "../assets/socialMediaIcons/icons8-line.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Card, CardBody } from "@material-tailwind/react";

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
    <div className="relative flex flex-col items-center justify-center flex-grow w-full gap-4 bg-slate-700 opacity-90">
      <div className="z-40 flex flex-col items-center justify-center py-16 md:flex-row gap-14">
        <div className="flex flex-col w-3/4 md:w-1/2">
          <div className="flex flex-col mb-6 -mx-12 md:mx-0">
            <Header
              text={"Well done,"}
              highlightedText={user && user.displayName}
              afterHighlighted={"!"}
              caption={
                "You took the time to learn about your plastic footprint and its effect on the environment."
              }
              caption2={
                "Then you took it one step further and offset the CO2 emissions from the plastic you consume."
              }
              darkBackground={true}
            />
          </div>
          <div className="flex flex-col">
            <h2 className="mb-4 text-base font-bold md:text-xl text-slate-50 dark:text-white">
              Help us raise awareness by sharing your good deed with the world.
            </h2>
            <div className="flex justify-center gap-4 md:justify-start">
              <FacebookShareButton
                url={"https://www.polyzero.earth"}
                hashtag={"#polyzero"}
              >
                <FaceBook />
              </FacebookShareButton>
              {/* <Instagram /> */}
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
          <Card>
            <img className="rounded-t-xl" src={storedImage} alt="" />
            <CardBody className="flex flex-col gap-4">
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
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
