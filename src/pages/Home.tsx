import React from "react";
import NavbarHome from "../components/Common/NavbarHome";
import Sidebar from "../components/Common/Sidebar";
import Cards from "../components/Cards";
import Footer from "../components/Common/Footer";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarHome />
      <div className="flex flex-1">
        <Sidebar />
        <div className="p-4 pt-16 flex-1">
          <Cards />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
