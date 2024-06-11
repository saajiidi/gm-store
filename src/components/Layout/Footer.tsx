import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaLocationArrow,
} from "react-icons/fa";

const socialMediaLinks = [
  {
    name: "Facebook",
    icon: <FaFacebook />,
    url: "https://www.facebook.com/profile.php?id=61558077623189",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white text-center py-4 mt-auto">
      <div className="container mx-auto px-4">
        <p>&copy; 2024 Gear Master. All Rights Reserved.</p>
        <div className="mt-4">
          <div className="flex justify-center items-center space-x-4 mb-2">
            <span>Follow us on:</span>
            {socialMediaLinks.map((link, index) => (
              <a
                key={index}
                className="text-white hover:text-gray-300 mx-1"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <div className="flex justify-center items-center space-x-2 mt-2">
            <FaMapMarkerAlt />
            <span>BGB Market, Shop: 29/Kha, House 19, Road 35, Sector 7</span>
          </div>
          <span>Uttara, Dhaka 1230</span>
          <div className="flex justify-center items-center space-x-2 mt-2">
            <a
              className="text-white hover:text-gray-300 flex items-center space-x-2"
              href="https://www.google.com/maps/place/23.87262756989467,90.40014224456021"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLocationArrow />
              <span>View on Map</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
