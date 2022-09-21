import { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";

const PaymentsForm = () => {
  const storedPayment = localStorage.getItem("payment");
  const storedTime = localStorage.getItem("time");

  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const navigateTo = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { name, cardNumber, expiry, cvv };
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      window.location = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <h1 className="mt-10 mb-4 text-3xl font-extrabold text-center text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        Want to&nbsp;
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          save the planet?
        </span>
      </h1>
      <div onSubmit={handleSubmit}>
        <div className="flex items-center justify-center ">
          <div className="h-auto p-3 bg-white rounded-lg w-80">
            <p className="text-xl font-semibold">Payment Details</p>
            <div className="relative mt-6 input_text">
              <span className="absolute left-0 text-sm -top-4">
                Cardholder Name
              </span>
              <input
                type="text"
                className="w-full h-12 px-2 transition-all border-b rounded-lg outline-none pl-7 focus:border-blue-900"
                placeholder="Name on card"
                onChange={(e) => setName(e.target.value)}
              />
              <i className="absolute text-gray-400 left-2 top-4 fa fa-user"></i>
            </div>
            <div className="relative mt-8 input_text">
              <input
                type="text"
                className="w-full h-12 px-2 transition-all border-b rounded-lg outline-none pl-7 focus:border-blue-900"
                placeholder="0000 0000 0000 0000"
                data-slots="0"
                data-accept="\d"
                size="19"
                onChange={(e) => setCardNumber(e.target.value)}
              />
              <span className="absolute left-0 text-sm -top-4">
                Card Number
              </span>
              <i className="absolute left-2 top-[14px] text-gray-400 text-sm fa fa-credit-card"></i>
            </div>
            <div className="flex gap-5 mt-8 ">
              <div className="relative w-full input_text">
                <input
                  type="text"
                  className="w-full h-12 px-2 transition-all border-b rounded-lg outline-none pl-7 focus:border-blue-900"
                  placeholder="mm/yyyy"
                  data-slots="my"
                  onChange={(e) => setExpiry(e.target.value)}
                />
                <span className="absolute left-0 text-sm -top-4">Expiry</span>
                <i className="absolute text-gray-400 left-2 top-4 fa fa-calendar-o"></i>
              </div>
              <div className="relative w-full input_text">
                <input
                  type="text"
                  className="w-full h-12 px-2 transition-all border-b rounded-lg outline-none pl-7 focus:border-blue-900"
                  placeholder="000"
                  data-slots="0"
                  data-accept="\d"
                  size="3"
                  onChange={(e) => setCvv(e.target.value)}
                />
                <span className="absolute left-0 text-sm -top-4">CVV</span>
                <i className="absolute text-gray-400 left-2 top-4 fa fa-lock"></i>
              </div>
            </div>
            <p className="mt-4 text-lg font-semibold text-center text-gray-600">
              Payment amount: ¥
              {(storedPayment * storedTime).toLocaleString("ja-JP")}
            </p>
            <div className="flex justify-center mt-4">
              <button
                className="w-1/2 h-12 mb-3 mr-1 text-white transition-all bg-blue-600 rounded-lg outline-none cursor-pointer pay hover:bg-blue-700"
                onClick={() => {
                  navigateTo("/tiers");
                }}
              >
                Back
              </button>
              <br />
              <button
                className="w-1/2 h-12 mb-3 text-white transition-all bg-blue-600 rounded-lg outline-none cursor-pointer pay hover:bg-blue-700"
                onClick={() => {
                  navigateTo("/confirmation");
                }}
              >
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PaymentsForm;
