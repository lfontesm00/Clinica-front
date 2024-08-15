import React, { useState, ChangeEvent, FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface FormData {
  nome: string;
  email: string;
  endereco: string;
  numero_telefone: string;
  data_nascimento: string;
  cpf: string;
  comentarios: string;
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
  responsavel_informacoes: boolean;
}

interface FormularioPacienteProps {
  onClose: () => void;
  onRegister: (patient: FormData) => Promise<void>;
}

const FormularioPaciente: React.FC<FormularioPacienteProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    endereco: "",
    numero_telefone: "",
    data_nascimento: "",
    cpf: "",
    comentarios: "",
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
    responsavel_informacoes: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    const inputValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  // Função para lidar com a submissão do formulário
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/patients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Paciente cadastrado com sucesso!");
        onClose(); // Fechar modal após cadastro
      } else {
        const errorData = await response.json();
        alert("Erro ao cadastrar paciente: " + errorData.error);
      }
    } catch (error) {
      console.error("Erro ao cadastrar paciente:", error);
      alert(
        "Erro ao cadastrar paciente. Verifique o console para mais detalhes."
      );
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
      <div className="absolute top-4 right-4">
        <button onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} className="text-gray-700" />
        </button>
      </div>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Etapa 1</h2>
              <div className="mb-4">
                <label className="block text-gray-700">Nome</label>
                <input
                  className="w-full mt-2 p-2 border rounded"
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  className="w-full mt-2 p-2 border rounded"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Endereço</label>
                <input
                  className="w-full mt-2 p-2 border rounded"
                  type="text"
                  name="endereco"
                  value={formData.endereco}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">
                  Número de Telefone
                </label>
                <input
                  className="w-full mt-2 p-2 border rounded"
                  type="text"
                  name="numero_telefone"
                  value={formData.numero_telefone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">
                  Data de Nascimento
                </label>
                <input
                  className="w-full mt-2 p-2 border rounded"
                  type="date"
                  name="data_nascimento"
                  value={formData.data_nascimento}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">CPF</label>
                <input
                  className="w-full mt-2 p-2 border rounded"
                  type="text"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Comentários</label>
                <textarea
                  className="w-full mt-2 p-2 border rounded"
                  name="comentarios"
                  value={formData.comentarios}
                  onChange={handleChange}
                />
              </div>
              <button
                type="button"
                className="w-full bg-purple-600 text-white p-2 rounded mt-4"
                onClick={handleNext}
              >
                Próximo
              </button>
            </div>
          )}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Etapa 2</h2>

              <div className="mb-4">
                <label className="block text-gray-700">
                  Você já passou por alguma cirurgia?
                </label>
                <div>
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="ja_fez_cirurgia"
                      checked={formData.ja_fez_cirurgia}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Sim</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="ja_fez_cirurgia"
                      checked={!formData.ja_fez_cirurgia}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Não</span>
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">
                  Você já fez algum tratamento médico importante?
                </label>
                <div>
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="ja_fez_tratamento_medico"
                      checked={formData.ja_fez_tratamento_medico}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Sim</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="ja_fez_tratamento_medico"
                      checked={!formData.ja_fez_tratamento_medico}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Não</span>
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">
                  Você faz uso contínuo de algum medicamento?
                </label>
                <div>
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="uso_continuo_medicamento"
                      checked={formData.uso_continuo_medicamento}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Sim</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="uso_continuo_medicamento"
                      checked={!formData.uso_continuo_medicamento}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Não</span>
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">
                  Você tem alergia a algum medicamento?
                </label>
                <div>
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="alergia_medicamento"
                      checked={formData.alergia_medicamento}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Sim</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="alergia_medicamento"
                      checked={!formData.alergia_medicamento}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Não</span>
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">
                  Você tem dificuldade de cicatrização?
                </label>
                <div>
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="dificuldade_cicatrizacao"
                      checked={formData.dificuldade_cicatrizacao}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Sim</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="dificuldade_cicatrizacao"
                      checked={!formData.dificuldade_cicatrizacao}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Não</span>
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">
                  Você tem sangramento exagerado?
                </label>
                <div>
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="sangramento_exagerado"
                      checked={formData.sangramento_exagerado}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Sim</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="sangramento_exagerado"
                      checked={!formData.sangramento_exagerado}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Não</span>
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">
                  Você está gestante?
                </label>
                <div>
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="esta_gestante"
                      checked={formData.esta_gestante}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Sim</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="esta_gestante"
                      checked={!formData.esta_gestante}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Não</span>
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">
                  Você tem problemas no fígado ou rim?
                </label>
                <div>
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="problemas_figado_rim"
                      checked={formData.problemas_figado_rim}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Sim</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="problemas_figado_rim"
                      checked={!formData.problemas_figado_rim}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Não</span>
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">
                  Você tem diabetes?
                </label>
                <div>
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="diabetes"
                      checked={formData.diabetes}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Sim</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="diabetes"
                      checked={!formData.diabetes}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Não</span>
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">
                  Você tem hipertensão?
                </label>
                <div>
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="hipertensao"
                      checked={formData.hipertensao}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Sim</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="hipertensao"
                      checked={!formData.hipertensao}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Não</span>
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">
                  Você tem algum problema cardíaco?
                </label>
                <div>
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="problema_cardiaco"
                      checked={formData.problema_cardiaco}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Sim</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="problema_cardiaco"
                      checked={!formData.problema_cardiaco}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Não</span>
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">
                  Você tem algum problema renal?
                </label>
                <div>
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="problema_renal"
                      checked={formData.problema_renal}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Sim</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="problema_renal"
                      checked={!formData.problema_renal}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Não</span>
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Você é asmático?</label>
                <div>
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="asmatico"
                      checked={formData.asmatico}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Sim</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="asmatico"
                      checked={!formData.asmatico}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Não</span>
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Você é fumante?</label>
                <div>
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="fumante"
                      checked={formData.fumante}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Sim</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="fumante"
                      checked={!formData.fumante}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Não</span>
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">
                  Você usa cigarro eletrônico?
                </label>
                <div>
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="uso_cigarro_eletronico"
                      checked={formData.uso_cigarro_eletronico}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Sim</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="uso_cigarro_eletronico"
                      checked={!formData.uso_cigarro_eletronico}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Não</span>
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">
                  Você sente tonturas frequentes?
                </label>
                <div>
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="tonturas"
                      checked={formData.tonturas}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Sim</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="tonturas"
                      checked={!formData.tonturas}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Não</span>
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">
                  Você tem alguma doença familiar?
                </label>
                <div>
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="doenca_familia"
                      checked={formData.doenca_familia}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Sim</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="doenca_familia"
                      checked={!formData.doenca_familia}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Não</span>
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">
                  Comentários Adicionais
                </label>
                <textarea
                  className="w-full mt-2 p-2 border rounded"
                  name="comentarios_adicionais"
                  value={formData.comentarios_adicionais}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">
                  Responsável pelas informações?
                </label>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="responsavel_informacoes"
                      checked={formData.responsavel_informacoes}
                      onChange={handleChange}
                      required
                    />
                    <span className="ml-2">Sim</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  className="w-full bg-gray-600 text-white p-2 rounded mt-4 mr-2"
                  onClick={handlePrev}
                >
                  Anterior
                </button>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white p-2 rounded mt-4 ml-2"
                >
                  Enviar
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default FormularioPaciente;
