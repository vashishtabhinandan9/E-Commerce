
import { Popover,Transition } from '@headlessui/react';
import { GiHamburgerMenu } from "react-icons/gi";

export function Slide_Menu() {
  return (
    <Popover>
      {({ open }) => (
        /* Use the `open` state to conditionally change the direction of the chevron icon. */
        <>
          <Popover.Button>
        
        <GiHamburgerMenu className="w-full h-full text-4xl" />
          </Popover.Button>
          <Popover.Panel className="absolute z-10 right-0 mt-2 w-64 bg-white shadow-lg rounded-md">
        {/* Content of the sliding panel */}
        <div className="p-4">Your shopping cart content goes here...</div>
      </Popover.Panel>
        </>
      )}
    </Popover>
  )
}