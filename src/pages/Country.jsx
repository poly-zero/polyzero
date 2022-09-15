import { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { Combobox, Transition } from "@headlessui/react";
import countries from "../data/countries.json";
import {
  CheckCircleIcon,
  ChevronDoubleDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";

const Country = ({ result, setResult }) => {
  const [selected, setSelected] = useState(countries[0].Country);
  const [query, setQuery] = useState("");

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
      <h1 className="mt-16 mb-4 text-5xl font-extrabold text-gray-900 dark:text-white md:mt-0 md:text-5xl lg:text-6xl text-center">
        Confirm your<span> </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          country of residence
        </span>
      </h1>
      <p className="w-3/4 text-md mb-4 md:text-center md:text-base md:mb-0">
        This information will be used to determine the national per capita
        average of plastic consumption (kg) in your country
      </p>

      <div className="flex flex-row w-3/4 z-50 md:w-1/4 gap-2 justify-center items-center">
        <Combobox value={selected} onChange={setSelected}>
          <div className="relative w-full">
            <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md sm:text-sm">
              <Combobox.Input
                className="w-full border-none py-2.5 pl-3 pr-10 text-xl leading-5 text-gray-900 focus:ring-0"
                // What is displayed in input box after selection
                displayValue={(country) => (!country ? "" : country.name)}
                onChange={(event) => setQuery(event.target.value)}
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
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {country.name}
                          </span>
                          {selected ? (
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
        <Link to={""} className="">
          <div className="w-full shadow-lg">
            <Button  className="flex justify-center z-0">
              <ChevronRightIcon className="h-5 w-5 text-white" />
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Country;
