import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authcontext";
const uselogin=()=>{
    const [loading , setloading] = useState(false);
    const {setAuthuser}=useAuthContext();

    const login = async (username, password)=>{
        const isValid = handleInputErrors({  username,password });
        if (!isValid) return;    
        setloading(true)
        try {
            const res=await fetch("https://chatapp-ljub.onrender.com/api/auth/login",{
                method:"POST",
                credentials:"include",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({username,password})
            })
            const data = await res.json();
if (data.error) {
    throw new Error(data.error); // Trigger error handling
}

localStorage.setItem("chat-user", JSON.stringify(data));
setAuthuser(data);

        } catch (error) {
            toast.error(error.message);
        }
        finally{
            setloading(false);
        } 
    }
    return {loading ,login};
}
export default uselogin;  
function handleInputErrors({  username, password }) {
    console.log('Inputs received in handleInputErrors:', {
      username,
      password, 
    }); // Log all inputs to check their values
  
    if ( !username || !password) {
      toast.error("Please fill in all fields");
      console.log("Error: Some fields are missing."); // Log an error if fields are missing
      return false;
    }
    return true;
  }
  