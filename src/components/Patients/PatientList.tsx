import React from "react";
import PatientItem from "./PatientItem";

interface Patient {
  _id: string;
  nome: string;
  cpf: string;
  data_nascimento: string;
  endereco: string;

  // outros campos do paciente
}

interface PatientListProps {
  patients: Patient[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onViewProfile: (patient: Patient) => void; // Adiciona a propriedade onViewProfile
}

const PatientList: React.FC<PatientListProps> = ({
  patients,
  onEdit,
  onDelete,
  onViewProfile, // Recebe onViewProfile como propriedade
}) => {
  return (
    <div className="space-y-4">
      {patients.map((patient) => (
        <PatientItem
          key={patient._id}
          name={patient.nome}
          cpf={patient.cpf}
          birthDate={patient.data_nascimento}
          address={patient.endereco}
          onEdit={() => onEdit(patient._id)}
          onDelete={() => onDelete(patient._id)}
          onViewProfile={() => onViewProfile(patient)} // Passa onViewProfile para PatientItem
        />
      ))}
    </div>
  );
};

export default PatientList;
