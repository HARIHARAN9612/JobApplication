import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./Fresh/Login";
import Signup from "./Fresh/Signup";
import Land from "./Fresh/Landing";
import About from "./Fresh/About";
import Nav from "./Fresh/Navbar"
import Contact from "./Fresh/Contact";
import Post from "./JobBack/POST/Post";
import Browse from "./JobBack/BROWSE/Browse";
import Apply from "./JobBack/APPLY/Apply";
{/* npm run start:json-server */}
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
      <Nav
        isLoggedIn={isLoggedIn}
        toggleForm={toggleForm}
        handleLogout={handleLogout}
      />
      <Routes>
        <Route
          path="/"
          element={<Land toggleForm={toggleForm} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/login"
          element={<LoginForm toggleForm={toggleForm} onLogin={handleLogin} />}
        />
        <Route path="/" element={<Land />}/>
        <Route path="/signup" element={<Signup toggleForm={toggleForm} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="post" element={<Post />} />
        <Route path="browse" element={<Browse />} />
        <Route path="apply" element={<Apply/>}/>
      </Routes>
    </Router>
  );
};

export default App;
