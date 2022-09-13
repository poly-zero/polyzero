import { Fragment } from "react";

const Resources = () => {
  return (
    <Fragment>
      <div>
        <div className=" flex justify-center m-10  items-center mt-10 rounded-lg bg-slate-200">
          <ul className=" flex flex-col text-center space-y-4 mt-4 font-semibold ">
            {" "}
            <li className=" items-center px-10 py-8">
              "The carbon footprint of just five plastic bags is 1kg of CO2e."
              <br />
              <a
                href="https://timeforchange.org/plastic-bags-and-plastic-bottles-co2-emissions-during-their-lifetime/"
                className="text-blue-600 hover:text-blue-800 text-center font-light flex-wrap underline"
              >
                Learn more{" "}
              </a>
            </li>
            <li className="items-center px-10 py-8">
              "Single-use plastics, which account for half of the plastic we use
              each year, have an average useful life of 12 to 15 minutes and yet
              can take up to 500 years to break down."
              <br />
              <a
                href="https://www.iberdrola.com/sustainability/how-to-reduce-plastic-use"
                className="text-blue-600 hover:text-blue-800 text-center font-light underline "
              >
                Learn more{" "}
              </a>
            </li>
            <li className="items-center px-10 py-8">
              "Japan is the world's second largest per capita consumer of
              plastic packaging."
              <br />
              <a
                href="https://www.unep.org/ietc/ja/node/53"
                className="text-blue-600 hover:text-blue-800 text-center font-light  underline"
              >
                Learn more{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className=" flex justify-center items-center m-10  mt-3  rounded-lg bg-slate-200">
          <ul className=" flex flex-col    text-center space-y-4 font-semibold">
            <li className="items-center px-10 py-8 gap-24">
              "The carbon footprint of just five plastic bags is 1kg of CO2e."
              <br />
              <a
                href="https://timeforchange.org/plastic-bags-and-plastic-bottles-co2-emissions-during-their-lifetime/"
                className="text-blue-600 hover:text-blue-800 text-center font-light underline"
              >
                Learn more
              </a>{" "}
            </li>
            <li className=" items-center px-10 py-8 gap-24 ">
              "Single-use plastics, which account for half of the plastic we use
              each year, have an average useful life of 12 to 15 minutes and yet
              can take up to 500 years to break down."
              <br />
              <a
                href="https://www.iberdrola.com/sustainability/how-to-reduce-plastic-use"
                className="text-blue-600 hover:text-blue-800 text-center font-light underline"
              >
                Learn more{" "}
              </a>
            </li>
            <li className=" items-center px-10 py-8 ">
              <br />

              <p className="">"1kg of plastic is 5.6kg of CO2e"</p>

              <a
                href="https://www.unep.org/ietc/ja/node/53"
                className="text-blue-600 hover:text-blue-800 text-center font-light underline "
              >
                Learn more{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};
export default Resources;
