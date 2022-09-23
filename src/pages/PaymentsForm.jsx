import { Button } from "flowbite-react";
import { auth } from "../firebase/firebase";
import { Fragment } from "react";
import { getStripeApi } from "../firebase/firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const PaymentsForm = () => {
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

  const storedPayment = localStorage.getItem("payment");
  const storedTime = localStorage.getItem("time");
  const storedTittle = localStorage.getItem("title");
  const storedImage = localStorage.getItem("image");

  const handleStripe = () => {
    localStorage.setItem("fromPayment", "yes");
    getStripeApi({
      cost: storedPayment * storedTime,
      title: storedTittle,
      image: storedImage,
    });
  };

  return (
    <Fragment>
      <h1 className="mt-10 mb-4 text-3xl font-extrabold text-center text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        Want to&nbsp;
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          save the planet?
        </span>
      </h1>
      <div className="flex justify-center items-center">
        <Button onClick={handleStripe}>To Stripe</Button>
      </div>
    </Fragment>
  );
};

export default PaymentsForm;
