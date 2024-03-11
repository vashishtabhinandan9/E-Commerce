import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Foodlig from "../../Assets/Fashion.png"

const PictureCarousalCard = () => {
  return (
    <>
      <div className="w-full h-64  px-4 overflow-hidden">
        <div className="w-full h-full relative">
          <img
            src={Foodlig}
            alt="food"
            className="w-full h-full  object-fit transition duration-700 ease-in-out rounded-lg"
          />
          <div
            className="w-full h-full absolute inset-0  rounded-lg"
           
          />
        </div>
        <div className="absolute w-full left-8  bottom-2 text-white ">
          <h4 className="z-10">Onam Special</h4>
          <h6 className="z-10 flex items-center">
            onam
          </h6>
        </div>
      </div>
    </>
  );
};

export default function CategoryCaousal() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full my-40">
      <Slider {...settings}>
        <PictureCarousalCard />
        <PictureCarousalCard />
        <PictureCarousalCard />
        <PictureCarousalCard />
        <PictureCarousalCard />
        <PictureCarousalCard />
        <PictureCarousalCard />
      </Slider>
    </div>
  )
}
