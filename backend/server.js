import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import path from 'path';

import authroutes from "./route/authroute.js";
import messageroute from "./route/messageroute.js"
import userroute from "./route/userroute.js"

import connecttomongodb from "./DB/connecttomongodb.js";
import cookieParser from "cookie-parser";

import{app , server} from "./socket/socket.js";

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();
dotenv.config();

// Middleware to parse JSON data
app.use(express.json()); // <-- Corrected with parentheses
app.use(cookieParser());


app.use(cors({
  origin: 'https://chatapp-ljub.onrender.com', // Replace with your frontend domain
  methods: ['GET', 'POST'],
  credentials:true,
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
// Route for authentication
app.use("/api/auth", authroutes);
app.use("/api/message", messageroute);
app.use("/api/users", userroute);

app.use(express.static(path.join(__dirname,"/chatapp/dist")))
app.get("*" , (req,res)=>{
  res.sendFile(path.join(__dirname ,"chatapp", "dist" , "index.html"));
})

// Start the server and connect to MongoDB
server.listen(PORT, async() => {
  await connecttomongodb();
  console.log(`Server running on port ${PORT}`);
});
 