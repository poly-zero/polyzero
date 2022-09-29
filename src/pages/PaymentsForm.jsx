import { auth } from "../firebase/firebase";
import { useState, useEffect } from "react";
import { getStripeApi } from "../firebase/firebase";
import { useNavigate, Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "../components/Header";
import { Button, Card, CardBody } from "@material-tailwind/react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

const PaymentsForm = () => {
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const [user, loading, error] = useAuthState(auth);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (!user) navigate("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);

  const storedPayment = localStorage.getItem("payment");
  const storedTime = localStorage.getItem("time");
  const storedTitle = localStorage.getItem("title");
  const storedImage = localStorage.getItem("image");
  const storedTonnes = Number(localStorage.getItem("tonnes")).toFixed(2);

  const handleStripe = () => {
    setIsLoading(true);
    localStorage.setItem("fromPayment", "yes");
    getStripeApi({
      cost: storedPayment * storedTime,
      title: storedTitle,
      image: storedImage,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center flex-grow w-full gap-4 lg:flex-row bg-slate-700 opacity-90">
      <div className="flex flex-col gap-4 basis-1/4">
        <div className="text-center md:text-start">
          <Header
            highlightedText={"Payment"}
            caption={"Please confirm the details before proceeding to payment."}
            darkBackground={true}
          />
        </div>
        <Link to={"/faq"}>
          <p className="mb-4 font-bold text-center underline underline-offset-4 md:text-center md:mt-8 lg:mt-0 lg:text-start text-emerald-500">
            Where your money goes
          </p>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center w-4/5 basis-1/3">
        <Card>
          <div className="flex">
            <img
              className="object-cover w-2/4 rounded-l-xl"
              src={storedImage}
              alt=""
            />
            <CardBody className="flex flex-col w-3/4 gap-4">
              <h2 className="text-xl font-bold tracking-tight text-gray-800 lg:text-2xl dark:text-white">
                {storedTitle}
              </h2>
              <p className="font-normal text-gray-700 whitespace-pre-wrap text-md dark:text-gray-400">
                Offset for <strong>{storedTime} year(s)</strong>
              </p>
              <p className="text-gray-700 text-md dark:text-gray-400">
                Total CO2: <strong>{storedTonnes} tonnes</strong>
              </p>
              <strong className="font-bold tracking-tight text-gray-800 lg:text-2xl dark:text-white">
                ￥{(storedPayment * storedTime).toLocaleString("ja-JP")}
              </strong>
              <>
                <Button
                  className="flex items-center justify-center normal-case"
                  onClick={handleStripe}
                >
                  {!isLoading ? (
                    "Pay via Stripe"
                  ) : (
                    <ArrowPathIcon
                      className={`w-4 h-4 ${isLoading && "animate-spin"}`}
                    />
                  )}
                </Button>
                <Link to="/tiers">
                  <Button className="w-full capitalize">Go Back</Button>
                </Link>
              </>
            </CardBody>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PaymentsForm;
