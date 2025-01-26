import React from "react";
import { IoIosSearch } from "react-icons/io";

import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { FaCheck, FaChevronDown } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

function CategoryDropdown() {
  const people = [
    { name: "Wade Cooper" },
    { name: "Arlene Mccoy" },
    { name: "Devon Webb" },
    { name: "Tom Cook" },
    { name: "Tanya Fox" },
    { name: "Hellen Schmidt" },
  ];

  const [selected, setSelected] = useState(people[0]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="w-11/12 h-12 m-4  shadow-sm   border-2 border-gray-200 rounded-lg">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative w-full overflow-scroll rounded-lg bg-white text-left shadow-sm focus:outline-none">
            <Combobox.Input
              className="w-full  py-2 pl-3 pr-10 text-lg leading-5 text-gray-900 bg-white focus:outline-none"
              displayValue={(person) => person.name}
              aria-labelledby="lblCategories"
              aria-label="lblCategories"
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <FaChevronDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-scroll z-10 rounded-md bg-white py-1 text-base shadow-md  focus:outline-none">
              {filteredPeople.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((person, index) => (
                  <Combobox.Option
                    key={index}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-10 pr-4 hover:bg-red-700  ${
                        active ? "bg-black text-white" : "text-gray-900"
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-green-400" : "text-teal-600"
                            }`}
                          >
                            <FaCheck
                              className="h-5 w-5 text-white"
                              aria-hidden="true"
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
    </div>
  );
}

export default function SeachPanelMobile() {
  return (
    <>
      <div id="SearchPanel_Content" className="my-4 flex flex-col gap-2">
        <CategoryDropdown />
        <div className=" w-11/12 h-12 m-auto  shadow-md  flex items-center gap-3  border border-gray-200 rounded">
          <div
            id="SearchBox"
            className="flex w-full h-full items-center gap-2 mx-auto p-4"
          >
            <input
              type="search"
              placeholder="Search for Products "
              className="w-full focus:outline-none placeholder:font-sans placeholder:text-zinc-700 text-xl "
            />
          </div>
          <button
            className="w-12 h-full rounded-lg bg-black text-white"
            aria-label="Search"
          >
            <IoIosSearch className="rotate-90 w-full stroke-bold text-3xl" />
          </button>
        </div>
      </div>
      <div id="SearchResult_Content" className=" flex flex-col gap-4">
        <div className="w-full p-4 font-semibold text-xl shadow-lg ring-1 ring-slate-300">
          Search Results
        </div>
        <div className="w-11/12 mx-auto h-5/6 border-red-300 border-2">
          {"content after search"}
        </div>

        <div className="w-full fixed bottom-0 p-4 flex items-center gap-2  font-semibold z-10 text-xl shadow-lg ring-1 ring-slate-300">
          Search for {`"whateveris state"`} <FaArrowRightLong />
        </div>
      </div>
    </>
  );
}
