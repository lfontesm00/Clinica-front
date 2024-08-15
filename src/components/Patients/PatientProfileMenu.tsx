import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faNotesMedical,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

// Definição da interface Consulta
interface Consulta {
  id: string;
  data: string;
  medico: string;
}

// Definição da interface Patient com consultas opcionais
interface Patient {
  _id: string;
  nome: string;
  cpf: string;
  data_nascimento: string;
  endereco: string;
  consultas?: Consulta[]; // tornando consultas opcional
}

// Definição da interface das propriedades do componente PatientProfileMenu
interface PatientProfileMenuProps {
  patient: Patient;
  onClose: () => void; // Função para fechar o modal
}

const PatientProfileMenu: React.FC<PatientProfileMenuProps> = ({
  patient,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState("profile"); // Estado para controlar a aba ativa

  return (
    <div className="p-4 relative bg-white rounded shadow-md max-w-md mx-auto mt-16">
      <button
        className="absolute top-2 right-2 p-2  rounded-full"
        onClick={onClose} // Chama a função de fechamento
      >
        <FontAwesomeIcon icon={faTimes} className="text-gray-700" />
      </button>
      <div className="flex items-center mb-8">
        <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mr-4">
          <FontAwesomeIcon icon={faUser} className="text-4xl text-gray-600" />
        </div>
        <div className="flex-1">
          <p className="mb-2">
            <strong>Nome:</strong> {patient.nome}
          </p>
          <p className="mb-2">
            <strong>CPF:</strong> {patient.cpf}
          </p>
          <p className="mb-2">
            <strong>Data de Nascimento:</strong> {patient.data_nascimento}
          </p>
          <p className="mb-2">
            <strong>Endereço:</strong> {patient.endereco}
          </p>
        </div>
      </div>
      <div className="border-t border-gray-300 mt-4 pt-4">
        <div className="flex items-center space-x-4">
          <button
            className={`flex items-center space-x-2 ${
              activeTab === "profile" ? "font-semibold text-blue-500" : ""
            }`}
            onClick={() => setActiveTab("profile")}
          >
            <FontAwesomeIcon icon={faUser} />
            <span>Perfil Paciente</span>
          </button>
          <button
            className={`flex items-center space-x-2 ${
              activeTab === "consultas" ? "font-semibold text-blue-500" : ""
            }`}
            onClick={() => setActiveTab("consultas")}
          >
            <FontAwesomeIcon icon={faNotesMedical} />
            <span>Consultas</span>
          </button>
        </div>
        {/* Conteúdo dinâmico baseado na aba ativa */}
        {activeTab === "profile" && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Perfil Paciente</h2>
            <p className="mb-2">
              <strong>Nome:</strong> {patient.nome}
            </p>
            {/* Adicione mais campos conforme necessário */}
          </div>
        )}
        {activeTab === "consultas" && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Consultas</h2>
            {patient.consultas && patient.consultas.length > 0 ? (
              patient.consultas.map((consulta) => (
                <div key={consulta.id} className="mt-2">
                  <p className="mb-1">
                    <strong>Data da Consulta:</strong> {consulta.data}
                  </p>
                  <p className="mb-1">
                    <strong>Médico:</strong> {consulta.medico}
                  </p>
                  {/* Adicione mais detalhes da consulta conforme necessário */}
                </div>
              ))
            ) : (
              <p>Nenhuma consulta registrada.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientProfileMenu;
