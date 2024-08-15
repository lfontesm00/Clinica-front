import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChartLine,
  faUsers,
  faChevronLeft,
  faClinicMedical,
  faCalendarAlt,
  faNotesMedical,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 transition-all duration-300 z-50 shadow-xl ${
        isOpen ? "w-64" : "w-16"
      }`}
      style={{
        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="flex flex-col p-4 h-full">
        <button
          className={`text-white p-4 mb-4 ${
            isOpen ? "" : "flex justify-center items-center"
          }`}
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={isOpen ? faChevronLeft : faBars} size="lg" />
        </button>
        <ul className="mt-4 flex-1">
          <li className="mb-4 border-b border-purple-300 pb-2">
            <a
              href="/dashboard"
              className="flex items-center text-white hover:text-black"
            >
              <FontAwesomeIcon icon={faChartLine} className="mr-2" />
              <span className={`ml-2 ${isOpen ? "inline" : "hidden"}`}>
                Dashboard
              </span>
            </a>
          </li>
          <li className="mb-4 border-b border-purple-300 pb-2">
            <a
              href="/clinics"
              className="flex items-center text-white hover:text-black"
            >
              <FontAwesomeIcon icon={faClinicMedical} className="mr-2" />
              <span className={`ml-2 ${isOpen ? "inline" : "hidden"}`}>
                Clínicas
              </span>
            </a>
          </li>
          <li className="mb-4 border-b border-purple-300 pb-2">
            <a
              href="/patients"
              className="flex items-center text-white hover:text-black"
            >
              <FontAwesomeIcon icon={faUsers} className="mr-2" />
              <span className={`ml-2 ${isOpen ? "inline" : "hidden"}`}>
                Pacientes
              </span>
            </a>
          </li>
          <li className="mb-4 border-b border-purple-300 pb-2">
            <a
              href="/queries"
              className="flex items-center text-white hover:text-black"
            >
              <FontAwesomeIcon icon={faNotesMedical} className="mr-2" />
              <span className={`ml-2 ${isOpen ? "inline" : "hidden"}`}>
                Consultas
              </span>
            </a>
          </li>

          <li className="mb-4 border-b border-purple-300 pb-2">
            <a
              href="/scheduling"
              className="flex items-center text-white hover:text-black"
            >
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              <span className={`ml-2 ${isOpen ? "inline" : "hidden"}`}>
                Agendamentos
              </span>
            </a>
          </li>
          {/* Adicione outros links conforme necessário */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
