import React from "react";

const Cards: React.FC = () => {
  return (
    <div className="flex-1 p-6">
      <div className="mb-6">
        <div className="bg-white p-6 shadow-md rounded-lg mb-4">Card 1</div>
        <div className="bg-white p-6 shadow-md rounded-lg">Card 2</div>
      </div>
      <div className="bg-white p-6 shadow-md rounded-lg h-96">
        {/* Área para o conteúdo de "All Apartments" */}
      </div>
    </div>
  );
};

export default Cards;
