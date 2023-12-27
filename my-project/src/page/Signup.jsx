import React from 'react';
import logo1 from '../assets/logo7.png';
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';
import './Login.css'
function Signup() {
  return (
    <div className='login-container'>
    <div className='flex flex-col justify-center items-center bg-cover bg-no-repeat h-[100vh] bg-[url("/Users/ghadaal/Desktop/finalproject/my-project/src/assets/logo7.png")]    w-sccreen ' >
    <div className='w-[100%] flex'>

        <div className='w-[50%]  h-[50rem] ml-[1rem]'>
        <Spline scene="https://prod.spline.design/Keh4ExdLN3pYjCie/scene.splinecode" />
        </div>

        <div className='w-[50%]  h-[48rem] p-[10rem] flex flex-col justify-around'>
            <p className='font-bold text-4xl pl-[6rem] text-[white] '>Sign Up</p>
            <input type="text" placeholder='  Enter Your Name' className='h-[2rem] rounded-md ' />
            <input type="text" placeholder='  Enter Your Email' className='h-[2rem] rounded-md ' />
            <input type="password" placeholder='  Enter Your Password' className='h-[2rem] rounded-md ' />
            <div className='flex justify-around'>
                <p className='text-[white] text-1.5xl'>Do you have an account?</p>
                <Link to="/Login">
                <button className='h-[2rem] w-[5rem] bg-[#F7EEE4] rounded-md '>Login</button>
                </Link>
            </div>

        </div>


    </div>
    </div>
    </div>
  );
}

export default Signup;