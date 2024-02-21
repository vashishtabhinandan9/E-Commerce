import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Dialog, Transition } from '@headlessui/react'
import { SignIn } from "../Auth/Auth";

export function Up_Slide_Menu({Icon, Name}) {
  const [Isopen, setIsopen] = useState(false);
  
   const Handle_SideMenu=()=> {
    //EventTarget.id === "Hamburger_Menu" ? setDir(false) : setDir(true);
    setIsopen(true);
    // Update the condition to check the value of the Name prop
    
  }

  return (
    <>
     
        <button id={Name} onClick={()=>{setIsopen(true)}} className="w-full h-full">
          {Icon}
        </button>
  
      {Isopen && (//for the backdrop on large screen
        <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-20" onClick={() => setIsopen(false)}>
        </div>
      )}
      <aside
        id="Side_Menu"
        className={`fixed top-0 right-0 w-screen md:w-1/3 overflow-auto  border-black border-2 h-screen z-30  bg-white transform transition-all ease-out duration-1000
        ${  Isopen ? 'translate-y-0' : 'translate-y-full'} `
      }
      >
        <div>
          <div id="close" className="w-full border-gray-200  border-b flex items-center">
            <button className="w-6 h-6 m-2" onClick={() => setIsopen(false)}>
              <RxCross2 className="w-full h-full  text-gray-800 hover:{transform duaration-300 rotate-45}" />
            </button>
            <div className="mx-4">
            <h3></h3>{/**heading like loginsingup cart */}
            </div>
            
          </div>
          <div>
            {Name== "Cart_Menu" ? "Cart_Menu":<SignIn/> }
          
          </div>
        </div>
      </aside>
    </>
  );
}
