import { auth } from "../firebase/firebase";
import { useEffect } from "react";
import { getStripeApi } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import TierCard from "../components/tiers/TierCard";
import Header from "../components/Header";

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
  const storedTitle = localStorage.getItem("title");
  const storedImage = localStorage.getItem("image");
  const storedTonnes = localStorage.getItem("tonnes");

  const handleStripe = () => {
    localStorage.setItem("fromPayment", "yes");
    getStripeApi({
      cost: storedPayment * storedTime,
      title: storedTitle,
      image: storedImage,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center flex-grow w-full gap-4 lg:flex-row bg-slate-700 opacity-90">
      <div className="basis-1/4">
        <Header
          highlightedText={"Order Confirmation"}
          caption={"Please confirm the details before proceeding to payment."}
          darkBackground={true}
        />
      </div>
      <div className="flex flex-col items-center justify-center basis-1/2">
        <TierCard
          key={storedTime}
          title={storedTitle}
          time={storedTime}
          tonnes={storedTonnes}
          cost={storedPayment}
          image={storedImage}
          stripe={handleStripe}
        />
      </div>
    </div>
  );
};

export default PaymentsForm;
