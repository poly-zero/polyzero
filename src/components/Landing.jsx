import "./Landing.css";

const Landing = () => {
  const plasticConsumption = [
    " In Japan, 37 Kilograms Per capita annual single plastic consumption in Japan.",
    " In Japan 1 Kilogram of plastic equals to 5.6kg- 6kg CO2 over its lifetime.",
    " Japan is the 2nd biggest consumer of disposable plastic.",
    " In Japan, the average CO2 from plastic per capita is 207-222kg per annum.",
    "Single-use plastics, which account for half of the plastic we use each year, have an average useful life of 12 to 15 minutes and yet can take up to 500 years to break down."
  ];
  const randomFact =
    plasticConsumption[Math.floor(Math.random() * plasticConsumption.length)];

  const copyToClipboard = async () => {
    // console.log(i.body);
    await navigator.clipboard.writeText(randomFact);
    alert(randomFact);
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
      <button
        onClick={() => (window.location.href = "/tiers")}
        className="AboutPolyZero"
        type="button"
      >
        Click me{" "}
      </button>
      <span>
        <h6>Did you know:</h6>
        <br />
        <p className="ml-5">{randomFact}</p>
      </span>

      <article className="Tweet-button" onClick={copyToClipboard}>
        <button>
          <a
            href={
              `https://twitter.com/intent/tweet?text=${randomFact}` +
              `#PolyZero`
            }
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
      </article>
    </div>
  );
};

export default Landing;
