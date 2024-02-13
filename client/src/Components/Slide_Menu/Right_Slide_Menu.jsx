import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Dialog, Transition } from '@headlessui/react'

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

      <aside
        id="Side_Menu"
        className={`fixed top-0 right-0 w-screen md:w-1/3 overflow-auto border-black border-2 h-screen z-10 bg-slate-100 transform transition-all ease-out duration-300
        ${  Isopen ? 'translate-x-0' : 'translate-x-full'} `
      }
      >
        <div>
          <div id="close" className="w-16 h-16">
            <button onClick={() => setIsopen(false)}>
              <RxCross2 />
            </button>
          </div>
          <div>
            {Name}
          </div>
        </div>
      </aside>
    </>
  );
}

