import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Landing from "./components/Landing";
import Tiers from "./components/Tiers";
import NavBar from "./components/NavBar";
import Footprint from "./pages/Footprint";
import Registration from "./components/Registration";
import "./pages/Footprint";
function App() {
  return (
    <div className="flex flex-col h-screen">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/footprint" element={<Footprint />} />
          <Route exact path="/results" />
          <Route exact path="/tiers" element={<Tiers />} />
          <Route exact path="/payment" />
          <Route exact path="/confirmation" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
