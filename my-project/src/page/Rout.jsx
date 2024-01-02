import React from 'react'
import{Routes, Route } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup'
import Login from './Login'
import Error from './Error'
import ChooseRoom from './ChooseRoom'
import Small from './Small'
import LargeRoom from './LargeRoom';
import Room from './Room';
import MeduimRoom from './MeduimRoom';
function Rout() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Signup' element={<Signup/>}></Route>  
            <Route path='/Login' element={<Login/>}></Route>  
            <Route path='/ChooseRoom' element={<ChooseRoom/>}></Route>
            <Route path='/Small' element={<Small/>}></Route>
            <Route path='/LargeRoom' element={<LargeRoom/>}></Route>
            <Route path='/*' element={<Error/>}></Route>
            <Route path='/Room' element={<Room/>}></Route>    
            <Route path='/MeduimRoom' element={<MeduimRoom/>}></Route>   
        </Routes>
    </div>
  )
}

export default Rout