import { PiCoinsBold } from "react-icons/pi";
import { BiSolidDiscount } from "react-icons/bi";
import { FaShareAlt } from "react-icons/fa";

import { Popover, Transition } from '@headlessui/react'
import { IoChevronDownSharp } from "react-icons/io5";
import { GoGift } from "react-icons/go";
import { FiShoppingBag } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { LuUserPlus } from "react-icons/lu";
import { Fragment } from 'react'

function BankPopUp() {
  
const solutions = [
  {
    name: 'SingUp',
    description: 'Earn 300 Coins',
    icon: <LuUserPlus/>,
  },
  {
    name: 'Place an Order',
    description: 'Earn 300 Coins',
    
    icon: <FiShoppingBag/>,
  },
  {
    name: 'Write a Product Review',
    description:'Earn 100 Coins',
    
    icon: <GoGift/>,
  },
  {
    name: 'Follow On Instagram',
    description: 'Earn 100 Coins',
    icon: <FiInstagram/>,
  },
  {
    name: 'Share with Friends',
    description: 'Earn 200 Coins',
    icon: <FaShareAlt/>,
  },
]

  return (
    <div className="w-full max-w-sm px-4">
      <Popover className="">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? 'text-white' : 'text-black'}
                group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
            >
              <span>Solutions</span>
              <IoChevronDownSharp
                className={`${open ? 'text-orange-300' : 'text-orange-300/70'}
                  ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-orange-300/80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2  mt-3 h-full  w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 ">
                <div className="overflow-scroll h-1/2  rounded-lg shadow-lg ring-1 ring-black">
                <h1 className="sticky top-0 w-full h-20 z-10 bg-white pt-8 border-b-2 border-slate-300">Ways to Earn</h1> 
            
                  <div className="relative grid gap-8 bg-white p-7 ">
                   
                    {solutions.map((item,index) => (
                      <>
                      
                      <div
                        key={item.name}
                        className="-m-3 flex justify-center gap-4 items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                      >
                       <div >
                        {item.icon}
                        </div> 
                        <div className="w-2/3">
                          <p className="text-lg font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="text-sm font-normal text-nowrap text-gray-500">
                            {item.description}
                          </p>
                        </div>
                        
                      </div>
                      <hr className="w-11/12 text-center bg-black"></hr>
                    

                      </>
                      
                      
                    ))}
                  </div>

                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}


export default function Bank() {
 
  const Content=[
    {
      Heading:"Coins",
      Description:`Use Coins to Buy Prdoucts. 🤑`,
      Extra:
      <>
       <div className=' my-2 mx-auto text-2xl flex gap-5'>
        <span className="flex" >
      <PiCoinsBold className='text-5xl  text-orange-300'/> 0
      </span> 
      
      </div>
      <span>SeeMore ways to earn <BankPopUp/></span>
      </>
     
      
    },
    {
      Heading:"Coupon",
      Description:`Use Coupon to Get Heavy Discounts. 🤩`,
      Extra:<span className='my-2 mx-auto text-3xl flex justify-center align-center gap-5'>
      <BiSolidDiscount className='text-5xl  text-red-500'/> 
      <div>0</div>
      </span>  
    },
    {
      Heading:"Referral",
      Description:`Give your friends a reward and claim your own when they make a purchase. 💸`,
      Extra:<div className='my-3 mx-auto text-3xl flex-col  gap-4 align-center'>
      
      <span className='flex  justify-center  align-center gap-4 '>
      <FaShareAlt className='text-4xl   text-green-500'/> 
      <p className='text-xl font-semibold text-left'>They get <br/>10% off coupon</p>
      </span>

      <span className='flex  justify-center align-center gap-2'>
      <FaShareAlt className='text-4xl   text-green-500'/> 
      <p className='text-xl font-semibold text-left '>You get <br/>10% off coupon</p>
      </span>

      </div> 
       
    }
  ]
  
  return (
    <>
      <div className="w-full ">
        {
          Content.map((item,index)=>{
            
            return(
              
              <div
              
              key={index}
              id="Bank_Content_Repeater"
              className=" h-max w-5/6 rounded-lg text-center bg-white shadow-xl my-4 mx-auto border-red-800 border-2"
            >
              <h1 className='antialiased text-xl font-medium text-black'>{item.Heading}</h1>
              <p className="font-normal px-4 text-slate-600">{item.Description}</p>

              {item.Extra}
             
            </div> 
            )
          })
        }
      

        <div>

        </div>
      </div>
    </>
  );
}

