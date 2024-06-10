import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <title>Gear Master</title>

      <Navbar />
      <main className="flex-grow mt-16">{children}</main>
      <body>
        <div id="root"></div>
        <script src="main.js"></script>
      </body>

      <Footer />
    </div>
  );
};

export default Layout;




