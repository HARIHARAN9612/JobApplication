import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./Fresh/Login";
import Signup from "./Fresh/Signup";
import Land from "./Fresh/Landing";

const App = () => {
  const [formType, setFormType] = useState(null);

  const toggleForm = (type) => {
    setFormType(type);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Land toggleForm={toggleForm} />} />
        <Route path="/login" element={<LoginForm toggleForm={toggleForm} />} />
        <Route path="/signup" element={<Signup toggleForm={toggleForm} />} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/findjobs" element={<div>Find Jobs Page</div>} />
      </Routes>
      {(formType === "login" || formType === "signup") && (
        <div className="outer">
          {formType === "login" && <LoginForm toggleForm={toggleForm} />}
          {formType === "signup" && <Signup toggleForm={toggleForm} />}
        </div>
      )}
    </Router>
  );
};

export default App;
