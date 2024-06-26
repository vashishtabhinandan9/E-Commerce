import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Foodlig from "../../Assets/FoodIcon-removebg-preview.png"
import GroceryImg from "../../Assets/GroceriesIcon.png"
import Electronics from "../../Assets/ElectronicsIconjpeg.jpeg"
import { IoFastFoodOutline, IoNutritionOutline } from "react-icons/io5";
import { Link} from "react-router-dom";


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
export default function CategoryCaousal() {
  var Categories=[
    {CategoryName:'Electronics',
      CategoryLink:"Electronics",
      CategoryImg:Electronics,
      alt:"Electronics Store"
  },
  {CategoryName:'Food',
  CategoryLink:"Food",
  CategoryImg:Foodlig,
   alt:"Food Store"
  },
  {CategoryName:'something',
  CategoryLink:"Food",
  CategoryImg:Foodlig,
  alt:"Food2 Store"
  },
  {CategoryName:'something',
  CategoryLink:"",
  CategoryImg:Foodlig
  },
  {CategoryName:'Grocery',
  CategoryLink:"Grocery",
  CategoryImg:GroceryImg,
  alt:"Grocery Store"
  },
  {CategoryName:'Food3',
  CategoryLink:"Food",
  CategoryImg:Foodlig,
  alt:"Food3 Store"
  },
  ]

  
  const settings = {
   
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: false,
    nextArrow:<NextArrow/>,
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
    ]
  };

  return (
    <div className="w-10/12 mx-auto mt-4 mb-2 ">
      <Slider {...settings} className="">
      { Categories.map((item,index)=>{
        return(
          <div key={index} id="CarousalItemContainer" className=" ">
            <Link to={`/Category/${item.CategoryLink}`}>
            <div className="w-20 h-20  mx-auto">
            <img src={item.CategoryImg} alt= {item.alt} className="w-full h-full mx-auto"></img> 
            </div>
           <div className="text-center text-slate-700 text-xl">
            {item.CategoryName}
           </div>
            </Link>
        
          </div>
        )
       })}
      </Slider>
    
    </div>
  )
}
