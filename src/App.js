import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route exact path="/" />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registration" />
          <Route exact path="/footprint" />
          <Route exact path="/results" />
          <Route exact path="/tiers" />
          <Route exact path="/tiers" />
          <Route exact path="/payment" />
          <Route exact path="/confirmation" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
