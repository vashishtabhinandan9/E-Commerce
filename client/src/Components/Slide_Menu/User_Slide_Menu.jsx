
import { Popover,Transition } from '@headlessui/react';
import { RiUser3Line } from "react-icons/ri";

export function User_Slide_Menu() {
  return (
    <Popover>
      {({ open }) => (
        /* Use the `open` state to conditionally change the direction of the chevron icon. */
        <>
          <Popover.Button>
        
        <RiUser3Line className="w-full h-full text-4xl" />
          </Popover.Button>
           
           <Transition
           enter="transition duration-100 ease-out"
           enterFrom="transform scale-95 opacity-0"
           enterTo="transform scale-100 opacity-100"
           leave="transition duration-75 ease-out"
           leaveFrom="transform scale-100 opacity-100"
           leaveTo="transform scale-95 opacity-0"
         >
            <Popover.Panel>
              <div className='w-full h-full bg-white'>
                
                 
              </div>
              
            </Popover.Panel>
         </Transition>
         </>
        
      )}
    </Popover>
  )
}