import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
export function Left_Slide_Menu() {
  const [Isopen,setIsopen]=useState(false);
 
return (
  <>
  <div id="Hamburger_Menu" className=" mx-auto w-8 h-8  border-2 border-teal-400 ">
              <button onClick={()=>{setIsopen(true)}}>
              <GiHamburgerMenu className="w-full h-full"  />
              </button>
  </div>

 
  <aside id="Side_Menu" className={` absolute top-0 left-0 overflow-auto  border-black border-2 w-screen h-screen z-10 bg-slate-100 transform ease-in-out transition-transform duration-300
  ${Isopen ? 'translate-x-0' : '-translate-x-full'}` }>
    <div>
      <div id="close" className=" w-16 h-16 ">
      <button onClick={()=>{setIsopen(false)}}>
             <RxCross2/>
      </button>
      </div>
      <div>
      leftmenu
      </div>
    </div>
  </aside>
  </>
);
}