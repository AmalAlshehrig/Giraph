import React from 'react'
import './Home.css'
import spot from '../assets/spot.svg'
import heroillustr from '../assets/hero_illustr.svg'
import heroillustrplane from '../assets/hero_illustr-plane.svg'
import computercouch from '../assets/computer-couch.png'
import stepnumb01 from '../assets/step_numb-01.svg'
import stepnumb02 from '../assets/step_numb-02.svg'
import stepnumb03 from '../assets/step_numb-03.svg'
import stepsarrow from '../assets/steps_arrow.svg'
import stepsarrowplane from '../assets/steps_arrow-plane.svg'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <>
     <main className="section-slides">
<div className="section-slide banner">
    <div className="container">
        <header className="nav-header">
            <div className="nav-logo">
                <a href="/">
                    LOGO
                </a>
            </div>
            <div className="nav-right">
                <div className="nav-cta">
                    <Link to="/Signup" className="btn-prime btn-prime-white header-cta">
                        <div className="btn-wrap"></div>
                        <div className="btn-text">Sign In</div>
                    </Link>
                </div>
            </div>
        </header>
    </div>
    <section className="banner-inner">
        <div className="container">
            <div className="banner-inner-content">
                <div className="banner-inner-imgs">
                    <img className="person-img" src={heroillustr} alt="Person in chair"/>
                    <img className="paper-plane" src={heroillustrplane} alt="Paper plane"/>
                </div>
            </div>
        </div>
    </section>
</div>
<section className="section-slide syllabus">
    <div className="syllabus-wrapper">
        <div className="container">
            <div className="syllabus-inner">
                <div className="syllabus-img">
                    <img src={computercouch} alt=""/>
                </div>
                <div className="syllabus-steps">
                    <h2 className="section-title">Getting Started Steps</h2>
                    <div className="syllabus-step-list">
                        <div className="syllabus-step">
                            <div className="syllabus-step-num">
                                <img src={stepnumb01} alt="Step 1"/>
                                <div className="syllabus-num-text">01</div>
                            </div>
                            <h3 className="item-title">Choose Your Room Size</h3>
                            <p className="item-p">Note</p>
                            <div className="step-arrow-wrap">
                                <img src={stepsarrow} loading="lazy" alt=""
                                    className="step-arrow-img"/>
                            </div>
                        </div>
                        <div className="syllabus-step step-alt">
                            <div className="syllabus-step-num">
                                <img src={stepnumb02} alt="Step 2"/>
                                <div className="syllabus-num-text">02</div>
                            </div>
                            <h3 className="item-title">Design Your Room</h3>
                            <p className="item-p">Note</p>
                            <div className="step-arrow-wrap">
                                <img src={stepsarrow} loading="lazy" alt=""
                                    className="step-arrow-img"/>
                            </div>
                        </div>
                        <div className="syllabus-step">
                            <div className="syllabus-step-num">
                                <img src={stepnumb03} alt="Step 3"/>
                                <div className="syllabus-num-text">03</div>
                            </div>
                            <h3 className="item-title">Download The File</h3>
                            <p className="item-p">Note</p>
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
            <h3 className="section-title">Meet The Team</h3>
        </div>
        <div className="banner-stats b-alt">
            <div className="banner-stat-item">
                <div className="item-num">
                    {/* <img src= مكان الشعار الخاص/> */}
                    <img src={spot}className="ava-spot"/>
                    <div className="ava-circle"></div>
                    <div className="ava-dot"></div>
                </div>
                <h4 className="item-title">Areej</h4>
                <p className="item-p">
                Human beings are strong because we can change ourselves
                </p>
                <div className="reviews-dash"></div>
            </div>
            <div className="banner-stat-item">
                <div className="item-num">
                    {/* <img src= مكان الشعار الخاص/> */}
                    <img src={spot} className="ava-spot"/>
                    <div className="ava-circle"></div>
                    <div className="ava-dot"></div>
                </div>
                <h4 className="item-title">Amal</h4>
                <p className="item-p">
                    If you don't take risks, you can't craete a future!
                </p>
                <div className="reviews-dash"></div>
            </div>
            <div className="banner-stat-item">
                <div className="item-num">
                    {/* <img src= مكان الشعار الخاص/> */}
                    <img src={spot} className="ava-spot"/>
                    <div className="ava-circle"></div>
                    <div className="ava-dot"></div>
                </div>
                <h4 className="item-title">Ghadah</h4>
                <p className="item-p">
                    When you give up, that's when the game ends
                </p>
            </div>
        </div>
    </div>
</div>
<footer className="footer">
    <div className="footer-follow">
        <div className="container">
            <div className="follow-text">
                <span className="follow-icon">
                    <svg width="35" height="33" viewBox="0 0 35 33" fill="none"
                        xmlns="#">
                        <g filter="url(#filter0_f_310_4123)">
                            <path
                                d="M23.3077 15.7259L17.1024 22.5002L10.897 15.7259C9.6585 14.3738 9.70835 12.2947 11.0103 11.0027C12.4639 9.55999 14.8585 9.69161 16.1427 11.2848L17.1024 12.4753L18.062 11.2848C19.3463 9.69161 21.7408 9.55999 23.1945 11.0027C24.4964 12.2947 24.5462 14.3738 23.3077 15.7259Z"
                                fill="#FFE336" 
                                fillOpacity="0.5" />
                        </g>
                        <path
                            d="M23.3077 15.7259L17.1024 22.5002L10.897 15.7259C9.6585 14.3738 9.70835 12.2947 11.0103 11.0027C12.4639 9.55999 14.8585 9.69161 16.1427 11.2848L17.1024 12.4753L18.062 11.2848C19.3463 9.69161 21.7408 9.55999 23.1945 11.0027C24.4964 12.2947 24.5462 14.3738 23.3077 15.7259Z"
                            fill="#FFE336" />
                        <defs>
                            <filter 
                            id="filter0_f_310_4123" 
                            x="0" y="0" 
                            width="34.2051" 
                            height="32.5"
                                filterUnits="userSpaceOnUse" 
                                colorInterpolationFilters="sRGB">
                                <feFlood 
                                floodOpacity="0" 
                                result="BackgroundImageFix" />
                                <feBlend 
                                mode="normal" 
                                in="SourceGraphic" 
                                in2="BackgroundImageFix"
                                result="shape" />
                                <feGaussianBlur 
                                stdDeviation="5" 
                                result="effect1_foregroundBlur_310_4123" />
                            </filter>
                        </defs>
                    </svg>
                </span>
                <a 
                href="https://github.com/AmalAlshehrig/Giraph" 
                target="_blank">Like & Follow</a>
            </div>
        </div>
    </div>
</footer>
</main>
    </>
  )
}

export default Home