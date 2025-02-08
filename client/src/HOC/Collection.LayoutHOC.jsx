import React from "react";
import { useParams } from "react-router-dom";
import Collection_Layout from "../Layouts/Collection.Layout";
import CategoryCaousal from "../Components/Categories/CategoryCaousal";
export default function CollectionLayoutHOC(props) {
  //get subcategory data using useffect pass it as prop to category carousal
  const { categoryName } = useParams();
  console.log("props.categoryName = >" + categoryName);
  return (
    <>
      <Collection_Layout>
        <div className="border-y-2 border-gray-400 ">
          {
            <h1 className="text-xl font-bold ml-2">
              {categoryName.toUpperCase()}
            </h1>
          }
        </div>

        <CategoryCaousal Category={categoryName} />
        <hr className="w-full border-2 border-gray-200" />
        {props.Component}
      </Collection_Layout>
    </>
  );
}
