import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
// import Login from "./components/Login";

function App() {
  return (
    <div>
      <Landing />
      {/* <button className="bg-blue-500">Submit</button> */}
      <Router>
        <Routes>
          <Route exact="/" element={<Landing />} />
          <Route exact="/login" />
          <Route exact="/registration" />
          <Route exact="/footprint" />
          <Route exact="/results" />
          <Route exact="/tiers" />
          <Route exact="/tiers" />
          <Route exact="/payment" />
          <Route exact="/confirmation" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
