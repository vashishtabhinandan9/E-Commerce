import React, { useEffect, useState, useRef, lazy, Suspense } from "react";

import { useParams, useLocation } from "react-router-dom"; // For accessing URL parameters and location
import Filter_Sort_Menu from "../Components/Filter&Sort/Filter&Sort";
import axiosInstance from "../Utils/Axios";

// Lazy load the Single_Product component to improve performance
const Single_Product = lazy(() =>
  import("../Components/Products/Single_Product")
);

export default function Collection() {
  const { categoryName, subcategoryName } = useParams(); // Get the category name from the URL
  const location = useLocation(); // Get the current location object

  const [Products, setProducts] = useState([]); // State to store products
  const [hasMore, setHasMore] = useState(true); // Flag to check if more products are available
  const [page, setPage] = useState(1); // Track the current page for pagination
  const observer = useRef(); // Ref for Intersection Observer

  const PRODUCTS_PER_PAGE = 10; // Number of products to fetch per request

  // useEffect(() => {
  //   setProducts([]); // Clear products when category changes
  //   setPage(1); // Reset to the first page
  //   setHasMore(true); // Assume more products are available
  //   console.log("abhi2" + hasMore + subcategoryName);
  // }, [categoryName, subcategoryName, location.pathname]);
  useEffect(() => {
    const resetAndFetchProducts = async () => {
      console.log("page" + page);
      if (page === 1) {
        setProducts([]); // Clear products when category or subcategory changes
        setHasMore(true); // Reset hasMore flag
      }

      try {
        let response;
        if (subcategoryName) {
          console.log("subcategoryfilter =" + subcategoryName);

          response = await axiosInstance.get(
            `/category/${categoryName}/subcategory/${subcategoryName}?limit=${PRODUCTS_PER_PAGE}&offset=${
              (page - 1) * PRODUCTS_PER_PAGE
            }`
          );
        } else {
          console.log("categoryfilter");

          response = await axiosInstance.get(
            `/category/${categoryName}?limit=${PRODUCTS_PER_PAGE}&offset=${
              (page - 1) * PRODUCTS_PER_PAGE
            }`
          );
        }

        const fetchedProducts = response.data.products;

        if (page === 1) {
          setProducts(fetchedProducts); // Set products for the first page
        } else {
          setProducts((prevProducts) => [...prevProducts, ...fetchedProducts]); // Append new products for subsequent pages
        }

        if (fetchedProducts.length < PRODUCTS_PER_PAGE) {
          setHasMore(false); // No more products if less than requested are returned
        }
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    resetAndFetchProducts(); // Trigger the reset and fetch logic
  }, [page, categoryName, subcategoryName, location.pathname]);

  // Reset page when category, subcategory, or URL changes
  useEffect(() => {
    setPage(1); // Reset page to 1 on new category or subcategory
  }, [categoryName, subcategoryName, location.pathname]);

  // Intersection Observer for infinite scroll
  const lastProductElementRef = useRef(null);

  useEffect(() => {
    if (!hasMore) return; // Stop observing if no more products
    const observerInstance = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1); // Increment page when last product is visible
        }
      },
      {
        threshold: 1.0,
      }
    );

    if (lastProductElementRef.current) {
      observerInstance.observe(lastProductElementRef.current); // Start observing the last product
    }

    return () => {
      if (lastProductElementRef.current) {
        observerInstance.unobserve(lastProductElementRef.current); // Clean up observer on unmount
      }
    };
  }, [Products, hasMore]);

  return (
    <>
      <Filter_Sort_Menu />
      <div className="bg-white">
        <div
          id="Products"
          className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {Products.map((item, index) => {
            if (Products.length === index + 1) {
              return (
                <div
                  key={item.Name}
                  ref={lastProductElementRef}
                  className="w-full"
                >
                  <Suspense fallback={<div>Loading...</div>}>
                    <Single_Product Product_Data={item} />
                  </Suspense>
                </div>
              );
            } else {
              return (
                <div key={item.id} className="w-full">
                  <Suspense fallback={<div>Loading...</div>}>
                    <Single_Product Product_Data={item} />
                  </Suspense>
                </div>
              );
            }
          })}
        </div>
        {!hasMore && (
          <p className="text-center py-4 text-gray-500">
            No more products to load.
          </p>
        )}
      </div>
    </>
  );
}
