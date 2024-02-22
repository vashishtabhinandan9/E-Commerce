import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Dialog, Transition } from '@headlessui/react'
import { SignIn } from "../Auth/Auth";
import Bank from "../Bank/Bank";
export function Up_Slide_Menu({Icon, Name}) {
  const [Isopen, setIsopen] = useState(false);
  
   const Handle_SideMenu=()=> {
    //EventTarget.id === "Hamburger_Menu" ? setDir(false) : setDir(true);
    setIsopen(true);
    // Update the condition to check the value of the Name prop
    
  }

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

      {Isopen && ( //for the backdrop on large screen
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-20"
          onClick={() => setIsopen(false)}
        ></div>
      )}
      <aside
        id="Side_Menu"
        className={`fixed top-0 right-0 w-screen md:w-1/3 overflow-auto  border-black border-2 h-screen z-30  bg-white transform transition-all ease-out duration-500
        ${Isopen ? "translate-y-0" : "translate-y-full"} `}
      >
        <div>
          <div id="close" className=" w-8 h-8 m-4 float-right text-white  ">
            <button
              className="w-full h-full"
              onClick={() => {
                setIsopen(false);
              }}
            >
              <RxCross2 className="w-full h-full " />
            </button>
          </div>
          <div>{Name == "Bank_Menu" ? <Bank /> : <Bank />}</div>
        </div>
      </aside>
    </>
  );
}
