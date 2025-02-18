import mongoose from "mongoose";
import Conversation from "../models/conversationmodel.js";
import Message from "../models/messagemodel.js";
import { getReceiverSocketId, io } from "../socket/socket.js"; // Import socket functions

export const sendmessages = async (req, res) => {
  try {
    const { message: textMessage } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    // Convert senderId and receiverId to ObjectId
    const senderObjectId = new mongoose.Types.ObjectId(senderId);
    const receiverObjectId = new mongoose.Types.ObjectId(receiverId);

    // Find or create conversation
    let conv = await Conversation.findOne({
      participants: { $all: [senderObjectId, receiverObjectId] },
    });

    if (!conv) {
      conv = await Conversation.create({
        participants: [senderObjectId, receiverObjectId],
        messages: [],
      });
    }

    // Create a new message
    const newMessage = new Message({
      senderid: senderObjectId,
      reciverid: receiverObjectId,
      message: textMessage,
    });

    // Save the message
    await newMessage.save();

    // Ensure messages array is initialized
    if (!Array.isArray(conv.messages)) {
      console.log("Messages field is not an array; initializing.");
      conv.messages = [];
    }

    // Add the new message to conversation
    conv.messages.push(newMessage._id);
    await conv.save();

    // 🔴 SOCKET.IO FUNCTIONALITY 🔴
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.error("Error in sendmessages:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getmessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    // Find the conversation and populate messages
    const conv = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    if (!conv) {
      return res.status(200).json([]); // Return an empty array instead of an error
    }

    res.status(200).json(conv.messages);
  } catch (error) {
    console.error("Error in getmessages:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
