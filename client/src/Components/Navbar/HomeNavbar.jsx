import { Link } from "react-router-dom";
import { Left_Slide_Menu } from "../Slide_Menu/Left_Slide_Menu";
import { Right_Slide_Menu } from "../Slide_Menu/Right_Slide_Menu";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import BlackLogo from "../../Assets/BlackLogo.png"
import { SignIn } from "../Auth/Auth";
import SeachPanelMobile from "../Left_Slide_Components/SeachPanelMobile";
import FashionCart from "../ShoppingCart/Fashion/FashionCart";

const NewNav =()=>{
  return (
    <>
      <div className="flex justify-evenly items-center ">
        <div id="NavSearch_Icon" className="lg:hidden w-8 h-8">
          <Left_Slide_Menu Component={<SeachPanelMobile />}  Icon={<IoIosSearch className=" w-full h-full font-bold" />} Heading="SEARCH OUR SITE"/>
        </div>

        <div id="SVGLogo" className="w-40 h-max mx-4 flex items-center  border-2 border-green-400 " >
            <Link to='/'>
            <img src={BlackLogo} alt="SamneWali" className="object-fill w-full h-full  mx-auto "></img> 
            </Link>
        </div>
        <div id="CenterNavElements" className="hidden lg:flex w-7/12 h-12 m-auto bg-gray-100 shadow-md  flex items-center gap-3  border border-gray-200 rounded">
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
        <div id="NavIcon_Group" className="flex gap-4 w-max">
        <div id="User_Icon"  className=" w-8 h-8 mx-auto hidden lg:flex">
            <Right_Slide_Menu Component={<SignIn/>} Icon={ <FiUser className="w-8 h-8"/>} Heading="" Name="Account2"/>
        </div>
        <div  className=" w-8 h-8 mx-auto hidden lg:flex">
              <FaRegHeart className="w-full h-full"/>
        </div>
        <div className="Cart_Icon w-8 h-8 mr-16">
          <Right_Slide_Menu Component={<FashionCart/>} Icon={ <FaShoppingCart className="w-full h-full"/>} Heading="SHOPPING CART" Name="Cart"/>
        </div>
        </div>

      </div>
    </>
  );
}
const Home_Sm_Nav = ()=>{
    return (
      <>
        <div className="lg:hidden w-full h-16 flex items-center  border-b-4 border-gray-200">
          <div
            id="NavSearch_Icon"
            className=" w-20 h-full mt-2 py-2"
          >
            <Left_Slide_Menu Component={<SeachPanelMobile/>} Icon={<IoIosSearch className="w-full h-8" />} Heading="SEARCH OUR SITE"/>
          </div>

          <div
            id="SVGLogo"
            className="w-auto h-full flex items-center mx-auto   border-2 border-green-400"
          >
            <img
              src={BlackLogo}
              alt="SamneWali"
              className="object-cover w-11/12 h-full stroke-2 mx-auto "
            ></img>
          </div>

          <div className="Cart_Icon w-8 h-8 mr-16">
          <Right_Slide_Menu Component={<FashionCart/>} Icon={ <FaShoppingCart className="w-full h-full"/>} Heading="SHOPPING CART" Name="Cart"/>
          </div>
        </div>
      </>
    );
}

const Home_Lg_Nav = ()=>{
    return (
        <>
        <div className="hidden lg:flex h-16 border-b-4 border-gray-200" >

        <div id="SVGLogo" className="w-40 h-full flex items-center mx-auto   border-2 border-green-400" >
            <img src={BlackLogo} alt="SamneWali" className="object-fill w-full h-full  mx-auto "></img> 
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
            <div id="User_Icon"  className=" w-8 h-8 mx-auto">
            <Right_Slide_Menu Component={<SignIn/>} Icon={ <FiUser className="w-8 h-8"/>} Heading="" Name="Account3"/>
            </div>
            <div  className=" w-8 h-8 mx-auto">
              <FaRegHeart className="w-full h-full"/>
            </div>
            <div id="Cart_Icon" className=" w-8 h-8 mx-auto">
            <Right_Slide_Menu Component={<FashionCart/>} Icon={ <FaShoppingCart className="w-8 h-8"/>} Heading="SHOPPING CART" Name="Cart2"/>
           </div>
          </div>
           
        </div>
        </>
    )
}

export const Nav =()=>{
    return (
        <>
         {/* <Home_Lg_Nav/>
         <Home_Sm_Nav/> */}
         <NewNav/>
        </>
    )
   
}