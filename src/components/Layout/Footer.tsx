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
  {
    name: "Address",
    icon: <FaMapMarkerAlt />,
    text: "BGB market, shop No: 29/kha, house, 19. Road, 35, sector: 7, Uttara Dhaka: 1230",
  },
  {
    name: "Location",
    icon: <FaLocationArrow />,
    url: "https://www.google.com/maps/place/23.87262756989467,90.40014224456021",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white text-center py-4 mt-auto">
      <div className="container mx-auto px-4">
        <p>&copy; 2024 Gear Master. All rights reserved.</p>
        <div className="flex flex-col md:flex-row justify-center items-center mt-4 space-y-2 md:space-y-0 md:space-x-4">
          <div className="flex items-center space-x-2">
            <span>Follow us on:</span>
            {socialMediaLinks.slice(0, 2).map((link, index) => (
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
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="mr-1" />
            <span>{socialMediaLinks[2].text}</span>
          </div>
          <a
            className="flex items-center text-white hover:text-gray-300 space-x-2"
            href={socialMediaLinks[3].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLocationArrow className="mr-1" />
            <span>View on Map</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
