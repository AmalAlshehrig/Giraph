import React from 'react'
import './Home.css'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/1.webp'
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
useNavigate
function ChooseRoom() {
    if(!localStorage.getItem('userName')){
        window.open('/','_self')
    }
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

    <div className='bgChooseRoom'>
        <header className="nav-header">
            <div className="nav-logo">
                <a href="/">
                <img src={Logo}/>
                </a>
            </div>
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
        </header>
         <div class="section-slide ">
            <div class="container">

    <div>
        {/* <div className='border'>
            <h1>Welcom Sara</h1>
        </div> */}
         <div class="section-slide">
            <div class="container ">

                <div class="services-header">
                    <h3 class="section-title services-title">Here you can choose the 
                    <br></br>room size that is closest<br></br> to your room size.</h3>
                </div>

                <div class="services-inner">
                    <div class="service-card">
                        <div class="service-card-head">
                            <h4 class="service-card-tag">Small</h4>

                            <h3 class="service-title item-title">
                            Your room is 1.22 meters long and 
                             1.52 meters wide. You can use these 
                            measurements to plan and design the interior 
                            decoration of the room.</h3>
                        </div>

                        <Link to={"/Small"} class="service-read-more">Choose</Link>
                        <div class="service-img-container">
                            <div class="service-img">
                                <img src="./images/courses_illustr-screen.svg"
                                    class="service-img-item service-img-item-2" alt=""/>

                                <img src="./images/courses_illustr-screen2.svg" class="service-img-item" alt=""/>
                            </div>
                        </div>
                        <div class="bg-hover"></div>
                    </div>

                    <div class="service-card">
                        <div class="service-card-head">
                            <h4 class="service-card-tag">Medium</h4>

                            <h3 class="service-title item-title">
                            Your room is 1.52 meters long and  1.52 meters wide.
                            You can use these measurements to
                            plan and design the interior 
                            decoration of the room.
                            </h3>
                        </div>

                        <a href="/MeduimRoom" class="service-read-more">Choose</a>

                        <div class="service-img-container">
                            <div class="service-img">
                                <img src="./images/courses_illustr-screen.svg"
                                    class="service-img-item service-img-item-2" alt=""/>

                                <img src="./images/courses_illustr-screen2.svg" class="service-img-item" alt=""/>
                            </div>
                        </div>

                        <div class="bg-hover"></div>
                    </div>

                    <div class="service-card">
                        <div class="service-card-head">
                            <h4 class="service-card-tag">large</h4>

                            <h3 class="service-title item-title">
                            Your room is 1.52 meters long and 1.83 
                            meters wide. You can use these measurements to 
                            plan and design the interior 
                            decoration of the room.
                            </h3>
                        </div>

                        <Link to={'/LargeRoom'} class="service-read-more">Choose</Link>

                        <div class="service-img-container">
                            <div class="service-img">
                                <img src="./images/courses_illustr-graph2.svg"
                                    class="service-img-item service-img-item-2" alt=""/>

                                <img src="./images/courses_illustr-graph.svg" class="service-img-item" alt=""/>
                            </div>
                        </div>

                        <div class="bg-hover"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default ChooseRoom