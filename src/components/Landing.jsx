import "./Landing.css";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LinkedIn } from "../assets/socialMediaIcons/icons8-linkedin.svg";
import { ReactComponent as FaceBook } from "../assets/socialMediaIcons/icons8-facebook.svg";
import { ReactComponent as Instagram } from "../assets/socialMediaIcons/icons8-instagram.svg";
import { ReactComponent as Twitter } from "../assets/socialMediaIcons/icons8-twitter.svg";
import { ReactComponent as Line } from "../assets/socialMediaIcons/icons8-line.svg";

const Landing = () => {
  const plasticConsumption = [
    " In Japan, 37 Kilograms Per capita annual single plastic consumption in Japan.",
    " In Japan 1 Kilogram of plastic equals to 5.6kg- 6kg CO2 over its lifetime. \n https://siwi.org/wp-content/uploads/2021/07/why-water_topics-present-at-launch_rivers2.jpg",
    " Japan is the 2nd biggest consumer of disposable plastic.",
    " In Japan, the average CO2 from plastic per capita is 207-222kg per annum.",
    " Single-use plastics, which account for half of the plastic we use each year, have an average useful life of 12 to 15 minutes and yet can take up to 500 years to break down."
  ];

  const randomFact =
    plasticConsumption[Math.floor(Math.random() * plasticConsumption.length)];

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(randomFact);
  };
  const navigateTo = useNavigate();

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
        onClick={() => navigateTo("/footprint")}
        className="AboutPolyZero mb-4"
        type="button"
      >
        Get started{" "}
      </button>

      <div className="flex gap-4">
        <h6 className="font-extrabold">Did you know:</h6>
        <br />
        <p className="">{randomFact}</p>
      </div>
      <div className="flex gap-4">
        {/* <FaceBook />
        <Instagram />
        <Twitter />
        <LinkedIn />
        <Line /> */}
        <article className="flex gap-4" onClick={copyToClipboard}>
          <button>
            <a
              href={
                `https://twitter.com/intent/tweet?text=${randomFact}` +
                ` https://polyzero.earth/`
              }
              class="twitter-share-button"
              data-size="large"
              data-hashtags="kanjifyed"
              data-show-count="false"
            >
              <Twitter />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=https://polyzero.earth/`}
              class="twitter-share-button"
              data-size="large"
              data-hashtags="kanjifyed"
              data-show-count="false"
            >
              <LinkedIn />
            </a>
          </button>
        </article>
      </div>
    </div>
  );
};

export default Landing;
