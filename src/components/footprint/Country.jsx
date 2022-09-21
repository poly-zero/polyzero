import { Fragment, useState } from "react";
import Header from "../Header";
import countries from "../../data/countries.json";
import FootprintWizardButtons from "./FootprintWizardButtons";
import { Combobox, Transition } from "@headlessui/react";
import {
  CheckCircleIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/24/solid";

const Country = ({ result, setResult, useWizard }) => {
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
    <div className="bg-slate-100 flex flex-col flex-grow items-center gap-6 md:items-center md:justify-center md:mt-0 md:gap-10 md:py-8">
      <Header
        text={"Confirm your"}
        highlightedText={"country of residence"}
        caption={
          "This information will be used to determine the national per capita average of plastic consumption (kg) in your country"
        }
      />

      <div className="flex flex-col w-3/4 z-40 md:w-1/4 gap-2 justify-center items-center">
        <Combobox value={selectedCountry} onChange={setSelectedCountry}>
          <div className="relative w-full">
            <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md sm:text-sm">
              <Combobox.Input
                className="w-full border-none py-2.5 pl-3 pr-10 text-xl leading-5 text-gray-700 focus:ring-0"
                // What is displayed in input box after selection
                displayValue={(country) => (!country ? "" : country.name)}
                onChange={(event) => setQuery(event.target.value)}
                onClick={() => setSelectedCountry("")}
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDoubleDownIcon
                  className="h-5 w-5 text-gray-400"
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
              <Combobox.Options className="z-50 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredCountries.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                    Nothing found.
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
                            {country.name}
                          </span>
                          {selectedCountry ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-white" : "text-teal-600"
                              }`}
                            >
                              <CheckCircleIcon className="h-5 w-5 text-emerald-500" />
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
        {selectedCountry ? (
          <FootprintWizardButtons
            useWizard={useWizard}
            storeFunction={storeCountry}
          />
        ) : (
          <p>Please, select a Country</p>
        )}
      </div>
    </div>
  );
};

export default Country;
