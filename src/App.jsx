import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
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
import Contribution from "./pages/Contribution";
function App() {
  const [tier, setTier] = useState({});
  const [result, setResult] = useState(null);
  const location = useLocation();

  useEffect(() => {
    pageTracking(location);
  }, [location]);

  return (
    <>
      <div className="flex flex-col h-screen md:ml-64">
        {location.pathname === "/" ||
        location.pathname === "/resources" ? null : (
          <SideBar result={result} />
        )}
        <Top />
        <Routes>
          <Route exact path="/resources" element={<Resources />} />
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route
            exact
            path="/wizard"
            element={<FootprintWizard result={result} setResult={setResult} />}
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
          <Route exact path="/contribution" element={<Contribution />} />
          <Route exact path="/payment" element={<PaymentsForm />} />
          <Route exact path="/tips" element={<TipsToReduce />} />
          <Route
            exact
            path="/confirmation"
            element={<OrderConfirmation tier={tier} />}
          />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
