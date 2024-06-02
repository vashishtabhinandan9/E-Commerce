import React from 'react'
import Filter_Sort_Menu from '../Components/Filter&Sort/Filter&Sort'
import Single_Product from '../Components/Products/Single_Product'
export default function Collection() {
 
  //get global collection data filter it based on the route path params you get so it here 
  const Products = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '/Category/Electronics/Product/123',
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '/Category/Electronics/Product/12',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    }
    // More products...
  ]

  return (
    <>
      <Filter_Sort_Menu />
      <div className="bg-white">
      <div id="Products" className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {Products.map((item, index) => {
          return (
            <div key={index} className='w-full'>
              <Single_Product Product_Data={item} />
            </div>
          );
        })}
      </div>
      </div>
   
    </>
  );
}
