import React from "react";
import "./Landing.css";

const Landing = () => {
  return (
    <div>
      <div className="companyName">
        <p>PolyZero</p>
      </div>
      <div className="image">
        <img
          src="https://siwi.org/wp-content/uploads/2021/07/why-water_topics-present-at-launch_rivers2.jpg"
          width="500"
          height="400"
        ></img>
      </div>
      <div className="aboutPolyZero">
        {" "}
        <p> This is PolyZero, this is a very good website.</p>
      </div>
      <button href="/" className="AboutPolyZero" type="button">
        Click me{" "}
      </button>
    </div>
  );
};

export default Landing;
