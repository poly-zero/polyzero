import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Landing from "./components/Landing";
import Footprint from "./pages/Footprint";
import "./pages/Footprint"

function App() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registration" />
          <Route exact path="/footprint" element={<Footprint/>}/>
          <Route exact path="/results" />
          <Route exact path="/tiers" />
          <Route exact path="/payment" />
          <Route exact path="/confirmation" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
