import React from 'react';
import logo1 from '../assets/logo7.png';
import Spline from '@splinetool/react-spline';
import './Login.css'
function Login() {
  return (
      <div className='login-container'>  
    <div className='flex flex-col justify-center items-center bg-cover bg-no-repeat h-[100vh] bg-[url("/Users/ghadaal/Desktop/finalproject/my-project/src/assets/logo7.png")]    w-sccreen ' >
    <div className='w-[100%] flex'>

        <div className='w-[50%]  h-[50rem] pt-[5rem] pb-[5rem] ml-[1rem]'>
        <Spline  scene="https://prod.spline.design/Keh4ExdLN3pYjCie/scene.splinecode" />
        </div>
        <div className='w-[50%]  h-[48rem] p-[10rem] flex flex-col justify-around'>
            <p className='font-bold text-4xl pl-[6rem] text-[white] '>Login</p>
            <div class="flex items-center justify-center">
  <div class="relative">
    <input
      id="username"
      name="username"
      type="text"
      class="border-b border-gray-300 py-1 focus:border-b-2 focus:border-[#f7eee4] transition-colors focus:outline-none peer bg-inherit"
    />
    <label
      for="username"
      class="text-[#f7eee4] absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-[#f7eee4]"
      >Name</label
    >
  </div>
</div>
<div class="flex items-center justify-center">
  <div class="relative">
    <input
      id="Password"
      name="Password"
      type="password"
      class="border-b border-gray-300 py-1 focus:border-b-2 focus:border-[#f7eee4] transition-colors focus:outline-none peer bg-inherit"
    />
    <label
      for="Password"
      class="text-[#f7eee4] absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-[#f7eee4]"
      >Password</label
    >
  </div>
</div>
            <div className='flex justify-around'>
             
                <button className='h-[2rem] w-[5rem] bg-[#F7EEE4] rounded-md '>Login</button>

            </div>

        </div>


    </div>
    </div>
    </div>
  );
}

export default Login;