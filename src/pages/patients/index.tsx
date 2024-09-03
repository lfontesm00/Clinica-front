import React, { useState, useEffect } from "react";

import NavbarHome from "../../components/Common/NavbarHome";
import Sidebar from "../../components/Common/Sidebar";
import Footer from "../../components/Common/Footer";
import HeaderWithAddButton from "../../components/Patients/AddButton";
import SearchFilterArea from "../../components/Patients/SearchFilter";
import PatientList from "../../components/Patients/PatientList";
import FormularioPaciente from "../../components/Patients/RegisterPatient";
import PatientProfileMenu from "../../components/Patients/PatientProfileMenu";

import { getPatients } from "../../services/useFetch/patients";

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

const Patients: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null); // Estado para armazenar o paciente selecionado

  const fetchPatients = async () => {
    try {
      const response = await getPatients();
      if (!response.ok) {
        throw new Error("Erro ao buscar pacientes");
      }
      const data = await response.json();
      setPatients(data);
    } catch (error) {
      console.error("Erro ao buscar pacientes:", error);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const handleAddPatient = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleEditPatient = (id: string) => {
    // Lógica para editar paciente
  };

  const handleDeletePatient = async (id: string) => {
    try {
      console.log(`Iniciando a deleção do paciente com id: ${id}`);
      const response = await fetch(`http://localhost:5000/api/patients`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: id }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Erro na resposta da API:", errorData);
        throw new Error("Erro ao deletar paciente");
      }
      console.log("Paciente deletado com sucesso");
      const updatedPatients = patients.filter((patient) => patient._id !== id);
      setPatients(updatedPatients);
    } catch (error) {
      console.error("Erro ao deletar paciente:", error);
    }
  };

  const handleViewProfile = (patient: Patient) => {
    setSelectedPatient(patient);
  };

  const handleRegisterPatient = async (patient: any) => {
    try {
      const response = await fetch("http://localhost:5000/api/patients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patient),
      });
      if (!response.ok) {
        throw new Error("Erro ao registrar paciente");
      }
      const responseData = await response.json();
      const updatedPatients = [...patients, responseData];
      setPatients(updatedPatients);
      handleCloseForm();
    } catch (error) {
      console.error("Erro ao registrar paciente:", error);
    }
  };

  const handleCloseProfile = () => {
    setSelectedPatient(null);
  };

  return (
    <div className="flex h-screen flex-col">
      <NavbarHome />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto p-4 relative">
          <HeaderWithAddButton onAddPatient={handleAddPatient} />
          <SearchFilterArea />
          <PatientList
            patients={patients}
            onEdit={handleEditPatient}
            onDelete={handleDeletePatient}
            onViewProfile={handleViewProfile}
          />
          {showForm && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="fixed inset-0 bg-black opacity-50"></div>
              <div className="bg-white p-8 rounded shadow-md w-full max-w-md max-h-screen z-10 overflow-auto mt-16 mb-16">
                <FormularioPaciente
                  onClose={handleCloseForm}
                  onRegister={handleRegisterPatient}
                />
              </div>
            </div>
          )}
          {/* Renderizar o perfil do paciente se um paciente estiver selecionado */}
          {selectedPatient && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="fixed inset-0 bg-black opacity-50"></div>
              <div className="bg-white p-8 rounded shadow-md w-full max-w-md max-h-screen z-10 overflow-auto mt-16 mb-16">
                <PatientProfileMenu
                  patient={selectedPatient}
                  onClose={handleCloseProfile} // Passando a função de fechamento
                />
              </div>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Patients;
