import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faUser,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

interface FormData {
  name: string;
  cpf: string;
  birthDate: string;
  address: string;
  ja_fez_cirurgia: boolean;
  ja_fez_tratamento_medico: boolean;
  uso_continuo_medicamento: boolean;
  alergia_medicamento: boolean;
  dificuldade_cicatrizacao: boolean;
  sangramento_exagerado: boolean;
  esta_gestante: boolean;
  problemas_figado_rim: boolean;
  diabetes: boolean;
  hipertensao: boolean;
  problema_cardiaco: boolean;
  problema_renal: boolean;
  asmatico: boolean;
  fumante: boolean;
  uso_cigarro_eletronico: boolean;
  tonturas: boolean;
  doenca_familia: boolean;
  comentarios_adicionais: string;
}

interface PatientItemProps {
  key: string;
  name: string;
  cpf: string;
  birthDate: string;
  address: string;
  onEdit: () => void;
  onDelete: () => void;
  onViewProfile: () => void;
}

const PatientItem: React.FC<PatientItemProps> = ({
  key,
  name,
  cpf,
  birthDate,
  address,
  onEdit,
  onDelete,
  onViewProfile,
}) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    cpf: "",
    birthDate: "",
    address: "",
    ja_fez_cirurgia: false,
    ja_fez_tratamento_medico: false,
    uso_continuo_medicamento: false,
    alergia_medicamento: false,
    dificuldade_cicatrizacao: false,
    sangramento_exagerado: false,
    esta_gestante: false,
    problemas_figado_rim: false,
    diabetes: false,
    hipertensao: false,
    problema_cardiaco: false,
    problema_renal: false,
    asmatico: false,
    fumante: false,
    uso_cigarro_eletronico: false,
    tonturas: false,
    doenca_familia: false,
    comentarios_adicionais: "",
  });

  const handleDeleteClick = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmDelete = () => {
    onDelete();
    setShowConfirmModal(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmModal(false);
  };

  const handleEditClick = () => {
    setShowFormModal(true);
    setFormData({
      name,
      cpf,
      birthDate,
      address,
      ja_fez_cirurgia: false, // Altere isso para os valores reais se necessário
      ja_fez_tratamento_medico: false,
      uso_continuo_medicamento: false,
      alergia_medicamento: false,
      dificuldade_cicatrizacao: false,
      sangramento_exagerado: false,
      esta_gestante: false,
      problemas_figado_rim: false,
      diabetes: false,
      hipertensao: false,
      problema_cardiaco: false,
      problema_renal: false,
      asmatico: false,
      fumante: false,
      uso_cigarro_eletronico: false,
      tonturas: false,
      doenca_familia: false,
      comentarios_adicionais: "",
    });
  };

  const handleFormSubmit = () => {
    // Lógica para atualizar o paciente
    console.log("Form data submitted:", formData);
    setShowFormModal(false);
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, type, checked, value } = e.target as HTMLInputElement;

    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
        <div className="flex-1">
          <p>
            <strong>Nome:</strong> {name}
          </p>
          <p>
            <strong>CPF:</strong> {cpf}
          </p>
          <p>
            <strong>Data de Nascimento:</strong> {birthDate}
          </p>
          <p>
            <strong>Endereço:</strong> {address}
          </p>
        </div>
        <div className="flex space-x-2">
          <button
            className="p-2 border rounded-lg bg-blue-200"
            onClick={handleEditClick}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button
            className="p-2 border rounded-lg bg-red-200"
            onClick={handleDeleteClick}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button
            className="p-2 border rounded-lg bg-green-200"
            onClick={onViewProfile}
          >
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      </div>

      {showConfirmModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <p className="mb-4">Tem certeza que deseja deletar o paciente?</p>
            <div className="flex justify-end space-x-2">
              <button
                className="p-2 border rounded-lg bg-red-200"
                onClick={handleConfirmDelete}
              >
                Confirmar
              </button>
              <button
                className="p-2 border rounded-lg bg-blue-200"
                onClick={handleCancelDelete}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {showFormModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto relative">
            <button
              className="absolute top-2 right-2 p-2  rounded-full"
              onClick={() => setShowFormModal(false)}
            >
              <FontAwesomeIcon icon={faTimes} className="text-gray-700" />
            </button>
            <h2 className="text-xl mb-4">
              {step === 1 ? "Etapa 1" : "Etapa 2"}
            </h2>
            {step === 1 ? (
              <div>
                <label className="block mb-2">
                  Nome:
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="border rounded p-2 w-full"
                  />
                </label>
                <label className="block mb-2">
                  CPF:
                  <input
                    type="text"
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleFormChange}
                    className="border rounded p-2 w-full"
                  />
                </label>
                <label className="block mb-2">
                  Data de Nascimento:
                  <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleFormChange}
                    className="border rounded p-2 w-full"
                  />
                </label>
                <label className="block mb-2">
                  Endereço:
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleFormChange}
                    className="border rounded p-2 w-full"
                  />
                </label>

                <button
                  className="p-2 border rounded-lg bg-blue-200 mt-4"
                  onClick={handleNextStep}
                >
                  Próxima Etapa
                </button>
              </div>
            ) : (
              <div>
                {/* Campos booleanos */}
                {/* Adicione todos os campos booleanos aqui */}

                <div className="flex justify-between mt-4">
                  <button
                    className="p-2 border rounded-lg bg-blue-200"
                    onClick={handlePreviousStep}
                  >
                    Etapa Anterior
                  </button>
                  <button
                    className="p-2 border rounded-lg bg-green-200"
                    onClick={handleFormSubmit}
                  >
                    Salvar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientItem;
