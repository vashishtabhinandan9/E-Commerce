import { useEffect, useState, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../Utils/Axios";

const Single_Product = lazy(() =>
  import("../Components/Products/Single_Product")
);

export default function Home() {
  const navigate = useNavigate();
  const [Products, setProducts] = useState([]); // Moved inside the component

  const handleLoadMore = () => {
    navigate(`/Category/All`); // Redirect to All Products page
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get(
          `/category/All?limit=12&offset=0`
        );
        setProducts(response.data.products);
      } catch (error) {
        console.log("Error => " + error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="w-full h-12 bg-black font-medium text-xl text-white text-center">
        FREE RETURNS ON ALL ORDERS
      </div>

      {/* NEW DROPS Heading */}
      <p className="mx-auto mt-16 w-max text-2xl font-semibold underline underline-offset-4 decoration-gray-400 decoration-2">
        NEW DROPS
      </p>

      {/* New Products Section */}
      <div
        id="NewProducts"
        className="mx-auto px-4 mt-8 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {Array.isArray(Products) &&
          Products.map((item) => (
            <div key={item.id} className="w-full min-h-[300px]">
              <Suspense
                fallback={
                  <div className="w-full h-[300px] bg-gray-200 animate-pulse"></div>
                }
              >
                <Single_Product Product_Data={item} />
              </Suspense>
            </div>
          ))}
      </div>

      {/* Load More Button */}
      <div className="mb-4 text-center">
        <button
          onClick={handleLoadMore}
          className="bg-black text-white py-2 px-4 rounded-lg shadow hover:bg-gray-800"
        >
          Load More
        </button>
      </div>

      {/* TRENDING Heading */}
      <p className="mx-auto mt-16 w-max text-2xl font-semibold underline underline-offset-4 decoration-gray-400 decoration-2">
        TRENDING
      </p>

      {/* Trending Products Section */}
      <div
        id="TrendingProducts"
        className="mx-auto px-4 mt-8 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {Array.isArray(Products) &&
          Products.map((item) => (
            <div key={item.id} className="w-full min-h-[300px]">
              <Suspense
                fallback={
                  <div className="w-full h-[300px] bg-gray-200 animate-pulse"></div>
                }
              >
                <Single_Product Product_Data={item} />
              </Suspense>
            </div>
          ))}
      </div>

      {/* Load More Button */}
      <div className="mt-4 text-center">
        <button
          onClick={handleLoadMore}
          className="bg-black text-white py-2 px-4 rounded-lg shadow hover:bg-gray-800"
        >
          Load More
        </button>
      </div>
    </>
  );
}
