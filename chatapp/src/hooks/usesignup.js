import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/authcontext';
const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthuser}=useAuthContext();

  const signup = async ({ fullname, username, password, confirmpassword, gender }) => {
    // Input validation
    console.log("Payload being sent:", {
        fullname,
        username,
        password,
        confirmpassword,
        gender,
      });
    const isValid = handleInputErrors({ fullname, username,password ,confirmpassword , gender });
    if (!isValid) return;

    setLoading(true); // Start loading indicator
    try {
      console.log("Sending signup request...");
      const res = await fetch('https://chatapp-ljub.onrender.com/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fullname, username, password,confirmpassword,gender }), // Fix json.stringify
        credentials: "include" // If cookies are involved
      });
      console.log("Response received:", res);

      // Check if the response is successful
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Something went wrong. Please try again.');
      }
  // local storage
  
      const data = await res.json(); // Parse the response JSON
      localStorage.setItem("chat-user", JSON.stringify(data))
  //context
  setAuthuser(data);
      console.log('Signup successful:', data);
      toast.success('Signup successful!'); // Show success toast
    } catch (error) {
      // Show error toast for network/server issues
      console.error('Signup error:', error);
      toast.error(error.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  return { signup, loading }; // Return signup function and loading state
};

export default useSignup;

// Helper function to handle input validation
function handleInputErrors({ fullname, username, password, confirmpassword, gender }) {
    console.log('Inputs received in handleInputErrors:', {
      fullname,
      username,
      password,
      confirmpassword,
      gender,
    }); // Log all inputs to check their values
  
    if (!fullname || !username || !password || !confirmpassword || !gender) {
      toast.error("Please fill in all fields");
      console.log("Error: Some fields are missing."); // Log an error if fields are missing
      return false;
    }
  
    if (password !== confirmpassword) {
      toast.error("Passwords do not match");
      console.log("Error: Passwords do not match."); // Log an error if passwords mismatch
      return false;
    }
  
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      console.log("Error: Password too short."); // Log an error if password length is insufficient
      return false;
    }
  
    return true;
  }
  