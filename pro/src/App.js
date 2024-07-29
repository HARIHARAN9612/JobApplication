import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./Fresh/Login";
import Signup from "./Fresh/Signup";
import Land from "./Fresh/Landing";
import About from "./Fresh/About";

const App = () => {
  const [formType, setFormType] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleForm = (type) => {
    setFormType(type);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setFormType(null);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Land toggleForm={toggleForm} isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<LoginForm toggleForm={toggleForm} onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup toggleForm={toggleForm} />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/findjobs" element={<div>Find Jobs Page</div>} />
      </Routes>
      {(formType === "login" || formType === "signup") && (
        <div className="outer">
          {formType === "login" && <LoginForm toggleForm={toggleForm} onLogin={handleLogin} />}
          {formType === "signup" && <Signup toggleForm={toggleForm} />}
        </div>
      )}
      {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
    </Router>
  );
};

export default App;
