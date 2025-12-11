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
      <div className="py-12 bg-gray-50">
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
      <div className="bg-gray-900 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Ride?</h2>
        <p className="mb-8 text-gray-400">Join thousands of happy cyclists today.</p>
        <Link to="/products" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
          Shop Now
        </Link>
      </div>

    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => {
  return (
    <div className="flex items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="text-3xl text-blue-600 mr-4">{icon}</div>
      <div>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  )
}

export default Home;
