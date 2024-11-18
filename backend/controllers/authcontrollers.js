import User from "../models/usermodels.js";
import bcrypt from "bcryptjs";
import generatetokenandsetcookies from "../utils/generatetokens.js";
export const signup=async(req ,res)=>{
    console.log("Signup request received", req.body); 
    try {
        const {fullname , username , password , confirmpassword , gender } = req.body;

        if(password !=confirmpassword){
            return res.status(400).json({error:"password dont match"});
        }
        const existinguser = await User.findOne({username});

        if(existinguser){
            return res.status(400).json({error:"user already exists"});
        }

            // hash password here

            const salt= await bcrypt.genSalt(10);
            const hashedpassword =await bcrypt.hash(password , salt);

            const boyprofilepic =`https://avatar.iran.liara.run/public/boy?username=${username}`;
            const girlprofilepic =`https://avatar.iran.liara.run/public/girl?username=${username};`

            const newuser=new User({
                fullname,
                username,
                password :hashedpassword,
                gender,
                profilepicture : gender === "male" ? boyprofilepic :girlprofilepic
            })
            if(newuser){
                generatetokenandsetcookies(newuser._id , res);
                await newuser.save();
                
                //generate jwt token here
                //  const token = jwt.sign(
                // {_id:newuser._id , username: newuser.username} ,
                //  process.env.JWT_SECRET,
                //  {expiresin:process.env.JWT_EXPIRE}
                // );

            res.status(201).json({
               _id:newuser._id,
               fullname:newuser.fullname,
               username:newuser.username,
               profilepicture:newuser.profilepicture,
        
            })
          }

          else{
            res.status(400).json({error : " invalid user data"})
          }
    } catch (error) {
        console.log(" error while connecting in signup container" , error.message)
        res.status(500).json({error:"internal server error"});
    }
}
export const login=async(req ,res)=>{
    try {
        // Destructure the username and password from the request body
        const {username , password} =req.body;
        // Step 1: Check if the user exists in the database
        const user = await User.findOne({username})
        if(!User){
            return res.status(400).json({error:"user not found"})
        }
        // Step 2: Compare the entered password with the stored hashed password
        const ispasswordcorrect = await bcrypt.compare(password , user.password)
        if(!ispasswordcorrect){
            return res.status(400).json({error:"invalid password"})
        }

        // genreate jwt token  (from generate token folder)
        generatetokenandsetcookies(user._id, res);
        res.status(200).json({
            _id:user._id,
            fullname:user.fullname,
            username:user.username,
            profilepicture:user.profilepicture,
     
         })

    } catch (error) {
        console.log('Error while logging in:', error.message);
    res.status(500).json({ error: 'Internal server error' });
    }
}
export const logout= async(req ,res)=>{
    try {
        res.cookie("jwt" , "" , {maxage:0});
        res.status(200).json({message :"logged out successfully"});
    } catch (error) {
        console.log("error in logout controller",error.message)
        res.status(500).json({error:"internal server error"})
    }
}; 