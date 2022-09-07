import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <button className="bg-blue-500">Submit</button>
      <Router>
        <Routes>
          <Route exact="/" />
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
