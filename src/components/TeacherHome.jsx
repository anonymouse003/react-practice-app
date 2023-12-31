import React from 'react'
import "./TeacherHome.css";
import book from"../assets/images/book.png";
import dotsImg from "../assets/images/dotsImg.png";
import search from "../assets/images/searchnormal1.png";

export const TeacherHome = () => {
  return (
    <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-9">
            <div className="d-flex justify-content-between mt-5 mb-2">
                <h1>Today</h1>
                <div><img src={search} alt="" /></div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h4 className='col1heading mb-3'>Upcoming classes</h4>
                    <div className="classCard mb-2">
                        <div className="d-flex">

                        
                        <div className="circle m-3 ml-3"><span>10th</span></div>
                        <div className="contents d-flex flex-column justify-content-center ">
                            <h4 className='mb-0'>Section A</h4>
                            <p className='mb-0'>Period 2nd, 11:00 AM,45 Min</p>
                        </div>
                        </div>
                        <div className="dots mr-2"><img src={dotsImg} alt="" /></div>
                    </div>
                    <div className="classCard mb-2">
                        <div className="d-flex">

                        
                        <div className="circle m-3 ml-3"><span>10th</span></div>
                        <div className="contents d-flex flex-column justify-content-center ">
                            <h4 className='mb-0'>Section A</h4>
                            <p className='mb-0'>Period 2nd, 11:00 AM,45 Min</p>
                        </div>
                        </div>
                        <div className="dots mr-2"><img src={dotsImg} alt="" /></div>
                    </div>
                    <div className="classCard mb-2">
                        <div className="d-flex">

                        
                        <div className="circle m-3 ml-3"><span>10th</span></div>
                        <div className="contents d-flex flex-column justify-content-center ">
                            <h4 className='mb-0'>Section A</h4>
                            <p className='mb-0'>Period 2nd, 11:00 AM,45 Min</p>
                        </div>
                        </div>
                        <div className="dots mr-2"><img src={dotsImg} alt="" /></div>
                    </div>
                </div>
                <div className="col-md-6">
                <h4 className='col1heading'>Materials</h4>
                <div className="row" >
                    <div className="col-5 m-2" id='box1'>
                        <h4 className='mb-0'>Scinece</h4>
                        <p>Angular Motion</p>
                    </div>
                    <div className="col-5 m-2" id='box2'>
                        <h4 className='mb-0'>Sheshya</h4>
                        <p>AI material</p>
                    </div>
                </div>
                <h4 className='col1heading mt-4'>Topics</h4>
                {/* <h3>Topics</h3> */}
                <div className='mt-4'>
                <div className="d-flex justify-content-between topic">
                    <div className="d-flex align-items-center">
                        <img src={book} alt="" className='mx-3' />
                        <div className="topicName">SEL</div>
                    </div>
                    <div className="timebox d-flex justify-content-center align-items-center">
                        <span>30 min</span>
                    </div>
                </div>
                <div className="topicLine my-2"></div>
                </div>
                <div className='mt-4'>
                <div className="d-flex justify-content-between topic">
                    <div className="d-flex align-items-center">
                        <img src={book} alt="" className='mx-3' />
                        <div className="topicName">Leadership</div>
                    </div>
                    <div className="timebox d-flex justify-content-center align-items-center">
                        <span>30 min</span>
                    </div>
                </div>
                <div className="topicLine my-2"></div>
                </div>
                <div className='mt-4'>
                <div className="d-flex justify-content-between topic">
                    <div className="d-flex align-items-center">
                        <img src={book} alt="" className='mx-3' />
                        <div className="topicName">Finances</div>
                    </div>
                    <div className="timebox d-flex justify-content-center align-items-center">
                        <span>30 min</span>
                    </div>
                </div>
                <div className="topicLine my-2"></div>
                </div>
                <div className='mt-4'>
                <div className="d-flex justify-content-between topic">
                    <div className="d-flex align-items-center">
                        <img src={book} alt="" className='mx-3' />
                        <div className="topicName">Communication Skills</div>
                    </div>
                    <div className="timebox d-flex justify-content-center align-items-center">
                        <span>30 min</span>
                    </div>
                </div>
                <div className="topicLine my-2"></div>
                </div>
                
                </div>
            </div>
        </div>
    </div>
  )
}
