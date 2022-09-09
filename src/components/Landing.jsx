import React, { Fragment } from "react";
import "./Landing.css";

const Landing = () => {
  const plasticConsumption = [
    "🇯🇵 Japan is the 2nd biggest consumer of disposable plastic"
  ];
  // const item = plasticConsumption[Math.floor(Math.random() * item.length)];
  const copyToClipboard = async (i) => {
    console.log(i);
    await navigator.clipboard.writeText(i[0]);
    alert("Copied" + i[0] + "!");
  };
  return (
    <div>
      <div className="companyName">
        <p>PolyZero</p>
      </div>
      <div className="image">
        <img
          alt="Pictue of river running through jungle"
          src="https://siwi.org/wp-content/uploads/2021/07/why-water_topics-present-at-launch_rivers2.jpg"
          width="500"
          height="400"
        ></img>
      </div>
      <div className="aboutPolyZero">
        {" "}
        <p>PolyZero, A way to help the planet.</p>
      </div>
      <button href="/tiers" className="AboutPolyZero" type="button">
        Click me{" "}
      </button>
      <article className="Tweet-button" onClick={copyToClipboard}>
        <button>
          <a
            href="https://twitter.com/share?ref_src=twsrc%5Etfw"
            class="twitter-share-button"
            data-size="large"
            data-hashtags="kanjifyed"
            data-show-count="false"
          >
            Tweet
          </a>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </button>

        <div>
          {plasticConsumption.map((i) => {
            console.log(i);
            return <p>{i}</p>;
          })}
        </div>
      </article>
    </div>
  );
};

export default Landing;
