import mongoose from "mongoose";
import conversation from "../models/conversationmodel.js";
import message from "../models/messagemodel.js";
export const sendmessages = async (req, res) => {
  try {
    const { message: textMessage } = req.body;
    const { id: reciverid } = req.params;
    const senderid = req.user._id;

    // Ensure senderid and reciverid are converted to ObjectId
    const senderObjectId = new mongoose.Types.ObjectId(senderid);
    const reciverObjectId = new mongoose.Types.ObjectId(reciverid);

    // Find existing conversation with both participants
    let conv = await conversation.findOne({
      participants: { $all: [senderObjectId, reciverObjectId] },
    });

    if (!conv) {
      // If no conversation exists, create a new one
      conv = await conversation.create({
        participants: [senderObjectId, reciverObjectId],
        messages: [], // Ensure the messages array is initialized as an empty array
      });
    }

    // Create the new message using the renamed variable
    const newMessage = new message({
      senderid: senderObjectId,
      reciverid: reciverObjectId,
      message: textMessage, // Use the renamed variable
    });

    // Save the message
    await newMessage.save();

    // Ensure conv.messages is initialized as an array and then push the new message
    if (!Array.isArray(conv.messages)) {
      console.log("Messages field is not an array; initializing.");
      conv.messages = [];
    }
    conv.messages.push(newMessage._id);

    // Save the updated conversation
    await conv.save();

    // Return the new message as response
    res.status(201).json({ newMessage });
  } catch (error) {
    console.log("Error message in sendmessages:", error.message);
    res.status(500).json({ error: "Internal error occurred" });
  }
};


export const getmessages = async (req, res) => {
  try {
    const { id: usertochatid } = req.params; // Extract user ID to chat with
    const senderid = req.user._id; // Extract the sender's ID from the authenticated user

    // Find the conversation that includes both participants
    const conv = await conversation
      .findOne({
        participants: { $all: [senderid, usertochatid] },
      })
      .populate("messages"); // Correctly populate the messages array

    // Handle case where no conversation is found
    if (!conv) {
      return res.status(404).json({ error: "Conversation not found" });
    }

    // Return the messages array
    res.status(200).json(conv.messages); // Ensure you return the correctly populated messages array
  } catch (error) {
    console.error("Error message in getmessages:", error.message);
    res.status(500).json({ error: "Internal error occurred" });
  }
};
