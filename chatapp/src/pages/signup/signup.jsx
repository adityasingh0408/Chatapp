import React, { useState } from 'react';
import CheckGender from './checkgender'
import { Link } from 'react-router-dom';
import usesignup from '../../hooks/usesignup';

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullname: '',
    username: '',
    password: '',
    confirmpassword: '',
    gender: ''
  });
  
  const { loading, signup } = usesignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inputs passed to signup:", inputs);
    signup({
      fullname: inputs.fullname,
      username: inputs.username,
      password: inputs.password,
      confirmpassword: inputs.confirmpassword,
      gender: inputs.gender,
    });
  };

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font font-semibold text-center">
          Sign Up
          <span className="text-blue-600"> CHATAPP</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2 margin-4">
              <span className="text-base label-text mx-3">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="input h-10 w-9/12 p-2 mx-5"
              value={inputs.Fullname}
              onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text mx-3 w-full">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="input input-bordered w-9/12 h-10 mx-5"
              value={inputs.Username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text mx-3 w-full">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-9/12 h-10 mx-5"
              value={inputs.Password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text mx-3 w-full">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="input input-bordered w-9/12 h-10 mx-5"
              value={inputs.Confirmpassword}
              onChange={(e) => setInputs({ ...inputs, confirmpassword: e.target.value })}
            />
          </div>

          <CheckGender oncheckboxchange={handleCheckboxChange} selectedgender={inputs.gender} />

          <Link to="/login" className="text-sm hover:underline hover:text-blue-600 mt-1 inline-block ml-28">
            Already have an account?
          </Link>

          <div>
            <button
              className="btn btn-sm mt-2-border border-slate-700 w-96 mx-3"
              disabled={loading}
            >
                       {loading ? <span className='loading loading-spinner'></span> :"sign up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;


/*
code for signup 
import React from 'react'
import Checkgender from './checkgender'

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
    <div className="  h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 ">
      <h1 className='text-3xl font font-semibold text-center'>  Sign Up
        <span className='text-blue-600'>  CHATAPP</span>
         </h1>
    
         <form>
      <div > 
        <label className='label p-2 margin-4'>
          <span className=' text-base label-text  mx-3'> Full Name </span>
        </label>
        <input type="text" placeholder="" className="input  h-10 w-9/12 bg-black  p-2 mx-5" />
      
      </div>
    
    
    
      <div > 
        <label className='label p-2'>
          <span className='text-base label-text  mx-3 w-full'> Username </span>
        </label>
        <input type="text" placeholder="" className="input input-bordered w-9/12 h-10 mx-5" />
      
      </div>
    
    
      <div > 
        <label className='label p-2'>
          <span className='text-base label-text mx-3 w-full'> Password </span>
        </label>
        <input type="text" placeholder="" className="input input-bordered w-9/12 h-10 mx-5" />
      
      </div>
    
      
      <div > 
        <label className='label p-2'>
          <span className='text-base label-text mx-3 w-full'> Confirm password </span>
        </label>
        <input type="text" placeholder="" className="input input-bordered w-9/12 h-10 mx-5" />
      
      </div>
    
      // gender box here

      <Checkgender/>
    
      <a className='text-sm hover:underline hover:text-blue-600 mt-1 inline-block ml-28' href="#">Already have an account? </a>
      <div>
        <button className='btn btn-sm mt-2-border border-slate-700 w-96 mx-3'> login in</button> </div>
    </form>
      </div>
      </div>
    
  )
}

export default Signup
*/