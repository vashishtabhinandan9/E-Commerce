import { useState } from "react";
import Bank from "../Bank/Bank";
import Help from "../Help/Help";
import { GiPiggyBank } from "react-icons/gi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

export function Up_Slide_Menu({ Icon, Name }) {
  const [Isopen, setIsopen] = useState(false);
  //   const scrollableDivRef = useRef(null);
  //   const [is, setScrollPosition] = useState(10);
  //   let scrollPosition;
  //   let sc;
  // let percentagescroll;
  //   //const scrollableDiv = document.getElementById("Heading_Before_scroll");

  //   const handleScroll = () => {
  //      scrollPosition = parseInt(scrollableDivRef.current.scrollTop);
  //      percentagescroll= scrollPosition*10;
  //      sc=100/percentagescroll;

  //     // console.log(parseInt(percentagescroll*10));
  //    // scrollPosition > 100 ?  setScrollPosition(true): setScrollPosition(false);
  //     // const scrollValue = scrollableDiv.scrollTop;
  //     // scrollableDiv.style.height = `${scrollPosition}px`;
  //     setScrollPosition(Math.min(parseInt(percentagescroll),20));
  //     console.log(sc);
  //   };

  console.log("rerender");

  return (
    <>
      <button
        id="UpSlideMenuIcon"
        onClick={() => {
          setIsopen(true);
        }}
        className="w-full h-full"
        aria-label={Name}
      >
        {Icon}
      </button>

      <aside
        id="Up_Menu"
        // onScroll={handleScroll}
        className={`fixed top-0 right-0 w-screen h-screen md:w-1/3 overflow-auto   z-10  bg-slate-100  transform transition-all ease-out duration-500
        ${Isopen ? "translate-y-0" : "translate-y-full"}  `}
      >
        <div
          id="Heading"
          className={` sticky top-0 z-20 w-full h-32 ${
            Name == "Bank_Menu"
              ? "bg-gradient-to-t from-40% from-[#001134] to-[#02256C]"
              : "bg-black"
          } rounded-b-2xl   text-center text-white`}
        >
          <div className=" flex justify-between  items-center pt-8   gap-2 ">
            <div className="flex items-center gap-8 ml-8">
              {Name == "Bank_Menu" ? (
                <GiPiggyBank className="w-12 h-12  " />
              ) : (
                <MdOutlineSupportAgent className="w-12 h-12  " />
              )}
              <div className="font-meduim h-full text-lg text-wrap text-left ">
                <p className="text-xl font-bold mb-1">Hey there 👋</p>
                {Name == "Bank_Menu" ? (
                  <p className="">Welcome! Your Money Bank 💲</p>
                ) : (
                  "Welcome to Support 👩‍💼"
                )}
              </div>
            </div>
            <div
              id="close"
              className="  float-right z-10 w-8 h-8 mr-4  text-white  "
            >
              <button
                className="w-full h-full"
                aria-label="Close"
                onClick={() => {
                  setIsopen(false);
                }}
              >
                <RxCross2 className="w-full h-full " />
              </button>
            </div>
          </div>
        </div>

        {Name == "Bank_Menu" ? <Bank /> : <Help />}
      </aside>
    </>
  );
}
