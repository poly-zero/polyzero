import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Landing from "./components/Landing";
import Tiers from "./components/Tiers";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registration" />
          <Route exact path="/footprint" />
          <Route exact path="/tiers" element={<Tiers />} />
          <Route exact path="/results" />
          <Route exact path="/payment" />
          <Route exact path="/confirmation" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
