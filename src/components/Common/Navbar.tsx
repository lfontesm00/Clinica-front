import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Dentário</div>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700">
            Acompanhamentos
          </Link>
          <Link to="/register-step-1" className="text-purple-600">
            Cadastre-se
          </Link>
          <Link to="/" className="text-gray-700">
            Entre
          </Link>
          <Link to="/help" className="text-gray-700">
            Ajuda
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
