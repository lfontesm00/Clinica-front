import React from "react";

const NavbarHome: React.FC = () => {
  return (
    <div className="bg-white p-4 shadow-md flex justify-between items-center w-full z-60">
      <div className="text-xl font-bold ml-64">Dentário</div>
      <div className="flex items-center mr-4">
        <span className="mr-4">Lucas Fontes</span>
        <img
          src="/path/to/profile.jpg"
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  );
};

export default NavbarHome;
