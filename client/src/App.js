import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn'
import Error from './components/Error'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route ex path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element= {<Contact/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/login' element={<LogIn/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>

    </>
  )
}

export default App
