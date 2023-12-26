import React from 'react'
import{Routes, Route } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup'
import Login from './Login'
function Rout() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Signup' element={<Signup/>}></Route>  
      <Route path='/Login' element={<Login/>}></Route>  
        </Routes>
    </div>
  )
}

export default Rout