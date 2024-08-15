import React from "react";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";

const RegisterStep2: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">
            Para começar, preencha os campos abaixo!
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Celular</label>
              <input className="w-full mt-2 p-2 border rounded" type="text" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">E-mail</label>
              <input className="w-full mt-2 p-2 border rounded" type="email" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Confirmar E-mail</label>
              <input className="w-full mt-2 p-2 border rounded" type="email" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Senha</label>
              <input
                className="w-full mt-2 p-2 border rounded"
                type="password"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Confirmar Senha</label>
              <input
                className="w-full mt-2 p-2 border rounded"
                type="password"
              />
            </div>
            <button className="w-full bg-purple-600 text-white p-2 rounded mt-4">
              Finalizar
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

export default RegisterStep2;
