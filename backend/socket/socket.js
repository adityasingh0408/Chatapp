import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
	cors: {
		origin: ["http://localhost:3000"],
		methods: ["GET", "POST"],
	},
});

const userSocketMap = {}; // {userId: socketId}

// Function to get the receiver's socket ID
export const getReceiverSocketId = (receiverId) => {
	return userSocketMap[receiverId] || null;
};

io.on("connection", (socket) => {
	console.log("A user connected:", socket.id);

	const userId = socket.handshake.query.userId;
	if (userId && userId !== "undefined") {
		userSocketMap[userId] = socket.id;
	}

	// Emit the list of online users to all clients
	io.emit("getOnlineUsers", Object.keys(userSocketMap));
	console.log("Emitting getOnlineUsers:", Object.keys(userSocketMap));

	// Handle user disconnection
	socket.on("disconnect", () => {
		console.log("User disconnected:", socket.id);

		// Remove the disconnected user safely
		for (const [key, value] of Object.entries(userSocketMap)) {
			if (value === socket.id) {
				delete userSocketMap[key];
				break;
			}
		}

		// Emit updated online users list
		io.emit("getOnlineUsers", Object.keys(userSocketMap));
	});
});

export { app, io, server };
