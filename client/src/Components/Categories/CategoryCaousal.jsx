import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { categoryState } from "../../Redux/Category/MainCategoryAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import "slick-carousel/slick/slick-theme.css";
//import img from "../../../public/Assets/FashionIcon-removebg-preview.png";

// import Electronics from "../../Assets/ElectronicsIconjpeg.jpeg";
import { IoFastFoodOutline, IoNutritionOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import axiosInstance from "../../Utils/Axios";
const NextArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{ ...props.style, backgroundColor: "#e23744" }}
      onClick={props.onClick}
    />
  );
};
const PrevArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{ ...props.style, backgroundColor: "#e23744" }}
      onClick={props.onClick}
    />
  );
};
export default function CategoryCaousal(props) {
  const [Categories, setCategory] = useState([]);
  const location = useLocation();
  const [MainCategory, setMainCategory] = useRecoilState(categoryState);
  console.log("props.CategoryCarousal = >" + { ...props });
  console.log("props.CategoryCarousal =>", JSON.stringify(props, null, 2));

  useEffect(() => {
    (async function () {
      try {
        if (props.Category && props.Category != "") {
          console.log("here");
          const SubCategory = await axiosInstance.get(
            //get all the subcategory based on the selcted category
            `/category/${props.Category}`
          );
          const subcategories = SubCategory.data.subcategories;

          console.log("here3");
          console.log("here2" + SubCategory.data.subcategories);
          if (subcategories && subcategories.length > 0) {
            console.log("Subcategories found:", subcategories);
            setCategory(subcategories);
          } else {
            console.log("No subcategories available for this category.");
            setCategory([]); // Clear or reset the subcategory state
          }
          //setCategory(SubCategory.data.subcategories);
        } else {
          const Category = await axiosInstance.get("/category/getAll");
          setCategory(Category.data.data);
          setMainCategory(Category.data.data);
          console.log(Category.data);
        }
      } catch (err) {
        if (err.response) {
          // Handle API error responses (e.g., 404)
          if (err.response.status === 404) {
            const errorMsg = err.response.data.message;

            if (errorMsg.includes("no subcategories")) {
              console.log(
                "No subcategories available for the selected category."
              );
              setCategory([]); // Clear subcategory state
            } else if (errorMsg.includes("No products")) {
              console.log("No products found for this category.");
              setCategory([]); // Optionally clear or show no products message
            } else {
              console.log("API Error:", errorMsg);
            }
          } else {
            // Handle other response errors (e.g., 500)
            console.log("Unexpected API error:", err.response.data.message);
          }
        } else if (err.request) {
          // Handle network errors
          console.log("No response received from server:", err.request);
        } else {
          // Handle other unexpected errors
          console.log("Error setting up the request:", err.message);
        }
      }
    })();
  }, [props.Category]);
  // var Categories = [
  //   {
  //     CategoryName: "Electronics",
  //     CategoryLink: "Electronics",
  //     CategoryImg: Electronics,
  //     alt: "Electronics Store",
  //   },
  //   {
  //     CategoryName: "Food",
  //     CategoryLink: "Food",
  //     CategoryImg: Foodlig,
  //     alt: "Food Store",
  //   },
  //   {
  //     CategoryName: "something",
  //     CategoryLink: "Food",
  //     CategoryImg: Foodlig,
  //     alt: "Food2 Store",
  //   },
  //   { CategoryName: "something", CategoryLink: "", CategoryImg: Foodlig },
  //   {
  //     CategoryName: "Grocery",
  //     CategoryLink: "Grocery",
  //     CategoryImg: GroceryImg,
  //     alt: "Grocery Store",
  //   },
  //   {
  //     CategoryName: "Food3",
  //     CategoryLink: "Food",
  //     CategoryImg: Foodlig,
  //     alt: "Food3 Store",
  //   },
  // ];

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-10/12 mx-auto mt-4 mb-2 ">
      <Slider {...settings} className="">
        {Categories.map((item, index) => {
          return (
            <div key={index} id="CarousalItemContainer" className=" ">
              <Link
                to={
                  props.Category && props.Category !== ""
                    ? props.Category === "All"
                      ? `/Category/${item.Name}` // Redirect to `/Category/Electronics` if current category is "All"
                      : `/Category/${props.Category}/${item.Name}` // Redirect to `/Category/All/Electronics` for other categories
                    : `/Category/${item.Name}`
                }
              >
                <div className="w-20 h-20  mx-auto">
                  <img
                    //src={img}
                    src={item.ImageUrl}
                    alt={item.Name}
                    loading="lazy"
                    className="w-full h-full mx-auto"
                  ></img>
                </div>
                <div className="text-center text-slate-700 text-xl">
                  {item.Name}
                </div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
