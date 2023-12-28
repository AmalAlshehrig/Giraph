import React from 'react'
import './Home.css'
import Spline from '@splinetool/react-spline'
import spot from '../assets/spot.svg'
import stepnumb01 from '../assets/step_numb-01.svg'
import stepnumb02 from '../assets/step_numb-02.svg'
import stepnumb03 from '../assets/step_numb-03.svg'
import stepsarrow from '../assets/steps_arrow.svg'
import stepsarrowplane from '../assets/steps_arrow-plane.svg'
import Logo from '../assets/1.webp'
import { Link } from 'react-router-dom'
function Home() {
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
            <div className="nav-right">
                <div className="nav-cta">
                    <Link to={'/Signup'} className="btn-prime btn-prime-white header-cta">
                        <div className="btn-wrap"></div>
                        <div className="btn-text"  style={{ fontFamily: 'Signika Negative, sans-serif' }}>Sign In</div>
                    </Link>
                </div>
            </div>
        </header>
    </div>
    <section className="banner-inner">
        <div className="container">
            <div className="banner-inner-content">
                <div className="banner-inner-text">
                <h1 className="banner-title text-7xl " style={{ fontFamily: 'Signika Negative, sans-serif' }}>
                    Design Your Room<span>in easiest way</span>
                  </h1>
                    {/* <p 
                    className="subheading banner-desc">Enjoy the 3D design experience
                    </p> */}
                </div>
                <div className="banner-inner-imgs w-[55rem]">
                <Spline scene="https://prod.spline.design/JQ0h7bz8PWJdwXYp/scene.splinecode" />
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
                <Spline scene="https://prod.spline.design/tg9USse13Bidtyay/scene.splinecode" />
                </div>
                <div className="syllabus-steps">
                    <h2 className="section-title"  style={{ fontFamily: 'Signika Negative, sans-serif' }}>Getting Started Steps</h2>
                    <div className="syllabus-step-list">
                        <div className="syllabus-step">
                            <div className="syllabus-step-num">
                                <img src={stepnumb01} alt="Step 1"/>
                                <div className="syllabus-num-text">01</div>
                            </div>
                            <h3 className="item-title"  style={{ fontFamily: 'Signika Negative, sans-serif' }}>Choose Your Room Size</h3>
                            <p className="item-p"  style={{ fontFamily: 'Signika Negative, sans-serif' }}>The first step is to choose your room size from three given room sizes: large, medium and small.</p>
                            <div className="step-arrow-wrap">
                                <img src={stepsarrow} loading="lazy" alt=""
                                    className="step-arrow-img"/>
                            </div>
                        </div>
                        <div className="syllabus-step step-alt">
                            <div className="syllabus-step-num">
                                <img src={stepnumb02} alt="Step 2"/>
                                <div className="syllabus-num-text"  style={{ fontFamily: 'Signika Negative, sans-serif' }}>02</div>
                            </div>
                            <h3 className="item-title"  style={{ fontFamily: 'Signika Negative, sans-serif' }}>Design Your Room</h3>
                            <p className="item-p"  style={{ fontFamily: 'Signika Negative, sans-serif' }}>The second step is to design your room by dragging and dropping a furiture into your room space.</p>
                            <div className="step-arrow-wrap">
                                <img src={stepsarrow} loading="lazy" alt=""
                                    className="step-arrow-img"/>
                            </div>
                        </div>
                        <div className="syllabus-step">
                            <div className="syllabus-step-num">
                                <img src={stepnumb03} alt="Step 3"/>
                                <div className="syllabus-num-text"  style={{ fontFamily: 'Signika Negative, sans-serif' }}>03</div>
                            </div>
                            <h3 className="item-title"  style={{ fontFamily: 'Signika Negative, sans-serif' }}>Download The File</h3>
                            <p className="item-p"  style={{ fontFamily: 'Signika Negative, sans-serif' }}>Yay, you are done, now you can download your design to view whenever you want.</p>
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
            <div className="banner-stat-item">
                <div className="item-num">
                    <Spline scene='https://prod.spline.design/yr4bHEC876yLFTiU/scene.splinecode'/>
                </div>
                <h4 className="item-title"  style={{ fontFamily: 'Signika Negative, sans-serif' }}>Areej</h4>
                <p className="item-p"  style={{ fontFamily: 'Signika Negative, sans-serif' }}>
                Human beings are strong because we can change ourselves
                </p>
                <div className="reviews-dash"></div>
            </div>
            <div className="banner-stat-item">
                <div className="item-num">
                <Spline scene='https://prod.spline.design/aMkDRmmbrt3ezn3W/scene.splinecode'/>
                </div>
                <h4 className="item-title"  style={{ fontFamily: 'Signika Negative, sans-serif' }}>Amal</h4>
                <p className="item-p"  style={{ fontFamily: 'Signika Negative, sans-serif' }}>
                    If you don't take risks, you can't craete a future!
                </p>
                <div className="reviews-dash"></div>
            </div>
            <div className="banner-stat-item">
                <div className="item-num">
                <Spline scene='https://prod.spline.design/FV3hnaUzOfngqicg/scene.splinecode'/>
                </div>
                <h4 className="item-title"  style={{ fontFamily: 'Signika Negative, sans-serif' }}>Ghadah</h4>
                <p className="item-p"  style={{ fontFamily: 'Signika Negative, sans-serif' }}>
                    When you give up, that's when the game ends
                </p>
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