import React, { useState, useEffect } from "react";
//import { useParams, Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { Right_Slide_Menu } from "../Slide_Menu/Right_Slide_Menu";
import { SlGrid } from "react-icons/sl";
import { PiMedalFill } from "react-icons/pi";
import { RiQuestionnaireLine } from "react-icons/ri";



export const MobileTabs = () => {
    const [allTypes, setAllTypes] = useState([
      {
        id: "shop",
        icon: <SlGrid />,
        name: "SHOP",
      },
      {
        id: "account",
        icon:  <Right_Slide_Menu Icon={ <FiUser className="w-5 h-5 mx-auto"/>} Name="User_Menu"/>,
        name: "ACCOUNT",
      },
      {
        id: `wishlist`,
        icon: <FaRegHeart />,
        name: "WISHLIST",
      },
      {
        id: `rewards`,
        icon: <PiMedalFill />,
        name: "REWARDS",
      },
      {
        id: `help`,
        icon: <RiQuestionnaireLine />,
        name: "HELP",
      }
    ]);
   
    return (
      <>
        <div className ="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between md:justify-evenly text-zinc-500 border">
          {allTypes.map((items) => (
            <div key={items.id} className={"flex flex-col  relative items-center text-xl hover:text-black group"}>
              <div className={"absolute -top-2 w-8 h-2 border-t-2 group-hover:border-black  "}/> 
              {items.icon}
              <h5 className="text-sm">{items.name}</h5>
            </div>
          ))}
        </div>
      </>
    );
  };

