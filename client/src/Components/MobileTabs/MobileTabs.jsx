import React, { useState, useEffect } from "react";
//import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { Right_Slide_Menu } from "../Slide_Menu/Right_Slide_Menu";

import { SignIn } from "../Auth/Auth";
import { SlGrid } from "react-icons/sl";
import { PiMedalFill } from "react-icons/pi";
import { RiQuestionnaireLine } from "react-icons/ri";
import { Up_Slide_Menu } from "../Slide_Menu/Up_Slide_Menu";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../../Redux/User/User_Atom";
import UserMain from "../User/UserMain";
export const MobileTabs = () => {
  console.log("mobile tab ");
  const allTypes = [
    {
      id: "account",
      icon: <Right_Slide_Menu_User />,
      name: "ACCOUNT",
    },
    {
      id: `help`,
      icon: (
        <Up_Slide_Menu
          Icon={<RiQuestionnaireLine className="w-5 h-5 mx-auto" />}
          Name="Help_Menu"
        />
      ),
      name: "HELP",
    },
    {
      id: `rewards`,
      icon: (
        <Up_Slide_Menu
          Icon={<PiMedalFill className="w-5 h-5 mx-auto" />}
          Name="Bank_Menu"
        />
      ),
      name: "REWARDS",
    },
    {
      id: "shop",
      icon: <SlGrid />,
      name: "SHOP",
    },
    {
      id: `wishlist`,
      icon: <FaRegHeart />,
      name: "WISHLIST",
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      <div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between md:justify-evenly text-zinc-500 border">
        {allTypes.map((items) => (
          <div
            key={items.id}
            onClick={() => items.id === "shop" && navigate(`/Category/All`)}
            className={
              "flex flex-col  relative items-center text-xl hover:text-black group"
            }
          >
            <div
              className={
                "absolute -top-2 w-8 h-2 border-t-2 group-hover:border-black"
              }
            />
            {items.icon}
            {/* Use a more appropriate heading level */}
            <h2 className="text-sm">{items.name}</h2> {/* Changed h5 to h2 */}
          </div>
        ))}
      </div>
    </>
  );
};

const Right_Slide_Menu_User = () => {
  const User = useRecoilValue(userState);
  console.log("Right_Slide_Menu_User " + User);

  return (
    <>
      <Right_Slide_Menu
        Component={User == null ? <SignIn /> : <UserMain />}
        Icon={<FiUser className="w-5 h-5 mx-auto" />}
        Heading=" "
        Name={User == null ? "Account" : "dashboard"}
      />
    </>
  );
};
