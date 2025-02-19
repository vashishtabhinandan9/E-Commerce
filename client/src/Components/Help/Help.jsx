import { Disclosure } from "@headlessui/react";

import { FaChevronDown } from "react-icons/fa6";
const DisclosureContent = [
  {
    Ques: "How much time does delivery take?",
    Ans: `We process orders every day before 9 am except on public holidays. After dispatch, it takes about 2-5 working days for delivery in the metro cities and about 4 to 7 working days for the rest of India. 
        We ship your parcel from Mumbai, Maharashtra.`,
  },
  {
    Ques: "How much time does delivery take?",
    Ans: `We process orders every day before 9 am except on public holidays. After dispatch, it takes about 2-5 working days for delivery in the metro cities and about 4 to 7 working days for the rest of India. 
        We ship your parcel from Mumbai, Maharashtra.`,
  },
  {
    Ques: "How much time does delivery take?",
    Ans: `We process orders every day before 9 am except on public holidays. After dispatch, it takes about 2-5 working days for delivery in the metro cities and about 4 to 7 working days for the rest of India. 
        We ship your parcel from Mumbai, Maharashtra.`,
  },
  {
    Ques: "How much time does delivery take?",
    Ans: "We process orders every day before 9 am except on public holidays. After dispatch, it takes about 2-5 working days for delivery in the metro cities and about 4 to 7 working days for the rest of India. We ship your parcel from Mumbai, Maharashtra.",
  },
  {
    Ques: "How much time does delivery take?",
    Ans: "We process orders every day before 9 am except on public holidays. After dispatch, it takes about 2-5 working days for delivery in the metro cities and about 4 to 7 working days for the rest of India. We ship your parcel from Mumbai, Maharashtra.",
  },
];

function Help() {
  return (
    <>
      <div
        id="DisclosureContent_Repeater"
        className=" h-40 overflow-scroll w-11/12 rounded-lg text-center bg-white shadow-xl my-4 mx-auto  "
      >
        <h1 className="sticky top-0  w-full h-29  bg-white  text-2xl font-bold text-black">
          FAQ
        </h1>
        {DisclosureContent.map((item, index) => {
          return (
            <div key={index}>
              <div className="w-full ">
                <div className="mx-auto w-full rounded-2xl bg-white p-2">
                  <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-black px-4 py-2 text-left text-sm font-medium text-slate-50  ">
                          <span>{item.Ques}</span>
                          <FaChevronDown
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                          {item.Ans}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        id="DisclosureContent_Repeater"
        className=" h-40 overflow-scroll w-11/12 rounded-lg text-center bg-white shadow-xl my-4 mx-auto  "
      >
        <h1 className="sticky top-0 w-full h-29 z-10 bg-white  text-2xl font-meduim text-black">
          FAQ
        </h1>
        {DisclosureContent.map((item, index) => {
          return (
            <div key={index}>
              <div className="w-full ">
                <div className="mx-auto w-full rounded-2xl bg-white p-2">
                  <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-black px-4 py-2 text-left text-sm font-medium text-slate-50  ">
                          <span>{item.Ques}</span>
                          <FaChevronDown
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                          {item.Ans}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-11/12 mx-auto">
        <button className=" h-16 w-full rounded-xl font-bold  text-lg text-center text-white bg-black shadow-xl ">
          Track Your Order
        </button>
      </div>
    </>
  );
}

export default Help;
