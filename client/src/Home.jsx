import React, { useState } from "react";
import "./app.css";
import { useNavigate } from "react-router-dom"; // ⬅️ Add this

function Home() {
  const [description, setDescription] = useState("");
  const [output, setOutput] = useState("// Generated code will appear here");
  const navigate = useNavigate(); // ⬅️ Initialize navigation

  const handleGenerate = () => {
    setOutput(
      `// Component for: ${description}\n\nfunction Component() {\n  return <div>${description}</div>;\n}`
    );
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    alert("Copied to clipboard!");
  };

  const handleDownload = () => {
    const blob = new Blob([output], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "component.js";
    link.click();
  };

  const handleExportZip = () => {
    alert("ZIP export feature coming soon!");
  };

  return (
    <div className="app-container">
      <div className="auth-buttons">
        <button className="btn signup-btn" onClick={() => navigate("/signup")}>
          Signup
        </button>
        <button className="btn login-btn" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>

      <div className="container">
        <h1>⚡ AI Microfrontend Generator</h1>
        <textarea
          placeholder="Enter component description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="button-group">
          <button onClick={handleGenerate}>Generate</button>
          <button onClick={handleCopy}>Copy</button>
          <button onClick={handleDownload}>Download</button>
          <button onClick={handleExportZip}>Export ZIP</button>
        </div>
        <pre className="output">{output}</pre>
      </div>
    </div>
  );
}

export default Home;
