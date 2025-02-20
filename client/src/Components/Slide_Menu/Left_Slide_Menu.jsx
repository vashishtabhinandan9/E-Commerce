import { useState, useCallback } from "react";
import { RxCross2 } from "react-icons/rx";

export function Left_Slide_Menu({ Component, Icon, Heading }) {
  const [Isopen, setIsopen] = useState(false);

  // Using useCallback to memoize the toggle function to avoid unnecessary re-renders
  const toggleMenu = useCallback(() => {
    setIsopen((prevState) => !prevState);
  }, []);

  const closeMenu = useCallback(() => {
    setIsopen(false);
  }, []);

  return (
    <>
      <div id="Hamburger_Menu" className="w-full h-full">
        <button
          id={Heading}
          className="w-full h-full"
          onClick={toggleMenu} // Reused the memoized toggle function
          aria-label={`${Heading} Menu`}
        >
          {Icon}
        </button>
      </div>

      {/* Backdrop */}
      {Isopen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-20"
          onClick={closeMenu} // Reused the memoized close function
          role="button"
          aria-label="Close Menu"
        ></div>
      )}

      <aside
        id="Side_Menu"
        className={`fixed top-0 left-0 overflow-auto border-black border-2 w-screen md:w-1/3 h-screen z-30 bg-white transform transition-transform ease-out duration-300
        ${Isopen ? "translate-x-0" : "-translate-x-full"}`}
        aria-hidden={!Isopen}
        role="dialog"
        aria-labelledby="Side_Menu"
      >
        <div>
          <div
            id="TopSection_Menu"
            className="w-full h-12 border-gray-200 border-b relative flex items-center"
          >
            <div className="mx-8 w-max">
              <h3
                id="Side_Menu_Title"
                className="font-medium font-sans text-lg antialiased text-gray-700"
              >
                {Heading}
              </h3>
            </div>

            <button
              className="w-6 h-6 mx-2 absolute right-4"
              aria-label="Close"
              onClick={closeMenu} // Reused the memoized close function
            >
              <RxCross2 className="w-full h-full text-gray-800" />
            </button>
          </div>

          <div>{Component}</div>
        </div>
      </aside>
    </>
  );
}
