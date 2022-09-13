import LandingNavBar from "../components/landing/LandingNavBar";
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
          link={
            "https://www.iberdrola.com/sustainability/how-to-reduce-plastic-use"
          }
          buttonText={"Learn more"}
        />
      </div>
    </div>
  );
};

export default Landing;
