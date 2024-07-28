import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { cartState } from '../../../Redux/Cart/Cart_Atom';
import { RiDeleteBin6Line } from "react-icons/ri";
export default function FashionCart() {   
    const [Cart, setcartState] = useRecoilState(cartState);
    const removeItemHandler = (id) => {
        setcartState((PrevState)=>{PrevState.filter((item)=>item.id!==id)});
      }

  return (
    <>
    {Cart.map((item,index)=>{
          <div key={1/*item.id*/} className='flex border-2 border-green-500 h-40 w-full'>
          <div id='cart_ProductImg' className='border-2 border-red-400 w-5/12 m-2'>
              <img src='https://www.urbanmonkey.com/cdn/shop/files/super-suede-teal-02_1024x.jpg?v=1693807209' 
              className=' border-2 border-black h-full w-full'/>
          </div>
          <div className='w-full m-2 p-4 flex flex-col items-start gap-4'>
              <div><h3>Product Name</h3></div>
              <div>Rs 999</div>
              <div className='border-2 border-black rounded-full text-3xl font-semibold w-4/12 flex justify-evenly'> 
              <button onClick={() => removeItemHandler(item.id)}>-</button> {} <button onClick={() => addItemHandler(item.id)}>+</button>
              </div>
          </div>
          <div className='m-2 text-xl'>
          <button  onClick={() => removeItemHandler(item.id)}><RiDeleteBin6Line/></button>
          </div>
      </div>
    })}
  

    </>
  )
}
