import React from 'react'
import { Disclosure } from '@headlessui/react'
import { FaChevronDown } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
var coolStuff =['accessories' ,
    'hats & caps' ,
    'clothing' ,
    'new arrivals' ,
    'skateboards' ,
    'eyewear' ,
    'um steals', 
    'instagram' ,
    'shop' ,
    'blog' ,
    'streetwear',
    'hub' ,
    'about', 
    'us' ,
    'offers']
function Footer_HomePage_sm(){
    return(
        <>
        <div className="bg-black text-white p-4 w-full ">
        <Disclosure>
          <Disclosure.Button className=" w-full flex justify-between items-center ">
            <span>COOL STUFF</span>
          <div><FaChevronDown className="ui-open:rotate-180 ui-open:transform h-4 w-4" /></div>
          </Disclosure.Button>
          <Disclosure.Panel className="text-white px-4">
            {coolStuff.map((item,index)=>{
                return (<>
                <li key={index} className='list-none'>{item}</li>
                </>)
            })}
          </Disclosure.Panel>
        </Disclosure>
        <br/>
        <Disclosure>
          <Disclosure.Button className=" w-full flex justify-between items-center ">
            <span>BORING STUFF</span>
          <div><FaChevronDown className="ui-open:rotate-180 ui-open:transform h-4 w-4" /></div>
          </Disclosure.Button>
          <Disclosure.Panel className="text-white px-4">
          {coolStuff.map((item,index)=>{
                return (<>
                <li key={index} className='list-none'>{item}</li>
                </>)
            })}
          </Disclosure.Panel>
        </Disclosure>
        <br/>
        <p className='text-3xl font-md'>reach out to us</p>
       <span className='flex items-center'><IoMdMail className='text-xl'/><p className='text-lg'>hello@gmail.com</p></span> 
        Follow on social media
        <div className='w-max h-12 mt-4 flex justify-center gap-4 '>
        <div className='border-2 w-10 h-10 rounded-full border-white flex items-center justify-center hover:animate-bounce'><FaFacebookF className='text-white m-auto'/></div>
        <div className='border-2 w-10 h-10 rounded-full border-white flex items-center justify-center hover:animate-bounce'><FaInstagram className='text-white m-auto'/></div>
        <div className='border-2 w-10 h-10 rounded-full border-white flex items-center justify-center hover:animate-bounce'><FaPinterest className='text-white m-auto'/></div>
        <div className='border-2 w-10 h-10 rounded-full border-white flex items-center justify-center hover:animate-bounce'><FaYoutube className='text-white m-auto'/></div>

        </div>
      </div>
        </>
    )
}

function Footer_HomePage_lg() {
  return (
    <>
      <div className="bg-black text-white p-4 w-full flex justify-around" >
        <div className="">
          <span>COOL STUFF</span>
          {coolStuff.map((item, index) => {
            return (
              <>
                <li key={index} className="list-none">
                  {item}
                </li>
              </>
            );
          })}
        </div>
        <div className="">
          <span>BORING STUFF</span>
          {coolStuff.map((item, index) => {
            return (
              <>
                <li key={index}>
                  {item}
                </li>
              </>
            );
          })}
        </div>

        <div>
          <span> reach out to us</span>
          <span className="flex items-center">
            <IoMdMail className="text-xl" />
            <p className="text-lg">hello@gmail.com</p>
          </span>
          Follow on social media
          <div className="w-max mx-auto h-12 flex justify-center gap-4 mt-2">
            <div className="border-2 w-12 h-12 rounded-full border-white flex items-center justify-center hover:animate-bounce ">
              <FaFacebookF className="text-white m-auto " />
            </div>
            <div className="border-2 w-12 h-12 rounded-full border-white flex items-center justify-center hover:animate-bounce ">
              <FaInstagram className="text-white m-auto " />
            </div>
            <div className="border-2 w-12 h-12 rounded-full border-white flex items-center justify-center hover:animate-bounce ">
              <FaPinterest className="text-white m-auto" />
            </div>
            <div className="border-2 w-12 h-12 rounded-full border-white flex items-center justify-center hover:animate-bounce ">
              <FaYoutube className="text-white m-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default function Footer_HomePage() {
  return (
    <>
    <div className='lg:hidden md:flex'><Footer_HomePage_sm/></div>
    <div className='hidden lg:flex'> <Footer_HomePage_lg/></div>
    </>
  );
}


