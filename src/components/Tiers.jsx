import React from "react";
import "./Tiers.css";

const Tiers = () => {
  return (
    <div>
      <h1>Want to save the planet, Take some action</h1>
      <div className="TableBoxes">
        <ul>
          <li className="tableLi">
            <div>
              <h1>Tier:</h1>
              <p>Supporter:</p>
              <p>Support for 1 year</p>
            </div>
            <button className="selectTier">select</button>
          </li>

          <li className="tableLi">
            <div>
              <h1>Tier:</h1>
              <p>Champion</p>
              <p>Support for 5 years</p>
              <button className="selectTier">select</button>
            </div>
          </li>
          <li className="tableLi">
            <div>
              <h1>Tier:</h1>
              <p>Champion</p>
              <p>Support for 10 years</p>
            </div>
            <button className="selectTier">select</button>
          </li>
          <li className="tableLi">
            <div>
              <h1>Tier:</h1>
              <p>Hero</p>
              <p>Support for a lifetime</p>
              <button className="selectTier">select</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tiers;
