import React from "react";
import NavbarHome from "../components/Common/NavbarHome";
import Sidebar from "../components/Common/Sidebar";
import Footer from "../components/Common/Footer";

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen flex-col">
      {/* Navbar */}
      <NavbarHome />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        <main className="flex-1 overflow-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          {/* Área de consulta de pacientes */}
          <div className="bg-white p-6 rounded-lg shadow-lg"></div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
