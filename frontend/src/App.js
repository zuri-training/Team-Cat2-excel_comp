import React from 'react'
import Home from './pages/Home'
import Signup from './pages/Signup'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'

const App = () => {
  return (
    <Routes>
      <Route path="/" element ={<Home/>} />
      <Route path="/home" element ={<Home/>} />
      <Route path="/signup" element ={<Signup/>} />
      <Route path="/login" element ={<Login/>} />
  

      
    </Routes>
  )
}

export default App

