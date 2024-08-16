import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import RegisterStep1 from "./pages/RegisterStep1";
import RegisterStep2 from "./pages/RegisterStep2";
import Home from "./pages/Home";
import Patients from "./pages/Patients/Patients";
import Dashboard from "./pages/Dashboard";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register-step-1" element={<RegisterStep1 />} />
        <Route path="/register-step-2" element={<RegisterStep2 />} />
        <Route path="/home" element={<HomeLayout />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

const HomeLayout: React.FC = () => (
  <>
    <Home />
  </>
);

export default App;
