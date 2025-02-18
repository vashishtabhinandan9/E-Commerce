import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from "react-rating";
import { useParams, useLocation } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { cartState } from "../../Redux/Cart/Cart_Atom";
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
export default function Product_Info() {
  const [Cart, setCartstate] = useRecoilState(cartState);
  const [Product, setProduct] = useState({});
  const [Variation, setVariation] = useState([]);
  const [Price, setPrice] = useState(0);
  const { ProductId } = useParams();
  const [selectedOptions, setSelectedOptions] = useState({});
  useEffect(() => {
    (async function () {
      try {
        const res = await axiosInstance.get(`/product/${ProductId}`);
        const productData = res.data.data;
        setProduct(productData);
        setVariation(productData.Variations);
        console.log("Product", productData);
        console.log("Variation", productData.Variations);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    })();
  }, [ProductId]);
  // Re-run effect when ProductId changes
  const handleOptionChange = (variationId, option) => {
    setSelectedOptions((prevSelectedOptions) => {
      const updatedOptions = { ...prevSelectedOptions, [variationId]: option };
      return updatedOptions;
    });
  };

  useEffect(() => {
    // This effect runs after selectedOptions has been updated
    const maxPrice = Object.values(selectedOptions).reduce((max, option) => {
      return option.Price > max ? option.Price : max;
    }, 0);
    setPrice(maxPrice);
    console.log("Updated selectedOptions:", selectedOptions);
  }, [selectedOptions]);

  const addToCartHandler = () => {
    setCartstate((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.ProductID === Product.ProductID
      );

      if (existingProductIndex !== -1) {
        // If the product exists, increment its quantity
        const updatedCart = [...prevCart];
        console.log(
          "exist +",
          updatedCart[existingProductIndex],
          existingProductIndex
        );

        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          quantity: updatedCart[existingProductIndex].quantity + 1,
        };
        return updatedCart;
      } else {
        // If the product doesn't exist, add it with quantity 1
        const newCartItem = {
          ...Product,
          selectedOptions,
          quantity: 1,
        };
        newCartItem.Price = Price == 0 ? Product.Price : Price;
        console.log("newCartItem =", newCartItem);
        return [...prevCart, newCartItem];
      }
    });
  };

  // below Categories has to be changes to array of images of the product which will come from database
  var Categories = [
    {
      CategoryName: "something",
      CategoryLink: "Electronics",
      CategoryImg:
        "data:image/jpeg;base64,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",
    },
    { CategoryName: "something", CategoryLink: "Food", CategoryImg: "#" },
    { CategoryName: "something", CategoryLink: "Food", CategoryImg: "#" },
    { CategoryName: "something", CategoryLink: "", CategoryImg: "#" },
    { CategoryName: "something", CategoryLink: "Grocery", CategoryImg: "#" },
    { CategoryName: "something", CategoryLink: "Food", CategoryImg: "#" },
  ];
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
  // below Sizes has to be changes to array of variiation  of the product which will come from database

  return (
    <>
      <div className=" flex flex-wrap gap-2 mt-2 ">
        <div
          id="ProductImg"
          className="w-11/12 md:w-4/12 h-max border-2 border-black mx-auto my-2"
        >
          <div className="w-full h-full">
            <Slider
              {...settings}
              className=" h-max border-2 border-red-300 mx-4"
            >
              {Categories.map((item, index) => {
                return (
                  <div
                    key={index}
                    id="contain"
                    className=" h-96 border-2 border-blue-300 "
                  >
                    <div className="w-full h-full  mx-auto">
                      <img
                        src={item.CategoryImg}
                        alt={item.CategoryName}
                        className="h-full w-full  border-2 border-black "
                      ></img>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <div
          id="ProductInfo"
          className="w-full  md:w-7/12 border-2 border-green-400 mx-2 my-2 p-4"
        >
          <div className="flex justify-between text-3xl font-light">
            <h1 className="">{Product.ProductName}</h1>
            <h1>$ {Price == 0 ? Product.Price : Price}</h1>
          </div>
          <div className="flex items-center gap-4">
            <Rating
              initialRating={3}
              emptySymbol={<IoStarOutline className="text-sm" />}
              fullSymbol={<IoStar className="text-sm" />}
              readonly
            />
            <p className="text-xs">15 reviews</p>
          </div>

          <p className="text-base underline text-slate-700 text-right cursor-pointer">
            size chart
          </p>
          <div className="w-8/12 rounded-md bg-slate-100 mx-auto mt-4 p-4">
            <div>
              <form>
                {Variation &&
                  Variation.length > 0 &&
                  Variation.map((item) => (
                    <fieldset key={item.VariationID}>
                      <legend className="text-xl font-semibold">
                        Choose {item.VariationName}:
                      </legend>
                      {item.Options &&
                        item.Options.length > 0 &&
                        item.Options.map((option) => (
                          <label key={option.OptionID}>
                            <input
                              type="radio"
                              name={option.OptionName}
                              value={option.OptionID}
                              checked={
                                selectedOptions[item.VariationID]?.OptionID ===
                                option.OptionID
                              }
                              onChange={() =>
                                handleOptionChange(item.VariationID, option)
                              }
                            />
                            {option.OptionName}
                          </label>
                        ))}
                    </fieldset>
                  ))}
              </form>
            </div>
            <div className="mx-auto my-2 w-10/12  ">
              <button
                onClick={addToCartHandler}
                className=" w-full h-full p-2 rounded-md bg-black text-white text-lg font-light text-center flex justify-center items-center gap-2"
                aria-label="Add To Cart"
              >
                <FaShoppingCart className="mx-4 text-xl" /> ADD TO CART
              </button>
            </div>
          </div>

          <div>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-11/12 mx-auto  justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium hover:text-cyan-400 ">
                    <span>CORE FEATURES</span>
                    <FaChevronDown
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="w-11/12 mx-auto px-4 pb-2 pt-4 text-sm ">
                    In the depths of our sorrows and pains, we often feel like
                    lost angels, forever in chains, carrying the weight of our
                    past like a heavy yoke. But what if our mistakes and regrets
                    were actually the keys to unlocking our sets of wings meant
                    to be free, allowing us to soar higher than we ever believed
                    we could be? Let this t-shirt remind you that even in the
                    darkest part of our lives, we are still angels in flight,
                    just waiting for our wings to take us to new heights.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <hr className="w-11/12 border-t-2 border-gray-300 mx-auto   my-2"></hr>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-11/12 mx-auto  justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium hover:text-cyan-400  ">
                    <span>DESCRIPTION</span>
                    <FaChevronDown
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="w-11/12 mx-auto px-4 pb-2 pt-4 text-sm ">
                    In the depths of our sorrows and pains, we often feel like
                    lost angels, forever in chains, carrying the weight of our
                    past like a heavy yoke. But what if our mistakes and regrets
                    were actually the keys to unlocking our sets of wings meant
                    to be free, allowing us to soar higher than we ever believed
                    we could be? Let this t-shirt remind you that even in the
                    darkest part of our lives, we are still angels in flight,
                    just waiting for our wings to take us to new heights.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <hr className="w-11/12 border-t-2 border-gray-300 mx-auto   my-2"></hr>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-11/12 mx-auto  justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium hover:text-cyan-400  ">
                    <span>SHIPPING & RETURNS</span>
                    <FaChevronDown
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="w-11/12 mx-auto px-4 pb-2 pt-4 text-sm ">
                    <div className="bg-gray-100  p-4">
                      <h2 className="font-semibold text-lg ">SHIPPING</h2>
                      <br />
                      <p className="font-semibold">
                        {" "}
                        Free shipping available for orders above 500/- within
                        India.
                      </p>
                      <br />
                      Orders dispatched every day at 4 pm except on public
                      holidays. After dispatch, it takes about
                      <br />
                      <li>2 to 5 working days for metro cities</li>
                      <li>4 to 7 working days for the rest of India.</li>
                      <br />
                      We ship your order from Mumbai, Maharashtra.
                    </div>

                    <div className="bg-gray-100  p-4 mt-4">
                      <h2 className="font-semibold text-lg ">RETURNS</h2>
                      <br />
                      <ul className="list-outside list-disc ml-4">
                        <li>
                          There are no returns/exchanges on items marked as
                          SALE. In case you still wish to return the order,
                          shipping charges of Rs. 150/- will need to be borne by
                          the customer for sending the product back to us.
                        </li>
                        <li>
                          Face masks, keychains, free gifts & promotional items
                          are not returnable.
                        </li>
                        <li>
                          International orders are not eligible for any
                          return/exchanges.
                        </li>
                      </ul>

                      <br />
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </>
  );
}
