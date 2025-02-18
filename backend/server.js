import express from "express";
import dotenv from "dotenv";
import cors from 'cors';

import authroutes from "./route/authroute.js";
import messageroute from "./route/messageroute.js"
import userroute from "./route/userroute.js"

import connecttomongodb from "./DB/connecttomongodb.js";
import cookieParser from "cookie-parser";

import{app , server} from "./socket/socket.js";

dotenv.config();

// Middleware to parse JSON data
const PORT = process.env.PORT || 5000;
app.use(express.json()); // <-- Corrected with parentheses
app.use(cookieParser());


app.use(cors({
  origin: "http://localhost:3000", // Allow requests from your frontend
  credentials: true               // Allow cookies to be sent
}));

// Route for authentication
app.use("/api/auth", authroutes);
app.use("/api/message", messageroute);
app.use("/api/users", userroute);



// Start the server and connect to MongoDB
server.listen(PORT, () => {
  connecttomongodb();
  console.log(`Server running on port ${PORT}`);
});
