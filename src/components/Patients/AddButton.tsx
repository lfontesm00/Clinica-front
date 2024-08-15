import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface HeaderWithAddButtonProps {
  onAddPatient: () => void;
}

const HeaderWithAddButton: React.FC<HeaderWithAddButtonProps> = ({
  onAddPatient,
}) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <h1 className="text-2xl font-bold">Pacientes</h1>
      <button
        className="w-12 h-12 flex items-center justify-center rounded-full text-white bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 shadow-lg"
        onClick={onAddPatient}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default HeaderWithAddButton;
