import { Link, useNavigate } from "react-router-dom";
import { Left_Slide_Menu } from "../Slide_Menu/Left_Slide_Menu";
import { Right_Slide_Menu } from "../Slide_Menu/Right_Slide_Menu";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import BlackLogo from "/Assets/BlackLogo.avif";
import { SignIn } from "../Auth/Auth";
import SeachPanelMobile from "../Left_Slide_Components/SeachPanelMobile";
import FashionCart from "../ShoppingCart/Fashion/FashionCart";
import UserMain from "../User/UserMain";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../../Redux/User/User_Atom";
import { categoryState } from "../../Redux/Category/MainCategoryAtom";
const NewNav = () => {
  const MainCategory = useRecoilValue(categoryState);
  const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    if (selectedCategory !== "All Categories") {
      navigate(`/Category/${selectedCategory}`);
    }
    if (selectedCategory == "All Categories") {
      navigate(`/Category/All`);
    }
  };
  return (
    <>
      <div className="flex justify-evenly items-center ">
        <div id="NavSearch_Icon" className="lg:hidden w-8 h-8">
          <Left_Slide_Menu
            Component={<SeachPanelMobile />}
            Icon={<IoIosSearch className=" w-full h-full font-bold" />}
            Heading="SEARCH OUR SITE"
          />
        </div>

        <Link to="/">
          <img
            id="SaamneWali_Logo"
            src={BlackLogo}
            width="160" // Set explicit width & height to prevent layout shifts
            height="74"
            alt="Saamne Wali Logo"
            fetchpriority="high" // Critical: Prioritizes this image for loading
            decoding="async" // Prevents render-blocking
            className="object-cover w-40 h-16 border-2 border-green-400"
          />
        </Link>

        <div
          id="CenterNavElements"
          className="hidden lg:flex w-7/12 h-12 m-auto bg-gray-100 shadow-md  flex items-center gap-3  border border-gray-200 rounded"
        >
          <div
            id="NavDropDown"
            className="h-5/6 flex items-center gap-2 bg-gray-100 border-gray-300 pr-2"
          >
            <select
              className="font-sans focus:outline-none bg-gray-100 text-base text-zinc-700"
              onChange={handleCategoryChange}
            >
              <option value="All Categories">All Categories</option>
              {MainCategory &&
                MainCategory.length > 0 &&
                MainCategory.map((item) => (
                  <option key={item.id} value={item.Name}>
                    {item.Name}
                  </option>
                ))}
            </select>
            <span className="text-xl text-gray-400"> | </span>
          </div>

          <div
            id="NavSearchBox"
            className="flex w-full h-full items-center gap-2 mx-auto"
          >
            <input
              type="search"
              placeholder="Search for Products "
              className="w-full focus:outline-none placeholder:font-sans placeholder:text-zinc-700 text-sm bg-gray-100"
            />
          </div>
          <button className="w-40 h-full rounded-md bg-black text-white ">
            Search
          </button>
        </div>
        <div id="NavIcon_Group" className="flex gap-4 w-max">
          <div id="User_Icon" className=" w-8 h-8 mx-auto hidden lg:flex">
            <Right_Slide_Menu_User />
          </div>
          <div className=" w-8 h-8 mx-auto hidden lg:flex">
            <FaRegHeart className="w-full h-full" />
          </div>
          <div className="Cart_Icon w-8 h-8 mr-16">
            <Right_Slide_Menu
              Component={<FashionCart />}
              Icon={<FaShoppingCart className="w-full h-full" />}
              Heading="SHOPPING CART"
              Name="Cart"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const Right_Slide_Menu_User = () => {
  const User = useRecoilValue(userState);
  console.log("Right_Slide_Menu_User " + User);

  return (
    <>
      <Right_Slide_Menu
        Component={User == null ? <SignIn /> : <UserMain />}
        Icon={<FiUser className="w-8 h-8" />}
        Heading=""
        Name={User == null ? "Account2" : "dashboard"}
      />
    </>
  );
};

export const Nav = () => {
  return (
    <>
      {/* <Home_Lg_Nav/>
         <Home_Sm_Nav/> */}
      <NewNav />
    </>
  );
};
