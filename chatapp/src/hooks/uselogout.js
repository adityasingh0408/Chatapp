import { useState } from "react"
import toast from 'react-hot-toast';
import { useAuthContext } from "../context/authcontext"
const  uselogout =()=>{
    const [loading, setloading]=useState(false)
    const {setAuthuser}=useAuthContext()
const logout = async()=>{
    setloading(true)
try {
    const res = await fetch('https://chatapp-ljub.onrender.com/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
}});
const data = await res.json()
if(data.error){
    throw new Error(data.error)
}
localStorage.removeItem("chat-user")
setAuthuser(null)
} catch (error) {
    toast.error(error.message)
}
finally{
    setloading(false)
}
}
return{loading , logout};
}
export default uselogout;