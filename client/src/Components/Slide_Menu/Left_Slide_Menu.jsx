import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

import { SignIn } from "../Auth/Auth";

export function Left_Slide_Menu({Component,Icon,Heading}) {
  
  const [Isopen,setIsopen]=useState(false);
 
return (
  <>
    <div id="Hamburger_Menu" className=" mx-auto w-8 h-8   ">
      <button
        onClick={() => {
          setIsopen(true);
        }}
      >
       {Icon}
      </button>
    </div>
    {Isopen && (//for the backdrop on large screen
        <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-20" onClick={() => setIsopen(false)}>
        </div>
      )}
      
    <aside
      id="Side_Menu"
      className={` fixed top-0 left-0 overflow-auto  border-black border-2 w-screen md:w-1/3 h-screen z-30  bg-white transform  transition-transform ease-out duration-300
  ${Isopen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div>
        <div
          id="TopSection_Menu"
          className="w-full h-12 border-gray-200   border-b relative flex   items-center "
        >
          <div className="mx-8 w-max ">
            <h3 className=" font-medium font-sans text-lg antialiased text-gray-700">
              {Heading} {/**heading like loginsingup cart */}
            </h3>
          </div>
        
          <button className="w-6 h-6 mx-2 absolute right-4 " onClick={() => setIsopen(false)}>
            <RxCross2 className="w-full h-full  text-gray-800 " />
          </button>
        </div>

        <div>
          {Component}
        </div>
      </div>
    </aside>
  </>
);
}