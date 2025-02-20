import { useRecoilState } from "recoil";
import { cartState } from "../../Redux/Cart/Cart_Atom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Utils/Axios";
export function Checkout() {
  const [Cart, setcartState] = useRecoilState(cartState);
  const [Alert, setAlert] = useState(""); // For alert messages
  const navigate = useNavigate();

  const totalPrice = Cart.reduce(
    (total, item) => total + item.Price * item.quantity,
    0
  );

  const removeItemHandler = (id) => {
    setcartState((prevCart) =>
      prevCart.filter((item) => item.ProductID !== id)
    );
  };

  const addItemHandler = (id) => {
    setcartState((prevCart) => {
      const updatedCart = [...prevCart];
      const productIndex = prevCart.findIndex((item) => item.ProductID === id);
      updatedCart[productIndex].quantity += 1;
      return updatedCart;
    });
  };

  const checkoutHandler = async () => {
    if (totalPrice === 0) {
      setAlert("Your cart is empty.");
    } else {
      setAlert(""); // Clear any previous alerts

      try {
        // Step 1: Get the Razorpay order from your backend using axios
        const response = await axiosInstance.post("/payment/create-order", {
          amount: totalPrice,
        });

        const orderData = response.data;
        const RazorpayKeyId = import.meta.env.VITE_RAZORPAY_KEY_ID;

        // Step 2: Trigger Razorpay's Checkout form
        const options = {
          key: RazorpayKeyId, // Replace with your Razorpay key
          amount: orderData.amount, // Amount in paise
          currency: "INR",
          name: "SaamneWali",
          description: "Payment for the order",
          order_id: orderData.id,
          handler: function (response) {
            alert("Payment Successful: " + response.razorpay_payment_id);
            // Call your backend to verify the payment and update the order status
          },
          prefill: {
            name: "Customer Name",
            email: "customer@example.com",
            contact: "9876543210",
          },
          theme: {
            color: "#528ff0",
          },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      } catch (error) {
        console.error("Error during Razorpay payment:", error);
        setAlert("An error occurred while processing the payment.");
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between p-8">
      {/* Left side - Cart Items */}
      <div className="w-full md:w-2/3 pr-4 mb-8 md:mb-0">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        {Cart.length === 0 ? (
          <p className="text-lg text-red-500">Your cart is empty!</p>
        ) : (
          Cart.map((item) => (
            <div
              key={item.ProductID}
              className="flex border-b-2 border-gray-300 py-4"
            >
              <div className="w-1/4">
                <img
                  src="https://www.urbanmonkey.com/cdn/shop/files/super-suede-teal-02_1024x.jpg?v=1693807209"
                  alt={item.Name}
                  className="w-full h-24 object-cover"
                />
              </div>
              <div className="w-3/4 flex flex-col justify-between pl-4">
                <h3 className="text-lg font-semibold">{item.Name}</h3>
                <p className="text-sm text-gray-500">Price : {item.Price}</p>
                <div className="flex items-center gap-4 mt-2">
                  <button
                    onClick={() => removeItemHandler(item.ProductID)}
                    className="text-xl text-red-600 hover:text-red-800"
                  >
                    <RiDeleteBin6Line />
                  </button>
                  <div className="flex items-center">
                    <span className="px-4">Quantity : {item.quantity}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Right side - Checkout Details */}
      <div className="w-full md:w-1/3 pl-4">
        <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
        {Alert && <p className="text-red-500 text-sm mb-4">{Alert}</p>}

        <div className="mb-6">
          <h3 className="text-lg font-medium">Billing Address</h3>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="text"
            placeholder="Street Address"
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="text"
            placeholder="City"
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="text"
            placeholder="Postal Code"
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium">Payment</h3>
          <input
            type="text"
            placeholder="Credit Card Number"
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="text"
            placeholder="Expiration Date"
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="text"
            placeholder="CVV"
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
        </div>

        <div className="flex justify-between items-center">
          <div className="font-semibold text-xl">
            Total: ${totalPrice.toFixed(2)}
          </div>
          <button
            onClick={checkoutHandler}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
