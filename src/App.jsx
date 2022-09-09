import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./components/Login";
import Landing from "./components/Landing";
import Tiers from "./components/Tiers";
import NavBar from "./components/NavBar";
import Footprint from "./pages/Footprint";
import Registration from "./components/Registration";
import "./pages/Footprint";
import PaymentsForm from "./components/PaymentsForm";
import OrderConfirmation from "./pages/OrderConfirmation";

function App() {
  const [tier, setTier] = useState({});

  return (
    <div className="flex flex-col h-screen">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/footprint" element={<Footprint />} />
          <Route exact path="/tiers" element={<Tiers setTier={setTier} />} />
          <Route exact path="/payment" element={<PaymentsForm />} />
          <Route
            exact
            path="/confirmation"
            element={<OrderConfirmation tier={tier} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
