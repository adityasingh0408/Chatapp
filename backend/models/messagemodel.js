import { text } from "express";
import mongoose from "mongoose";

const messageschema = new mongoose.Schema({
  senderid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  reciverid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  message: {
    type: String,
    required: true,
    trim: true,
  },

  messagetype: {
    type: String,
    enum: ["text", "image ", "file" ,"mixed"],
    default: "text",
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },

  status: { type: String, enum: ["sent", "delivered", "seen"], default: "sent" },
  isread: {
    type: Boolean,
    default: false,
  },

  reactions: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Who reacted, user reference
      reaction: {
        type: String,
        enum: ["like", "love", "laugh", "sad", "angry"],
      }, // Permanent list of possible reactions
},],} ,
 { timestamps: true });

 const message = mongoose.model('message' , messageschema);

 export default message;
