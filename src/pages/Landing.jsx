// import { ReactComponent as LinkedIn } from "../assets/socialMediaIcons/icons8-linkedin.svg";
// import { ReactComponent as FaceBook } from "../assets/socialMediaIcons/icons8-facebook.svg";
// import { ReactComponent as Instagram } from "../assets/socialMediaIcons/icons8-instagram.svg";
// import { ReactComponent as Twitter } from "../assets/socialMediaIcons/icons8-twitter.svg";
import LandingNavBar from "../components/landing/LandingNavBar";
// import { ReactComponent as Line } from "../assets/socialMediaIcons/icons8-line.svg";
import BlockQuote from "../components/landing/BlockQuote";

const Landing = () => {
  return (
    <div className="h-screen md:-ml-64">
      <LandingNavBar />
      <div className="bg-slate-50 flex flex-col justify-center items-center p-14 h-3/4">
        <BlockQuote
          quote={
            "Single-use plastics… have an average useful life of 12 to 15 minutes and yet can take up to 500 years to break down."
          }
          article={"Life Out of Plastic"}
          author={"LOOP"}
          sourceLink={
            "https://www.iberdrola.com/sustainability/how-to-reduce-plastic-use"
          }
          buttonText={"Learn more"}
        />
      </div>
      {/* <div className="flex-col">

        <div class=" flex flex-col justify-center items-center">
          <h1 className="text-2xl mb-7 mt-7 underline font-light">
            Did you know
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center text-center font-bold mt-2 ">
          <div className="max-w-xs">{randomFact}</div>
        </div>
      </div>
      <button
        onClick={() => navigateTo("/resources")}
        className=" flex mx-auto items-center mb-3 mt-9 py-2 px-3 text-sm font-medium justify-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Learn more
      </button> */}
    </div>
  );
};

export default Landing;
