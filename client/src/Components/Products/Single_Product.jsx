import React from 'react'


export default function Single_Product({Product_Data}) {
  return (
    <>
   
    <a key={Product_Data.id} href={Product_Data.href} className="group ">
        <div className="border-2 border-black ">
          <img
            src={Product_Data.imageSrc}
            alt={Product_Data.imageAlt}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{Product_Data.name}</h3>
        <p className="my-4 text-lg font-medium text-gray-900">
          {Product_Data.price}
        </p>
      </a>
  
    
    </>
  );
}
