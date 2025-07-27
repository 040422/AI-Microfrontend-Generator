import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./generator.css";

const Generator = () => {
  const [componentName, setComponentName] = useState("");
  const [description, setDescription] = useState("");
  const [style, setStyle] = useState("");
  const [functionality, setFunctionality] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");

  const navigate = useNavigate();

  const handleGenerate = async () => {
    if (!componentName || !description || !style || !functionality) {
      alert("Please fill in all fields before generating.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/component/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          componentName,
          description,
          style,
          functionality,
        }),
      });

      const data = await response.json();
      if (data.code) {
        setGeneratedCode(data.code);
      } else {
        alert("Failed to generate code");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error");
    }
  };

  return (
    <div className="generator-container">
      {/* Buttons */}
      <div className="auth-buttons">
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/signup")}>Signup</button>
      </div>

      <h1 className="generator-heading">Component & Multi Component Generator </h1>

      <input
        className="generator-input"
        placeholder="Component Name"
        value={componentName}
        onChange={(e) => setComponentName(e.target.value)}
      />
      <input
        className="generator-input"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className="generator-input"
        placeholder="Style (e.g. card, button)"
        value={style}
        onChange={(e) => setStyle(e.target.value)}
      />
      <input
        className="generator-input"
        placeholder="Functionality (e.g. hover, click)"
        value={functionality}
        onChange={(e) => setFunctionality(e.target.value)}
      />

      <button className="generator-button" onClick={handleGenerate}>
        Generate
      </button>

      {generatedCode && (
        <div>
          <h3>Generated Code:</h3>
          <pre className="generator-code">{generatedCode}</pre>
        </div>
      )}
    </div>
  );
};

export default Generator;
