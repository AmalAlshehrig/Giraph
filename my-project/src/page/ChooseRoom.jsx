import React from 'react'
import './Home.css'
function ChooseRoom() {
  return (
    <div className='bgChooseRoom flex'>
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
                            Your room is 1.52 meters long and  1.52 meters wide.
                            You can use these measurements to
                            plan and design the interior 
                            decoration of the room.
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
                            Your room is 1.52 meters long and 1.83 
                            meters wide. You can use these measurements to 
                            plan and design the interior 
                            decoration of the room.
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