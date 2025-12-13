import React from "react";
import Slider from "../components/Slider/Slider";
import ProductListing from "../components/Products/ProductListing";
import { Link } from "react-router-dom";
import { FaShippingFast, FaShieldAlt, FaHeadset, FaUndo } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      {/* Hero / Slider Section */}
      <div className="w-full relative">
        <Slider />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center pointer-events-none">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg animate-fadeInDown">Ride with Passion</h1>
            <p className="text-lg md:text-2xl mb-8 drop-shadow-md animate-fadeInUp">Premium Gear for Every Journey</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard icon={<FaShippingFast />} title="Free Shipping" description="On orders over &#2547;5000" />
            <FeatureCard icon={<FaShieldAlt />} title="Secure Payment" description="100% secure payment" />
            <FeatureCard icon={<FaUndo />} title="Easy Returns" description="30 days return policy" />
            <FeatureCard icon={<FaHeadset />} title="24/7 Support" description="Dedicated support" />
          </div>
        </div>
      </div>

      {/* Product Listing */}
      <div className="flex-grow">
        <ProductListing />
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-gray-900 to-black py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Ready to Upgrade Your Ride?</h2>
          <p className="mb-10 text-gray-300 text-lg max-w-2xl mx-auto">Join thousands of happy cyclists today and experience the difference of premium gear.</p>
          <Link to="/products" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 text-lg">
            Shop Now
          </Link>
        </div>
      </div>

    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 group">
      <div className="text-4xl text-blue-600 mb-4 transform group-hover:scale-110 transition-transform duration-300 bg-blue-50 p-4 rounded-full">{icon}</div>
      <div>
        <h3 className="font-bold text-xl mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  )
}

export default Home;
