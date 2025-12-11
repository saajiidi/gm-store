import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const OrderSuccess: React.FC = () => {
    // Generate a random order number
    const orderNumber = Math.floor(100000 + Math.random() * 900000);

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-xl text-center">
                <div className="flex justify-center mb-6">
                    <FaCheckCircle className="text-6xl text-green-500 animate-bounce" />
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Placed!</h1>
                <p className="text-gray-600 mb-8">
                    Thank you for your purchase. Your order has been received and is being processed.
                </p>

                <div className="bg-gray-100 p-4 rounded-md mb-8">
                    <p className="text-sm text-gray-500">Order Number</p>
                    <p className="text-xl font-mono font-bold text-gray-800">#{orderNumber}</p>
                </div>

                <p className="text-sm text-gray-500 mb-8">
                    You will receive an email confirmation shortly with your order details.
                </p>

                <Link
                    to="/"
                    className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-full transition-colors flex items-center justify-center"
                >
                    Continue Shopping <FaArrowRight className="ml-2" />
                </Link>
            </div>
        </div>
    );
};

export default OrderSuccess;
