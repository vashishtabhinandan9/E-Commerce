import React from "react";
import { FiUser } from "react-icons/fi";
import { MdShoppingBag } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../../Redux/User/User_Atom";

export default function UserMain() {
  const [User, setUserState] = useRecoilState(userState);
  console.log("Userslider");
  const DashBoard_Items = [
    {
      id: "User",
      icon: <FiUser className="w-full h-full" />,
      name: "UserInfo",
      action: () => {},
    },
    {
      id: `Order`,
      icon: <MdShoppingBag className="w-full h-full" />,
      name: "Order",
      action: () => {},
    },
    {
      id: `Logout`,
      icon: <CiLogout className="w-full h-full " />,
      name: "Logout",
      action: () => {
        localStorage.clear();
        console.log("logout");
        setUserState(null);
      },
    },
  ];

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center ">
        {DashBoard_Items.map((item) => {
          return (
            <>
              <div
                key={item.id}
                className="my-2 w-80 flex justify-center items-center border-2 border-black "
              >
                <div className="w-8 h-8 ">{item.icon}</div>
                <button
                  className="w-40 text-xl font-semibold"
                  onClick={item.action}
                >
                  {item.name}
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
