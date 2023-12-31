import React from 'react'
import "./Learning.css";
import arrow from "../assets/images/Chevron down.png";

export const Learning = () => {
    return (
        <div>
            <div className="row mt-4">
                <div className="col-md-4">

                </div>
                <div className="col-md-6 header">
                    <div className="heading">
                        <h1>Social Emotion</h1>
                        <h1>Learning</h1>
                    </div>
                    <p>Empower yourself with practical skills, creativity, critical thinking, and leadership traits to shape a brighter future. Join us on the journey of personal growth and success.</p>
                    <div className="d-flex">
                        <div className='Btn1 d-flex justify-content-center align-items-center mr-4'>
                            <span>Subscribe</span>
                        </div>
                        <div className='Btn2 d-flex justify-content-center align-items-center'>
                            <span>Play Latest Episode</span>
                        </div>
                    </div>
                    <div className="options d-flex justify-content-between mt-4">
                        <div className="d-flex">
                            <span className='mr-3'>9 Episodes</span>
                            <span className='mr-3'>Tutors</span>
                            <span className='mr-3'>About</span>
                        </div>
                        <div className="d-flex align-items-center">
                            <span>Sort by date</span>
                            <img src={arrow} alt="" className='ml-1' />
                        </div>
                    </div>
                        <div className="line1 mt-2"></div>
                        <div className="lecture mt-3">
                            <div className='date'>10 JUNE</div>
                            <div className="title">Episode 7 - Leadership</div>
                            <div className="desc my-2">Discover the leader within you with Sheshya's exclusive leadership skill 
development course, we will equip you with essential leadership qualities
like communication, decision-making, teamwork, and problem-solving.</div>
<div className="d-flex align-items-center">
<div className="playBtn d-flex justify-content-center align-items-center"><span>Play</span></div>
<div className='ml-4 time'>30 min</div>
</div>
                        </div>
                        

                </div>
            </div>
        </div>
    )
}
