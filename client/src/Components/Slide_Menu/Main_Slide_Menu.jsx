
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export function Slide_Menu() {
const [Isopen,setIsopen]=useState(false);
return (
  <>
  <div id="Hamburger_Menu" className=" mx-auto w-8 h-8  border-2 border-teal-400 ">
              <button onClick={()=>{setIsopen(!Isopen)}}>
              <GiHamburgerMenu  />
              </button>
  </div>

 
  <aside id="Side_Menu" className={` absolute top-0 left-0  border-black border-2 w-screen h-screen z-10 bg-slate-100 transform ease-in-out transition-transform duration-300
  ${  Isopen ? 'translate-x-0' : '-translate-x-full'} ` }>
    <div>
      <div id="close" className=" w-16 h-16 ">
      <button onClick={()=>{setIsopen(!Isopen)}}>
             <RxCross2/>
      </button>
      </div>
    </div>
  </aside>
   
  
  </>
);
}