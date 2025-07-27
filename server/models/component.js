// server/models/component.js
import mongoose from "mongoose";

const componentSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  code: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
},{ timestamps: true });

const Component = mongoose.model("Component", componentSchema);

export default Component; // ✅ This line is required!
