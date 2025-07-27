import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Generator from './pages/Generator';

function Landing() {
  const navigate = useNavigate();

  return (
    <div>
      <button className="btn" onClick={() => navigate("/login")}>Login</button>
      <button className="btn" onClick={() => navigate("/signup")}>Signup</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/generator" element={<Generator />} />
      </Routes>
    </Router>
  );
}

export default App;
