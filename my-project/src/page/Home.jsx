import React from 'react'
import './Home.css'
import Spline from '@splinetool/react-spline'
import stepnumb01 from '../assets/step_numb-01.svg'
import stepnumb02 from '../assets/step_numb-02.svg'
import stepnumb03 from '../assets/step_numb-03.svg'
import stepsarrow from '../assets/steps_arrow.svg'
import stepsarrowplane from '../assets/steps_arrow-plane.svg'
import Logo from '../assets/1.webp'
import { Link, useNavigate } from 'react-router-dom'
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
useNavigate
function Home() {
  const navigate=useNavigate()
 const userName = localStorage.getItem('userName');
const iduser = localStorage.getItem('id');
const [info, setInfo] = useState({});

useEffect(() => {
    axios.get(`https://657dbe8d3e3f5b189463109e.mockapi.io/register/${iduser}`)
        .then((response) => {
            console.log(response);
            setInfo(response.data);
        })
        .catch((error) => {
            console.error(`Error fetching data for user with id ${iduser}:`, error);
        });
}, [iduser]);
function out(){
localStorage.clear()
navigate('/')
}
  return (
    <>
     <main className="section-slides">
<div className="section-slide banner">
    <div className="container">
        <header className="nav-header">
            <div className="nav-logo">
                <a href="/">
                <img src={Logo}/>
                </a>
            </div>
           {localStorage.getItem('userName')?
            <div>
            <div className="nav-right">
                <div className="nav-cta">
                    {/* <button 
                    style={{ fontFamily: 'Signika Negative, sans-serif' }}
                    class="relative py-2 px-8 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-[#F7ECE4] transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#1F8BA3] before:to-[#1F8BA3] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">
                     Welcome {userName} 👋
                    </button> */}
                    <div className="nav-right">
                <div className="nav-cta">
                     <MDBDropdown>
                     <div className='flex flex-col text-center'>
      <MDBDropdownToggle tag='a' className='btn btn-primary'
      style={{ fontFamily: 'Signika Negative, sans-serif' }}
      class="relative py-2 px-8 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-[#F7ECE4] transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#EBC7B5] before:to-[#EBC7B5] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">
      Welcome {userName} 👋
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        <div 
        style={{ fontFamily: 'Signika Negative, sans-serif' }}
        className='border text-left w-[13.6rem] py-2 px-2 bg-[#F7ECE4] mt-4 rounded-lg text-sm text-black'>
        <MDBDropdownItem link className='mt-1'><span className='font-bold'>Name:</span> {info.userName}</MDBDropdownItem>
        <MDBDropdownItem link className='mt-1'><span className='font-bold'>Email:</span> {info.email}</MDBDropdownItem>
        <button className='border border-black hover:border-red-800 rounded-lg p-1 mt-2 w-full' onClick={(()=>out())}>
        <MDBDropdownItem link className='font-bold hover:text-red-800'>Logout</MDBDropdownItem>
        </button>
        </div>
      </MDBDropdownMenu>
      </div>
    </MDBDropdown>
    </div>
    </div>
{/* النهاية لل drop list */}
                </div>
            </div>
            </div>
            :
            <div className="nav-right">
                <div className="nav-cta">
                    <Link to={'/Signup'}>
                    <button 
                   style={{ fontFamily: 'Signika Negative, sans-serif' }}
                   class="relative py-2 px-8 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-[#F7ECE4] transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#EBC7B5] before:to-[#EBC7B5] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">
                    Signup
                    </button>
                    </Link>
                </div>
            </div>
            }
        </header>
    </div>

    <section className="banner-inner items-center">
        <div className="container">
            <div className="banner-inner-content">
                <div className="banner-inner-imgs">
                <div className='max-sm:w-56 w-[45rem]'>
                <Spline scene="https://prod.spline.design/JQ0h7bz8PWJdwXYp/scene.splinecode" />
                 </div>
                 </div>
                 </div>
                 </div>
    </section>
    </div>
<section className="section-slide syllabus">
    <div className="syllabus-wrapper">
        <div className="container">
            <div className="syllabus-inner">
                <div className="syllabus-img cursor-grabbing">
                <Spline scene="https://prod.spline.design/9d2SFuH962NDp8iQ/scene.splinecode" />
                </div>
                <div className="syllabus-steps mr-5">
                    <h2 className="section-title"  style={{ fontFamily: 'Signika Negative, sans-serif' }}>Getting Started Steps</h2>
                    <div className="syllabus-step-list">
                        {/* <div className="syllabus-step">
                            <div className="syllabus-step-num">
                                <img src={stepnumb01} alt="Step 1"/>
                                <div className="syllabus-num-text">01</div>
                            </div>
                            <h3 className="item-title"  style={{ fontFamily: 'Signika Negative, sans-serif' }}>Sign Up</h3>
  <p className="item-p"  style={{ fontFamily: 'Signika Negative, sans-serif' }}>The first step is to make account for new user or make login.</p>*/}
                            {/* <div className="step-arrow-wrap">
                                <img src={stepsarrow} loading="lazy" alt=""
                                    className="step-arrow-img"/>
                            </div> */}
                        <div className="syllabus-step step-alt">
                            <div className="syllabus-step-num">
                                <img src={stepnumb02} alt="Step 2"/>
                                <div className="syllabus-num-text"  style={{ fontFamily: 'Signika Negative, sans-serif' }}>01</div>
                            </div>
                            <h3 className="item-title"  style={{ fontFamily: 'Signika Negative, sans-serif' }}>Choose Your Room Size</h3>
                            <p className="item-p"  style={{ fontFamily: 'Signika Negative, sans-serif' }}>The First step is to choose your room size from three given room sizes: large, medium and small.</p>
                            <div className="step-arrow-wrap">
                                <img src={stepsarrow} loading="lazy" alt=""
                                    className="step-arrow-img"/>
                            </div>
                        </div>
                        <div className="syllabus-step">
                            <div className="syllabus-step-num">
                                <img src={stepnumb03} alt="Step 3"/>
                                <div className="syllabus-num-text"  style={{ fontFamily: 'Signika Negative, sans-serif' }}>02</div>
                            </div>
                            <h3 className="item-title"  style={{ fontFamily: 'Signika Negative, sans-serif' }}>Design Your Room</h3>
                            <p className="item-p"  style={{ fontFamily: 'Signika Negative, sans-serif' }}>
                              The last step is to design your room by dragging and dropping a furiture into your room space.
                              <br></br>
                              {localStorage.getItem('userName')?
                              <Link to={'/ChooseRoom'} className=' underline font-bold mb-4'>Start Your Design</Link>
                              :
                              <Link to={'/Room'} className=' underline font-bold mb-4'>Start Your Design</Link>
                                }
                              </p>
                            <div className="step-arrow-wrap">
                                <img src={stepsarrowplane} loading="lazy" alt=""
                                    className="step-arrow-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<div className="section-slide reviews">
    <div className="container">
        <div className="reviews-header">
            <h3 className="section-title"  style={{ fontFamily: 'Signika Negative, sans-serif' }}>Meet The Team</h3>
        </div>
        <div className="banner-stats b-alt">

<div class=" flex mb-8 relative items-center justify-center w-full">
  <div class="bg-[#1F8BA3] rounded-xl overflow-hidden relative text-center p-4 group items-center flex flex-col w-56 hover:shadow-2xl transition-all duration-500 shadow-xl">
    <div class="text-gray-500 cursor-pointer group-hover:scale-105 transition-all">
          <Spline scene="https://prod.spline.design/yr4bHEC876yLFTiU/scene.splinecode" />
    </div>
    <div class="group-hover:pb-10 transition-all duration-500 delay-200">
      <h1 class="text-[#F7ECE4]"
      style={{ fontFamily: 'Signika Negative, sans-serif' }}
      >Areej</h1>
      <p class="text-[#F7ECE4] text-sm"
      style={{ fontFamily: 'Signika Negative, sans-serif' }}
      >arooji25@live.com</p>
    </div>
    <div 
    class="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full bg-[#1F8BA3]">
      <div 
      class="flex gap-3 text-2xl bg-[#F7ECE4] text-[#1F8BA3] p-1 hover:p-2 transition-all duration-500 delay-200 rounded-full shadow-sm">
        <Link to={'https://github.com/kira-1997'}
        class="hover:scale-110 transition-all duration-500 delay-200">
          <svg 
          width="1em" 
          height="1em" 
          fill="currentColor" 
          viewBox="0 0 1024 1024">
            <path 
            d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
          </svg>
        </Link>
        <Link to={'https://www.linkedin.com/in/areej-a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'} 
        class="hover:scale-110 transition-all duration-500 delay-200">
          <svg 
          width="1em" 
          height="1em" 
          fill="currentColor" 
          viewBox="0 0 960 1000">
            <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98"></path>
          </svg>
        </Link>
      </div>
    </div>
  </div>
</div>
{/* الشخص التالي */}
<div class=" flex mb-8 relative items-center justify-center w-full">
  <div class="bg-[#1F8BA3] rounded-xl overflow-hidden relative text-center p-4 group items-center flex flex-col w-56 hover:shadow-2xl transition-all duration-500 shadow-xl">
    <div class="text-gray-500 cursor-pointer group-hover:scale-105 transition-all">
    <Spline scene="https://prod.spline.design/aMkDRmmbrt3ezn3W/scene.splinecode" />
    </div>
    <div class="group-hover:pb-10 transition-all duration-500 delay-200">
      <h1 class="text-[#F7ECE4]"
      style={{ fontFamily: 'Signika Negative, sans-serif' }}
      >Amal</h1>
      <p class="text-[#F7ECE4] text-sm"
      style={{ fontFamily: 'Signika Negative, sans-serif' }}
      >amalalshehrig@gmail.com</p>
    </div>
    <div 
    class="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full bg-[#1F8BA3]">
      <div 
      class="flex gap-3 text-2xl bg-[#F7ECE4] text-[#1F8BA3] p-1 hover:p-2 transition-all duration-500 delay-200 rounded-full shadow-sm">
        <Link to={'https://github.com/AmalAlshehrig'}
        class="hover:scale-110 transition-all duration-500 delay-200">
          <svg 
          width="1em" 
          height="1em" 
          fill="currentColor" 
          viewBox="0 0 1024 1024">
            <path 
            d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
          </svg>
        </Link>
        <Link to={'https://www.linkedin.com/in/amal-alshehrii'} 
        class="hover:scale-110 transition-all duration-500 delay-200">
          <svg 
          width="1em" 
          height="1em" 
          fill="currentColor" 
          viewBox="0 0 960 1000">
            <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98"></path>
          </svg>
        </Link>
      </div>
    </div>
  </div>
</div>
{/* الشخص التالي */}
<div class=" flex min-h-12 relative items-center justify-center w-full max-sm:mb-4">
  <div class="bg-[#1F8BA3] rounded-xl overflow-hidden relative text-center p-4 group items-center flex flex-col w-56 hover:shadow-2xl transition-all duration-500 shadow-xl">
    <div class="text-gray-500 cursor-pointer group-hover:scale-105 transition-all">
    <Spline scene="https://prod.spline.design/FV3hnaUzOfngqicg/scene.splinecode" />
    </div>
    <div class="group-hover:pb-10 transition-all duration-500 delay-200">
      <h1 class="text-[#F7ECE4]"
      style={{ fontFamily: 'Signika Negative, sans-serif' }}
      >Ghadah</h1>
      <p class="text-[#F7ECE4] text-sm"
      style={{ fontFamily: 'Signika Negative, sans-serif' }}
      >ghada__o@hotmail.com</p>
    </div>
    <div 
    class="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full bg-[#1F8BA3]">
      <div 
      class="flex gap-3 text-2xl bg-[#F7ECE4] text-[#1F8BA3] p-1 hover:p-2 transition-all duration-500 delay-200 rounded-full shadow-sm">
        <Link to={'https://github.com/ghadah2019'}
        class="hover:scale-110 transition-all duration-500 delay-200">
          <svg 
          width="1em" 
          height="1em" 
          fill="currentColor" 
          viewBox="0 0 1024 1024">
            <path 
            d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
          </svg>
        </Link>
        <Link to={'https://www.linkedin.com/in/ghadah-alonezan-877206170udacitystudent/'} 
        class="hover:scale-110 transition-all duration-500 delay-200">
          <svg 
          width="1em" 
          height="1em" 
          fill="currentColor" 
          viewBox="0 0 960 1000">
            <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98"></path>
          </svg>
        </Link>
      </div>
    </div>
  </div>
</div>
        </div>
    </div>
</div>
<footer className="footer">
    <div className="footer-follow">
        <div className="container">
        <div class="group relative">
        <Link to={'https://github.com/AmalAlshehrig/Giraph'}>
  <button>
  <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" class="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
  </button>
  <span class="absolute -top-14 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100"  style={{ fontFamily: 'Signika Negative, sans-serif' }}>GitHub<span>
</span></span>
</Link>
</div>
        </div>
    </div>
</footer>
</main>
    </>
  )
}

export default Home