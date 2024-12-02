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