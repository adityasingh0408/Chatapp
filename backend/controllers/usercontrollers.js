import User from "../models/usermodels.js";

export const getuserforsidebar = async (req,res)=> {
    try {
         const loggedinuserid=req.user._id
         const allusers= await User.find().select("-password");

         res.status(200).json(allusers);
    } catch (error) {
        console.error("error occured in getuserforsidebar: ", error.messsage);
res.status(500).json({error:"internal server error"});
    }
}