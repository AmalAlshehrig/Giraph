import React from 'react';
import Spline from '@splinetool/react-spline';
import './Login.css';

import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Signup() {
    const navigate = useNavigate()
    const [userName, setuserName] = useState('')
    const [password, setpassword] = useState('')
    const [email, setemail] = useState('')
   
    const [nameMessage, setnameMessage] = useState('')
    const [emailMessage, setemailMessage] = useState('')
    const [passwordMessage, setpasswordMessage] = useState('')
   
    const [emptyFieldsMsg, setemptyFieldsMsg] = useState('')
    const registerBtn = () => {
        if (userName === "" || password === "" || email === "")
        {
         setemptyFieldsMsg("please fill the empty fields")
        }
        else if  (userName.length < 4)
        {
            setnameMessage("the name should be more than 4 chhatarctes ")
        }
        else if (password.length<6) {
            setpasswordMessage("thhe password should be more than 6 charaters")

        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setemailMessage("please enter the valid email")

        }
        else {
            axios.post("https://657dbe8d3e3f5b189463109e.mockapi.io/register",{
                userName:userName,
                email:email,
                password:password,
              

            })
            .then(function(response){
                console.log(response);
                const idFromApi = response.data.id;
                localStorage.setItem("userName", userName)
                localStorage.setItem("id", idFromApi)
                navigate("/ChooseRoom")

            })
        }

       }
  return (
    <div
    className='login-container  bg-no-repeat'
    style={{ fontFamily: 'Signika Negative, sans-serif' }}
  >
    
      <div >
         <div className='desktop mb-32 cursor-pointer'>
            <Spline   scene='https://prod.spline.design/Keh4ExdLN3pYjCie/scene.splinecode' />
          </div>
          <div className='mobile'>
          <Spline scene="https://prod.spline.design/MydqBB4lN-zS7SV0/scene.splinecode" />
          </div>
          </div>


          <div className='login'>
            <p className='font-bold text-6xl text-center max-sm:text-5xl  text-[white]'>SignUp</p>
            <div className='flex items-center justify-center'>
              <div className='relative form-control'>
                <input
                  id='username'
                  name='username'
                  type='text'
                  className='border-b border-gray-300 py-1 focus:border-b-2 focus:border-[#f7eee4] transition-colors focus:outline-none peer bg-inherit'
                  required
                  value={userName} onChange={(e)=>setuserName(e.target.value)}
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
                  id='Email'
                  name='Email'
                  type='text'
                  className='border-b border-gray-300 py-1 focus:border-b-2 focus:border-[#f7eee4] transition-colors focus:outline-none peer bg-inherit'
                  required
                  value={email} onChange={(e)=> setemail(e.target.value)}
                />
                <label htmlFor='Email' className='form-label'>
                  <span style={{ transitionDelay: '0ms' }}>E</span>
                  <span style={{ transitionDelay: '50ms' }}>m</span>
                  <span style={{ transitionDelay: '100ms' }}>a</span>
                  <span style={{ transitionDelay: '150ms' }}>i</span>
                  <span style={{ transitionDelay: '200ms' }}>l</span>
                </label>
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <div className='relative form-control'>
                <input 
                  id='Password'
                  name='Password'
                  type='password'
                  className='pass border-b border-gray-300 py-1 focus:border-b-2 focus:border-[#f7eee4] transition-colors focus:outline-none peer bg-inherit'
                  required
                  value={password} onChange={(e)=>setpassword(e.target.value)}
                />
                <label htmlFor='Password' className='pass form-label'>
                  <span style={{ transitionDelay: '0ms' }}>P</span>
                  <span style={{ transitionDelay: '50ms' }}>a</span>
                  <span style={{ transitionDelay: '100ms' }}>s</span>
                  <span style={{ transitionDelay: '150ms' }}>s</span>
                  <span style={{ transitionDelay: '200ms' }}>w</span>
                  <span style={{ transitionDelay: '250ms' }}>o</span>
                  <span style={{ transitionDelay: '300ms' }}>r</span>
                  <span style={{ transitionDelay: '350ms' }}>d</span>
                </label>
                
                <button 
                    style={{ fontFamily: 'Signika Negative, sans-serif' }}
                    onClick={registerBtn}
                    class="relative text-1xl h-[2.5rem]  w-[100%] mt-[4rem] mr-[4rem] py-2 px-8 text-black  font-bold uppercase rounded-[50px] overflow-hidden bg-[#F7ECE4] transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#EBC7B5] before:to-[#EBC7B5] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">
                     Sign Up
                    </button>
              </div>
            </div>
            <div className='flex flex-col '>
              <p className='text-[white] text-center text-1xl mb-2 max-sm:w-80'>Do you have an account? <Link to="/Login" className='underline'>Login</Link></p>
            </div>
          </div>
        </div>
  );
}

export default Signup;