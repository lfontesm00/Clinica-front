import React from "react";
import { useNavigate } from "react-router-dom"; // Importando useNavigate do react-router-dom
import Navbar from "../components/Common/Navbar"; // Importando o componente Navbar
import Footer from "../components/Common/Footer";

const RegisterStep1: React.FC = () => {
  const navigate = useNavigate(); // Obtendo a função de navegação

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aqui você pode salvar os dados preenchidos, se necessário

    // Navega para a próxima etapa (RegisterStep2)
    navigate("/register-step-2");
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">
            Para começar, preencha os campos abaixo!
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Nome</label>
              <input className="w-full mt-2 p-2 border rounded" type="text" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">CPF</label>
              <input className="w-full mt-2 p-2 border rounded" type="text" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Data de Nascimento</label>
              <input className="w-full mt-2 p-2 border rounded" type="date" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Celular</label>
              <input className="w-full mt-2 p-2 border rounded" type="text" />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white p-2 rounded mt-4"
            >
              Avançar
            </button>
          </form>
          <p className="mt-4 text-center">
            Já tem uma conta?{" "}
            <a href="/login" className="text-purple-600">
              Faça login!
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterStep1;
