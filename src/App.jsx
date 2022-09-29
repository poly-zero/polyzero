import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect, useLayoutEffect } from "react";
import Landing from "./pages/Landing";
import Tiers from "./pages/Tiers";
import Dashboard from "./pages/Dashboard";
import Resources from "./pages/Resources";
// import Footprint from "./pages/Footprint";
import TipsToReduce from "./pages/TipsToReduce";
import PaymentsForm from "./pages/PaymentsForm";
import OrderConfirmation from "./pages/OrderConfirmation";
import FootprintWizard from "./pages/FootprintWizard";
import Results from "./pages/Results";
import Login from "./components/Login";
import Registration from "./components/Registration";
import SideBar from "./components/SideBar";
import Top from "./components/Top";
import ConditionalRedirect from "./components/ConditionalRedirect";
import { pageTracking } from "./analytics/tracking";
import Faq from "./pages/Faq";

function App() {
  const [tier, setTier] = useState(null);
  const [result, setResult] = useState(null);
  const [windowWidth] = useWindowSize();
  const location = useLocation();
  const storedTier = localStorage.getItem("tiers");
  const storedPayment = localStorage.getItem("payment");

  useEffect(() => {
    pageTracking(location);
    if (localStorage.fromConfirmation && location.pathname !== "/confirmation")
      localStorage.clear();
  }, [location]);

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);

    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();

      return () => window.removeEventListener("resize", updateSize);
    }, []);

    return size;
  }

  return (
    <>
      <div className="flex flex-col h-screen md:ml-64">
        {location.pathname === "/" ||
        location.pathname === "/resources" ||
        location.pathname === "/tips" ? null : (
          <SideBar
            result={result}
            storedTier={storedTier}
            storedPayment={storedPayment}
            windowWidth={windowWidth}
          />
        )}
        <Top />
        <Routes>
          <Route
            exact
            path="/resources"
            element={<Resources windowWidth={windowWidth} />}
          />
          <Route
            exact
            path="/"
            element={<Landing windowWidth={windowWidth} />}
          />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route
            exact
            path="/wizard"
            element={
              <FootprintWizard
                result={result}
                setResult={setResult}
                windowWidth={windowWidth}
              />
            }
          />
          <Route
            exact
            path="/results"
            element={
              <ConditionalRedirect isSet={result}>
                <Results result={result} setResult={setResult} />
              </ConditionalRedirect>
            }
          />

          <Route exact path="/tiers" element={<Tiers setTier={setTier} />} />
          <Route exact path="/payment" element={<PaymentsForm />} />
          <Route
            exact
            path="/confirmation"
            element={<OrderConfirmation tier={tier} />}
          />
          <Route exact path="/faq" element={<Faq />} />
          <Route
            exact
            path="/tips"
            element={<TipsToReduce windowWidth={windowWidth} />}
          />
          {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
