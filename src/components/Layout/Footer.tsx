import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white text-center py-4 mt-auto">
      <div className="container mx-auto">
        <p>&copy; 2024 Gear Master. All rights reserved.</p>
        <p>
          Follow us on
          <a className="text-blue-400 mx-2" href="#">
            Twitter
          </a>
          ,
          <a className="text-blue-400 mx-2" href="#">
            Instagram
          </a>
          , and
          <a className="text-blue-400 mx-2" href="#">
            Facebook
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
