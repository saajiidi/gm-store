import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaCreditCard, FaShippingFast } from "react-icons/fa";

const Checkout: React.FC = () => {
    const { cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);

    // Shipping State
    const [shippingInfo, setShippingInfo] = useState({
        fullName: "",
        address: "",
        city: "",
        zip: "",
        phone: ""
    });

    // Payment State
    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: "",
        expiry: "",
        cvv: "",
        nameOnCard: ""
    });

    const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
    };

    const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate API call
        setTimeout(() => {
            setIsProcessing(false);
            clearCart();
            navigate("/order-success");
        }, 2000);
    };

    const shippingCost = 100;
    const grandTotal = cartTotal + shippingCost;

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8 text-center sm:text-left">Checkout</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Shipping Information */}
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center mb-6">
                                <FaShippingFast className="text-2xl text-blue-600 mr-3" />
                                <h2 className="text-xl font-bold">Shipping Information</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="col-span-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        required
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                        value={shippingInfo.fullName}
                                        onChange={handleShippingChange}
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        required
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                        value={shippingInfo.address}
                                        onChange={handleShippingChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        required
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                        value={shippingInfo.city}
                                        onChange={handleShippingChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Zip Code</label>
                                    <input
                                        type="text"
                                        name="zip"
                                        required
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                        value={shippingInfo.zip}
                                        onChange={handleShippingChange}
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                        value={shippingInfo.phone}
                                        onChange={handleShippingChange}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Payment Information */}
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center mb-6">
                                <FaCreditCard className="text-2xl text-green-600 mr-3" />
                                <h2 className="text-xl font-bold">Payment Details</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="col-span-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Card Number</label>
                                    <input
                                        type="text"
                                        name="cardNumber"
                                        placeholder="0000 0000 0000 0000"
                                        required
                                        maxLength={16}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                        value={paymentInfo.cardNumber}
                                        onChange={handlePaymentChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Expiry Date</label>
                                    <input
                                        type="text"
                                        name="expiry"
                                        placeholder="MM/YY"
                                        required
                                        maxLength={5}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                        value={paymentInfo.expiry}
                                        onChange={handlePaymentChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">CVV</label>
                                    <input
                                        type="text"
                                        name="cvv"
                                        placeholder="123"
                                        required
                                        maxLength={3}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                        value={paymentInfo.cvv}
                                        onChange={handlePaymentChange}
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Name on Card</label>
                                    <input
                                        type="text"
                                        name="nameOnCard"
                                        required
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                        value={paymentInfo.nameOnCard}
                                        onChange={handlePaymentChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isProcessing}
                            className="w-full bg-black hover:bg-gray-800 text-white font-bold py-4 rounded-lg transition-all shadow-lg text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isProcessing ? "Processing Payment..." : `Pay \u09F3${grandTotal.toLocaleString()}`}
                        </button>
                    </form>
                </div>

                {/* Order Summary Side */}
                <div className="lg:col-span-1">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-24">
                        <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                        <div className="flex justify-between mb-4">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-bold">&#2547;{cartTotal.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between mb-4">
                            <span className="text-gray-600">Shipping</span>
                            <span className="font-bold">&#2547;{shippingCost.toLocaleString()}</span>
                        </div>
                        <div className="border-t border-gray-300 my-4 pt-4 flex justify-between">
                            <span className="text-lg font-bold">Total</span>
                            <span className="text-lg font-bold text-blue-600">&#2547;{grandTotal.toLocaleString()}</span>
                        </div>
                        <div className="mt-4 text-xs text-gray-500">
                            <p>By proceeding, you agree to our Terms of Service and Privacy Policy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
