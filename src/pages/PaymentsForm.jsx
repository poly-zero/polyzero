import { Button } from "flowbite-react";
import { Fragment } from "react";
import { getStripeApi } from "../firebase/firebase";

const PaymentsForm = () => {
  const storedPayment = localStorage.getItem("payment");
  const storedTime = localStorage.getItem("time");
  const storedTittle = localStorage.getItem("title");
  const storedImage = localStorage.getItem("image");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await fetch("/", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(body),
  //     });
  //     window.location = "/";
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleStripe = () => {
    getStripeApi({
      cost: storedPayment,
      title: storedTittle,
      image: storedImage,
      time: storedTime,
    });
  };

  return (
    <Fragment>
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center mt-10">
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
