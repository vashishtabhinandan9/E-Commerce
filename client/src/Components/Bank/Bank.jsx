import { Dialog, Transition } from '@headlessui/react'
import { PiCoinsBold } from "react-icons/pi";
import { BiSolidDiscount } from "react-icons/bi";
import { FaShareAlt } from "react-icons/fa";

export default function Bank() {
 
  const Content=[
    {
      Heading:"Coins",
      Description:`Use Coins to Buy Prdoucts. 🤑`,
      Extra:<span className=' my-2 mx-auto text-3xl flex justify-center gap-5'>
      <PiCoinsBold className='text-5xl  text-orange-300'/> 0
      </span> 
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
      Extra:<div className='my-3 mx-auto text-3xl flex-col  justify-center align-center gap-5'>
      
      <span className='flex  justify-center  align-center gap-2'>
      <FaShareAlt className='text-4xl   text-green-500'/> 
      <p className='text-xl font-semibold '>"They get <br/>10% off coupon"</p>
      </span>

      <span className='flex  justify-center align-center gap-2'>
      <FaShareAlt className='text-4xl   text-green-500'/> 
      <p className='text-xl font-semibold '>"You get <br/>10% off coupon"</p>
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
              id="Bank_Coins"
              className=" h-max w-5/6 rounded-lg text-center text-black  text-2xl font-bold bg-white shadow-xl my-4 mx-auto border-red-800 border-2"
            >
              <h1 className='antialiased'>{item.Heading}</h1>
              {item.Description}

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

