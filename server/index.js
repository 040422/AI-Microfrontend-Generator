import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import componentRoutes from "./routes/componentRoutes.js"; // ✅ Add this

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/api/component", componentRoutes); // ✅ Mount route

app.get("/", (req, res) => {
  res.send("Server is running & connected to MongoDB Atlas!");
});

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    console.log("✅ Connected to MongoDB Atlas");

    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
