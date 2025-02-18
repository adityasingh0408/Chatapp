import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./authcontext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
	const [socket, setSocket] = useState(null);
	const [onlineUsers, setOnlineUsers] = useState([]);
	const { authuser } = useAuthContext();
	useEffect(() => {
		console.log("AuthUser before socket connection:", authuser);
		if (authuser) {
			console.log("Attempting to connect to Socket.IO...");
			const Socket = io("https://chatapp-ljub.onrender.com/", {
				query: { userId: authuser._id },
			});
	
			setSocket(Socket);
	
			Socket.on("connect", () => {
				console.log("Connected to Socket.IO:", Socket.id);
			});
	
			Socket.on("connect_error", (err) => {
				console.error("Socket connection error:", err);
			});
	
			Socket.on("getOnlineUsers", (users) => {
				console.log("Online users received:", users);
				if (Array.isArray(users)) {
					setOnlineUsers(users);
				} else {
					setOnlineUsers([]);
				}
			});

			Socket.on("connect_error", (err) => {
				console.error("Socket connection error:", err);
			});
			return () => {
				console.log("Disconnecting socket...");
				Socket.disconnect();
			};
		} else {
			console.log("AuthUser is null, not connecting to Socket.IO.");
		}
	}, [authuser]);
	

	return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
};