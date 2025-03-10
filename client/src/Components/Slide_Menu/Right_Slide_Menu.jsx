import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

export function Right_Slide_Menu({ Component, Icon, Heading, Name = "" }) {
  const [Isopen, setIsopen] = useState(false);

  return (
    <>
      <button
        id={Heading}
        onClick={() => {
          setIsopen(true);
        }}
        className="w-full h-full"
        aria-label={Name}
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
        className={`fixed top-0 right-0 w-screen md:w-1/3 overflow-auto  border-black border-2 h-screen z-30  bg-white transform transition-all ease-out duration-300
        ${Isopen ? "translate-x-0" : "translate-x-full"} `}
      >
        <div className="w-full ">
          <div
            id="TopSection_Menu"
            className="w-full h-12 border-gray-200  border-b flex items-center"
          >
            <button
              className="w-6 h-6 m-2"
              aria-label="Close"
              onClick={() => setIsopen(false)}
            >
              <RxCross2 className="w-full h-full  text-gray-800 hover:{transform duaration-300 rotate-45}" />
            </button>
            <div className="mx-4">
              <h3 className="font-medium font-sans text-lg antialiased text-gray-700">
                {" "}
                {Heading}{" "}
              </h3>
              {/**heading like loginsingup cart */}
            </div>
          </div>
          <>{Component}</>
        </div>
      </aside>
    </>
  );
}
