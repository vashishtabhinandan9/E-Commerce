import { FaFilter } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { Popover } from '@headlessui/react'
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { Left_Slide_Menu } from "../Slide_Menu/Left_Slide_Menu";
import FilterPanel from "../Left_Slide_Components/FilterPanel";
export default function Filter_Sort_Menu() {
  return (
    <>
      <div className="flex items-center justify-between mt-2">
        <span id="Filter_Icon" className="flex items-center text-xl  text-gray-800">
            <Left_Slide_Menu
              Component={<FilterPanel/>}
              Icon={<div className="flex items-center"><FaFilter className="mx-4 font-bold" /> FILTER</div>}
              Heading="FILTER"
            />
        </span>
        <SortDDL />
      </div>
    </>
  );
}


 function SortDDL() {
  return (
    <div className="w-56 text-right mx-4">
      <Menu as="div" className=" inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full  px-4 py-2 text-sm font-medium text-white bg-black rounded-md  ">
            SORT
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
           h-max overflow-scroll"
          >
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-black text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Popularity
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-black text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    What's New
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-black text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Price: Low To High
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-black text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                   Price: High To Low
                  </button>
                )}
              </Menu.Item>
            </div>
           
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}



    