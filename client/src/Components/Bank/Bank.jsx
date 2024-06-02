import { PiCoinsBold } from "react-icons/pi";
import { BiSolidDiscount } from "react-icons/bi";
import { FaShareAlt } from "react-icons/fa";

import { Popover, Transition } from '@headlessui/react'
import { FaChevronRight } from "react-icons/fa";
import { GoGift } from "react-icons/go";
import { FiShoppingBag } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { LuUserPlus } from "react-icons/lu";
import { Fragment } from 'react'

function PopUpWaysToEarn() {
  
const ArrWaysToEarn = [
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
    <div className="w-max z-10 px-4">
      <Popover className="">
        {({ open }) => (
          <>
            <Popover.Button
              className={`group  text-xl w-max   focus:outline-none `}
            >
              <FaChevronRight
                className={`text-gray-500  float-bottom h-4 w-4 `}
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
              <Popover.Panel className="absolute left-1/2  mt-3 h-max  w-10/12  -translate-x-1/2 transform px-4 rounded-3xl ">
                <div className="overflow-scroll h-{40%} rounded-3xl shadow-lg ">
                <h1 className="sticky top-0 w-full h-20 z-10 bg-white pt-8 text-2xl font-normal text-black ">Ways to Earn</h1> 
                <hr className="w-11/12 mx-auto bg-black"></hr>
                  <div className="relative grid gap-4 bg-white p-8 ">
                    {ArrWaysToEarn.map((item,index) => (
                      <div  key={index} className="">
                      <div
                        className=" flex justify-center mb-2 gap-2 items-center rounded-lg  transition duration-150 ease-in-out hover:bg-gray-50 "
                      >
                       <div >
                        {item.icon}
                        </div> 
                        <div className="w-2/3">
                          <p className="text-lg font-light text-nowrap  text-gray-900">
                            {item.name}
                          </p>
                          <p className="text-sm font-normal text-nowrap text-gray-500">
                            {item.description}
                          </p>
                        </div>
                        
                      </div>
                      <hr className="w-11/12 text-center  bg-black"></hr>
                      </div>
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
      Description:`Use Coins to Buy Prdoucts`,
      Extra:
      <>
       <div className=' my-2 justify-center text-2xl flex gap-5'>
        <span className="flex text-3xl font-light " >
      <PiCoinsBold className='text-5xl mx-4  text-orange-300'/> 0
      </span> 
      </div>
      <div className="font-light flex justify-center item-center"><p className="h-full text-xl ">SeeMore ways to earn </p>  <PopUpWaysToEarn/></div> 
      </>
     
      
    },
    {
      Heading:"Coupon",
      Description:`Use Coupon to Get Heavy Discounts`,
      Extra:<span className='my-2 mx-auto text-3xl font-light flex justify-center align-center gap-5'>
      <BiSolidDiscount className='text-5xl -rotate-45 text-red-500'/> 
      <div>0</div>
      </span>  
    },
    {
      Heading:"Referral",
      Description:`Give your friends a reward and claim your own when they make a purchase`,
      Extra:<div className='  mx-auto h-11/12 text-3xl flex-col space-y-4 align-center'>
      
      <span className='flex  justify-center mx-auto  align-center gap-4 '>
      <FaShareAlt className='text-3xl   text-green-500'/> 
      <p className='text-xl font-light w-4/6 text-left'>They get 10% off coupon</p>
      </span>

      <span className='flex  justify-center  gap-4'>
      <FaShareAlt className='text-3xl   text-green-500'/> 
      <p className='text-xl font-light w-4/6 text-left '>You get 10% off coupon</p>
      </span>

      </div> 
       
    }
  ]
  
  return (
    <>
      <div className="w-full  my-12 ">
        {
          Content.map((item,index)=>{
            
            return(
              <div
              key={index}
              id="Bank_Content_Repeater"
              className=" h-max w-11/12 rounded-lg text-center bg-white shadow-xl my-4 mx-auto py-4 "
            >
              <h1 className='antialiased text-xl font-medium text-black'>{item.Heading}</h1>
              <p className="font-normal  px-4 my-4 text-slate-600">{item.Description}</p>

              {item.Extra}
             
            </div> 
            )
          })
        }
      

     
      </div>
    </>
  );
}

