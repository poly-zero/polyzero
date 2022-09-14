import LandingNavBar from "../components/landing/LandingNavBar";
import BlockQuote from "../components/landing/BlockQuote";

const Landing = () => {
  return (
    <div className="h-screen md:-ml-64">
      <LandingNavBar />
      <div className="flex flex-col items-center gap-6 md:items-center md:justify-center md:mt-0 md:gap-10 md:py-8">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
          Facts about&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Disposable Plastics
          </span>
        </h1>
      </div>
      <div className="bg-slate-50 flex flex-col justify-center items-center p-14 h-3/4">
        <BlockQuote
          quote={
            "Single-use plastics… have an average useful life of 12 to 15 minutes and yet can take up to 500 years to break down."
          }
          article={"Life Out of Plastic (LOOP)"}
          sourceLink={
            "http://loop.pe/"
          }
          buttonText={"Learn more"}
        />
      </div>
      <div className="flex flex-col justify-center items-center p-14 h-3/4">
        <BlockQuote
          quote={
            "Plastic is one of the most persistent pollutants on Earth. It's made to last - and it does, often for 400 years or more. And at every step in its lifecycle, even long after it has been discarded, plastic creates greenhouse gas emissions that are contributing to the warming of our world."
          }
          article={"Plastic waste and climate change - what's the connection?"}
          author={"World Wildlife Federation"}
          sourceLink={
            "https://www.wwf.org.au/news/blogs/plastic-waste-and-climate-change-whats-the-connection"
          }
          buttonText={"Read the Article"}
        />
      </div>
      <div className="bg-slate-50 flex flex-col justify-center items-center p-14 h-3/4">
        <BlockQuote
          quote={
            "The average American uses and throws away 110 pounds, or roughly 50 kilograms, of single-use plastic every year."
          }
          article={"Here Is Who’s Behind the Global Surge in Single-Use Plastic"}
          author={"New York Times"}
          sourceLink={
            "https://www.nytimes.com/2021/05/18/climate/single-use-plastic.html"
          }
          buttonText={"Read the Article"}
        />
      </div>
      <div className="flex flex-col justify-center items-center p-14 h-3/4">
        <BlockQuote
          quote={
            "when 1kg virgin fossil-based plastic product comes onto the market, it has already caused at least 2.9kg of greenhouse gas emissions. Moreover, the same product will cause a further 2.7kg of emissions when it is discarded and if it is incinerated."
          }
          article={"European Environment Agency WMGE Report 3/2021"}
          sourceLink={
            "https://www.eionet.europa.eu/etcs/etc-wmge/products/etc-wmge-reports/greenhouse-gas-emissions-and-natural-capital-implications-of-plastics-including-biobased-plastics"
          }
          buttonText={"See the Full Report"}
        />
      </div>
      <div className="bg-slate-50 flex flex-col justify-center items-center p-14 h-3/4">
        <BlockQuote
          quote={
            "Just 5 plastic bags can generate the equivalent of 1kg of CO2e."
          }
          article={"Plastic bags and plastic bottles – CO2 emissions during their lifetime"}
          author={"Time for Change"}
          sourceLink={
            "https://timeforchange.org/plastic-bags-and-plastic-bottles-co2-emissions-during-their-lifetime/"
          }
          buttonText={"Read More"}
        />
      </div>
      <a name="about">
      <div className="flex flex-col text-center p-14 h-3/4">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">About</h1>
          <p>
            PolyZero was created to raise awareness about the impact of the 
            single-use plastics we consume every day. Our Plastic Footprint Estimator 
            approximates the volume of disposable plastics you use per year, 
            based on country of residence and lifestyle. 
          </p>
          <p>
            Reducing our plastic consumption is the most important step we can take, 
            but for those who wish to do more, the app also estimates the CO2 
            emissions associated with your plastic footprint and allows you to purchase 
            CO2 off-sets to reduce your impact. 
          </p>
      </div>
      </a>
      <a name="contact">
      <div className="bg-slate-50 flex flex-col text-center p-14 h-3/4">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">Contact Us</h1>
          <p>
            We are volunteer-run and are actively looking for sponsors, collaborators, 
            and open-source contributors. Please reach out!
          </p>
      </div>
      </a>
    </div>
  );
};

export default Landing;
