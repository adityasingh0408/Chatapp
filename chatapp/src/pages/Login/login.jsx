import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import uselogin from '../../hooks/uselogin';


const Login = () => {
  const [username, setusername] = useState(''); // Avoid unnecessary space in initial value
  const [password, setpassword] = useState('');

  const {loading,login}=uselogin();
  const loginAPI = async (username, password) => {
    console.log('Simulating login with', username, password);
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log('Username:', username, 'Password:', password);

    try {
      await login(username, password); // Correct function name
    } catch (err) {
      console.error('Login failed', err);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className="  h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
      <h1 className='text-3xl font font-semibold text-center'>  Login </h1>
<form onSubmit={handlesubmit}> 
      <div > 
        <label className='label p-2'>
          <span className='text-base label-text  mx-3 w-full'> Username </span>
        </label>
        <input type="text" placeholder="" className="input input-bordered w-9/12 h-10 mx-5"
        value={username}
        onChange={(e)=>setusername(e.target.value)} />
      
      </div>

      
      <div > 
        <label className='label p-2'>
          <span className='text-base label-text mx-3 w-full'> Password </span>
        </label>
        <input type="text" placeholder="" className="input input-bordered w-9/12 h-10 mx-5"
        value={password}
        onChange={(e)=>setpassword(e.target.value)} />
      
      </div>

      <Link to='/signup'className='text-sm hover:underline hover:text-blue-600 mt-1 inline-block ml-28' >don't have an account? </Link>
      <div>
        <button className='btn btn-sm mt-2-border border-slate-700 w-96 mx-3'disabled={loading}>
        {loading ? <span className='loading loading-spinner'></span> :"Login"}</button> </div>
        </form>
      </div>
      </div>
  )
}

export default Login

/* CODE FOR LOGIN 

import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className="  h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
      <h1 className='text-3xl font font-semibold text-center'>  Login </h1>

      <div > 
        <label className='label p-2'>
          <span className='text-base label-text  mx-3 w-full'> Username </span>
        </label>
        <input type="text" placeholder="aadi" className="input input-bordered w-9/12 h-10 mx-5" />
      
      </div>

      
      <div > 
        <label className='label p-2'>
          <span className='text-base label-text mx-3 w-full'> Password </span>
        </label>
        <input type="text" placeholder="as0408" className="input input-bordered w-9/12 h-10 mx-5" />
      
      </div>

      <a className='text-sm hover:underline hover:text-blue-600 mt-1 inline-block ml-28' href="#">don't have an account? </a>
      <div>
        <button className='btn btn-sm mt-2-border border-slate-700 w-96 mx-3'>Create new</button> </div>
      </div>
      </div>
  )
}

export default Login */