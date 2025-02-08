import React, { Fragment, useState, useEffect } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { FaCheck, FaChevronDown } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import axiosInstance from "../../Utils/Axios";
import { useNavigate } from "react-router-dom";

function CategoryDropdown() {
  // State variables
  const [allSearchCategory, setAllSearchCategory] = useState([]); // Changed to state
  const [selected, setSelected] = useState(null); // Initialize as null
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true); // Loading state
  const [categoryMap, setCategoryMap] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    (async function () {
      try {
        const response = await axiosInstance.get(
          `/category/category_subcategory`
        );
        const categories = response.data.data.categories || [];
        const subcategories = response.data.data.subcategories || [];

        //console.log("response.data.data = " + JSON.stringify(response.data.data));
        //console.log("response.data.data = " + response.data.data);
        const categoriesWithType = categories.map((item) => ({
          ...item,
          type: "category",
        }));
        const subcategoriesWithType = subcategories.map((item) => ({
          ...item,
          type: "subcategory",
        }));

        const combinedCategories = [
          ...categoriesWithType,
          ...subcategoriesWithType,
        ];

        const categoryMapping = {};
        categories.forEach((category) => {
          categoryMapping[category.id] = category.Name;
        });
        setCategoryMap(categoryMapping);
        setAllSearchCategory(combinedCategories); // Update state
        setSelected(combinedCategories[0] || null); // Set first item as default
      } catch (err) {
        console.error("Error =>", err.message);
      } finally {
        setLoading(false); // Stop loading regardless of success or failure
      }
    })();
  }, []);

  const filteredCategory =
    query === ""
      ? allSearchCategory
      : allSearchCategory.filter((category) =>
          category.Name.toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const handleSelection = (item) => {
    setSelected(item);
    console.log("selected" + item.Name);
    if (item.type === "category") {
      console.log();
      navigate(`/Category/${item.Name}`);
    } else if (item.type === "subcategory") {
      const parentCategoryName = categoryMap[item.CategoryId];
      navigate(`/Category/${parentCategoryName}/${item.Name}`);
    }
  };
  return (
    <div className="w-11/12 h-12 m-4 shadow-sm border-2 border-gray-200 rounded-lg">
      <Combobox value={selected} onChange={handleSelection}>
        <div className="relative mt-1">
          <div className="relative w-full rounded-lg bg-white text-left shadow-sm focus:outline-none">
            <Combobox.Input
              className="w-full py-2 pl-3 pr-10 text-lg leading-5 text-gray-900 bg-white focus:outline-none"
              displayValue={(category) => (category ? category.Name : "")}
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
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-scroll z-10 rounded-md bg-white py-1 text-base shadow-md focus:outline-none">
              {filteredCategory.map((item, index) => (
                <Combobox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active ? "bg-black text-white" : "text-gray-900"
                    }`
                  }
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item.Name}
                      </span>
                      {selected && (
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
                      )}
                    </>
                  )}
                </Combobox.Option>
              ))}
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
