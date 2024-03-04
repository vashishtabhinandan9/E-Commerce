import { useState } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { SignIn } from "../Auth/Auth";
import Bank from "../Bank/Bank";
import { RxCross2 } from "react-icons/rx";
import { useRef } from 'react';
import { motion } from "framer-motion"

export function Up_Slide_Menu({Icon, Name}) {

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
        id={Name}
        onClick={() => {
          setIsopen(true);
        }}
        className="w-full h-full"
      >
        {Icon}
      </button>

     
      <aside
        id="Side_Menu"
        // onScroll={handleScroll}
        className={`fixed top-0 right-0 w-screen h-screen md:w-1/3 overflow-auto  border-black border-2  z-10  bg-slate-100  transform transition-all ease-out duration-500
        ${Isopen ? "translate-y-0" : "translate-y-full"}  `}
      >
         <div
          id="close"
          className=" sticky top-2 float-right z-10 w-8 h-8 m-2  text-white  "
        >
          <button
            className="w-full h-full"
            onClick={() => {
              setIsopen(false);
            }}
          >
            <RxCross2 className="w-full h-full " />
          </button>
          </div>

          
          
        <div
          id="Heading_Before_scroll"
          
          className={`   sticky top-0 w-full h-80  rounded-b-3xl border-red-800 border-2 bg-gradient-to-t from-40% from-[#001134] to-[#02256C] text-center text-white`}>
         
        
            <h3
          >
              Welcome to <br />
              Your Money Bank
            </h3>
         
          
        </div>

        {Name == "Bank_Menu" ? <Bank /> : <Bank />}
      </aside>
    </>
  );
}
