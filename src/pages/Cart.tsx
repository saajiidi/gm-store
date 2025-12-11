import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaTrash, FaArrowLeft } from "react-icons/fa";

const Cart: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/products" className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full transition-colors inline-flex items-center">
          <FaArrowLeft className="mr-2" /> Start Shopping
        </Link>
      </div>
    );
  }

  const shipping = 100;
  const total = cartTotal + shipping;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center bg-white p-6 rounded-lg shadow-sm">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md mb-4 sm:mb-0 sm:mr-6" />

              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{item.category}</p>
                <p className="text-blue-600 font-bold">&#2547;{item.price.toLocaleString()}</p>
              </div>

              <div className="flex items-center mt-4 sm:mt-0">
                <div className="flex items-center border border-gray-300 rounded-full mr-6">
                  <button
                    className="px-3 py-1 hover:bg-gray-100 rounded-l-full"
                    onClick={() => updateQuantity(item.id, item.cartQuantity - 1)}
                  >-</button>
                  <span className="px-3 py-1 font-bold min-w-[2rem] text-center">{item.cartQuantity}</span>
                  <button
                    className="px-3 py-1 hover:bg-gray-100 rounded-r-full"
                    onClick={() => updateQuantity(item.id, item.cartQuantity + 1)}
                  >+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 transition-colors">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}

          <button onClick={clearCart} className="text-red-600 hover:text-red-800 font-semibold mt-4">
            Clear Cart
          </button>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-24">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-bold">&#2547;{cartTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Shipping</span>
              <span className="font-bold">&#2547;{shipping.toLocaleString()}</span>
            </div>

            <div className="border-t border-gray-300 my-4 pt-4 flex justify-between">
              <span className="text-lg font-bold">Total</span>
              <span className="text-lg font-bold text-blue-600">&#2547;{total.toLocaleString()}</span>
            </div>

            <button className="w-full bg-black hover:bg-gray-800 text-white font-bold py-4 rounded-lg transition-colors shadow-lg mt-4">
              Proceed to Checkout
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;

