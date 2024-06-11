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
    text: "BGB Market, Shop No: 29/Kha, House: 19, Road: 35, Sector: 7, Uttara, Dhaka: 1230",
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
      <div className="container mx-auto">
        <p>&copy; 2024 Gear Master. All rights reserved.</p>
        <p className="flex justify-center items-center">
          Follow us on
          {socialMediaLinks.slice(0, 2).map((link, index) => (
            <a
              key={index}
              className="text-white mx-2"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </p>
        <div className="flex justify-center items-center mt-1">
          <div className="flex items-center mx-4">
            <FaMapMarkerAlt className="mr-1" />
            <span>{socialMediaLinks[2].text}</span>
          </div>
          <a
            className="flex items-center text-white mx-4"
            href={socialMediaLinks[3].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLocationArrow className="mr-2" />
            <span>View on Map</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
