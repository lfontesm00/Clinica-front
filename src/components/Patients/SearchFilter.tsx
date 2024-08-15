import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchFilterArea: React.FC = () => {
  return (
    <div className="mb-4">
      <div className="flex items-center mb-2">
        <input
          type="text"
          className="flex-1 p-2 border rounded-l-lg"
          placeholder="Buscar paciente..."
        />
        <button className="p-2 border rounded-r-lg bg-gray-200">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="flex justify-end">
        <button className="p-2 border rounded-lg bg-gray-200">Filtrar</button>
      </div>
    </div>
  );
};

export default SearchFilterArea;
