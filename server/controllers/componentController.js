// controller/componentController.js
import Component from "../models/component.js";

export const generateComponent = async (req, res) => {
  const { componentName, description, style, functionality } = req.body;

  if (!componentName || !description || !style || !functionality) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const code = `
import React from "react";

const ${componentName} = () => {
  return (
    <div style={{ ${style} }}>
      <h2>${componentName}</h2>
      <p>${description}</p>
      {/* ${functionality} */}
    </div>
  );
};

export default ${componentName};
  `.trim();

  res.status(200).json({ code });
};

export const saveComponent = async (req, res) => {
  try {
    const { name, code } = req.body;
    if (!name || !code) {
      return res.status(400).json({ error: "Name and code are required" });
    }

    const newComponent = new Component({ name, code });
    await newComponent.save();

    res.status(201).json({ message: "Component saved successfully" });
  } catch (error) {
    console.error("Save error:", error);
    res.status(500).json({ error: "Server error" });
  }
};
