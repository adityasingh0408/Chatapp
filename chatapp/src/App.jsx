import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login/login'
import Signup from './pages/signup/signup'
import Home from './pages/home/home'
import { Navigate, Route, Routes } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import { useAuthContext } from './context/authcontext'

function App() {
  const {authuser}=useAuthContext();
  return <div className='p-4 h-screen flex justify-center items-center'> 
 <Routes>
  <Route path='/' element={authuser ? <Home/> : <Navigate to = {"/login"}/>}/>
  <Route path='/login' element={authuser?<Navigate to ="/"/> : <Login/>}/>
  <Route path='/signup' element={authuser?<Navigate to ="/"/> : <Signup/>}/>
 </Routes>
 <Toaster/>
  </div>
  
}

export default App

/*
CODE FOR APP.JSX
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/login/login'
import Signup from './pages/signup/signup'
import Home from './pages/home/home'

function App() {
  
  return <div className='p-4 h-screen flex justify-center items-center'> 
 <Home/>
  </div>
  
}

export default App
*/