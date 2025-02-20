import React, { useEffect, useState, useCallback } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Keep this if it's critical; otherwise, consider loading it conditionally
import { categoryState } from "../../Redux/Category/MainCategoryAtom";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import axiosInstance from "../../Utils/Axios";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Memoized arrow components
const NextArrow = React.memo((props) => (
  <div
    className={props.className}
    style={{ ...props.style, backgroundColor: "#e23744" }}
    onClick={props.onClick}
    aria-label="Next slide"
  />
));

const PrevArrow = React.memo((props) => (
  <div
    className={props.className}
    style={{ ...props.style, backgroundColor: "#e23744" }}
    onClick={props.onClick}
    aria-label="Previous slide"
  />
));

export default function CategoryCarousel(props) {
  const [Categories, setCategory] = useState([]);
  const [MainCategory, setMainCategory] = useRecoilState(categoryState);

  // Debugging: Check if props.Category is passed and valid
  useEffect(() => {
    console.log("Received Category prop:", props.Category);
  }, [props.Category]);

  // Fetch data with useEffect
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        if (props.Category && props.Category !== "") {
          const SubCategory = await axiosInstance.get(
            `/category/${props.Category}`
          );
          const subcategories = SubCategory.data.subcategories;

          if (subcategories && subcategories.length > 0) {
            setCategory(subcategories);
          } else {
            setCategory([]); // No subcategories found
          }
        } else {
          const Category = await axiosInstance.get("/category/getAll");
          setCategory(Category.data.data);
          setMainCategory(Category.data.data);
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    fetchCategories();
  }, [props.Category]);

  // Slider settings
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
        settings: { slidesToShow: 5, slidesToScroll: 2, infinite: true },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 4, slidesToScroll: 1, initialSlide: 2 },
      },
      { breakpoint: 480, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    ],
  };

  // Memoize the render logic to prevent unnecessary re-renders
  const renderCategoryItems = useCallback(() => {
    if (!Array.isArray(Categories)) {
      console.error("Categories is not an array", Categories);
      return null; // Avoid rendering if Categories is not valid
    }

    return Categories.map((item, index) => (
      <div key={index} className="carousel-item">
        <Link
          to={
            props.Category && props.Category !== ""
              ? props.Category === "All"
                ? `/Category/${item.Name}` // Redirect to `/Category/Electronics` if current category is "All"
                : `/Category/${props.Category}/${item.Name}` // Redirect to `/Category/All/Electronics` for other categories
              : `/Category/${item.Name}`
          }
          aria-label={`Category: ${item.Name}`}
        >
          <div className="image-container w-20 h-20 mx-auto">
            <img
              src={item.ImageUrl}
              alt={item.Name}
              loading="lazy"
              width="200"
              height="200"
              className="category-image "
            />
          </div>
          <div className="category-name text-center text-slate-700 text-xl">
            {item.Name}
          </div>
        </Link>
      </div>
    ));
  }, [Categories, props.Category]);

  return (
    <div className="carousel-container w-10/12 mx-auto mt-4 mb-2">
      <Slider {...settings}>{renderCategoryItems()}</Slider>
    </div>
  );
}
