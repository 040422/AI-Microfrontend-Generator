// routes/component.js or controller file
import express from "express";
const router = express.Router();
import { generateComponent, saveComponent } from "../controllers/componentController.js";
import { isAuthorized } from "../middleware/auth.js";


router.post("/generate", generateComponent);
router.post("/save", isAuthorized,saveComponent);
router.post("/generate", async (req, res) => {
  const { componentName, description, style, functionality } = req.body;

  if (
    !componentName?.trim() ||
    !description?.trim() ||
    !style?.trim() ||
    !functionality?.trim()
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Mock code generation
  const generatedCode = `// ${componentName} Component
import React from 'react';

const ${componentName} = () => {
  return (
    <div style={{ ${style} }}>
      <h2>${description}</h2>
      <p>${functionality}</p>
    </div>
  );
};

export default ${componentName};
  `;

  return res.status(200).json({ code: generatedCode });
});

export default router;
