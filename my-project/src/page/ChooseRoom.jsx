import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Logo from '../assets/1.webp'
function ChooseRoom() {
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
                    <Link to={'/Signup'}>
                    <button 
                    style={{ fontFamily: 'Signika Negative, sans-serif' }}
                    class="relative py-2 px-8 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-[#F7ECE4] transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#1F8BA3] before:to-[#1F8BA3] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">
                     Signup
                    </button>
                    </Link>
                </div>
            </div>
        </header>
         <div class="section-slide ">
            <div class="container">
                <div class="services-header">
                    <h3 class="section-title services-title">Here you can choose the 
                    <br></br>room size that is closest<br></br> to your room size</h3>
                </div>

                <div class="services-inner">
                    <div class="service-card">
                        <div class="service-card-head">
                            <h4 class="service-card-tag">Small</h4>

                            <h3 class="service-title item-title">
                            Your room is approximately 1.22 meters long and 
                            approximately 1.52 meters wide. You can use these 
                            measurements to plan and design the interior 
                            decoration of the room</h3>
                        </div>

                        <a href="#" class="service-read-more">Choose</a>
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
                            Your room has a length of about 1.52 meters and a 
                            width of about 1.52 meters as well. I can use these 
                            measurements to plan and design the interior 
                            decoration of the room
                            </h3>
                        </div>

                        <a href="#" class="service-read-more">Choose</a>

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
                            Your room is approximately 1.52 meters long and 1.83 
                            meters wide. I can use these measurements to 
                            plan and design the interior 
                            decoration of the room
                            </h3>
                        </div>

                        <a href="#" class="service-read-more">Choose</a>

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
  )
}

export default ChooseRoom