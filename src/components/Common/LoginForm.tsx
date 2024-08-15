import React from "react";
import { Link } from "react-router-dom";

const LoginForm: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md w-96">
      <h2 className="text-xl font-semibold mb-4">
        Digite seu e-mail e senha para entrar!
      </h2>
      <form className="w-full">
        <div className="mb-4">
          <label className="block text-gray-700">E-mail:</label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Senha:</label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-purple-600 text-white rounded"
        >
          ENTRAR
        </button>
      </form>
      <div className="mt-4 text-center">
        <Link to="/forgot-password" className="text-gray-600">
          Esqueceu sua senha?
        </Link>
      </div>
      <div className="mt-4 text-center">
        <span>Você não tem uma conta?</span>
        <Link to="/signup" className="text-purple-600 ml-2">
          Inscrever-se agora!
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
