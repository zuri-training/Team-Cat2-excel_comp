import React from 'react'
import Home from './pages/Home'
import Signup from './pages/Signup'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Password from './pages/Password'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Support from './pages/Support'
import Dashboard from './pages/Dashboard pages/Dashboard'
import Account from './pages/Dashboard pages/Account'
import Newtask from './pages/Dashboard pages/Newtask'
import Compare from './pages/Dashboard pages/Compare'


const App = () => {
  return (
    <Routes>
      <Route path="/" element ={<Home/>} />
      <Route path="/home" element ={<Home/>} />
      <Route path="/signup" element ={<Signup/>} />
      <Route path="/login" element ={<Login/>} />
      <Route path="/password" element ={<Password/>} />
      <Route path="/about" element={<About/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/support' element={<Support />} />
  
    {/* <Route path="*" element = {<Error/>} /> */}
  
        <Route path='/account' element={<Account />}>

          <Route path='/account/dashboard' element={<Dashboard/>} />
          <Route path='/account/newtask' element={<Newtask/>} >
            <Route path='/account/newtask/compare' element={<Compare/>} />
          </Route>

        </Route>
      
    </Routes>
  )
}

export default App

