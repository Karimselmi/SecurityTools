import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PasswordStrengthChecker from "./components/PasswordStrengthChecker";
import VulnerabilityTesting from "./components/VulnerabilityTesting";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/password-strength"
          element={<PasswordStrengthChecker />}
        />
        <Route
          path="/vulnerability-testing"
          element={<VulnerabilityTesting />}
        />
      </Routes>
    </Router>
  );
};

export default App;
