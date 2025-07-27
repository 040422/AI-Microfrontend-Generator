import React, { useState } from "react";
import "./generator.css";

const Generator = () => {
  const [description, setDescription] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const handleGenerate = async () => {
    if (!description.trim()) {
      alert("Please enter a component description");
      return;
    }

    // Simulate AI generation - replace with actual API call in production
    try {
      // This would be your actual API call:
      // const response = await fetch("/api/generate", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ description })
      // });
      // const data = await response.json();
      // setGeneratedCode(data.code);

      // Mock response for demonstration
      setTimeout(() => {
        const mockCode = `// ${description}
import React from 'react';
import './GeneratedComponent.css';

const GeneratedComponent = () => {
  return (
    <div className="container">
      <h1>Generated Component</h1>
      <p>This component was created based on your description:</p>
      <blockquote>"${description}"</blockquote>
    </div>
  );
};

export default GeneratedComponent;`;
        setGeneratedCode(mockCode);
      }, 1000);
    } catch (error) {
      console.error("Generation error:", error);
      alert("Error generating component");
    }
  };

  const handleCopy = () => {
    if (!generatedCode) return;
    navigator.clipboard.writeText(generatedCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!generatedCode) return;
    const element = document.createElement("a");
    const file = new Blob([generatedCode], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "generated-component.js";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleExportZip = () => {
    if (!generatedCode) return;
    alert("In a real implementation, this would export a ZIP file containing:\n- Component.js\n- Component.css\n- package.json");
  };

  return (
    <div className="generator-app">
      <h1>AI Microfrontend Generator</h1>
      
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter component description..."
      />
      
      <div className="action-buttons">
        <button onClick={handleGenerate}>Generate</button>
        <button onClick={handleCopy} disabled={!generatedCode}>
          {isCopied ? "Copied!" : "Copy"}
        </button>
        <button onClick={handleDownload} disabled={!generatedCode}>Download</button>
        <button onClick={handleExportZip} disabled={!generatedCode}>Export ZIP</button>
      </div>
      
      <div className="code-preview">
        <pre>{generatedCode || "// Generated code will appear here"}</pre>
      </div>
    </div>
  );
};

export default Generator;
