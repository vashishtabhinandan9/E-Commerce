
import { Slide_Menu } from "../Slide_Menu/Main_Slide_Menu";
import { User_Slide_Menu } from "../Slide_Menu/User_Slide_Menu";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import BlackLogo from "../../Assets/BlackLogo.png"
import { useState } from "react";



const Home_Sm_Nav = ()=>{

    return (
        <>
        
        <div className="lg:hidden w-full h-16 flex items-center  border-2 border-red-400">
            
        <div id="Hamburger_Menu"  className=" w-20 h-full border-2 border-red-400">
              <Slide_Menu/>
        </div>

            <div id="SVGLogo" className="w-auto h-full flex items-center mx-auto   border-2 border-green-400" >
                <img src={BlackLogo} className="object-cover w-11/12 stroke-2 mx-auto h-full"></img> 
            </div>
            <div className="Cart_Icon w-8 h-8 mx-auto">
            <FaShoppingCart className="w-full h-full" />
            </div>
        </div>
        </>   
    )
}

const Home_Lg_Nav = ()=>{
    return (
        <>
        <div className="hidden lg:flex h-16  border-2 border-red-400" >

        <div id="SVGLogo" className="w-40 h-full flex items-center mx-auto   border-2 border-green-400" >
            <img src={BlackLogo} className="object-fill w-full h-full  mx-auto "></img> 
        </div>

        <div id="CenterNavElements" className=" w-7/12 h-12 m-auto bg-gray-100 shadow-md  flex items-center gap-3  border border-gray-200 rounded">
            <div id="NavDropDown" className="h-5/6 flex items-center gap-2 bg-gray-100  border-gray-300 pr-2">
              <select className="font-sans focus:outline-none bg-gray-100 text-base text-zinc-700">
                <option className=" " value="All Categories">All Categories</option>
              </select>
              <span className="text-xl text-gray-400"> | </span>
            </div>
          
            <div id="NavSearchBox" className="flex w-full h-full items-center gap-2 mx-auto">
             <input
                type="search"
                placeholder="Search for Products "
                className="w-full focus:outline-none placeholder:font-sans placeholder:text-zinc-700 text-sm bg-gray-100"
              />
            </div>
            <button className="w-40 h-full rounded-md bg-black text-white ">Search</button>
          </div>
          
          <div id="Icons" className="gap-2 flex items-baseline m-auto">
            <div><User_Slide_Menu/></div>
            <div  className=" w-8 h-8 mx-auto">
              <FaRegHeart className="w-full h-full"/>
            </div>
            <div id="Cart_Icon" className=" w-8 h-8 mx-auto">
            <FaShoppingCart className="w-full h-full" />
            </div>
          </div>
           
        </div>
        </>
    )
}

export const Nav =()=>{
    return (
        <>
         <Home_Lg_Nav/>
    <Home_Sm_Nav/>
        </>
    )
   
}