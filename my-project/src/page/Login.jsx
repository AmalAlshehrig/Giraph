import React from 'react';
import Spline from '@splinetool/react-spline';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

function Login() {
  const [userName, setuserName] = useState('')
  const [password, setpassword] = useState('')
 
  const [info, setinfo] = useState([])
  const navigate = useNavigate()
  const [message, setmessage] = useState('')

  useEffect(() => {

    axios.get("https://657dbe8d3e3f5b189463109e.mockapi.io/register")
 .then ((response)=>{
    console.log(response);
    setinfo(response.data)
 })
 
}, [])

const logBtn = () => {
if(userName === "" || password === "") {
    setmessage("fill the empty fields")
}
else {

    const user = info.find((item => item.userName === userName && item.password === password))
    if(user) {
    navigate("/")
localStorage.setItem("userName", user.userName)

localStorage.setItem("id", user.id)
window.location.reload(false);
    }
    else {
        setmessage("incorrect")
    }
}


}
  return (
    <div className='login-container'>
      <div
        className='flex flex-col justify-center items-center bg-cover bg-no-repeat h-screen w-screen'
        style={{ fontFamily: 'Signika Negative, sans-serif' }}
      >

//         <div className='w-full flex'>
//           <div className='w-1/2 h-screen pt-20 pb-20'>

        <div className='w-[100%] flex'>
          <div className='w-[50%] cursor-grabbing h-[50rem] pt-[5rem] pb-[5rem] ml-[1rem]'>

            <Spline scene='https://prod.spline.design/Keh4ExdLN3pYjCie/scene.splinecode' />
          </div>
          <div className='w-1/2 h-screen p-20 flex flex-col justify-around'>
            <p className='font-bold text-4xl pl-24 text-white'>Login</p>
            <div className='flex items-center justify-center'>
              <div className='relative form-control'>
                <input
                  id='username'
                  name='username'
                  type='text'
                  value={userName} onChange={(e)=> setuserName(e.target.value)}
                  className='border-b border-gray-300 py-1 focus:border-b-2 focus:border-[#f7eee4] transition-colors focus:outline-none peer bg-inherit'
                  required
                />
                <label htmlFor='username' className='form-label'>
                  <span style={{ transitionDelay: '0ms' }}>U</span>
                  <span style={{ transitionDelay: '50ms' }}>s</span>
                  <span style={{ transitionDelay: '100ms' }}>e</span>
                  <span style={{ transitionDelay: '150ms' }}>r</span>
                  <span style={{ transitionDelay: '200ms' }}>n</span>
                  <span style={{ transitionDelay: '250ms' }}>a</span>
                  <span style={{ transitionDelay: '300ms' }}>m</span>
                  <span style={{ transitionDelay: '350ms' }}>e</span>
                </label>
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <div className='relative form-control'>
                <input
                  id='Password'
                  name='Password'
                  type='password'
                  className='border-b border-gray-300 py-1 focus:border-b-2 focus:border-[#f7eee4] transition-colors focus:outline-none peer bg-inherit'
                  required
                  value={password} onChange={(e)=> setpassword(e.target.value)}
                />
                <label htmlFor='Password' className='form-label'>
                  <span style={{ transitionDelay: '0ms' }}>P</span>
                  <span style={{ transitionDelay: '50ms' }}>a</span>
                  <span style={{ transitionDelay: '100ms' }}>s</span>
                  <span style={{ transitionDelay: '150ms' }}>s</span>
                  <span style={{ transitionDelay: '200ms' }}>w</span>
                  <span style={{ transitionDelay: '250ms' }}>o</span>
                  <span style={{ transitionDelay: '300ms' }}>r</span>
                  <span style={{ transitionDelay: '350ms' }}>d</span>
                </label>
              </div>
            </div>
            <div className='flex justify-around'>
            <button 
                    style={{ fontFamily: 'Signika Negative, sans-serif' }}
                    onClick={logBtn}
                    class="relative py-2 px-8 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-[#F7ECE4] transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#EBC7B5] before:to-[#EBC7B5] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">
                     Login
                    </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;