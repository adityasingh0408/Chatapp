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
    
      {/*gender box here*/}

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