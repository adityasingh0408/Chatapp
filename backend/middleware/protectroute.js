import jwt from "jsonwebtoken";
import User from "../models/usermodels.js";

const protectroute = async (req, res, next) => {
    try {
        // **LOGGING STEP ADDED**: Log the incoming cookies for debugging
        console.log("Incoming Cookies:", req.cookies);

        // **EXISTING FUNCTIONALITY**: Extract token from cookies
        const token = req.cookies?.jwt; // Use optional chaining to avoid errors if cookies are undefined
        if (!token) {
            // **IMPROVED ERROR LOGGING**: Log detailed error context
            console.error("Authorization failed: No token provided.");
            return res.status(401).json({ error: "Unauthorized user: No token provided" });
        }

        // **EXISTING FUNCTIONALITY**: Verify the token using the secret
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // **IMPROVED CHECK**: Ensure the token is decoded properly
        if (!decoded) {
            console.error("Authorization failed: Invalid token.");
            return res.status(401).json({ error: "Unauthorized user: Invalid token" });
        }

        // **FETCH USER LOGIC**: Find the user in the database by decoded `Userid`
        const user = await User.findById(decoded.Userid).select("-password"); // Exclude password from fetched data
        if (!user) {
            console.error("Authorization failed: User not found.");
            return res.status(401).json({ error: "Unauthorized user: User not found" });
        }

        // **ASSIGNING USER**: Attach user to `req` for downstream use
        req.user = user;

        // **LOG SUCCESS**: Indicate that the user is successfully authorized
        console.log("Authorization successful. User:", user);

        next(); // Proceed to the next middleware/route handler
    } catch (error) {
        console.error("Error occurred in protectroute middleware:", error);
        res.status(500).json({ error: "Internal server error occurred" });
    }
    
};

export default protectroute;
