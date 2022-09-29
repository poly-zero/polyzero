import { Fragment, useState } from "react";
import Header from "../Header";
import countries from "../../data/countries.json";
import FootprintWizardButtons from "./FootprintWizardButtons";
import { Combobox, Transition } from "@headlessui/react";
import {
  CheckCircleIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/24/solid";
import globe from "../../assets/videos/globe.mp4";

const Country = ({ result, setResult, useWizard, windowWidth }) => {
  // Japan selected by default
  const [selectedCountry, setSelectedCountry] = useState(
    result && result.country ? result.country : countries[44]
  );
  const [query, setQuery] = useState("");

  const storeCountry = () => {
    setResult({
      ...result,
      country: selectedCountry,
    });
  };

  const filteredCountries =
    query === ""
      ? countries
      : countries.filter((country) =>
          country.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="relative flex flex-col items-center justify-center flex-grow gap-6 overflow-hidden lg:flex-row bg-slate-200 md:items-center md:justify-center md:mt-0 md:gap-10 md:py-8">
      <video
        autoPlay={windowWidth < 500 ? false : true}
        loop
        muted
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src={globe} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute z-0 w-full h-full bg-slate-800 opacity-90"></div>

      <div className="z-40 lg:basis-1/2">
        <Header
          highlightedText="Country of Residence"
          caption="Please confirm your country of residence. This information will be
          used to determine the national per capita average of plastic
          consumption (kg) in your country."
          darkBackground={true}
        />
      </div>

      <div className="z-40 flex flex-col items-center justify-center w-3/4 gap-2 md:w-1/2 lg:w-1/4">
        <Combobox
          value={selectedCountry}
          onChange={setSelectedCountry}
          className="relative lg:mt-8"
        >
          <div className="relative w-full">
            <div className="relative w-full overflow-hidden text-left bg-white rounded-lg shadow-md cursor-default sm:text-sm">
              <Combobox.Input
                className="w-full border-none py-2.5 pl-3 pr-10 text-xl leading-5 text-gray-700 focus:ring focus:ring-emerald-500 caret-blue-400"
                // What is displayed in input box after selection
                displayValue={(country) =>
                  !country ? "" : country.flag + " " + country.name
                }
                onChange={(event) => setQuery(event.target.value)}
                onClick={() => setSelectedCountry("")}
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDoubleDownIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options className="absolute z-50 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredCountries.length === 0 && query !== "" ? (
                  <div className="relative px-4 py-2 text-gray-700 cursor-default select-none">
                    Country not found.
                  </div>
                ) : (
                  filteredCountries.map((country) => (
                    <Combobox.Option
                      key={country.rank}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-blue-500 text-white" : "text-gray-900"
                        }`
                      }
                      value={country}
                    >
                      {({ selectedCountry, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selectedCountry ? "font-medium" : "font-normal"
                            }`}
                          >
                            {country.flag}&nbsp;&nbsp;{country.name}
                          </span>
                          {/* BUG, not displaying properly */}
                          {selectedCountry ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-white" : "text-teal-600"
                              }`}
                            >
                              <CheckCircleIcon
                                className="w-5 h-5 text-emerald-500"
                                aria-hidden={true}
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
        <FootprintWizardButtons
          useWizard={useWizard}
          storeFunction={storeCountry}
          selectedCountry={selectedCountry}
        />
      </div>
    </div>
  );
};

export default Country;
