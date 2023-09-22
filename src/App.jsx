import { useState } from "react";
import React from "react";
import { Onboard } from "./components/onboard";
import { SignUp } from "./components/signup";
import { SignIn } from "./components/signin";
import { Home } from "./components/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./index.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route exact path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
