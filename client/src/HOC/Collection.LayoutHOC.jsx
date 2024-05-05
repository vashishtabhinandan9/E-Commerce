import React from 'react'
import Collection_Layout from '../Layouts/Collection.Layout'
import CategoryCaousal from '../Components/Categories/CategoryCaousal'
import Footer_HomePage from '../Components/Footer/Footer_HomePage'
export default function CollectionLayoutHOC(props) {
    //get subcategory data using useffect pass it as prop to category carousal
  return (
    <>
    <Collection_Layout >
    <div className='border-y-2 border-gray-400 '>
    {<h1 className='text-xl font-bold'>{props.CategoryName.toUpperCase()}</h1>}
    </div>
    
      <CategoryCaousal/>
      <hr className="w-full border-2 border-gray-200"/>
      {props.Component}
    </Collection_Layout>
    </>
  )
}