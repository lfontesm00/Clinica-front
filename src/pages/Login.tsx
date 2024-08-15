import React from "react";
import Navbar from "../components/Common/Navbar";
import LoginForm from "../components/Common/LoginForm";
import Footer from "../components/Common/Footer";

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center bg-gray-100">
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
