import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

function Slide_Menu({Icon, Name}) {
  const [Isopen, setIsopen] = useState(false);
  const [Dir, setDir] = useState(false); // false = left and true = right

  function Handle_SideMenu() {
    setIsopen(!Isopen);
    // Update the condition to check the value of the Name prop
    Name === "Hamburger_Menu" ? setDir(false) : setDir(true);
  }

  return (
    <>
      <div className="mx-auto w-8 h-8 border-2 border-teal-400">
        <button id={Name} onClick={Handle_SideMenu} className="w-full h-full">
          {Icon}
        </button>
      </div>

      <aside
        id="Side_Menu"
        className={`absolute top-0 ${
          Dir ? "right-0" : "left-0"
        } border-black border-2 w-screen lg:w-3/5 h-screen z-10 bg-slate-100 transform ease-in-out transition-transform duration-300 ${
          Isopen ? "translate-x-0" : `${Dir ? "translate-x-full" : "-translate-x-full"}`
        }`}
      
      >
        <div>
          <div id="close" className="w-16 h-16">
            <button onClick={() => setIsopen(!Isopen)}>
              <RxCross2 />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export const Memoized_Slide_Menu= React.memo(Slide_Menu);
