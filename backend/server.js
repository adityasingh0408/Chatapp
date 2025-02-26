import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import authroutes from "./route/authroute.js";
import messageroute from "./route/messageroute.js";
import userroute from "./route/userroute.js";

import connecttomongodb from "./DB/connecttomongodb.js";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";

dotenv.config(); // Load environment variables first

const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json()); 
app.use(cookieParser());

// Updated CORS setup
app.use(
  cors({
    origin: "https://chatapp-ljub.onrender.com", // Allow frontend domain
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Allow cookies/auth headers
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Routes
app.use("/api/auth", authroutes);
app.use("/api/message", messageroute);
app.use("/api/users", userroute);

// Serve static files correctly
app.use(express.static(path.join(__dirname, "chatapp", "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "chatapp", "dist", "index.html"));
});

// Start the server
server.listen(PORT, async () => {
  await connecttomongodb(); // Ensure DB connection before running the server
  console.log(`Server running on port ${PORT}`);
});
