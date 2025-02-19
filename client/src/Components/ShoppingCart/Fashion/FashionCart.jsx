import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "../../../Redux/Cart/Cart_Atom";
import { RiDeleteBin6Line } from "react-icons/ri";
export default function FashionCart() {
  const [Cart, setcartState] = useRecoilState(cartState);

  const removeItemHandler = (id, Command = "") => {
    setcartState((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.ProductID === id
      );
      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        if (
          updatedCart[existingProductIndex].quantity >= 1 &&
          Command.toUpperCase() != "DELETE"
        ) {
          // Decrease quantity if it's more than 1
          updatedCart[existingProductIndex] = {
            ...updatedCart[existingProductIndex],
            quantity: updatedCart[existingProductIndex].quantity - 1,
          };
          //updatedCart[existingProductIndex].quantity -= 1;
          return updatedCart;
        } else {
          console.log(Command);
          return updatedCart.filter((item) => item.ProductID !== id);
        }
      }
      return prevCart; // If item doesn't exist, return the cart as is
    });
  };
  const addItemHandler = (id) => {
    setcartState((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.ProductID === id
      );

      if (existingProductIndex !== -1) {
        console.log("reached");
        // If the product exists, increment its quantity
        //     const updatedCart = [...prevCart];
        const updatedCart = [...prevCart];
        console.log(
          "exist +",
          updatedCart[existingProductIndex],
          existingProductIndex
        );

        //     updatedCart[existingProductIndex].quantity += 1;
        //     return updatedCart;

        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          quantity: updatedCart[existingProductIndex].quantity + 1,
        };
        return updatedCart;
      }
    });
  };
  return (
    <>
      {Cart.map((item, index) => {
        // console.log(JSON.stringify(item));
        return (
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
                className=" border-2 border-black h-full w-full"
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
                <button onClick={() => addItemHandler(item.ProductID)}>
                  +
                </button>
              </div>
            </div>
            <div className="m-2 text-xl">
              <button
                onClick={() => removeItemHandler(item.ProductID, "Delete")}
              >
                <RiDeleteBin6Line />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
