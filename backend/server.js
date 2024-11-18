import express from "express";
import dotenv from "dotenv";

import authroutes from "./route/authroute.js";
import messageroute from "./route/messageroute.js"
import userroute from "./route/userroute.js"

import connecttomongodb from "./DB/connecttomongodb.js";
import cookieParser from "cookie-parser";


dotenv.config();
const app = express();

// Middleware to parse JSON data
app.use(express.json()); // <-- Corrected with parentheses
app.use(cookieParser());

// Route for authentication
app.use("/api/auth", authroutes);
app.use("/api/message", messageroute);
app.use("/api/users", userroute);

const PORT = process.env.PORT || 4000;

// Start the server and connect to MongoDB
app.listen(PORT, () => {
  connecttomongodb();
  console.log(`Server running on port ${PORT}`);
});
