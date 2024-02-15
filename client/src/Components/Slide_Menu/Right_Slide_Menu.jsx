import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Dialog, Transition } from '@headlessui/react'
import { SignIn } from "../Auth/SignIn";

export function Right_Slide_Menu({Icon, Name}) {
  const [Isopen, setIsopen] = useState(false);
  
   const Handle_SideMenu=()=> {
    //EventTarget.id === "Hamburger_Menu" ? setDir(false) : setDir(true);
    setIsopen(true);
    // Update the condition to check the value of the Name prop
    
  }

  return (
    <>
      <div className="mx-auto w-8 h-8 border-2 border-teal-400">
        <button id={Name} onClick={()=>{setIsopen(true)}} className="w-full h-full">
          {Icon}
        </button>
      </div>
      {Isopen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-20" onClick={() => setIsopen(false)}>
        </div>
      )}
      <aside
        id="Side_Menu"
        className={`fixed top-0 right-0 w-screen md:w-1/3 overflow-auto  border-black border-2 h-screen z-30  bg-slate-100 transform transition-all ease-out duration-300
        ${  Isopen ? 'translate-x-0' : 'translate-x-full'} `
      }
      >
        <div>
          <div id="close" className="w-full border-red-800 border-2 flex items-center">
            <button className="w-8 h-8 m-2" onClick={() => setIsopen(false)}>
              <RxCross2 className="w-full h-full hover:{transform duaration-300 rotate-45}" />
            </button>
            <div className="mx-4">
            <h3>LOGIN</h3>
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

