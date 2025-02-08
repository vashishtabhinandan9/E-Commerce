import React from "react";
import { Link } from "react-router-dom";

export default function Single_Product({ Product_Data }) {
  return (
    <>
      <Link
        key={Product_Data.id}
        to={`/Product/${Product_Data.id}`}
        className="group "
      >
        <div className="border-2 border-black ">
          <img
            src={Product_Data.ImageUrl}
            alt={Product_Data.Name}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{Product_Data.Name}</h3>
        <p className="my-4 text-lg font-medium text-gray-900">
          {Product_Data.Price}
        </p>
      </Link>
    </>
  );
}
