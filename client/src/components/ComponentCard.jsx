import React, { useState } from "react";

const ComponentCard = () => {
  const [prompt, setPrompt] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    try {
      setLoading(true);
      const response = await fetch("http://localhost:3001/api/component/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      setGeneratedCode(data.componentCode);
    } catch (error) {
      console.error("❌ Error generating component:", error);
      alert("Failed to generate component.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-zinc-900 text-white p-6 rounded-2xl shadow-xl max-w-3xl mx-auto mt-12">
      <h2 className="text-2xl font-bold mb-4">AI Micro-Frontend Generator</h2>

      <input
        type="text"
        className="w-full p-3 text-black rounded mb-4"
        placeholder="Enter your prompt (e.g., Create a login form)"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded text-white"
      >
        {loading ? "Generating..." : "Generate Code"}
      </button>

      {generatedCode && (
        <div className="mt-6 bg-zinc-800 p-4 rounded text-sm overflow-x-auto">
          <pre><code>{generatedCode}</code></pre>
        </div>
      )}
    </div>
  );
};

export default ComponentCard;
