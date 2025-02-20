import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "../../../Redux/Cart/Cart_Atom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function FashionCart() {
  const [Cart, setcartState] = useRecoilState(cartState);
  const navigate = useNavigate();
  const [Alert, setAlert] = useState("");
  const removeItemHandler = (id, Command = "") => {
    setcartState((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.ProductID === id
      );
      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        if (
          updatedCart[existingProductIndex].quantity >= 1 &&
          Command.toUpperCase() !== "DELETE"
        ) {
          updatedCart[existingProductIndex] = {
            ...updatedCart[existingProductIndex],
            quantity: updatedCart[existingProductIndex].quantity - 1,
          };
          return updatedCart;
        } else {
          return updatedCart.filter((item) => item.ProductID !== id);
        }
      }
      return prevCart;
    });
  };

  const addItemHandler = (id) => {
    setcartState((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.ProductID === id
      );

      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          quantity: updatedCart[existingProductIndex].quantity + 1,
        };
        return updatedCart;
      }
    });
  };

  // Calculate the total price
  const totalPrice = Cart.reduce((total, item) => {
    return total + item.Price * item.quantity;
  }, 0);
  useEffect(() => {
    if (totalPrice > 0) {
      setAlert("");
    }
  }, [totalPrice]);
  // Handle checkout (this is where you would redirect or perform actions for checkout)
  const checkoutHandler = () => {
    if (totalPrice === 0.0) {
      setAlert("Cart is Empty"); // Set the alert message when the cart is empty
    } else {
      setAlert(""); // Clear the alert if there's a valid total
      navigate("/Checkout"); // Navigate to checkout page
    }
  };

  return (
    <>
      {Cart.map((item) => (
        <div
          key={item.ProductID}
          className="flex border-2 border-green-500 h-40 w-full"
        >
          <div
            id="cart_ProductImg"
            className="border-2 border-red-400 w-5/12 m-2"
          >
            <img
              src="https://www.urbanmonkey.com/cdn/shop/files/super-suede-teal-02_1024x.jpg?v=1693807209"
              className="border-2 border-black h-full w-full"
            />
          </div>
          <div className="w-full m-2 p-4 flex flex-col items-start gap-4">
            <div>
              <h3>{item.Name}</h3>
            </div>
            <div>{item.Price}</div>
            <div className="border-2 border-black rounded-full text-3xl font-semibold w-4/12 flex justify-evenly">
              <button onClick={() => removeItemHandler(item.ProductID)}>
                -
              </button>
              {item.quantity}
              <button onClick={() => addItemHandler(item.ProductID)}>+</button>
            </div>
          </div>
          <div className="m-2 text-xl">
            <button onClick={() => removeItemHandler(item.ProductID, "Delete")}>
              <RiDeleteBin6Line />
            </button>
          </div>
        </div>
      ))}

      {/* Bottom Row for Total Price and Checkout Button */}
      <div className="flex justify-between items-center p-4 border-t-2 border-gray-300">
        <div className="text-xl font-semibold">
          Total: ${totalPrice.toFixed(2)}
        </div>
        <button
          onClick={checkoutHandler}
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
        >
          Checkout
        </button>
      </div>
      {Alert !== "" && <p className="text-red-500 text-2xl ml-4">{Alert}</p>}
    </>
  );
}
