import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Result from "./pages/Result";
import Settings from "./pages/Settings";
import InputPopUp from './components/InputPopUp';

function App() {

  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          {/* Use Navigate to redirect to /home as default */}
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/settings" element={<Settings />} />
          {/* More page routes below */}
        </Routes>

        <Footer
         style={{ zIndex: -1 }}
        />
      </div>
    </Router>
  );
}

export default App;