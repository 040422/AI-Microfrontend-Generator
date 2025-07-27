import React from 'react';
// import image from '../assets/image.png';

import { useNavigate } from 'react-router-dom';
import './Landing.css';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-wrapper">
      
      <div className="auth-buttons">
        <button className="btn" onClick={() => navigate("/login")}>Login</button>
        <button className="btn" onClick={() => navigate("/signup")}>Signup</button>
      </div>
      <h1 className="main-heading">AI-Microfrontend-Generator</h1>
    </div>
  );
}

export default Landing;
