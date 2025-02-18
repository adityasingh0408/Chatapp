import jwt from "jsonwebtoken"


const generatetokenandsetcookies=(Userid , res)=>{
    const token =jwt.sign({Userid} , process.env.JWT_SECRET,
        {expiresIn : "15d"})

    res.cookie("jwt" ,token ,{
        maxAge:15*24*60*1000,
        httponly : true , // prevents xxs attacks cross site  scripting  attacks
        secure: process.env.NODE_ENV !== "development", // Set to true for production, ensures cookie is only sent over HTTPS
        sameSite: "strict" // Helps prevent CSRF attacks
    })
}
export default generatetokenandsetcookies; 