import { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";

const PaymentsForm = () => {
  const storedPayment = localStorage.getItem("payment");

  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [cardNumber, setcardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const navigateTo = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { name, cardNumber, expiry, cvv };
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center mt-10">
        Want to
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          {" "}
          save the planet?
        </span>
      </h1>
      <div onSubmit={handleSubmit}>
        <div className="flex justify-center items-center  ">
          <div className="h-auto w-80 bg-white p-3 rounded-lg">
            <p className="text-xl font-semibold">Payment Details</p>
            <div className="input_text mt-6 relative">
              {" "}
              <span className="absolute left-0 text-sm -top-4">
                Cardholder Name
              </span>
              <input
                type="text"
                className="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b rounded-lg"
                placeholder="Name on card"
                onChange={(e) => setName(e.target.value)}
              />{" "}
              <i className="absolute left-2 top-4 text-gray-400 fa fa-user"></i>{" "}
            </div>
            <div className="input_text mt-8 relative">
              {/* {" "} */}
              <input
                type="text"
                className="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b rounded-lg"
                placeholder="0000 0000 0000 0000"
                data-slots="0"
                data-accept="\d"
                size="19"
                onChange={(e) => setcardNumber(e.target.value)}
              />{" "}
              <span className="absolute left-0 text-sm -top-4">
                Card Number
              </span>{" "}
              <i className="absolute left-2 top-[14px] text-gray-400 text-sm fa fa-credit-card"></i>{" "}
            </div>
            <div className="mt-8 flex gap-5 ">
              <div className="input_text relative w-full">
                {" "}
                <input
                  type="text"
                  className="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b  rounded-lg"
                  placeholder="mm/yyyy"
                  data-slots="my"
                  onChange={(e) => setExpiry(e.target.value)}
                />{" "}
                <span className="absolute left-0 text-sm -top-4">Expiry</span>{" "}
                <i className="absolute left-2 top-4 text-gray-400 fa fa-calendar-o"></i>{" "}
              </div>
              <div className="input_text relative w-full">
                {" "}
                <input
                  type="text"
                  className="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b  rounded-lg"
                  placeholder="000"
                  data-slots="0"
                  data-accept="\d"
                  size="3"
                  onChange={(e) => setCvv(e.target.value)}
                />{" "}
                <span className="absolute left-0 text-sm -top-4">CVV</span>{" "}
                <i className="absolute left-2 top-4 text-gray-400 fa fa-lock"></i>{" "}
              </div>
            </div>
            <p className="text-lg text-center mt-4 text-gray-600 font-semibold">
              Payment amount:¥{storedPayment}
            </p>
            <div className="flex justify-center mt-4">
              {" "}
              <button
                className="outline-none pay h-12 bg-blue-500 text-white mb-3 mr-1 hover:bg-orange-700 rounded-lg w-1/2 cursor-pointer transition-all"
                onClick={() => {
                  navigateTo("/tiers");
                }}
              >
                Back
              </button>{" "}
              <br />
              <button
                className="outline-none pay h-12 bg-blue-500 text-white mb-3 hover:bg-orange-700 rounded-lg w-1/2 cursor-pointer transition-all"
                onClick={() => {
                  navigateTo("/confirmation");
                }}
              >
                Pay
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PaymentsForm;
